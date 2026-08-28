// Renders list pages (result, admit, answer) dynamically based on data.js or API

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Determine the current page type
    const path = window.location.pathname.toLowerCase();
    let currentType = "";
    
    if (path.includes("result.html")) currentType = "result";
    else if (path.includes("admit.html")) currentType = "admit";
    else if (path.includes("answer.html")) currentType = "answer";
    else {
        // Fallback or read from body data attribute if configured
        const typeAttr = document.body.getAttribute('data-page-type');
        if (typeAttr) currentType = typeAttr;
    }

    const listContainer = document.getElementById('updatesList');
    if (!listContainer) return;

    // 2. Fetch data (Dynamic for results, Static for others)
    let filteredData = [];
    
    if (currentType === "result" || currentType === "admit" || currentType === "answer") {
        listContainer.innerHTML = `<div class="loading">Loading latest ${currentType}s...</div>`;
        try {
            const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://api.nripendra.online';
            let endpoint = `${API_BASE}/api/results`; // default for result
            if (currentType === "admit") endpoint = `${API_BASE}/api/results/admit`;
            if (currentType === "answer") endpoint = `${API_BASE}/api/results/answer`;

            const response = await fetch(endpoint);
            if (response.ok) {
                const apiData = await response.json();
                filteredData = apiData.map(item => ({
                    id: item._id,
                    title: item.title,
                    date: item.lastDate || new Date(item.createdAt).toLocaleDateString(),
                    type: currentType,
                    link: item.link
                }));
            }
        } catch (error) {
            console.error(`Failed to fetch dynamic ${currentType}:`, error);
            if (typeof updatesData !== 'undefined') {
                filteredData = updatesData.filter(item => item.type === currentType);
            }
        }
    } else {
        // Static flow for others
        if (typeof updatesData !== 'undefined') {
            filteredData = updatesData.filter(item => item.type === currentType);
        }
    }

    // 3. Render List
    listContainer.innerHTML = ''; // clear

    if (filteredData.length === 0) {
        listContainer.innerHTML = '<p class="no-data">No latest updates found at the moment.</p>';
        return;
    }

    filteredData.forEach(item => {
        listContainer.innerHTML += createPremiumCard(item, item.type);
    });
});

// Function to handle click, save ID to URL and redirect
window.goToDetail = function(id) {
    window.location.href = `detail.html?id=${id}`;
};
