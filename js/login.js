document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const msg = document.getElementById("msg");

  if (!loginBtn) return;

  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    msg.innerHTML = "";

    if (!email || !password) {
      msg.innerHTML = "⚠ Email aur Password dono bharna जरूरी है";
      msg.style.color = "red";
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
        msg.innerHTML = data.message || "❌ Login failed";
        msg.style.color = "red";
        loginBtn.innerText = "Login";
        loginBtn.disabled = false;
        return;
      }

      // ✅ Save token
      saveToken(data.token);

      msg.innerHTML = "✅ Login success! Redirecting...";
      msg.style.color = "green";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 700);

    } catch (err) {
      msg.innerHTML = "❌ Server error / API unreachable";
      msg.style.color = "red";
      console.log(err);
    }

    loginBtn.innerText = "Login";
    loginBtn.disabled = false;
  });
});
