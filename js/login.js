document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const msg = document.getElementById("msg");

  loginBtn.onclick = async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    msg.innerText = "";

    if (!email || !password) {
      msg.innerText = "⚠ Email aur Password dono bharna जरूरी है";
      msg.style.color = "red";
      return;
    }

    loginBtn.innerText = "Logging in...";
    loginBtn.disabled = true;

    try {
      const response = await fetch(API_BASE + "/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        msg.innerText = data.message || "❌ Login failed";
        msg.style.color = "red";
        loginBtn.innerText = "Login";
        loginBtn.disabled = false;
        return;
      }

      // ✅ TOKEN SAVE
      saveToken(data.token);

      msg.innerText = "✅ Login Success! Redirecting...";
      msg.style.color = "green";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 800);

    } catch (err) {
      console.log(err);
      msg.innerText = "❌ API Error / Backend unreachable";
      msg.style.color = "red";
    }

    loginBtn.innerText = "Login";
    loginBtn.disabled = false;
  };
});
