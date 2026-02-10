// ✅ LIVE BACKEND API (Render Custom Domain)
const API_BASE = "https://api.nripendra.online/api";

// Token helpers
function saveToken(token) {
  localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}
