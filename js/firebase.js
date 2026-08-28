// frontend/js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
export const auth = getAuth(app);
