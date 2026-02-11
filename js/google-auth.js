// frontend/js/google-auth.js

import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

// ===============================
//  Helpers
// ===============================
function setMsg(text, type = "ok") {
  const msg = document.getElementById("msg");
  if (!msg) return;
  msg.innerText = text;
  msg.style.color = type === "error" ? "#ff4d4d" : "#00ff88";
}

function saveUser(user) {
  const data = {
    uid: user.uid,
    name: user.displayName || "User",
    email: user.email || "",
    photo: user.photoURL || "",
  };
  localStorage.setItem("sn_user", JSON.stringify(data));
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("sn_user"));
  } catch {
    return null;
  }
}

// ===============================
//  LOGIN PAGE LOGIC
// ===============================
const googleBtn = document.getElementById("googleLoginBtn");

if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      googleBtn.disabled = true;
      googleBtn.innerText = "Connecting...";

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      saveUser(user);
      setMsg("✅ Google Login Success!", "ok");

      setTimeout(() => {
        window.location.href = "./dashboard.html";
      }, 700);

    } catch (err) {
      console.log("Google Login Error:", err);
      setMsg("❌ Login Failed: " + (err.message || "Try again"), "error");
    } finally {
      googleBtn.disabled = false;
      googleBtn.innerText = "Continue with Google";
    }
  });
}

// ===============================
//  DASHBOARD PAGE LOGIC
// ===============================
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    localStorage.removeItem("sn_user");
    window.location.href = "./login.html";
  });
}

// ===============================
//  AUTO CHECK LOGIN (Dashboard Protection)
// ===============================
onAuthStateChanged(auth, (user) => {
  const isDashboard = window.location.pathname.includes("dashboard.html");

  if (isDashboard) {
    if (!user) {
      window.location.href = "./login.html";
    } else {
      saveUser(user);

      const u = getUser();

      const nameBox = document.getElementById("dashName");
      const emailBox = document.getElementById("dashEmail");
      const photoBox = document.getElementById("dashPhoto");

      if (nameBox) nameBox.innerText = u.name;
      if (emailBox) emailBox.innerText = u.email;
      if (photoBox) photoBox.src = u.photo;
    }
  }
});
