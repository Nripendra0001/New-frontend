// Fetches Results dynamically from RapidAPI via backend
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://api.nripendra.online';

document.addEventListener("DOMContentLoaded", async () => {
  const box = document.getElementById("resultList");
  if (!box) return;

  box.innerHTML = '<div class="loading">Loading latest results...</div>';

  try {
    const response = await fetch(`${API_BASE}/api/results`);
    if (!response.ok) throw new Error('API Error');
    
    const apiData = await response.json();
    
    if (apiData && apiData.length > 0) {
      box.innerHTML = "";
      apiData.forEach(r => {
        box.innerHTML += createPremiumCard(r, 'result');
      });
    } else {
      // Empty state
      box.innerHTML = '<p style="padding: 20px; color: #666;">No recent results found.</p>';
    }
  } catch (error) {
    console.error("Failed to load dynamic results:", error);
    // Fallback to static data
    fallbackToStaticResults(box);
  }
});

function fallbackToStaticResults(box) {
  const staticData = [
    {
      "title": "JEE Main Session 2 Result 2026",
      "date": "Declared: 24 Apr 2026",
      "link": "https://jeemain.nta.ac.in/"
    },
    {
      "title": "MP Board 10th & 12th Result 2026",
      "date": "Declared: 24 Apr 2026",
      "link": "https://mpresults.nic.in/"
    },
    {
      "title": "UPSC CSE Final Result 2026",
      "date": "Declared: 16 Apr 2026",
      "link": "https://upsc.gov.in/"
    }
  ];
  
  box.innerHTML = "";
  staticData.forEach(r => {
    box.innerHTML += `
      <div class="card">
        <h3>${r.title}</h3>
        <p>${r.date}</p>
        <a href="${r.link}" target="_blank">Check Result</a>
      </div>`;
  });
}
