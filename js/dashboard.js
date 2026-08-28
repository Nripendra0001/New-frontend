/* ===================================================
   SARKARINEXT - DASHBOARD MODULE
   Fetches data from Supabase & renders the dashboard
=================================================== */

const SarkariDashboard = {
  data: null,

  async load() {
    if (!SarkariAuth.isLoggedIn()) {
      openPage("authPage");
      return;
    }

    this.showLoading();

    try {
      const user = SarkariAuth.getUser();
      if (!user) throw new Error("No user found");

      // We will fetch from public.profiles table if it exists
      let profileData = {};
      try {
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        if (profile) profileData = profile;
      } catch (e) {
        console.warn("Profiles table may not exist yet, using default auth data.");
      }

      this.data = {
        user: {
          id: user.id,
          name: profileData.full_name || user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0],
          email: user.email,
          education: profileData.education || null,
          joinedAt: user.created_at,
        },
        stats: {
          totalTests: 0,
          totalQuestionsSolved: 0,
          overallAccuracy: 0,
          streak: 0,
          totalTimeSpent: 0,
          avgScore: 0
        },
        recentTests: [],
        subjectBreakdown: [],
        weakTopics: [],
        recentActivity: []
      };

      this.render();
    } catch (err) {
      console.error(err);
      this.showError("Failed to load dashboard data.");
    }
  },

  showLoading() {
    const container = document.getElementById("dashboardContent");
    if (!container) return;
    container.innerHTML = `
      <div class="dash-section-card">
        <div class="dash-loading">
          <div class="dash-spinner"></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    `;
  },

  showError(msg) {
    const container = document.getElementById("dashboardContent");
    if (!container) return;
    container.innerHTML = `
      <div class="dash-section-card">
        <div class="dash-error">
          <h3>${msg}</h3>
          <button class="dash-retry-btn" onclick="SarkariDashboard.load()">Retry</button>
        </div>
      </div>
    `;
  },

  getStatusClass(value, goodThreshold, midThreshold) {
    if (value >= goodThreshold) return "good";
    if (value >= midThreshold) return "avg";
    return "low";
  },

  render() {
    const container = document.getElementById("dashboardContent");
    if (!container || !this.data) return;

    const d = this.data;
    const user = d.user;
    
    // We only show features that exist. Since we have no actual mock test history in Supabase yet, we show empty states.
    container.innerHTML = `
      <div class="dash-profile-card">
        <div class="dash-avatar-big">${(user.name || "U").charAt(0).toUpperCase()}</div>
        <div class="dash-profile-info">
          <h2>${user.name}</h2>
          <p class="dash-email">${user.email}</p>
          <span class="dash-badge">Student</span>
          ${user.education ? `<span class="dash-target">Education: ${user.education}</span>` : `<span class="dash-target" style="background:#dc2626;cursor:pointer;" onclick="alert('Profile setup coming soon!')">Complete Profile</span>`}
          <p class="dash-joined">Member since ${new Date(user.joinedAt).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p>
        </div>
      </div>

      <div class="dash-section-card">
        <h3>My Saved Jobs</h3>
        <p class="dash-empty">You haven't saved any jobs yet. Browse the Jobs section to save them for later.</p>
        <button class="dash-continue-btn" onclick="openPage('jobs')" style="width:200px;margin-top:10px;text-align:center;">
          Browse Jobs
        </button>
      </div>

      <div class="dash-section-card">
        <h3>Continue Learning</h3>
        <div class="dash-test-row">
          <div class="dash-test-info">
            <span class="dash-test-exam">Next Best Actions</span>
            <span class="dash-test-date">Choose one learning path below to begin building your dashboard</span>
          </div>
        </div>
        <div class="dash-continue-grid">
          <button class="dash-continue-btn" onclick="window.location.href='series.html'">
            <span>📝</span>
            <div>
              <div>Take a Mock Test</div>
              <small>Measure score, speed, and accuracy</small>
            </div>
          </button>
          <button class="dash-continue-btn" onclick="openPage('home')">
            <span>📰</span>
            <div>
              <div>Current Affairs</div>
              <small>Stay updated with exam-relevant news</small>
            </div>
          </button>
          <button class="dash-continue-btn" onclick="window.location.href='predicter.html'">
            <span>📊</span>
            <div>
              <div>Rank Predictor</div>
              <small>Estimate your standing instantly</small>
            </div>
          </button>
        </div>
      </div>

      <div class="dash-section-card">
        <h3>Recent Mock Tests</h3>
        <p class="dash-empty">Start your first mock test to unlock your performance summary!</p>
      </div>
      
      <div class="dash-section-card">
        <h3>Personalized Recommendations</h3>
        <p class="dash-empty">Complete your profile (Education, Age, State, Category) to unlock Smart Recommendations.</p>
      </div>
    `;
  }
};

/* ===================================================
   DASHBOARD PAGE OBSERVER
=================================================== */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.openPage === "function") {
    const _original = window.openPage;
    window.openPage = function (id) {
      _original(id);
      if (id === "dashboardPage") {
        SarkariDashboard.load();
      }
    };
  }
});
