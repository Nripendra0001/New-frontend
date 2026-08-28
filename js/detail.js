// detail.js - Handles the dynamic rendering of the detail page

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Get ID and Type from URL
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const typeParam = urlParams.get('type') || 'results';

    if (!idParam) {
        showError("Invalid or missing Item ID.");
        return;
    }

    const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://api.nripendra.online';

    const endpointMap = {
        'jobs': `${API_BASE}/api/results/jobs`,
        'job': `${API_BASE}/api/results/jobs`,
        'results': `${API_BASE}/api/results`,
        'result': `${API_BASE}/api/results`,
        'admit': `${API_BASE}/api/results/admit`,
        'answer': `${API_BASE}/api/results/answer`,
        'current-affairs': `${API_BASE}/api/current-affairs`
    };

    const endpoint = endpointMap[typeParam.toLowerCase()];

    if (!endpoint) {
        showError("Invalid category type.");
        return;
    }

    let item = null;

    // 2. Fetch Data Dynamically from API
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            let apiData = await response.json();
            if (apiData.data && Array.isArray(apiData.data)) {
                apiData = apiData.data; // Handle wrapped responses like current affairs
            }
            // Find the specific item by _id, id, or title (for current affairs fallback)
            item = apiData.find(i => 
                (i._id && i._id === idParam) || 
                (i.id && i.id === idParam) || 
                (i.title && i.title === decodeURIComponent(idParam))
            );
        }
    } catch (error) {
        console.error("Dynamic fetch failed, falling back to static...", error);
    }

    // Fallback to static data.js if API fails or item not found
    if (!item && typeof updatesData !== 'undefined') {
        const numericId = parseInt(idParam, 10);
        item = updatesData.find(i => i.id === numericId || i.id === idParam);
    }

    if (!item) {
        showError("Item not found. It may have been removed or updated.");
        return;
    }

    // Normalize data if it's from API vs Static
    const title = item.title;
    const link = item.link || item.sourceUrl || '#';
    const rawDate = item.lastDate || item.date || item.createdAt;
    const date = rawDate ? new Date(rawDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Latest Update';
    const org = item.organization || item.source || "Government Examination Board";
    const isAdmit = typeParam.includes("admit");
    const isResult = typeParam.includes("result");
    const isAnswer = typeParam.includes("answer");
    const isCurrentAffairs = typeParam.includes("current-affairs");

    // Auto generate description
    let description = `The latest update for ${title} has been officially announced. `;
    if (isAdmit) description += `Candidates can now download their Admit Cards using their registration number and password. Please ensure to print a hard copy and read all instructions mentioned on the admit card before visiting the exam center.`;
    else if (isResult) description += `Candidates who appeared for the examination can now check their results and cut-off marks on the official portal. Congratulations to all successful candidates.`;
    else if (isAnswer) description += `The official answer key has been released. Candidates can cross-check their responses and estimate their scores. If any discrepancies are found, objections can generally be raised within the stipulated time frame on the official website.`;
    else if (isCurrentAffairs) description = item.description || item.summary || `Read the full current affairs update on the official source linked below.`;
    else description += `Interested and eligible candidates can apply online or view the official notification via the direct link below.`;

    let pageTypeLabel = "Updates";
    let btnText = "Visit Official Website";
    if (isAdmit) { pageTypeLabel = "Admit Card"; btnText = "Download Admit Card"; }
    if (isResult) { pageTypeLabel = "Result"; btnText = "Check Result"; }
    if (isAnswer) { pageTypeLabel = "Answer Key"; btnText = "View Answer Key"; }
    if (isCurrentAffairs) { pageTypeLabel = "Current Affairs"; btnText = "Read Full Article"; }

    // 4. Update DOM Elements
    document.title = `${title} - Sarkari Updates`;
    
    document.getElementById('breadcrumbType').textContent = pageTypeLabel;
    
    // Attempt to set breadcrumb link based on type
    let breadcrumbLink = "updates.html";
    if (isAdmit) breadcrumbLink = "admit.html";
    else if (isAnswer) breadcrumbLink = "answer.html";
    else if (isResult) breadcrumbLink = "result.html";
    else if (isCurrentAffairs) breadcrumbLink = "current_affairs.html";
    document.getElementById('breadcrumbType').href = breadcrumbLink;

    document.getElementById('breadcrumbTitle').textContent = title;

    document.getElementById('pageTitle').textContent = title;
    document.getElementById('orgName').textContent = org;
    document.getElementById('stateName').textContent = isCurrentAffairs ? "Global / National" : "All India";
    document.getElementById('examDate').textContent = date; 
    document.getElementById('descriptionText').textContent = description;

    // Change Section Title for Current Affairs
    const instructionsHeading = document.querySelector('.detail-info h2');
    if (instructionsHeading && isCurrentAffairs) {
        instructionsHeading.textContent = "News Summary";
    }

    // Status Badge
    const badge = document.getElementById('statusBadge');
    badge.textContent = date;
    badge.className = "status-badge status-success";

    // Buttons
    const actionBtn = document.getElementById('mainActionBtn');
    actionBtn.textContent = btnText;
    actionBtn.href = link;

    document.getElementById('officialLink').href = link;
});

function showError(msg) {
    document.getElementById('pageTitle').textContent = "Error";
    document.getElementById('descriptionText').textContent = msg;
    document.getElementById('statusBadge').style.display = 'none';
    document.querySelector('.mini-info').style.display = 'none';
    document.querySelector('.apply-wrap').style.display = 'none';
    const linkDiv = document.querySelector('.detail-table .row');
    if(linkDiv) linkDiv.style.display = 'none';
}

async function sharePage() {
    const title = document.getElementById('pageTitle').textContent;
    if (navigator.share) {
        try {
            await navigator.share({
                title: title,
                text: `Check out ${title} update on SarkariNext!`,
                url: window.location.href,
            });
        } catch (err) {
            console.log('Error sharing:', err);
        }
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    }
}
