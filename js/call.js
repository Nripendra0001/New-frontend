/* ======================================
   WebRTC Audio Call (3 min)
   FINAL STABLE LOGIC
====================================== */

const RENDER_URL = "https://nripendra-backend.onrender.com";

const isLocal =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

const BACKEND_URL = isLocal ? "http://localhost:3000" : RENDER_URL;

const socket = io(BACKEND_URL, { transports: ["websocket"] });

const bookingIdInput = document.getElementById("bookingIdInput");
const roleSelect = document.getElementById("roleSelect");
const nameInput = document.getElementById("nameInput");

const joinBtn = document.getElementById("joinBtn");
const endBtn = document.getElementById("endBtn");
const testMicBtn = document.getElementById("testMicBtn");
const shareBtn = document.getElementById("shareBtn");
const copyIdBtn = document.getElementById("copyIdBtn");

const muteBtn = document.getElementById("muteBtn");
const speakerBtn = document.getElementById("speakerBtn");
const remoteAudio = document.getElementById("remoteAudio");

const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");
const statusSub = document.getElementById("statusSub");

const timerPill = document.getElementById("timerPill");
const roomPill = document.getElementById("roomPill");

let pc = null;
let localStream = null;
let roomId = null;

let secondsLeft = 180;
let timerInterval = null;
let callStarted = false;

let joined = false;
let iAmCaller = false;

function setStatus(type, title, sub) {
  statusDot.classList.remove("live", "wait", "dead");
  if (type) statusDot.classList.add(type);
  statusText.textContent = title;
  statusSub.textContent = sub;
}

function formatTimer(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startTimer() {
  if (callStarted) return;
  callStarted = true;

  secondsLeft = 180;
  timerPill.textContent = formatTimer(secondsLeft);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsLeft--;
    timerPill.textContent = formatTimer(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endCall("Time over (3 minutes).");
    }
  }, 1000);
}

async function getMic() {
  localStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  return localStream;
}

function createPeerConnection() {
  pc = new RTCPeerConnection({
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
    ],
  });

  pc.onicecandidate = (event) => {
    if (event.candidate && roomId) {
      socket.emit("ice-candidate", { roomId, candidate: event.candidate });
    }
  };

  pc.ontrack = (event) => {
    const [stream] = event.streams;
    remoteAudio.srcObject = stream;

    remoteAudio.play().catch(() => {
      setStatus("wait", "Tap Speaker 🔊", "Mobile needs a tap to play audio.");
    });
  };

  pc.onconnectionstatechange = () => {
    const st = pc.connectionState;

    if (st === "connected") {
      setStatus("live", "Connected ✅", "Audio call is live. Timer started.");
      startTimer();
    }

    if (st === "failed" || st === "disconnected") {
      setStatus("dead", "Disconnected ❌", "Network issue or other side left.");
    }
  };
}

async function joinRoom() {
  if (joined) return;

  const bookingId = bookingIdInput.value.trim();
  const role = roleSelect.value;
  const name = nameInput.value.trim() || role;

  if (!bookingId) {
    alert("Booking ID required.");
    return;
  }

  roomId = bookingId;
  roomPill.textContent = "Room: " + roomId;

  setStatus("wait", "Joining...", "Connecting to server...");

  socket.emit("join-room", { roomId, role, name });
  joined = true;
}

async function startAsCaller() {
  await getMic();
  createPeerConnection();

  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  socket.emit("offer", { roomId, offer });
  setStatus("wait", "Calling...", "Waiting for other person to join...");
}

async function startAsReceiver(offer) {
  await getMic();
  createPeerConnection();

  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

  await pc.setRemoteDescription(new RTCSessionDescription(offer));

  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);

  socket.emit("answer", { roomId, answer });
  setStatus("wait", "Answering...", "Connecting audio...");
}

async function handleAnswer(answer) {
  if (!pc) return;
  await pc.setRemoteDescription(new RTCSessionDescription(answer));
}

function endCall(msg) {
  if (msg) alert(msg);

  clearInterval(timerInterval);
  timerPill.textContent = "00:00";

  try {
    socket.emit("end-call", { roomId });
  } catch {}

  if (pc) {
    try { pc.close(); } catch {}
    pc = null;
  }

  if (localStream) {
    localStream.getTracks().forEach((t) => t.stop());
    localStream = null;
  }

  joined = false;
  iAmCaller = false;
  callStarted = false;

  setStatus("dead", "Call Ended", "You can close this page.");
}

/* ==========================
   Auto-fill from URL
========================== */
(function autofill() {
  const params = new URLSearchParams(window.location.search);
  const bk = params.get("bookingId");
  const role = params.get("role");

  if (bk) bookingIdInput.value = bk;
  if (role === "mentor" || role === "student") roleSelect.value = role;
})();

/* ==========================
   Buttons
========================== */
joinBtn.addEventListener("click", joinRoom);

endBtn.addEventListener("click", () => {
  endCall("Call ended.");
});

testMicBtn.addEventListener("click", async () => {
  try {
    const s = await getMic();
    alert("Mic working ✅");
    s.getTracks().forEach((t) => t.stop());
    localStream = null;
  } catch {
    alert("Mic permission denied ❌");
  }
});

muteBtn.addEventListener("click", () => {
  if (!localStream) return;
  const track = localStream.getAudioTracks()[0];
  if (!track) return;

  track.enabled = !track.enabled;
  muteBtn.textContent = track.enabled ? "Mute" : "Unmute";
});

speakerBtn.addEventListener("click", async () => {
  try {
    await remoteAudio.play();
    toast("Speaker unlocked 🔊");
  } catch {
    toast("Audio will play when connected.");
  }
});

copyIdBtn.addEventListener("click", async () => {
  const val = bookingIdInput.value.trim();
  if (!val) return toast("Booking ID empty.");

  try {
    await navigator.clipboard.writeText(val);
    toast("Booking ID copied ✅");
  } catch {
    toast("Copy failed ❌");
  }
});

shareBtn.addEventListener("click", async () => {
  const val = bookingIdInput.value.trim();
  if (!val) return toast("Booking ID empty.");

  const mentorLink =
    location.origin + "/call.html?bookingId=" + encodeURIComponent(val) + "&role=mentor";

  try {
    await navigator.clipboard.writeText(mentorLink);
    toast("Mentor link copied ✅");
    alert("Mentor को ये link भेजो:\n\n" + mentorLink);
  } catch {
    alert("Mentor link:\n\n" + mentorLink);
  }
});

/* ==========================
   Socket Events
========================== */
socket.on("connect", () => {
  setStatus("", "Ready", "Enter bookingId and join call.");
});

socket.on("room-joined", async (data) => {
  setStatus("wait", "Room Joined", `Users in room: ${data.usersCount}`);

  // first joiner becomes caller
  if (data.usersCount === 1) {
    iAmCaller = true;
    setStatus("wait", "Waiting...", "Share Booking ID / Share Link with other person.");
  }

  // if room becomes 2 and you are caller => start offer
  if (data.usersCount === 2 && iAmCaller && !pc) {
    await startAsCaller();
  }

  if (data.usersCount > 2) {
    setStatus("dead", "Room Full ❌", "Only 2 people allowed.");
    endCall("Room full. Only 2 users allowed.");
  }
});

socket.on("offer", async ({ offer }) => {
  // receiver side
  if (!pc) await startAsReceiver(offer);
});

socket.on("answer", async ({ answer }) => {
  // caller side
  await handleAnswer(answer);
});

socket.on("ice-candidate", async ({ candidate }) => {
  try {
    if (pc) await pc.addIceCandidate(new RTCIceCandidate(candidate));
  } catch {}
});

socket.on("call-ended", () => {
  endCall("Other side ended the call.");
});

/* ==========================
   Toast helper
========================== */
function toast(msg) {
  const el = document.createElement("div");
  el.style.position = "fixed";
  el.style.left = "50%";
  el.style.bottom = "18px";
  el.style.transform = "translateX(-50%) translateY(16px)";
  el.style.background = "rgba(15,17,26,.92)";
  el.style.color = "#fff";
  el.style.padding = "12px 14px";
  el.style.borderRadius = "14px";
  el.style.fontWeight = "900";
  el.style.fontSize = "13px";
  el.style.zIndex = "9999";
  el.style.opacity = "0";
  el.style.transition = "all .2s ease";
  el.textContent = msg;
  document.body.appendChild(el);

  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateX(-50%) translateY(0px)";
  });

  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-50%) translateY(16px)";
    setTimeout(() => el.remove(), 250);
  }, 1600);
}
