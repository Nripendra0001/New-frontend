/* ===================================================
   SARKARINEXT - SUPABASE AUTH MODULE
   Login / Signup / Logout / Session Management
=================================================== */

// Supabase Configuration
const SUPABASE_URL = "https://lbgnshipjsdxxzjvbbdx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_UmtWUnZ1ABlz9uG2EHXdPQ_qgpdE9Ck";

// Initialize Supabase Client (safe init)
let supabase;

const SarkariAuth = {
  currentUser: null,
  currentSession: null,

  // Check if logged in
  isLoggedIn() {
    return !!this.currentSession;
  },

  // Get current user data
  getUser() {
    return this.currentUser;
  },

  // Register (Signup)
  async register(name, email, password, phone) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            phone: phone || ""
          }
        }
      });
      if (error) throw error;
      
      // Supabase handles session automatically if email confirmation is off
      if (data.user && !data.session) {
        return { ok: true, message: "Account created! Please check your email to verify your account before logging in." };
      }
      this.currentSession = data.session;
      this.currentUser = data.user;
      return { ok: true, user: data.user, message: "Account created successfully!" };
    } catch (err) {
      return { ok: false, message: err.message || "Registration failed." };
    }
  },

  // Login
  async login(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      this.currentSession = data.session;
      this.currentUser = data.user;
      return { ok: true, user: data.user, message: "Success! Redirecting..." };
    } catch (err) {
      let msg = err.message;
      if (msg.includes("Invalid login credentials")) msg = "Incorrect email or password.";
      return { ok: false, message: msg || "Login failed." };
    }
  },

  // Google Login
  async loginWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + window.location.pathname
        }
      });
      if (error) throw error;
    } catch (err) {
      console.error("Google Auth Error:", err);
      alert("Unable to login with Google: " + err.message);
    }
  },

  // Forgot Password
  async resetPassword(email) {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password.html',
      });
      if (error) throw error;
      return { ok: true, message: "Password reset link sent to your email!" };
    } catch (err) {
      return { ok: false, message: err.message || "Failed to send reset email." };
    }
  },

  // Logout
  async logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      if (typeof openPage === "function") openPage("home");
      // UI will update automatically via onAuthStateChange listener
    } catch (err) {
      console.error("Logout Error:", err);
    }
  },

  // Route Guard
  requireAuth(redirectUrl = null) {
    if (!this.isLoggedIn()) {
      const currentParams = redirectUrl ? `?redirect=${encodeURIComponent(redirectUrl)}` : '';
      if (typeof openPage === "function") {
        openPage("authPage");
        // Update URL to remember where to redirect after login
        window.history.pushState({}, '', window.location.pathname + currentParams);
      } else {
        window.location.href = `index.html${currentParams}&auth=login`;
      }
      return false; // Prevent execution
    }
    return true; // Authorized
  }
};

// Safe initialization when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  if (window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Auth state listener
    supabase.auth.onAuthStateChange((event, session) => {
      SarkariAuth.currentSession = session;
      SarkariAuth.currentUser = session ? session.user : null;
      updateAuthUI();
    });

    // Initial session fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      SarkariAuth.currentSession = session;
      SarkariAuth.currentUser = session ? session.user : null;
      updateAuthUI();
    });
  } else {
    console.error("Supabase SDK failed to load from CDN.");
    alert("Authentication system failed to load. Please check your internet connection.");
  }
});

/* ===================================================
   AUTH UI HANDLERS
=================================================== */

function updateAuthUI() {
  const authBtnsTop = document.getElementById("authButtonsTopbar");
  if (!authBtnsTop) return;

  if (SarkariAuth.isLoggedIn()) {
    const user = SarkariAuth.getUser();
    const name = (user && user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || (user && user.email ? user.email.split('@')[0] : "Student");
    const initials = name.charAt(0).toUpperCase();
    
    // Create dropdown wrapper
    authBtnsTop.innerHTML = `
      <div class="auth-dropdown-wrapper" style="position: relative; display: inline-block;">
        <button class="auth-avatar-btn" onclick="toggleProfileDropdown()" title="My Profile" style="display: flex; align-items: center; gap: 8px; background: rgba(255, 153, 0, 0.1); border: 1px solid rgba(255, 153, 0, 0.3); border-radius: 20px; padding: 4px 12px 4px 4px; cursor: pointer;">
          <span class="auth-avatar" style="background: #ff9900; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">${initials}</span>
          <span class="auth-name-text" style="color: #fff; font-weight: 500;">${name.split(" ")[0]} ▼</span>
        </button>
        <div id="profileDropdownMenu" style="display: none; position: absolute; right: 0; top: 120%; background: #1e293b; border: 1px solid #334155; border-radius: 8px; width: 200px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5); z-index: 1000; overflow: hidden;">
          <div style="padding: 12px 16px; border-bottom: 1px solid #334155;">
            <div style="color: #fff; font-weight: 600; font-size: 14px;">${name}</div>
            <div style="color: #94a3b8; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${user.email}</div>
          </div>
          <a href="#" onclick="openPage('dashboardPage'); toggleProfileDropdown(); return false;" style="display: block; padding: 10px 16px; color: #cbd5e1; text-decoration: none; font-size: 14px; transition: background 0.2s;">Dashboard</a>
          <a href="#" onclick="openPage('dashboardPage'); toggleProfileDropdown(); return false;" style="display: block; padding: 10px 16px; color: #cbd5e1; text-decoration: none; font-size: 14px; transition: background 0.2s;">My Profile</a>
          <a href="#" onclick="openPage('dashboardPage'); toggleProfileDropdown(); return false;" style="display: block; padding: 10px 16px; color: #cbd5e1; text-decoration: none; font-size: 14px; transition: background 0.2s;">Saved Jobs</a>
          <div style="border-top: 1px solid #334155;"></div>
          <a href="#" onclick="SarkariAuth.logout(); toggleProfileDropdown(); return false;" style="display: block; padding: 10px 16px; color: #ef4444; text-decoration: none; font-size: 14px; transition: background 0.2s;">Logout</a>
        </div>
      </div>
    `;
    
    // Add hover effect via JS
    const links = document.querySelectorAll('#profileDropdownMenu a');
    links.forEach(link => {
      link.addEventListener('mouseover', () => link.style.background = '#334155');
      link.addEventListener('mouseout', () => link.style.background = 'transparent');
    });

  } else {
    authBtnsTop.innerHTML = `
      <button class="auth-login-topbar" onclick="openPage('authPage')">Login</button>
    `;
  }
}

function toggleProfileDropdown() {
  const menu = document.getElementById("profileDropdownMenu");
  if (menu) {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  }
}

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  const wrapper = document.querySelector(".auth-dropdown-wrapper");
  const menu = document.getElementById("profileDropdownMenu");
  if (wrapper && menu && !wrapper.contains(e.target)) {
    menu.style.display = "none";
  }
});

async function handleSignup(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const phoneEl = document.getElementById("signupPhone");
  const phone = phoneEl ? phoneEl.value.trim() : "";
  const msgEl = document.getElementById("signupMsg");

  if (!name || !email || !password) {
    msgEl.textContent = "All fields are required";
    msgEl.className = "auth-msg error";
    return;
  }
  if (password.length < 6) {
    msgEl.textContent = "Password must be at least 6 characters";
    msgEl.className = "auth-msg error";
    return;
  }

  msgEl.textContent = "Creating account...";
  msgEl.className = "auth-msg";
  if (btn) btn.disabled = true;

  const res = await SarkariAuth.register(name, email, password, phone);
  if (btn) btn.disabled = false;
  
  if (res.ok) {
    msgEl.textContent = res.message;
    msgEl.className = "auth-msg success";
    
    // If auto-logged in, redirect
    if (SarkariAuth.isLoggedIn()) {
      const urlParams = new URLSearchParams(window.location.search);
      const redirect = urlParams.get("redirect");
      setTimeout(() => {
        if (redirect) window.location.href = redirect;
        else if (typeof openPage === "function") openPage("dashboardPage");
      }, 1500);
    }
  } else {
    msgEl.textContent = res.message;
    msgEl.className = "auth-msg error";
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const msgEl = document.getElementById("loginMsg");

  if (!email || !password) {
    msgEl.textContent = "Email and password required";
    msgEl.className = "auth-msg error";
    return;
  }

  msgEl.textContent = "Logging in...";
  msgEl.className = "auth-msg";
  if (btn) btn.disabled = true;

  const res = await SarkariAuth.login(email, password);
  if (btn) btn.disabled = false;

  if (res.ok) {
    msgEl.textContent = res.message;
    msgEl.className = "auth-msg success";
    
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get("redirect");
    
    setTimeout(() => {
      if (redirect) window.location.href = redirect;
      else if (typeof openPage === "function") openPage("dashboardPage");
    }, 800);
  } else {
    msgEl.textContent = res.message;
    msgEl.className = "auth-msg error";
  }
}

async function handleForgotPassword() {
  const email = prompt("Enter your account email to reset your password:");
  if (!email) return;

  const res = await SarkariAuth.resetPassword(email);
  alert(res.message);
}

function showAuthTab(tab) {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginFormBox");
  const signupForm = document.getElementById("signupFormBox");

  if (tab === "login") {
    if (loginTab) loginTab.classList.add("active");
    if (signupTab) signupTab.classList.remove("active");
    if (loginForm) loginForm.classList.remove("hide");
    if (signupForm) signupForm.classList.add("hide");
  } else {
    if (loginTab) loginTab.classList.remove("active");
    if (signupTab) signupTab.classList.add("active");
    if (loginForm) loginForm.classList.add("hide");
    if (signupForm) signupForm.classList.remove("hide");
  }
}

// Initialize auth UI on page load
document.addEventListener("DOMContentLoaded", () => {
  // Check for auth trigger in URL
  const urlParams = new URLSearchParams(window.location.search);
  const authMode = urlParams.get("auth");
  if (authMode === "login" || authMode === "signup") {
     if (typeof openPage === "function") openPage("authPage");
     showAuthTab(authMode);
  }
});
