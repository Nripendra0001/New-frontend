/**
 * cardComponent.js
 * SARKARINEXT PREMIUM UNIFIED CARD DESIGN SYSTEM
 * Dynamically generates a unified premium card for jobs, results, admits, and answers.
 */

const informationTypes = {
    job: {
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
        status: "Latest Update",
        action: "View Full Details",
        defaultOrg: "Government Recruitment"
    },
    result: {
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        status: "Latest Update",
        action: "Check Result",
        defaultOrg: "Exam Authority"
    },
    admit: {
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>`,
        status: "Latest Update",
        action: "Download Admit Card",
        defaultOrg: "Exam Authority"
    },
    answer: {
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
        status: "Latest Update",
        action: "View Answer Key",
        defaultOrg: "Exam Authority"
    },
    'current-affairs': {
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>`,
        status: "Recent Update",
        action: "Read Full Article",
        defaultOrg: "News Outlet"
    }
};

/**
 * Generates the HTML string for a premium card.
 * @param {Object} data - The item data.
 * @param {string} type - 'job', 'result', 'admit', 'answer'
 * @returns {string} HTML string
 */
function createPremiumCard(data, type) {
    const config = informationTypes[type] || informationTypes['result'];
    
    // Normalize data
    const id = data._id || data.id;
    const title = data.title || 'Notification';
    const org = data.organization || config.defaultOrg;
    const date = data.lastDate || data.date || 'Recently Updated';
    
    // Ensure all internal routing goes to detail.html, just as requested previously
    const targetUrl = `detail.html?id=${id}&type=${type}`;
    
    return `
    <div class="sn-premium-card">
        <div class="sn-icon-badge">
            ${config.icon}
        </div>
        
        <div class="sn-status-pill">
            ${config.status}
        </div>
        
        <h3 class="sn-card-title">${title}</h3>
        <div class="sn-card-org">${org}</div>
        
        <div class="sn-card-divider"></div>
        
        <div class="sn-card-meta">
            <span class="sn-meta-label">Updated on</span>
            <span class="sn-meta-val">${date}</span>
        </div>
        
        <a href="${targetUrl}" class="sn-card-cta">
            ${config.action} 
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
    </div>
    `;
}

/**
 * Renders a skeleton grid for loading states.
 * @returns {string} HTML string
 */
function createSkeletonGrid() {
    let html = '';
    for(let i=0; i<6; i++) {
        html += `
        <div class="sn-skeleton-card">
            <div class="sn-skeleton-line" style="height: 24px; width: 40%; margin-bottom: 20px; margin-top: 10px;"></div>
            <div class="sn-skeleton-line" style="height: 20px; width: 90%; margin-bottom: 12px;"></div>
            <div class="sn-skeleton-line" style="height: 16px; width: 60%; margin-bottom: 40px;"></div>
            <div class="sn-skeleton-line" style="height: 1px; width: 100%; margin-bottom: 20px;"></div>
            <div class="sn-skeleton-line" style="height: 14px; width: 30%; margin-bottom: 6px;"></div>
            <div class="sn-skeleton-line" style="height: 18px; width: 50%; margin-bottom: 30px;"></div>
            <div class="sn-skeleton-line" style="height: 44px; width: 100%; border-radius: 8px;"></div>
        </div>
        `;
    }
    return html;
}
