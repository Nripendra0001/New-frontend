// js/signup.js (FINAL)

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("signupBtn");
  if (!btn) return;

  btn.dataset.text = btn.innerText;

  btn.addEventListener("click", async () => {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (!name || !email || !password) {
      showMsg("msg", "❌ Please fill all fields");
      return;
    }

    try {
      setLoading(btn, true);
      showMsg("msg", "Creating account...", "success");

      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        showMsg("msg", "❌ " + (data.message || "Signup failed"));
        setLoading(btn, false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", email);

      showMsg("msg", "✅ Account created successfully!", "success");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 900);

    } catch (err) {
      showMsg("msg", "❌ Network error: API not reachable");
    } finally {
      setLoading(btn, false);
    }
  });
});
