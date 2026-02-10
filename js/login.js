const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

function showMsg(text, type = "ok") {
  msg.className = "msg show " + (type === "err" ? "err" : "ok");
  msg.innerText = text;
}

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showMsg("Email और Password दोनों भरना जरूरी है!", "err");
    return;
  }

  loginBtn.innerText = "Logging in...";
  loginBtn.disabled = true;

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      showMsg(data.message || "Login failed", "err");
      loginBtn.innerText = "Login";
      loginBtn.disabled = false;
      return;
    }

    saveToken(data.token);
    saveUser(data.user);

    showMsg("Login successful ✅", "ok");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 700);
  } catch (err) {
    showMsg("Server error! Backend running hai kya?", "err");
  }

  loginBtn.innerText = "Login";
  loginBtn.disabled = false;
});
