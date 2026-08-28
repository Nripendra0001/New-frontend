/**
 * SARKARINEXT - NATIVE APP ENGINE
 * ADVANCED MOBILE LOGIC (<= 768PX)
 */

(function () {
    if (window.innerWidth > 768) return;

    console.log("SarkariNext Native App Engine Active");

    // DATA ADAPTERS (Connecting existing data to new shell)
    const APP_DATA = {
        results: [
            { title: "UGC NET Result (NTA)", date: "Latest", link: "https://ugcnet.nta.nic.in/" },
            { title: "JEE Main Result", date: "Latest", link: "https://jeemain.nta.nic.in/" },
            { title: "NEET UG Result", date: "Latest", link: "https://neet.nta.nic.in/" },
            { title: "CTET Result", date: "Latest", link: "https://ctet.nic.in/" },
            { title: "IBPS Clerk Result", date: "Latest", link: "https://www.ibps.in/" },
            { title: "UP Board Result", date: "Latest", link: "https://upresults.nic.in/" }
        ],
        admit: [
            { title: "SSC GD Admit Card", date: "Available", link: "https://ssc.nic.in/" },
            { title: "UP Police Admit Card", date: "Coming Soon", link: "#" },
            { title: "Railway NTPC Admit Card", date: "Latest", link: "#" },
            { title: "IBPS PO Admit Card", date: "Available", link: "#" }
        ],
        jobs: [
            { title: "UP Police Constable Recruitment 2026", date: "30 April", link: "#" },
            { title: "SSC GD Constable Recruitment 2026", date: "20 June", link: "#" },
            { title: "Railway NTPC Vacancy", date: "Upcoming", link: "#" }
        ]
    };

    // 1. ADVANCED SPA ROUTER
    const originalOpenPage = window.openPage;
    window.openPage = function (id) {
        // Render data if it's an app section
        if (id === 'resultsPage') renderSection('resultsContent', APP_DATA.results, 'Check Result');
        if (id === 'admitPage') renderSection('admitContent', APP_DATA.admit, 'Download');
        if (id === 'jobsPage') renderSection('jobsContent', APP_DATA.jobs, 'Apply Now');
        if (id === 'answerPage') renderSection('answerContent', APP_DATA.results, 'View Key'); // Sample

        // History support
        if (window.location.hash !== '#' + id) {
            history.pushState({ pageId: id }, "", "#" + id);
        }

        // Toggle visibility
        document.querySelectorAll(".page").forEach((p) => p.classList.add("hide"));
        const page = document.getElementById(id);
        if (page) {
            page.classList.remove("hide");
            page.scrollTop = 0;
        }

        updateBottomNav(id);
        
        // Native-like scroll reset
        const content = document.getElementById('mainContent');
        if (content) content.scrollTop = 0;
    };

    // Handle Hardware/Browser Back Button
    window.addEventListener('popstate', function (event) {
        const id = (event.state && event.state.pageId) ? event.state.pageId : 'home';
        document.querySelectorAll(".page").forEach((p) => p.classList.add("hide"));
        const page = document.getElementById(id);
        if (page) page.classList.remove("hide");
        updateBottomNav(id);
    });

    function updateBottomNav(id) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            const onclick = item.getAttribute('onclick');
            if (onclick && onclick.includes(`'${id}'`)) {
                item.classList.add('active');
            }
        });
    }

    function renderSection(containerId, data, btnText) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = data.map(item => `
            <div class="card fade-in">
                <h3>${item.title}</h3>
                <p>Deadline/Status: ${item.date}</p>
                <a href="${item.link}" target="_blank" class="portal-card" style="margin: 10px 0 0; padding: 10px; background: #f8fafc; display: block; text-align: center; font-weight: 600; color: #ff9900; border-radius: 8px;">
                    ${btnText} →
                </a>
            </div>
        `).join('');

        // Ensure images inside nested content (if any) are lazy loaded
        container.querySelectorAll('img').forEach(img => img.setAttribute('loading', 'lazy'));
    }

    // 2. DYNAMIC HEADER HIDE/SHOW ON SCROLL
    let lastScroll = 0;
    const scrollContainer = document.getElementById('mainContent') || document.body;
    
    // index.html has #mainContent as the scrollable element in our mobile mode
    const targetScroll = document.getElementById('mainContent');
    if (targetScroll) {
        targetScroll.addEventListener('scroll', () => {
            const currentScroll = targetScroll.scrollTop;
            const topbar = document.querySelector('.topbar');
            if (!topbar) return;

            if (currentScroll > lastScroll && currentScroll > 60) {
                topbar.classList.add('header-hidden');
            } else {
                topbar.classList.remove('header-hidden');
            }
            lastScroll = currentScroll;
        });
    }

    // 3. SWIPE GESTURES (Basic Swipe Right to Back)
    let touchstartX = 0;
    let touchendX = 0;

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchendX > touchstartX + 100) {
            // Swiped Right
            if (typeof window.goBack === 'function') window.goBack();
        }
    }

    // 4. TOUCH RIPPLE (REFINED)
    document.addEventListener('click', function (e) {
        const target = e.target.closest('.portal-card, .item, .card, button, .nav-item');
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const splash = document.createElement('div');
        splash.style.position = 'absolute';
        splash.style.top = (e.clientY - rect.top) + 'px';
        splash.style.left = (e.clientX - rect.left) + 'px';
        splash.style.width = '1px';
        splash.style.height = '1px';
        splash.style.background = 'rgba(0,0,0,0.05)';
        splash.style.borderRadius = '50%';
        splash.style.transition = 'all 0.4s ease-out';
        splash.style.pointerEvents = 'none';

        target.style.position = 'relative';
        target.style.overflow = 'hidden';
        target.appendChild(splash);

        setTimeout(() => {
            splash.style.transform = 'scale(400)';
            splash.style.opacity = '0';
        }, 10);

        setTimeout(() => splash.remove(), 400);
    });

})();
