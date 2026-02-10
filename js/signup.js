document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("signupBtn");
  const msg = document.getElementById("msg");

  btn.addEventListener("click", async () => {
    msg.innerText = "";
    msg.style.color = "white";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      msg.style.color = "orange";
      msg.innerText = "⚠️ सभी fields भरना जरूरी है";
      return;
    }

    btn.disabled = true;
    btn.innerText = "Creating...";

    try {
      const res = await fetch(`${API_BASE}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        msg.style.color = "red";
        msg.innerText = data.message || "❌ Signup failed";
        btn.disabled = false;
        btn.innerText = "Create Account";
        return;
      }

      msg.style.color = "lime";
      msg.innerText = "✅ Account created! Redirecting to login...";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1200);
    } catch (err) {
      msg.style.color = "red";
      msg.innerText = "❌ API Error: Backend reachable नहीं है";
    }

    btn.disabled = false;
    btn.innerText = "Create Account";
  });
});
