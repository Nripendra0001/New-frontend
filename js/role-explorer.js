document.addEventListener('DOMContentLoaded', () => {
    
    // Structured data for roles. Extensible architecture.
    const roleData = {
        upPoliceSI: {
            title: "Sub-Inspector (SI)",
            parentCategory: "UP Police",
            description: "State police officer responsible for investigation, law & order, and field supervision.",
            quickFacts: {
                eligibility: "Graduate",
                age: "21–28 Years",
                salary: "₹35,400 – ₹1,12,400",
                posting: "Uttar Pradesh",
                department: "Uttar Pradesh Police",
                recruitment: "UPPRPB",
                category: "State Government Job"
            },
            salaryDetails: {
                range: "₹35,400 – ₹1,12,400",
                level: "Pay Level 6",
                basicPay: "₹35,400",
                allowances: "DA, HRA, CCA, Uniform Allowance, Diet Allowance",
                inHand: "Approx. ₹45,000 - ₹52,000 (depending on city)"
            },
            responsibilities: [
                "Maintaining law and order in the assigned jurisdiction",
                "Investigation of criminal cases and filing charge sheets",
                "Recording and handling public complaints / FIRs",
                "Supervising constables and head constables",
                "Patrolling and crime prevention duties",
                "Appearing before court for evidence and case proceedings"
            ],
            dailyWork: [
                { title: "Review", desc: "Checking pending cases, FIRs, and daily station diaries." },
                { title: "Investigation", desc: "Visiting crime scenes, collecting evidence, and questioning witnesses." },
                { title: "Public Dealing", desc: "Listening to public grievances and maintaining peace." },
                { title: "Documentation", desc: "Preparing case diaries, charge sheets, and official reports." },
                { title: "Field Operations", desc: "Law & order duties, VIP security, and emergency response." }
            ],
            selection: [
                "Written Examination (Online CBT)",
                "Document Verification (DV) & PST",
                "Physical Efficiency Test (PET - Running)",
                "Medical Examination"
            ],
            physical: {
                male: "Height: 168 cm (Gen/OBC/SC) | Chest: 79-84 cm | Run: 4.8 km in 28 mins",
                female: "Height: 152 cm (Gen/OBC/SC) | Run: 2.4 km in 16 mins",
                note: "Relaxations apply for ST category candidates."
            },
            education: "Bachelor's Degree in any discipline from a recognized University.",
            skills: [
                "Communication & Public Dealing",
                "Decision Making & Quick Thinking",
                "Basic Legal Awareness",
                "Report Writing & Documentation",
                "Physical Fitness & Stamina",
                "Stress Management"
            ],
            authority: "First Investigating Officer for most criminal cases. Commands the police outpost (Chowki) or serves as Senior Sub-Inspector at a police station.",
            workLife: [
                "Field and office responsibilities combined.",
                "Shift and irregular duty hours may occur.",
                "Emergency duties during festivals, elections, or VIP visits.",
                "High public interaction and accountability."
            ],
            careerGrowth: [
                "Sub-Inspector (SI)",
                "Inspector",
                "Deputy Superintendent of Police (DSP)"
            ],
            benefits: [
                "Government service security and pension scheme (NPS)",
                "Medical facilities for self and dependents",
                "Government quarters or HRA",
                "Uniform allowance and risk allowance"
            ],
            challenges: [
                "Irregular working hours and night shifts",
                "High field pressure and public expectations",
                "Emergency duties with short notice",
                "High accountability in investigations"
            ],
            suitableFor: "Candidates interested in active field service, investigation, leadership, and maintaining law and order.",
            howToPrepare: [
                "Written Exam: Focus on General Hindi, Law/Constitution, General Knowledge, Numerical & Mental Ability, and Reasoning.",
                "Physical Preparation: Start running practice early to build stamina for the 4.8 km / 2.4 km run.",
                "Mock Tests: Practice online CBT format regularly."
            ],
            summary: {
                role: "Sub-Inspector",
                department: "UP Police",
                jobType: "Government / Police Service",
                workNature: "Field + Investigation + Law & Order"
            }
        }
        // Future roles can be added here
    };

    // Event listener for opening role details
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.role-btn');
        if (!btn) return;

        const roleId = btn.getAttribute('data-role');
        const data = roleData[roleId];

        if (data) {
            const exploreContent = btn.closest('.explore-content');
            if (exploreContent) {
                openRoleDetail(exploreContent, data);
            }
        } else {
            alert("Detailed profile for this role is coming soon!");
        }
    });

    function openRoleDetail(container, data) {
        // Save original content if not already saved
        if (!container.hasAttribute('data-original-html')) {
            container.setAttribute('data-original-html', container.innerHTML);
        }

        // Build the HTML for the role detail
        const html = `
            <div class="role-detail-panel">
                <div class="rd-header">
                    <button class="rd-back-btn" onclick="closeRoleDetail(this)">← Back to ${data.parentCategory}</button>
                    <div class="rd-title-group">
                        <span class="rd-parent">${data.parentCategory}</span>
                        <h3 class="rd-title">${data.title}</h3>
                        <p class="rd-desc">${data.description}</p>
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Quick Facts</div>
                    <div class="ex-facts-grid">
                        <div class="ex-fact"><span class="ex-label">Eligibility</span><span class="ex-val">${data.quickFacts.eligibility}</span></div>
                        <div class="ex-fact"><span class="ex-label">Age Limit</span><span class="ex-val">${data.quickFacts.age}</span></div>
                        <div class="ex-fact ex-salary"><span class="ex-label">Salary</span><span class="ex-val">${data.quickFacts.salary}</span></div>
                        <div class="ex-fact"><span class="ex-label">Posting</span><span class="ex-val">${data.quickFacts.posting}</span></div>
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Salary & Pay</div>
                    <div class="rd-salary-box">
                        <div class="rd-salary-main">
                            <div class="rd-salary-range">${data.salaryDetails.range}</div>
                            <div class="rd-salary-level">${data.salaryDetails.level}</div>
                        </div>
                        <div class="rd-salary-breakdown">
                            <div class="rd-sb-item"><span>Basic Pay:</span> <b>${data.salaryDetails.basicPay}</b></div>
                            <div class="rd-sb-item"><span>Allowances:</span> <b>${data.salaryDetails.allowances}</b></div>
                            <div class="rd-sb-item"><span>In-Hand:</span> <b>${data.salaryDetails.inHand}</b></div>
                        </div>
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">What Does an SI Do?</div>
                    <ul class="rd-list">
                        ${data.responsibilities.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">A Day in the Life</div>
                    <div class="rd-timeline">
                        ${data.dailyWork.map((dw, i) => `
                            <div class="rd-timeline-item">
                                <div class="rd-tl-num">0${i+1}</div>
                                <div class="rd-tl-content">
                                    <strong>${dw.title}</strong>
                                    <p>${dw.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Selection Process</div>
                    <div class="ex-steps">
                        ${data.selection.map((step, i) => `
                            <div class="ex-step">
                                <span class="ex-step-num">0${i+1}</span>
                                <span class="ex-step-name">${step}</span>
                            </div>
                            ${i < data.selection.length - 1 ? '<div class="ex-step-arrow"></div>' : ''}
                        `).join('')}
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Physical Requirements</div>
                    <div class="rd-physical">
                        <div class="rd-phys-box"><strong>Male:</strong> ${data.physical.male}</div>
                        <div class="rd-phys-box"><strong>Female:</strong> ${data.physical.female}</div>
                        <div class="rd-phys-note">${data.physical.note}</div>
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Educational Qualification</div>
                    <p class="rd-text">${data.education}</p>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Skills That Help</div>
                    <div class="ex-chips">
                        ${data.skills.map(s => `<span class="ex-chip">${s}</span>`).join('')}
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Role & Responsibility</div>
                    <p class="rd-text">${data.authority}</p>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Work Life</div>
                    <ul class="rd-list">
                        ${data.workLife.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Career Growth</div>
                    <div class="rd-career-flow">
                        ${data.careerGrowth.map(c => `<span>${c}</span>`).join('<span class="rd-flow-arrow">↓</span>')}
                    </div>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Benefits</div>
                    <ul class="rd-list">
                        ${data.benefits.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Challenges of the Job</div>
                    <ul class="rd-list">
                        ${data.challenges.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">Who is this role suited for?</div>
                    <p class="rd-text">${data.suitableFor}</p>
                </div>

                <div class="ex-section">
                    <div class="ex-section-title">How to Prepare</div>
                    <ul class="rd-list">
                        ${data.howToPrepare.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>

                <div class="rd-summary-card">
                    <h4>SI AT A GLANCE</h4>
                    <div class="rd-sc-row"><span>Role:</span> <strong>${data.summary.role}</strong></div>
                    <div class="rd-sc-row"><span>Department:</span> <strong>${data.summary.department}</strong></div>
                    <div class="rd-sc-row"><span>Job Type:</span> <strong>${data.summary.jobType}</strong></div>
                    <div class="rd-sc-row"><span>Work Nature:</span> <strong>${data.summary.workNature}</strong></div>
                </div>

                <div class="rd-footer">
                    <button class="rd-back-btn" onclick="closeRoleDetail(this)">← Back to ${data.parentCategory}</button>
                </div>
            </div>
        `;

        // Add a smooth fade-out class to current content, then swap
        container.style.opacity = 0;
        setTimeout(() => {
            container.innerHTML = html;
            container.style.opacity = 1;
            // Scroll slightly if needed so the top of the details is visible
            const parentBox = container.closest('.explore-box');
            if (parentBox) {
                const rect = parentBox.getBoundingClientRect();
                if (rect.top < 60) { // accounting for sticky headers if any
                    window.scrollBy({ top: rect.top - 80, behavior: 'smooth' });
                }
            }
        }, 150);
    }
});

// Global function to close detail and restore original HTML
window.closeRoleDetail = function(btn) {
    const container = btn.closest('.explore-content');
    if (container && container.hasAttribute('data-original-html')) {
        const originalHtml = container.getAttribute('data-original-html');
        container.style.opacity = 0;
        setTimeout(() => {
            container.innerHTML = originalHtml;
            container.style.opacity = 1;
        }, 150);
    }
};
