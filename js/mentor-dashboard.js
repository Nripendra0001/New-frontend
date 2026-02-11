const API = "https://nripendra-backend.onrender.com";

const token = localStorage.getItem("sn_mentorToken");
const mentorType = localStorage.getItem("sn_mentorType");

if (!token || !mentorType) window.location.href = "./mentor-login.html";

document.getElementById("mentorBadge").innerText =
  "Category: " + mentorType.toUpperCase();

document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("refreshBtn").addEventListener("click", loadRooms);
document.getElementById("sendBtn").addEventListener("click", sendMsg);

document.getElementById("msg").addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMsg();
});

const socket = io(API, { transports: ["websocket", "polling"] });

let currentRoom = null;

async function loadRooms() {
  const res = await fetch(API + "/api/chat/mentor/rooms?mentorType=" + mentorType, {
    headers: { Authorization: "Bearer " + token },
  });

  const data = await res.json();
  const list = document.getElementById("roomsList");
  list.innerHTML = "";

  if (!data.ok || !data.rooms || !data.rooms.length) {
    list.innerHTML = `<div style="padding:14px;font-weight:900;text-align:center;opacity:.75">
      No chats yet.
    </div>`;
    return;
  }

  data.rooms.forEach((r) => {
    const div = document.createElement("div");
    div.className = "md-room" + (currentRoom === r._id ? " active" : "");
    div.innerHTML = `
      <b>${escapeHtml(r.roomTitle || r._id)}</b>
      <small>${escapeHtml(r.lastMessage || "")}</small>
    `;
    div.onclick = () => openRoom(r._id);
    list.appendChild(div);
  });
}

async function openRoom(roomId) {
  currentRoom = roomId;

  document.getElementById("roomTitle").innerText = "Room: " + roomId;
  document.getElementById("roomSub").innerText =
    "Mentor Type: " + mentorType.toUpperCase();

  document.getElementById("chatBox").innerHTML = "";

  socket.emit("joinRoom", roomId);

  const res = await fetch(API + "/api/chat/messages/" + roomId);
  const data = await res.json();

  if (data.ok && Array.isArray(data.msgs)) {
    data.msgs.forEach(renderMessage);
  }

  loadRooms();
}

socket.on("newMessage", (msg) => {
  if (msg.roomId === currentRoom) renderMessage(msg);
  loadRooms();
});

function renderMessage(msg) {
  const div = document.createElement("div");
  div.className = "md-msg " + (msg.sender === "mentor" ? "mentor" : "me");

  const who = msg.sender === "mentor" ? "Mentor" : "Student";
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  div.innerHTML = `
    <div class="md-bubble">
      <b>${who}:</b><br>
      ${escapeHtml(msg.message)}
      <span class="md-meta">${time}</span>
    </div>
  `;

  document.getElementById("chatBox").appendChild(div);
  document.getElementById("chatBox").scrollTop = 999999;
}

function sendMsg() {
  if (!currentRoom) return alert("Select a chat first!");

  const input = document.getElementById("msg");
  const text = input.value.trim();
  if (!text) return;

  // instant UI
  renderMessage({ sender: "mentor", message: text });

  socket.emit("sendMessage", {
    roomId: currentRoom,
    mentorType,
    sender: "mentor",
    senderName: "Mentor",
    message: text,
  });

  input.value = "";
}

function logout() {
  localStorage.removeItem("sn_mentorToken");
  localStorage.removeItem("sn_mentorType");
  window.location.href = "./mentor-login.html";
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

loadRooms();
