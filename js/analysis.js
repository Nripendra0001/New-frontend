let scoreChart = null;
let radarChart = null;
let gaugeChart = null;

function openAnalysis() {
    const modal = document.getElementById('analysisModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderAnalysis();
}

function closeAnalysis() {
    const modal = document.getElementById('analysisModal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function switchReviewTab(category) {
    const tabs = document.querySelectorAll('.review-tab-content');
    const buttons = document.querySelectorAll('.rev-tab-btn');
    const btn = event.currentTarget;
    
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabs.forEach(tab => {
        if (category === 'all') {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
            if (tab.id === 'review' + category.charAt(0).toUpperCase() + category.slice(1)) {
                tab.classList.add('active');
            }
        }
    });
}

function animateValue(id, start, end, duration, suffix = '', decimals = 0) {
    const obj = document.getElementById(id);
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const val = (progress * (end - start) + start).toFixed(decimals);
        obj.innerHTML = val + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function renderAnalysis() {
    if (typeof Chart === 'undefined') {
        alert("Chart library loading...");
        return;
    }
    const result = JSON.parse(localStorage.getItem('lastTestResult') || '{}');
    if (!result || Object.keys(result).length === 0) return;

    // --- Ultra-Precise Audit Calculations ---
    const totalQs = result.totalQuestions || 100;
    const attempted = (result.correct || 0) + (result.wrong || 0);
    const attemptedAccuracy = attempted > 0 ? (result.correct / attempted) * 100 : 0;
    
    // Competitive Score Density (Primary driver for rank)
    const scoreDensity = (result.correct / totalQs) * 100;
    
    // Percentile Estimation (Audit-Grade)
    // In competitive exams, you are ranked against everyone. 
    // Low volume = Low rank, regardless of accuracy.
    const calculatedPercentile = scoreDensity * 0.95 + (attemptedAccuracy * 0.05);
    
    // Selection Chance Logic (Competitive Benchmarking)
    let selectionChance = 0;
    let tier = "TIER-3";
    
    // Qualifying Threshold check (Standard 33% qualifying)
    if (scoreDensity < 30) {
        // Drastic penalty for not qualifying
        selectionChance = (scoreDensity / 30) * 5.254; // Capped at ~5%
        tier = "NOT QUALIFIED";
    } else if (calculatedPercentile > 85) {
        selectionChance = 82 + ((calculatedPercentile - 85) / 15) * 16.842;
        tier = calculatedPercentile > 95 ? "TIER-1 (ELITE)" : "TIER-1";
    } else if (calculatedPercentile > 60) {
        selectionChance = 10 + ((calculatedPercentile - 60) / 25) * 70;
        tier = "TIER-2";
    } else {
        selectionChance = 5 + ((calculatedPercentile - 30) / 30) * 5;
        tier = "TIER-3";
    }

    const netScoreAccuracy = (result.score / (totalQs * 1)) * 100;
    
    // Update KPI Displays with 3-Decimal Precision
    animateValue('kpiChance', 0, selectionChance, 1200, '%', 3);
    animateValue('kpiEfficiency', 0, attemptedAccuracy, 1200, '%', 3);
    animateValue('kpiRank', 0, calculatedPercentile, 1200, '%ile', 3);
    animateValue('centerScore', 0, result.score || 0, 1200, '', 2);
    animateValue('netAccVal', 0, netScoreAccuracy, 1200, '%', 3);

    // Update UI Tiers (Selection, Efficiency, Rank)
    const chanceLabel = document.getElementById('chanceTrend');
    const effLabel = document.getElementById('effTrend');
    const rankLabel = document.getElementById('rankTrend');
    
    if (chanceLabel) {
        chanceLabel.innerText = tier;
        chanceLabel.style.background = tier.includes("TIER-1") ? "#ecfdf5" : tier.includes("TIER-2") ? "#fffbeb" : "#fef2f2";
        chanceLabel.style.color = tier.includes("TIER-1") ? "#059669" : tier.includes("TIER-2") ? "#d97706" : "#dc2626";
    }

    if (rankLabel) {
        let rankStatus = "BOTTOM TIER";
        let rankColor = "#dc2626";
        let rankBg = "#fef2f2";

        if (calculatedPercentile > 95) {
            rankStatus = "TOP 5%";
            rankColor = "#059669";
            rankBg = "#ecfdf5";
        } else if (calculatedPercentile > 75) {
            rankStatus = "TOP 25%";
            rankColor = "#10b981";
            rankBg = "#ecfdf5";
        } else if (calculatedPercentile > 50) {
            rankStatus = "AVERAGE";
            rankColor = "#d97706";
            rankBg = "#fffbeb";
        }

        rankLabel.innerText = rankStatus;
        rankLabel.style.color = rankColor;
        rankLabel.style.background = rankBg;
    }

    if (effLabel) {
        let effStatus = "CRITICAL";
        let effColor = "#dc2626";
        let effBg = "#fef2f2";

        if (attemptedAccuracy > 85) {
            effStatus = "OPTIMAL";
            effColor = "#059669";
            effBg = "#ecfdf5";
        } else if (attemptedAccuracy > 65) {
            effStatus = "AVERAGE";
            effColor = "#d97706";
            effBg = "#fffbeb";
        } else if (attemptedAccuracy > 45) {
            effStatus = "LOW";
            effColor = "#dc2626";
            effBg = "#fef2f2";
        }

        effLabel.innerText = effStatus;
        effLabel.style.color = effColor;
        effLabel.style.background = effBg;
    }

    // Global accuracy update
    result.preciseAccuracy = attemptedAccuracy;
    result.netAccuracy = netScoreAccuracy;

    renderPieChart(result);
    renderRadarChart(result);
    renderAccuracyGauge(result);
    renderSubjectMatrix(result);

    if (result.questions && result.questions.length > 0) {
        renderQuestionNav(result);
        renderDetailedReview(result);
    }
}

function renderPieChart(result) {
    const ctx = document.getElementById('scorePieChart').getContext('2d');
    if (scoreChart) scoreChart.destroy();

    scoreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Wrong', 'Skipped'],
            datasets: [{
                data: [result.correct, result.wrong, result.unattempted],
                backgroundColor: ['#10b981', '#ef4444', '#94a3b8'],
                borderWidth: 0,
                borderRadius: 10,
                spacing: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            cutout: '85%'
        }
    });
}

function renderRadarChart(result) {
    const ctx = document.getElementById('skillRadarChart').getContext('2d');
    if (radarChart) radarChart.destroy();

    const stats = result.topicStats || {};
    const topics = Object.keys(stats);
    const data = topics.map(t => {
        const s = stats[t];
        return s.attempted > 0 ? (s.correct / s.attempted) * 100 : 0;
    });

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: topics,
            datasets: [{
                label: 'Subject Mastery',
                data: data,
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderColor: '#f59e0b',
                pointBackgroundColor: '#f59e0b',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { display: false },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function renderAccuracyGauge(result) {
    const ctx = document.getElementById('accuracyGaugeChart').getContext('2d');
    if (gaugeChart) gaugeChart.destroy();

    const acc = result.preciseAccuracy || 0;

    gaugeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Attempted Accuracy', 'Gap'],
            datasets: [{
                data: [acc, 100 - acc],
                backgroundColor: ['#0b3d91', '#f1f5f9'],
                borderWidth: 0,
                circumference: 180,
                rotation: 270,
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (item) => `Precise: ${item.raw.toFixed(2)}%`
                    }
                }
            },
            cutout: '85%'
        }
    });
}

function renderSubjectMatrix(result) {
    const stats = result.topicStats || {};
    const topics = Object.keys(stats);
    const matrixEl = document.getElementById('subjectMatrix');
    if (!matrixEl) return;

    matrixEl.innerHTML = topics.map(t => {
        const s = stats[t];
        const acc = s.attempted > 0 ? Math.round((s.correct / s.attempted) * 100) : 0;
        return `
            <div class="matrix-card">
                <div class="m-title">${t}</div>
                <div class="m-progress-bg">
                    <div class="m-progress-fill" style="width: ${acc}%"></div>
                </div>
                <div class="m-stats">
                    <span class="m-accuracy">Accuracy: ${acc}%</span>
                    <span class="m-time">Att: ${s.attempted} / ${s.total}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderQuestionNav(result) {
    const navEl = document.getElementById('qNavStrip');
    if (!navEl) return;

    navEl.innerHTML = result.questions.map((q, i) => {
        let status = 'skipped';
        if (q.selected !== null) {
            status = q.selected === q.ans ? 'correct' : 'wrong';
        }
        return `<a href="#q-card-${i}" class="q-bubble ${status}" onclick="setActiveBubble(${i})">${i + 1}</a>`;
    }).join('');
}

function setActiveBubble(idx) {
    document.querySelectorAll('.q-bubble').forEach(b => b.classList.remove('active'));
    const target = document.querySelectorAll('.q-bubble')[idx];
    if (target) target.classList.add('active');
}

function renderDetailedReview(result) {
    const questions = result.questions || [];
    const correctList = questions.filter(q => q.selected === q.ans);
    const wrongList = questions.filter(q => q.selected !== null && q.selected !== q.ans);
    const skippedList = questions.filter(q => q.selected === null);

    document.getElementById('cntCorrect').innerText = correctList.length;
    document.getElementById('cntWrong').innerText = wrongList.length;
    document.getElementById('cntSkipped').innerText = skippedList.length;

    const renderCategory = (list, containerId, statusClass, statusText) => {
        const container = document.getElementById(containerId);
        container.innerHTML = list.map((q) => {
            const idx = questions.indexOf(q);
            const userAns = q.selected !== null ? q.options[q.selected] : 'NOT ATTEMPTED';
            const correctAns = q.options[q.ans];
            const isWrong = q.selected !== null && q.selected !== q.ans;

            return `
                <div class="q-review-card" id="q-card-${idx}">
                    <span class="q-topic-tag">${q.topic}</span>
                    <div class="q-header">QUESTION ${idx + 1} | ${statusText}</div>
                    <div class="q-text">${q.q}</div>
                    <div class="ans-grid">
                        <div class="ans-item ${isWrong ? 'user-wrong' : ''}">
                            <span class="ans-meta">Your Selection</span>
                            <span class="ans-content">${userAns}</span>
                        </div>
                        <div class="ans-item correct-sol">
                            <span class="ans-meta">Official Solution</span>
                            <span class="ans-content">${correctAns}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    };

    renderCategory(correctList, 'reviewCorrect', 'correct', 'CORRECT');
    renderCategory(wrongList, 'reviewWrong', 'wrong', 'INCORRECT');
    renderCategory(skippedList, 'reviewSkipped', 'skipped', 'SKIPPED');
}
