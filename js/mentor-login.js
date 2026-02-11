const API = "https://nripendra-backend.onrender.com";

document.getElementById("loginBtn").addEventListener("click", login);

async function login() {
  const mentorType = document.getElementById("mentorType").value;
  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("pass").value.trim();

  if (!mentorType) return show("Please select mentor category first!");
  if (!username || !password) return show("Username & password required!");

  const res = await fetch(API + "/api/chat/mentor-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (!res.ok) return show(data.msg || "Login failed");

  localStorage.setItem("sn_mentorToken", data.token);
  localStorage.setItem("sn_mentorType", mentorType);

  window.location.href = "./mentor-dashboard.html";
}

function show(msg) {
  document.getElementById("status").innerText = msg;
}
