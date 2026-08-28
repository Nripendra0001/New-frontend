// Fetches Answer Keys dynamically from RapidAPI via backend
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://api.nripendra.online';

document.addEventListener("DOMContentLoaded", async () => {
  const box = document.getElementById("answerList");
  if (!box) return;

  box.innerHTML = '<div class="loading">Loading latest answer keys...</div>';

  try {
    const response = await fetch(`${API_BASE}/api/results/answer`);
    if (!response.ok) throw new Error('API Error');
    
    const apiData = await response.json();
    
    if (apiData && apiData.length > 0) {
      box.innerHTML = "";
      apiData.forEach(r => {
        box.innerHTML += createPremiumCard(r, 'answer');
      });
    } else {
      // Empty state
      box.innerHTML = '<p style="padding: 20px; color: #666;">No recent answer keys found.</p>';
    }
  } catch (error) {
    console.error("Failed to load dynamic answer keys:", error);
    // Fallback to static data
    fallbackToStaticAnswers(box);
  }
});

function fallbackToStaticAnswers(box) {
  const data = [
    {
      "title": "UPSC NDA 1 Answer Key 2026",
      "date": "Available: May 2026",
      "link": "https://upsc.gov.in/"
    },
    {
      "title": "UP Police Constable Re-Exam Answer Key 2026",
      "date": "Available: May 2026",
      "link": "https://uppbpb.gov.in/"
    }
  ];
  
  box.innerHTML = "";
  data.forEach(a => {
    box.innerHTML += `
     <div class="card">
       <h3>${a.title}</h3>
       <p>Date: ${a.date}</p>
       <a href="${a.link}" target="_blank" style="display:inline-block; margin-top:10px; background: #2196F3; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none;">Download Now</a>
     </div>`;
  });
}
