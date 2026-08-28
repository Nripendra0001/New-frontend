let currentSmartFilter = 'all';
let apiData = [];

document.addEventListener('DOMContentLoaded', async () => {
  // Set Date
  const dateBadge = document.getElementById('currentDateBadge');
  if (dateBadge) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateBadge.textContent = new Date().toLocaleDateString('en-US', options);
  }

  const filterBtns = document.querySelectorAll('.smart-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentSmartFilter = e.target.getAttribute('data-filter');
      renderItems();
    });
  });

  // Listen for preference updates
  window.addEventListener('preferencesUpdated', () => {
    if (currentSmartFilter === 'for-me') renderItems();
  });

  fetchCurrentAffairs();
});

async function fetchCurrentAffairs() {
  const box = document.getElementById("jobList");
  if (!box) return;
  box.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">Loading today's current affairs...</div>`;
  try {
    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://api.nripendra.online';
    const res = await fetch(`${API_BASE}/api/current-affairs`);
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    apiData = json.data || [];
    renderItems();
  } catch (err) {
    console.error(err);
    box.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #ef4444;">Current Affairs are temporarily unavailable. Please try again shortly.</div>`;
  }
}

function renderItems() {
  const box = document.getElementById("jobList");
  if (!box) return;
  
  if (!apiData || apiData.length === 0) {
    box.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">No new current affairs available right now.</div>`;
    return;
  }

  // Filter based on Smart Filter
  let filtered = [...apiData];
  
  if (currentSmartFilter === 'closing-soon') {
    // New Today
    const today = new Date();
    filtered = filtered.filter(r => {
      const d = new Date(r.date || r.createdAt);
      return d.toDateString() === today.toDateString();
    });
  } else if (currentSmartFilter === 'new') {
    filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (currentSmartFilter === 'my-state') {
    const prefs = window.UserPreferences ? window.UserPreferences.get() : null;
    if (prefs && prefs.state) {
        filtered = filtered.filter(r => 
          (r.title && r.title.toLowerCase().includes(prefs.state.toLowerCase())) ||
          (r.description && r.description.toLowerCase().includes(prefs.state.toLowerCase()))
        );
    }
  }

  // Sort by priority for 'For Me'
  if (currentSmartFilter === 'for-me' && window.RecommendationEngine) {
    filtered.sort((a, b) => {
        const scoreA = window.RecommendationEngine.analyze(a, 'current-affairs').priorityScore;
        const scoreB = window.RecommendationEngine.analyze(b, 'current-affairs').priorityScore;
        return scoreB - scoreA;
    });
  }

  box.innerHTML = "";
  
  if (filtered.length === 0) {
    box.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b; font-weight: 500;">No updates found for this filter.</div>`;
    return;
  }

  filtered.forEach(r => {
    // Inject title as ID for routing if missing
    if (!r.id && !r._id) {
      r.id = encodeURIComponent(r.title);
    }
    
    // Generate card using the centralized premium component
    if (typeof createPremiumCard === 'function') {
      box.innerHTML += createPremiumCard(r, 'current-affairs');
    } else {
      box.innerHTML += `<div class="job-card" style="padding: 16px; border: 1px solid #ddd; border-radius: 8px;">
          <div style="color: #ff9900; font-size: 12px; font-weight: bold; margin-bottom: 8px;">${r.category}</div>
          <h3 style="margin: 0 0 8px 0;">${r.title}</h3>
          <p style="font-size: 14px; color: #555;">${r.description || r.summary || ''}</p>
          <div style="font-size: 12px; color: #888; margin-top: 12px;">Source: ${r.source} | ${new Date(r.date).toLocaleDateString()}</div>
        </div>`;
    }
  });
}
