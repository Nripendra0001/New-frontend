const signupBtn = document.getElementById("signupBtn");
const msg = document.getElementById("msg");

signupBtn.addEventListener("click", async () => {
  msg.innerText = "";
  msg.style.color = "#fff";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    msg.innerText = "❌ सभी fields भरना जरूरी है";
    msg.style.color = "orange";
    return;
  }

  signupBtn.disabled = true;
  signupBtn.innerText = "Creating...";

  try {
    const res = await fetch(`${window.API_BASE}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      msg.innerText = "❌ " + (data.message || "Signup failed");
      msg.style.color = "red";
      signupBtn.disabled = false;
      signupBtn.innerText = "Create Account";
      return;
    }

    // ✅ Save token
    if (data.token) {
      window.saveToken(data.token);
    }

    msg.innerText = "✅ Account created! Redirecting...";
    msg.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);
  } catch (err) {
    msg.innerText = "❌ Server error (API not reachable)";
    msg.style.color = "red";
  }

  signupBtn.disabled = false;
  signupBtn.innerText = "Create Account";
});
