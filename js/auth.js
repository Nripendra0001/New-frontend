// ✅ BACKEND API
const API_BASE = "https://api.nripendra.online";

// ✅ TOKEN SAVE
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
