// js/google-auth.js  (FINAL WORKING)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* 🔥 Your Firebase Config */
const firebaseConfig = {
  apiKey: "AIzaSyA-SnbqCtF0Sxt-8PKiQcdXRMIL0ZbhyJg",
  authDomain: "authentication-fb4b2.firebaseapp.com",
  projectId: "authentication-fb4b2",
  storageBucket: "authentication-fb4b2.firebasestorage.app",
  messagingSenderId: "587367075241",
  appId: "1:587367075241:web:cc55145b26ea52854ac8b8",
  measurementId: "G-WBKCPQTNHS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* ==========================
   ✅ LOGIN BUTTON (login.html)
========================== */
const googleLoginBtn = document.getElementById("googleLoginBtn");
if (googleLoginBtn) {
  googleLoginBtn.addEventListener("click", async () => {
    try {
      googleLoginBtn.innerText = "Signing in...";
      googleLoginBtn.disabled = true;

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ Save user in localStorage
      localStorage.setItem("user_name", user.displayName || "User");
      localStorage.setItem("user_email", user.email || "");
      localStorage.setItem("user_photo", user.photoURL || "favicon.png");

      // ✅ Redirect
      window.location.href = "dashboard.html";
    } catch (err) {
      console.log(err);
      alert("Google login failed. Try again.");
      googleLoginBtn.innerText = "🔐 Continue with Google";
      googleLoginBtn.disabled = false;
    }
  });
}

/* ==========================
   ✅ DASHBOARD PROTECTION
========================== */
const isDashboard = window.location.pathname.includes("dashboard.html");

if (isDashboard) {
  // 🚀 1) First check localStorage (FAST)
  const savedEmail = localStorage.getItem("user_email");

  if (!savedEmail) {
    // Wait for firebase state once
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "login.html";
      } else {
        localStorage.setItem("user_name", user.displayName || "User");
        localStorage.setItem("user_email", user.email || "");
        localStorage.setItem("user_photo", user.photoURL || "favicon.png");
      }
    });
  }
}

/* ==========================
   ✅ LOGOUT BUTTON
========================== */
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);

      localStorage.removeItem("user_name");
      localStorage.removeItem("user_email");
      localStorage.removeItem("user_photo");

      window.location.href = "login.html";
    } catch (e) {
      console.log(e);
      alert("Logout failed");
    }
  });
}
