// js/google-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyA-SnbqCtF0Sxt-8PKiQcdXRMIL0ZbhyJg",
  authDomain: "authentication-fb4b2.firebaseapp.com",
  projectId: "authentication-fb4b2",
  storageBucket: "authentication-fb4b2.firebasestorage.app",
  messagingSenderId: "587367075241",
  appId: "1:587367075241:web:cc55145b26ea52854ac8b8",
  measurementId: "G-WBKCPQTNHS",
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ------------------------------
// ✅ LOGIN BUTTON (login.html)
// ------------------------------
const googleBtn = document.getElementById("googleLoginBtn");
const msgBox = document.getElementById("msg");

if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      googleBtn.innerText = "Signing in...";
      googleBtn.disabled = true;

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ save in localStorage
      localStorage.setItem("user_name", user.displayName || "User");
      localStorage.setItem("user_email", user.email || "");
      localStorage.setItem("user_photo", user.photoURL || "favicon.png");
      localStorage.setItem("is_logged_in", "yes");

      // ✅ go dashboard
      window.location.href = "dashboard.html";
    } catch (err) {
      console.log(err);
      if (msgBox) msgBox.innerText = "❌ Google Login Failed. Try again.";
      googleBtn.innerText = "🔐 Continue with Google";
      googleBtn.disabled = false;
    }
  });
}

// ------------------------------
// ✅ DASHBOARD PROTECTION
// ------------------------------
if (window.location.pathname.includes("dashboard.html")) {
  onAuthStateChanged(auth, (user) => {
    const isLogged = localStorage.getItem("is_logged_in");

    // अगर firebase user भी नहीं + localStorage भी नहीं
    if (!user && isLogged !== "yes") {
      window.location.href = "login.html";
    }
  });
}

// ------------------------------
// ✅ LOGOUT FUNCTION (global)
// ------------------------------
window.logoutUser = async function () {
  try {
    await signOut(auth);
  } catch (e) {}

  localStorage.removeItem("user_name");
  localStorage.removeItem("user_email");
  localStorage.removeItem("user_photo");
  localStorage.removeItem("is_logged_in");

  window.location.href = "login.html";
};
