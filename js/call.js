/* ======================================
   WebRTC Audio Call (3 min)
   Socket.IO Signaling (AUTO URL)
====================================== */

const RENDER_URL = "https://nripendra-backend.onrender.com";

const isLocal =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

const BACKEND_URL = isLocal ? "http://localhost:3000" : RENDER_URL;

console.log("✅ Using Backend:", BACKEND_URL);

const socket = io(BACKEND_URL, {
  transports: ["websocket"],
});

const bookingIdInput = document.getElementById("bookingIdInput");
const roleSelect = document.getElementById("roleSelect");
const nameInput = document.getElementById("nameInput");

const joinBtn = document.getElementById("joinBtn");
const endBtn = document.getElementById("endBtn");
const testMicBtn = document.getElementById("testMicBtn");

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
let callStarted = false;

let timerInterval = null;
let secondsLeft = 180;

/* ✅ Auto-fill bookingId from URL */
const params = new URLSearchParams(window.location.search);
const bk = params.get("bookingId");
if (bk) bookingIdInput.value = bk;

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
    remoteAudio.play().catch(() => {});
  };

  pc.onconnectionstatechange = () => {
    const st = pc.connectionState;

    if (st === "connected") {
      setStatus("live", "Connected ✅", "Audio call is live. Timer started.");
      if (!callStarted) {
        callStarted = true;
        startTimer();
      }
    }

    if (st === "disconnected" || st === "failed") {
      setStatus("dead", "Disconnected ❌", "Call ended or network issue.");
    }
  };
}

async function joinRoom() {
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
}

async function makeOffer() {
  await getMic();
  createPeerConnection();

  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  socket.emit("offer", { roomId, offer });
  setStatus("wait", "Calling...", "Waiting for other user to join...");
}

async function handleOffer(offer) {
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
  setStatus("wait", "Connected...", "Finalizing connection...");
}

function endCall(msg) {
  if (msg) alert(msg);

  clearInterval(timerInterval);
  timerPill.textContent = "00:00";

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

  callStarted = false;
  setStatus("dead", "Call Ended", "You can close this page.");
}

joinBtn.addEventListener("click", joinRoom);
endBtn.addEventListener("click", () => endCall("Call ended."));

testMicBtn.addEventListener("click", async () => {
  try {
    await getMic();
    alert("Mic working ✅");
    localStream.getTracks().forEach((t) => t.stop());
    localStream = null;
  } catch (e) {
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

speakerBtn.addEventListener("click", () => {
  alert(
    "Speaker option mobile browser par auto handle hota hai.\n(Headphones recommended)"
  );
});

/* ==========================
   Socket Events
========================== */
socket.on("connect", () => {
  setStatus("", "Ready", "Enter bookingId and join call.");
});

socket.on("room-joined", async (data) => {
  setStatus("wait", "Room Joined", `Users in room: ${data.usersCount}`);

  const role = roleSelect.value;

  if (data.usersCount === 2 && role === "mentor") {
    await makeOffer();
  }
});

socket.on("user-joined", async () => {
  const role = roleSelect.value;

  if (role === "mentor" && !pc) {
    await makeOffer();
  }
});

socket.on("offer", async ({ offer }) => {
  await handleOffer(offer);
});

socket.on("answer", async ({ answer }) => {
  await handleAnswer(answer);
});

socket.on("ice-candidate", async ({ candidate }) => {
  try {
    if (pc) {
      await pc.addIceCandidate(new RTCIceCandidate(candidate));
    }
  } catch (e) {}
});

socket.on("call-ended", () => {
  endCall("Other side ended the call.");
});
