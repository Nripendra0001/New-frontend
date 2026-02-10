const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", async () => {
  msg.innerText = "";
  msg.style.color = "#fff";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    msg.innerText = "❌ Email और Password भरना जरूरी है";
    msg.style.color = "orange";
    return;
  }

  loginBtn.disabled = true;
  loginBtn.innerText = "Logging in...";

  try {
    const res = await fetch(`${window.API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      msg.innerText = "❌ " + (data.message || "Login failed");
      msg.style.color = "red";
      loginBtn.disabled = false;
      loginBtn.innerText = "Login";
      return;
    }

    if (data.token) {
      window.saveToken(data.token);
    }

    msg.innerText = "✅ Login success! Redirecting...";
    msg.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 700);
  } catch (err) {
    msg.innerText = "❌ Server error (API not reachable)";
    msg.style.color = "red";
  }

  loginBtn.disabled = false;
  loginBtn.innerText = "Login";
});
