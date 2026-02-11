// js/login.js (FINAL)

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loginBtn");
  if (!btn) return;

  btn.dataset.text = btn.innerText;

  btn.addEventListener("click", async () => {
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (!email || !password) {
      showMsg("msg", "❌ Email aur password dono bharna hai");
      return;
    }

    try {
      setLoading(btn, true);
      showMsg("msg", "Logging in...", "success");

      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        showMsg("msg", "❌ " + (data.message || "Invalid login"));
        setLoading(btn, false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", email);

      showMsg("msg", "✅ Login success!", "success");

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
