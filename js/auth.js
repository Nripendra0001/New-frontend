// ✅ AUTO API BASE (Local + Live)
window.API_BASE =
  location.hostname.includes("localhost") || location.hostname.includes("127.0.0.1")
    ? "http://localhost:3000"
    : "https://api.nripendra.online";

// ✅ TOKEN SAVE / GET
window.saveToken = function (token) {
  localStorage.setItem("token", token);
};

window.getToken = function () {
  return localStorage.getItem("token");
};

window.logout = function () {
  localStorage.removeItem("token");
  window.location.href = "login.html";
};
