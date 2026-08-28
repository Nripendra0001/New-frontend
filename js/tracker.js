/* ===================================================
   SARKARINEXT - ACTIVITY TRACKER
   Automatically tracks user actions and sends to API
=================================================== */

const SarkariTracker = {
  API: window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000"
    : "https://api.nripendra.online",

  // Track an action
  async track(action, metadata = {}, duration = 0) {
    if (!SarkariAuth.isLoggedIn()) return;

    try {
      await fetch(this.API + "/api/dashboard/track-activity", {
        method: "POST",
        headers: {
          ...SarkariAuth.authHeader(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action, metadata, duration }),
      });
    } catch {
      // Silent fail - tracking should not break user experience
    }
  },

  // Track page visit time
  _pageStart: null,
  _currentPage: null,

  startPageTimer(pageName) {
    this._pageStart = Date.now();
    this._currentPage = pageName;
  },

  endPageTimer() {
    if (this._pageStart && this._currentPage) {
      const duration = Math.round((Date.now() - this._pageStart) / 1000);
      if (duration >= 5) {
        // Only track if > 5 seconds
        this.track("page_visit", { page: this._currentPage }, duration);
      }
      this._pageStart = null;
      this._currentPage = null;
    }
  },

  // Auto initialize
  init() {
    // Track page visit start
    this.startPageTimer("home");

    // Track on page unload
    window.addEventListener("beforeunload", () => {
      this.endPageTimer();
    });

    // Intercept openPage to track page visits
    if (typeof window.openPage === "function") {
      const _original = window.openPage;
      const self = this;

      window.openPage = function (id) {
        self.endPageTimer();
        _original(id);
        self.startPageTimer(id);
      };
    }

    // Track PDF link clicks
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a[href]");
      if (link) {
        const href = link.href || "";
        if (href.includes(".pdf")) {
          this.track("pdf_opened", { url: href, title: link.textContent.trim() });
        }
        if (href.includes("youtube.com") || href.includes("youtu.be")) {
          this.track("video_watched", { url: href, title: link.textContent.trim() });
        }
      }
    });

    // Track roadmap views
    document.querySelectorAll("[onclick*='Roadmap']").forEach((el) => {
      el.addEventListener("click", () => {
        const match = el.getAttribute("onclick")?.match(/openPage\('(.+?)'\)/);
        if (match) {
          this.track("roadmap_viewed", { roadmap: match[1] });
        }
      });
    });
  },
};

// Initialize tracker when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  SarkariTracker.init();
});
