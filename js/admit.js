// Fetches Admit Cards dynamically from RapidAPI via backend
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://api.nripendra.online';

document.addEventListener("DOMContentLoaded", async () => {
  const box = document.getElementById("admitList");
  if (!box) return;

  box.innerHTML = '<div class="loading">Loading latest admit cards...</div>';

  try {
    const response = await fetch(`${API_BASE}/api/results/admit`);
    if (!response.ok) throw new Error('API Error');
    
    const apiData = await response.json();
    
    if (apiData && apiData.length > 0) {
      box.innerHTML = "";
      apiData.forEach(r => {
        box.innerHTML += createPremiumCard(r, 'admit');
      });
    } else {
      // Empty state
      box.innerHTML = '<p style="padding: 20px; color: #666;">No recent admit cards found.</p>';
    }
  } catch (error) {
    console.error("Failed to load dynamic admit cards:", error);
    // Fallback to static data
    fallbackToStaticAdmits(box);
  }
});

function fallbackToStaticAdmits(box) {
  const data = [
    {
      "title": "UPSC Civil Services Prelims Admit Card 2026",
      "date": "Available: May 2026",
      "link": "https://upsconline.nic.in/"
    },
    {
      "title": "RRB NTPC CBT 1 Admit Card 2026",
      "date": "Released: 03 May 2026",
      "link": "https://rrbcdg.gov.in/"
    }
  ];
  
  box.innerHTML = "";
  data.forEach(a => {
    box.innerHTML += `
      <div class="card">
        <h3>${a.title}</h3>
        <p>Status: <strong>${a.date}</strong></p>
        <a href="${a.link}" target="_blank" class="download-btn" style="display:inline-block; margin-top:10px;">Download Admit Card</a>
      </div>`;
  });
}
