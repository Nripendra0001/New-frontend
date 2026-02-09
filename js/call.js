/* ======================================
   WebRTC Audio Call (3 min)
   FINAL PRODUCTION STABLE LOGIC
   Mentor = Caller | Student = Receiver
====================================== */

const RENDER_URL = "https://nripendra-backend.onrender.com";

const isLocal =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

const BACKEND_URL = isLocal ? "http://localhost:3000" : RENDER_URL;
console.log("✅ BACKEND:", BACKEND_URL);

const socket = io(BACKEND_URL, { transports: ["websocket"] });

/* ---------- UI ---------- */
const roomPill = document.getElementById("roomPill");
const timerPill = document.getElementById("timerPill");
const endBtn = document.getElementById("endBtn");

const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");
const statusSub = document.getElementById("statusSub");

const studentTab = document.getElementById("studentTab");
const mentorTab = document.getElementById("mentorTab");

const studentPanel = document.getElementById("studentPanel");
const mentorPanel = document.getElementById("mentorPanel");

const studentCallId = document.getElementById("studentCallId");
const createIdBtn = document.getElementById("createIdBtn");
const studentStartBtn = document.getElementById("studentStartBtn");
const studentShareBtn = document.getElementById("studentShareBtn");

const mentorCallId = document.getElementById("mentorCallId");
const mentorJoinBtn = document.getElementById("mentorJoinBtn");
const pasteBtn = document.getElementById("pasteBtn");

const remoteAudio = document.getElementById("remoteAudio");
const muteBtn = document.getElementById("muteBtn");
const speakerBtn = document.getElementById("speakerBtn");
const testMicBtn = document.getElementById("testMicBtn");

/* ---------- State ---------- */
let pc = null;
let localStream = null;
let roomId = null;

let joined = false;
let isMentor = false;

let offerSent = false;
let timerStarted = false;

let timerInterval = null;
let secondsLeft = 180;

/* ---------- Helpers ---------- */
function setStatus(type, title, sub) {
  statusDot.classList.remove("live", "wait", "dead");
  if (type) statusDot.classList.add(type);
  statusText.textContent = title;
  statusSub.textContent = sub;
}

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

function formatTimer(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startTimer() {
  if (timerStarted) return;
  timerStarted = true;

  secondsLeft = 180;
  timerPill.textContent = formatTimer(secondsLeft);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsLeft--;
    timerPill.textContent = formatTimer(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endCall("⏳ 3 Minutes Completed. Call Ended.");
    }
  }, 1000);
}

function randomId() {
  return "BK" + Date.now();
}

/* ---------- WebRTC Core ---------- */
async function getMic() {
  localStream = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
    video: false,
  });

  return localStream;
}

function createPeerConnection() {
  pc = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  });

  /* Debug */
  pc.onconnectionstatechange = () =>
    console.log("CONN:", pc.connectionState);
  pc.oniceconnectionstatechange = () =>
    console.log("ICE:", pc.iceConnectionState);
  pc.onsignalingstatechange = () =>
    console.log("SIGNAL:", pc.signalingState);

  pc.onicecandidate = (event) => {
    if (event.candidate && roomId) {
      socket.emit("ice-candidate", { roomId, candidate: event.candidate });
    }
  };

  pc.ontrack = (event) => {
    const stream = event.streams[0];
    remoteAudio.srcObject = stream;

    remoteAudio.muted = false;
    remoteAudio.volume = 1;

    remoteAudio.play().catch(() => {
      setStatus("wait", "Tap Speaker 🔊", "Audio play requires click.");
    });
  };

  /* 🔥 Reliable for timer start */
  pc.oniceconnectionstatechange = () => {
    const st = pc.iceConnectionState;

    if (st === "connected" || st === "completed") {
      setStatus("live", "Connected ✅", "Audio call live. Timer started.");
      startTimer();
    }

    if (st === "failed" || st === "disconnected") {
      setStatus("dead", "Disconnected ❌", "Network issue or other side left.");
    }
  };
}

/* ---------- Mentor (Caller) ---------- */
async function mentorMakeOffer() {
  if (offerSent) return;
  offerSent = true;

  setStatus("wait", "Calling...", "Getting mic + creating offer...");

  await getMic();
  createPeerConnection();

  /* 🔥 MUST for stable audio */
  pc.addTransceiver("audio", { direction: "sendrecv" });

  /* Add only audio track */
  localStream.getAudioTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  socket.emit("offer", { roomId, offer });

  setStatus("wait", "Calling...", "Waiting for student answer...");
}

/* ---------- Student (Receiver) ---------- */
async function studentHandleOffer(offer) {
  setStatus("wait", "Incoming Call...", "Getting mic + creating answer...");

  await getMic();
  createPeerConnection();

  pc.addTransceiver("audio", { direction: "sendrecv" });

  localStream.getAudioTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  await pc.setRemoteDescription(new RTCSessionDescription(offer));

  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);

  socket.emit("answer", { roomId, answer });

  setStatus("wait", "Answer Sent ✅", "Connecting audio...");
}

/* ---------- Mentor receives answer ---------- */
async function mentorHandleAnswer(answer) {
  if (!pc) return;
  await pc.setRemoteDescription(new RTCSessionDescription(answer));
  setStatus("wait", "Answer Received ✅", "Finalizing connection...");
}

/* ---------- Join Room ---------- */
function joinRoom(id) {
  if (joined) return;

  roomId = id;
  roomPill.textContent = "ID: " + roomId;

  setStatus("wait", "Joining...", "Connecting to server...");
  socket.emit("join-room", { roomId });

  joined = true;
}

/* ---------- End Call ---------- */
function endCall(msg) {
  if (msg) alert(msg);

  clearInterval(timerInterval);
  timerPill.textContent = "03:00";

  try {
    socket.emit("end-call", { roomId });
  } catch {}

  if (pc) {
    try {
      pc.close();
    } catch {}
    pc = null;
  }

  if (localStream) {
    localStream.getTracks().forEach((t) => t.stop());
    localStream = null;
  }

  joined = false;
  offerSent = false;
  timerStarted = false;

  setStatus("dead", "Call Ended", "You can close this page.");
}

/* ---------- Tabs ---------- */
function showStudent() {
  isMentor = false;
  studentTab.classList.add("active");
  mentorTab.classList.remove("active");
  studentPanel.classList.add("show");
  mentorPanel.classList.remove("show");
}

function showMentor() {
  isMentor = true;
  mentorTab.classList.add("active");
  studentTab.classList.remove("active");
  mentorPanel.classList.add("show");
  studentPanel.classList.remove("show");
}

studentTab.addEventListener("click", showStudent);
mentorTab.addEventListener("click", showMentor);

/* ---------- Student Flow ---------- */
createIdBtn.addEventListener("click", () => {
  const id = randomId();
  studentCallId.value = id;
  toast("Call ID created ✅");
});

studentStartBtn.addEventListener("click", () => {
  const id = studentCallId.value.trim();
  if (!id) return alert("पहले Create ID दबाओ.");
  joinRoom(id);
});

studentShareBtn.addEventListener("click", async () => {
  const id = studentCallId.value.trim();
  if (!id) return alert("पहले Create ID दबाओ.");

  const link =
    location.origin + "/call.html?mode=mentor&id=" + encodeURIComponent(id);

  try {
    await navigator.clipboard.writeText(link);
    toast("Mentor link copied ✅");
    alert("Mentor को ये link भेजो:\n\n" + link);
  } catch {
    alert("Mentor link:\n\n" + link);
  }
});

/* ---------- Mentor Flow ---------- */
pasteBtn.addEventListener("click", async () => {
  try {
    const t = await navigator.clipboard.readText();
    if (t) mentorCallId.value = t.trim();
  } catch {
    alert("Paste not supported. Paste manually.");
  }
});

mentorJoinBtn.addEventListener("click", () => {
  const id = mentorCallId.value.trim();
  if (!id) return alert("Call ID required.");
  joinRoom(id);
});

/* ---------- Common Buttons ---------- */
endBtn.addEventListener("click", () => endCall("Call ended."));

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
    remoteAudio.muted = false;
    remoteAudio.volume = 1;
    await remoteAudio.play();
    toast("Speaker ON 🔊");
  } catch {
    alert("Audio controls से play दबाओ (mobile restriction).");
  }
});

/* ---------- Socket Events ---------- */
socket.on("connect", () => {
  setStatus("", "Ready", "Student: Create ID | Mentor: Paste ID");
});

socket.on("room-joined", async (data) => {
  setStatus("wait", "Room Joined", `Users in room: ${data.usersCount}`);

  if (data.usersCount === 1) {
    setStatus("wait", "Waiting...", "Other person join kare.");
  }

  if (data.usersCount === 2) {
    if (isMentor) {
      await mentorMakeOffer();
    } else {
      setStatus("wait", "Ready", "Mentor call start karega...");
    }
  }

  if (data.usersCount > 2) {
    setStatus("dead", "Room Full ❌", "Only 2 users allowed.");
    endCall("Room full. Only 2 users allowed.");
  }
});

socket.on("user-joined", async () => {
  /* Mentor already in room and student joined later */
  if (isMentor && !pc) {
    await mentorMakeOffer();
  }
});

socket.on("offer", async ({ offer }) => {
  if (!isMentor) {
    await studentHandleOffer(offer);
  }
});

socket.on("answer", async ({ answer }) => {
  if (isMentor) {
    await mentorHandleAnswer(answer);
  }
});

socket.on("ice-candidate", async ({ candidate }) => {
  try {
    if (pc) await pc.addIceCandidate(new RTCIceCandidate(candidate));
  } catch {}
});

socket.on("call-ended", () => {
  endCall("Other side ended the call.");
});

/* ---------- Auto Mode from URL ---------- */
(function autoMode() {
  const p = new URLSearchParams(location.search);
  const mode = p.get("mode");
  const id = p.get("id");

  if (mode === "mentor") {
    showMentor();
    if (id) mentorCallId.value = id;
  } else {
    showStudent();
    if (id) studentCallId.value = id;
  }
})();
