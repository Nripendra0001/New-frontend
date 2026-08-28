// Fetches Jobs dynamically from RapidAPI via backend
let allJobsData = [];
let currentCategory = "All";

const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://api.nripendra.online';

document.addEventListener("DOMContentLoaded", async () => {
  const box = document.getElementById("jobList");
  if (!box) return;

  box.innerHTML = '<div class="loading">Loading latest jobs...</div>';

  try {
    const response = await fetch(`${API_BASE}/api/results/jobs`);
    if (!response.ok) throw new Error('API Error');
    
    const apiData = await response.json();
    
    if (apiData && apiData.length > 0) {
      allJobsData = apiData;
      renderJobs(box);
    } else {
      // Empty state
      box.innerHTML = '<p style="padding: 20px; color: #666;">No recent jobs found.</p>';
    }
  } catch (error) {
    console.error("Failed to load dynamic jobs:", error);
    // Fallback to static data
    fallbackToStaticJobs(box);
  }

  // Setup filter buttons if they exist
  const filters = document.querySelectorAll('.filter-btn');
  filters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Update active state
      filters.forEach(f => {
        f.style.background = '#e2e8f0';
        f.style.color = '#333';
        f.classList.remove('active');
      });
      e.target.style.background = '#0f172a';
      e.target.style.color = 'white';
      e.target.classList.add('active');

      // Filter and render
      currentCategory = e.target.getAttribute('data-category');
      renderJobs(box);
    });
  });
});

function renderJobs(box) {
  box.innerHTML = "";
  
  const filtered = currentCategory === "All" 
    ? allJobsData 
    : allJobsData.filter(j => j.organization === currentCategory);

  if (filtered.length === 0) {
    box.innerHTML = '<p style="padding: 20px; color: #666;">No jobs found in this category.</p>';
    return;
  }

  filtered.forEach(r => {
    // Generate card using the centralized premium component
    box.innerHTML += createPremiumCard(r, 'job');
  });
}

function fallbackToStaticJobs(box) {
  const data = [
    {
      "title": "RBI Grade B Officer",
      "date": "20 May 2026",
      "link": "https://opportunities.rbi.org.in/"
    },
    {
      "title": "SSC Stenographer Grade C & D",
      "date": "15 May 2026",
      "link": "https://ssc.gov.in/"
    },
    {
      "title": "Selection Post Phase XIV",
      "date": "04 May 2026",
      "link": "https://ssc.gov.in/"
    }
  ];
  
  box.innerHTML = "";
  data.forEach(r => {
    box.innerHTML += `
      <div class="card">
        <h3>${r.title}</h3>
        <p>Last Date: <span style="color: #d9534f; font-weight: 500;">${r.date}</span></p>
        <a href="${r.link}" target="_blank" style="background: #ffb400; color: #000; padding: 8px 16px; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; margin-top: 10px;">View Full Details</a>
      </div>`;
  });
}
