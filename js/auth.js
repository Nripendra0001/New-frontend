// js/auth.js (FINAL)

const API_BASE = "https://api.nripendra.online";

function showMsg(id, text, type = "error") {
  const el = document.getElementById(id);
  if (!el) return;

  el.style.display = "block";
  el.innerText = text;

  el.style.color = type === "success" ? "#16a34a" : "#ef4444";
}

function setLoading(btn, isLoading) {
  if (!btn) return;
  btn.disabled = isLoading;
  btn.innerText = isLoading ? "Please wait..." : btn.dataset.text;
}
