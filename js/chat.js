const API = "https://nripendra-backend.onrender.com";

let socket = null;
let roomId = null;
let mentorType = null;
let userName = "Student";

const startCard = document.getElementById("startCard");
const chatCard = document.getElementById("chatCard");

const chatBox = document.getElementById("chatBox");
const chatTitle = document.getElementById("chatTitle");
const chatSub = document.getElementById("chatSub");

document.getElementById("startBtn").addEventListener("click", startChat);
document.getElementById("sendBtn").addEventListener("click", sendMsg);
document.getElementById("newChatBtn").addEventListener("click", resetChat);

document.getElementById("msg").addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMsg();
});

function resetChat(){
  localStorage.removeItem("sn_roomId");
  localStorage.removeItem("sn_mentorType");
  location.reload();
}

async function startChat() {
  userName = document.getElementById("userName").value.trim() || "Student";
  mentorType = document.getElementById("mentorType").value;

  if (!mentorType) return alert("Please select category first!");

  // Always new clean room
  const res = await fetch(API + "/api/chat/create-room", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, mentorType }),
  });

  const data = await res.json();
  if (!data.ok) return alert(data.msg || "Room create failed");

  roomId = data.roomId;

  localStorage.setItem("sn_roomId", roomId);
  localStorage.setItem("sn_mentorType", mentorType);

  startCard.classList.add("hide");
  chatCard.classList.remove("hide");

  chatTitle.innerText = mentorType.toUpperCase() + " Mentor Chat";
  chatSub.innerText = "Room ID: " + roomId;

  connectSocket();
  loadMessages();
}

function connectSocket() {
  socket = io(API, { transports: ["websocket", "polling"] });

  socket.emit("joinRoom", roomId);

  socket.on("newMessage", (msg) => {
    if (msg.roomId === roomId) renderMessage(msg);
  });
}

async function loadMessages() {
  const res = await fetch(API + "/api/chat/messages/" + roomId);
  const data = await res.json();

  if (data.ok && Array.isArray(data.msgs)) {
    data.msgs.forEach(renderMessage);
  }
}

function renderMessage(msg) {
  const div = document.createElement("div");
  div.className = "sn-msg " + (msg.sender === "user" ? "me" : "mentor");

  const who = msg.sender === "user" ? "You" : "Mentor";
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  div.innerHTML = `
    <div class="sn-bubble">
      <b>${who}:</b><br>
      ${escapeHtml(msg.message)}
      <span class="sn-meta">${time}</span>
    </div>
  `;

  chatBox.appendChild(div);
  chatBox.scrollTop = 999999;
}

function sendMsg() {
  if (!socket || !roomId) return;

  const input = document.getElementById("msg");
  const text = input.value.trim();
  if (!text) return;

  // ✅ Instant show (no vanish)
  renderMessage({ sender: "user", message: text });

  socket.emit("sendMessage", {
    roomId,
    mentorType,
    roomTitle: userName + " (" + mentorType.toUpperCase() + ")",
    sender: "user",
    senderName: userName,
    message: text,
  });

  input.value = "";
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}
