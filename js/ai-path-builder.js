/**
 * SARKARINEXT - AI EXAM PATH BUILDER
 * AI Backend Integration & Advanced UI Controller
 */

const PATH_STATE = {
  step: 0,
  exam: "",
  stage: "",
  dateOrDuration: "90 days",
  level: "",
  studyHours: 2,
  weeklySchedule: "",
  language: "Hinglish",
  studyPreferences: [],
  subjectStrengths: {},
  mockScore: "",
  plan: null
};

const WIZARD_STEPS = [
  {
    title: "🎯 Select Target Exam",
    render: () => `
      <div class="sn-options-grid" id="optExam">
        <div class="sn-option-card ${PATH_STATE.exam==='SSC CGL'?'selected':''}" data-val="SSC CGL">SSC CGL</div>
        <div class="sn-option-card ${PATH_STATE.exam==='SSC CHSL'?'selected':''}" data-val="SSC CHSL">SSC CHSL</div>
        <div class="sn-option-card ${PATH_STATE.exam==='UP Police'?'selected':''}" data-val="UP Police">UP Police</div>
        <div class="sn-option-card ${PATH_STATE.exam==='Railway NTPC'?'selected':''}" data-val="Railway NTPC">Railway NTPC</div>
        <div class="sn-option-card ${PATH_STATE.exam==='Banking PO'?'selected':''}" data-val="Banking PO">Banking PO</div>
        <div class="sn-option-card ${PATH_STATE.exam==='State PSC'?'selected':''}" data-val="State PSC">State PSC</div>
      </div>
    `,
    validate: () => PATH_STATE.exam !== ""
  },
  {
    title: "📍 Exam Stage (If applicable)",
    render: () => `
      <div class="sn-options-grid" id="optStage">
        <div class="sn-option-card ${PATH_STATE.stage==='Tier 1 / Prelims'?'selected':''}" data-val="Tier 1 / Prelims">Tier 1 / Prelims</div>
        <div class="sn-option-card ${PATH_STATE.stage==='Tier 2 / Mains'?'selected':''}" data-val="Tier 2 / Mains">Tier 2 / Mains</div>
        <div class="sn-option-card ${PATH_STATE.stage==='Both'?'selected':''}" data-val="Both">Comprehensive (Both)</div>
        <div class="sn-option-card ${PATH_STATE.stage==='Not Applicable'?'selected':''}" data-val="Not Applicable">Not Applicable</div>
      </div>
    `,
    validate: () => PATH_STATE.stage !== ""
  },
  {
    title: "📅 Exam Date or Preparation Duration",
    render: () => `
      <div style="margin-bottom: 20px;">
        <label style="display:block;margin-bottom:10px;font-weight:600;">How many days left, or target date?</label>
        <input type="text" id="inpDate" value="${PATH_STATE.dateOrDuration}" placeholder="e.g. 90 days OR 15 Nov 2026" style="padding:10px; border-radius:8px; border:1px solid #ccc; width:100%; max-width:300px; font-size:16px;">
      </div>
    `,
    onNext: () => {
      PATH_STATE.dateOrDuration = document.getElementById('inpDate').value || "90 days";
    },
    validate: () => document.getElementById('inpDate') && document.getElementById('inpDate').value.trim() !== ""
  },
  {
    title: "📊 Your Current Preparation Level",
    render: () => `
      <div class="sn-options-grid" id="optLevel" style="grid-template-columns: 1fr 1fr;">
        <div class="sn-option-card ${PATH_STATE.level==='Beginner'?'selected':''}" data-val="Beginner">
          <strong>🌱 Beginner</strong><p style="font-size:13px; color:#64748b; margin-top:5px;">Starting from zero</p>
        </div>
        <div class="sn-option-card ${PATH_STATE.level==='Intermediate'?'selected':''}" data-val="Intermediate">
          <strong>📚 Intermediate</strong><p style="font-size:13px; color:#64748b; margin-top:5px;">Concepts clear, need practice</p>
        </div>
        <div class="sn-option-card ${PATH_STATE.level==='Advanced'?'selected':''}" data-val="Advanced">
          <strong>🔥 Advanced</strong><p style="font-size:13px; color:#64748b; margin-top:5px;">Syllabus done, want optimization</p>
        </div>
        <div class="sn-option-card ${PATH_STATE.level==='Revision Mode'?'selected':''}" data-val="Revision Mode">
          <strong>🎯 Revision Mode</strong><p style="font-size:13px; color:#64748b; margin-top:5px;">Only Mocks & PYQs</p>
        </div>
      </div>
    `,
    validate: () => PATH_STATE.level !== ""
  },
  {
    title: "⏳ Daily Study Time",
    render: () => `
      <div style="margin-bottom: 20px;">
        <label style="display:block;margin-bottom:10px;font-weight:600;">How many hours can you study daily?</label>
        <div class="sn-options-grid" id="optHours">
          <div class="sn-option-card ${PATH_STATE.studyHours===2?'selected':''}" data-val="2">2 Hours</div>
          <div class="sn-option-card ${PATH_STATE.studyHours===4?'selected':''}" data-val="4">4 Hours</div>
          <div class="sn-option-card ${PATH_STATE.studyHours===6?'selected':''}" data-val="6">6 Hours</div>
          <div class="sn-option-card ${PATH_STATE.studyHours===8?'selected':''}" data-val="8">8+ Hours</div>
        </div>
      </div>
    `,
    validate: () => PATH_STATE.studyHours > 0
  },
  {
    title: "🗓️ Optional Weekly Schedule",
    render: () => `
      <div style="margin-bottom: 20px;">
        <label style="display:block;margin-bottom:10px;font-weight:600;">Any special weekend rules? (Optional)</label>
        <input type="text" id="inpWeekly" value="${PATH_STATE.weeklySchedule}" placeholder="e.g. Free on weekends, or Working Monday-Friday" style="padding:10px; border-radius:8px; border:1px solid #ccc; width:100%; max-width:400px; font-size:16px;">
      </div>
    `,
    onNext: () => {
      PATH_STATE.weeklySchedule = document.getElementById('inpWeekly').value;
    },
    validate: () => true
  },
  {
    title: "🗣️ Preferred Language",
    render: () => `
      <div class="sn-options-grid" id="optLanguage">
        <div class="sn-option-card ${PATH_STATE.language==='Hindi'?'selected':''}" data-val="Hindi">Hindi</div>
        <div class="sn-option-card ${PATH_STATE.language==='English'?'selected':''}" data-val="English">English</div>
        <div class="sn-option-card ${PATH_STATE.language==='Hinglish'?'selected':''}" data-val="Hinglish">Hinglish</div>
        <div class="sn-option-card ${PATH_STATE.language==='Bilingual'?'selected':''}" data-val="Bilingual">Bilingual</div>
      </div>
    `,
    validate: () => PATH_STATE.language !== ""
  },
  {
    title: "📖 Study Preferences",
    render: () => {
      const prefs = ["Video Lectures", "Self Reading", "Practice Centric", "PYQ Heavy", "Mock Tests", "AI Explanations"];
      let html = `<p style="margin-bottom:15px;">Select your preferred learning styles (multiple allowed):</p><div class="sn-options-grid" id="optPrefs">`;
      prefs.forEach(p => {
        let isSel = PATH_STATE.studyPreferences.includes(p) ? 'selected' : '';
        html += `<div class="sn-option-card multi-select ${isSel}" data-val="${p}">${p}</div>`;
      });
      html += `</div>`;
      return html;
    },
    validate: () => true
  },
  {
    title: "🧠 Subject Strength Assessment",
    render: () => {
      let html = `<p style="margin-bottom:15px;">Rate your confidence for standard subjects:</p>`;
      const subs = ["Maths / Quant", "Reasoning", "English", "General Awareness"];
      subs.forEach(sub => {
        let current = PATH_STATE.subjectStrengths[sub] || 'Average';
        html += `
          <div style="margin-bottom:15px; background:#f8fafc; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
            <strong style="color:#0f172a;">${sub}</strong>
            <select onchange="updateSubjectStrength('${sub}', this.value)" style="padding:8px; border-radius:6px; border:1px solid #cbd5e1;">
              <option value="Not Started" ${current==='Not Started'?'selected':''}>⚪ Not Started</option>
              <option value="Weak" ${current==='Weak'?'selected':''}>🔴 Weak</option>
              <option value="Average" ${current==='Average'?'selected':''}>🟡 Average</option>
              <option value="Strong" ${current==='Strong'?'selected':''}>🟢 Strong</option>
            </select>
          </div>
        `;
        PATH_STATE.subjectStrengths[sub] = current;
      });
      return html;
    },
    validate: () => true
  },
  {
    title: "🎯 Optional Mock Score",
    render: () => `
      <div style="margin-bottom: 20px;">
        <label style="display:block;margin-bottom:10px;font-weight:600;">Latest mock score? (Leave blank if none)</label>
        <input type="text" id="inpMock" value="${PATH_STATE.mockScore}" placeholder="e.g. 110/200" style="padding:10px; border-radius:8px; border:1px solid #ccc; width:100%; max-width:300px; font-size:16px;">
      </div>
    `,
    onNext: () => {
      PATH_STATE.mockScore = document.getElementById('inpMock').value;
    },
    validate: () => true
  }
];

window.updateSubjectStrength = function(sub, val) {
  PATH_STATE.subjectStrengths[sub] = val;
};

// --- WIZARD RENDERER ---
function renderWizardStep() {
  const stepData = WIZARD_STEPS[PATH_STATE.step];
  
  const pct = ((PATH_STATE.step) / WIZARD_STEPS.length) * 100;
  document.getElementById('wizardProgressFill').style.width = pct + '%';

  const content = document.getElementById('wizardStepContent');
  content.innerHTML = `
    <div class="sn-step-header">${stepData.title}</div>
    ${stepData.render()}
  `;

  setTimeout(() => {
    document.querySelectorAll('.sn-option-card').forEach(card => {
      card.addEventListener('click', function() {
        const parentId = this.parentElement.id;
        const val = this.getAttribute('data-val');
        
        if (this.classList.contains('multi-select')) {
          this.classList.toggle('selected');
          if (parentId === 'optPrefs') {
            if (PATH_STATE.studyPreferences.includes(val)) {
              PATH_STATE.studyPreferences = PATH_STATE.studyPreferences.filter(p => p !== val);
            } else {
              PATH_STATE.studyPreferences.push(val);
            }
          }
          return;
        }

        // Single select
        document.querySelectorAll(`#${parentId} .sn-option-card`).forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');

        if (parentId === 'optExam') PATH_STATE.exam = val;
        else if (parentId === 'optStage') PATH_STATE.stage = val;
        else if (parentId === 'optHours') PATH_STATE.studyHours = parseInt(val);
        else if (parentId === 'optLevel') PATH_STATE.level = val;
        else if (parentId === 'optLanguage') PATH_STATE.language = val;
      });
    });
  }, 50);

  const btnPrev = document.getElementById('wizardBtnPrev');
  const btnNext = document.getElementById('wizardBtnNext');

  if (PATH_STATE.step === 0) btnPrev.classList.add('hide');
  else btnPrev.classList.remove('hide');

  if (PATH_STATE.step === WIZARD_STEPS.length - 1) {
    btnNext.innerHTML = "🚀 Generate AI Blueprint";
  } else {
    btnNext.innerHTML = "Next →";
  }
}

// --- AI API CALL ---
async function generateAIPlan(isReplan = false, replanReason = "") {
  try {
    const payload = {
      exam: PATH_STATE.exam,
      stage: PATH_STATE.stage,
      dateOrDuration: PATH_STATE.dateOrDuration,
      level: PATH_STATE.level,
      studyHours: PATH_STATE.studyHours,
      weeklySchedule: PATH_STATE.weeklySchedule,
      language: PATH_STATE.language,
      studyPreferences: PATH_STATE.studyPreferences,
      subjectStrengths: PATH_STATE.subjectStrengths,
      mockScore: PATH_STATE.mockScore,
      isReplan: isReplan,
      replanReason: replanReason,
      currentPlan: PATH_STATE.plan
    };

    // Use full URL to handle environments correctly
    let apiUrl = "/api/ask-ai/generate-path";
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
       apiUrl = "http://localhost:3000/api/ask-ai/generate-path";
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Server responded with error");
    }

    const json = await response.json();
    if (json.error) throw new Error(json.error);
    
    PATH_STATE.plan = json;
    renderDashboard();
    
    if(isReplan) {
       addMentorMessage("AI Mentor", "Your plan has been successfully updated based on your request.");
    }
  } catch (error) {
    console.error("AI Generation Failed:", error);
    // Fallback to deterministic logic if AI fails
    generateDeterministicPlanFallback();
    renderDashboard();
    addMentorMessage("System", "AI service is currently busy. A standard deterministic plan was generated.");
  }
}

// --- DETERMINISTIC FALLBACK ---
function generateDeterministicPlanFallback() {
  PATH_STATE.plan = {
    examSnapshot: {
      examName: PATH_STATE.exam,
      stage: PATH_STATE.stage,
      daysRemaining: parseInt(PATH_STATE.dateOrDuration) || 90,
      totalQuestions: 100,
      totalMarks: 200,
      durationMins: 60,
      negativeMarking: "0.5"
    },
    studentProfile: {
      level: PATH_STATE.level,
      dailyHours: PATH_STATE.studyHours,
      weakestSubjects: Object.keys(PATH_STATE.subjectStrengths).filter(k => PATH_STATE.subjectStrengths[k] === 'Weak'),
      strongestSubjects: Object.keys(PATH_STATE.subjectStrengths).filter(k => PATH_STATE.subjectStrengths[k] === 'Strong')
    },
    capacityAnalysis: {
      totalAvailableHours: PATH_STATE.studyHours * 90
    },
    readiness: {
      score: PATH_STATE.level === 'Beginner' ? 20 : 60,
      breakdown: { syllabus: 40, practice: 40, mocks: 20 }
    },
    priorities: [
      { task: "Cover basic syllabus", why: "Foundation is weak", deadline: "End of Month 1", expectedOutcome: "Complete basics" }
    ],
    risks: [
      { risk: "Running out of time", severity: "HIGH", impact: "Can't revise", correctiveAction: "Increase daily hours" }
    ],
    phases: [
      { title: "Foundation", daysRange: "Days 1-30", objective: "Basics", subjects: ["Maths"], expectedOutcome: "Clear concepts" }
    ],
    subjects: [
      { name: "Maths", priority: "High", reason: "Core subject", targetLevel: "Expert", learningHours: 50, practiceHours: 50, pyqTarget: 200, strategyPhases: ["Phase 1"] }
    ],
    monthlyBlueprints: [
      { month: "Month 1", dateRange: "Days 1-30", mainObjective: "Finish basics", subjectTargets: ["Maths"], mockTarget: 2, successCriteria: "Completed syllabus" }
    ],
    weeklyBlueprints: [
      { week: "Week 1", dateRange: "Days 1-7", weeklyObjective: "Start Maths", subjectGoals: ["Arithmetic"], expectedOutcome: "70% accuracy in Arithmetic" }
    ],
    pyqMasterPlan: {
      strategy: "Solve daily 10 PYQs", topicTargets: [{ topic: "Arithmetic", target: 100 }]
    },
    mockTestMasterPlan: {
      strategy: "Weekly mock on Sunday", mocks: [{ mockNumber: "Mock 1", type: "Full", targetScore: "100" }]
    },
    weaknessRepairPlan: [
      { weakness: "Advanced Maths", whyWeak: "No practice", repairStrategy: "Daily 20 questions", successCriteria: "80% accuracy" }
    ],
    final30Days: {
      days30to21: "Mock tests daily", days20to14: "PYQs revision", days13to7: "Formula revision", days6to3: "Light practice", days2to1: "Relax"
    },
    final7Days: [
      { day: "Day -7", strategy: "Full syllabus mock" }
    ],
    examDayPlaybook: {
      timeManagement: "Skip hard questions", sectionStrategy: "Start with GK", checklist: ["Admit Card", "ID"]
    },
    aiRecommendations: [
      "Focus more on practice than reading theory."
    ],
    mission: {
      totalMins: PATH_STATE.studyHours * 60,
      tasks: [
        { title: "Maths Basics", topic: "Percentage", durationMins: 60, details: "Concept and 20 questions" }
      ]
    },
    dailyPlan: [
      { dayNum: 1, dateLabel: "Today", totalMins: PATH_STATE.studyHours * 60, tasks: [
        { topic: "Percentage", durationMins: 60, detail: "Read concepts" }
      ]}
    ]
  };
}

// --- DASHBOARD RENDERER ---
function renderDashboard() {
  document.getElementById('aiWizardContainer').classList.add('hide');
  document.getElementById('aiDashboardContainer').classList.remove('hide');

  const p = PATH_STATE.plan;
  if (!p) return;
  
  // Header
  document.getElementById('dashExamTitle').innerText = p.examSnapshot?.examName || PATH_STATE.exam;
  document.getElementById('dashDaysLeft').innerText = `${p.examSnapshot?.daysRemaining || 90} DAYS LEFT`;
  document.getElementById('dashReadinessScore').innerText = `${p.readiness?.score || 50}/100`;

  // Analysis
  const an = document.getElementById('dashAiAnalysis');
  if(an) an.innerText = `Based on your level (${p.studentProfile?.level}) and capacity, you have a solid runway. Weak areas like ${(p.studentProfile?.weakestSubjects||[]).join(', ')} require immediate focus.`;

  // Priorities & Risks
  const prioList = document.getElementById('dashPriorities');
  if(prioList) prioList.innerHTML = (p.priorities || []).map(pr => `<li>✅ ${pr}</li>`).join('');

  const riskList = document.getElementById('dashRisks');
  if(riskList) riskList.innerHTML = (p.risks || []).map(r => `<li>⚠️ ${r}</li>`).join('');

  // Mission
  const miss = document.getElementById('dashMissionTime');
  if(miss) miss.innerText = `🎯 ${Math.round((p.mission?.totalMins || 120)/60)} Hours Total`;
  
  const tasksDiv = document.getElementById('dashTodayTasks');
  if(tasksDiv) {
    tasksDiv.innerHTML = (p.mission?.tasks || []).map(m => `
      <div class="sn-task-item">
        <input type="checkbox">
        <div class="sn-task-meta">
          <span class="sn-task-title">${m.title || m.topic}</span>
          <span class="sn-task-dur" style="font-size:11px;">${m.details || ''} (${m.durationMins} mins)</span>
        </div>
      </div>
    `).join('');
  }

  // Phases
  const road = document.getElementById('dashRoadmap');
  if(road) {
    road.innerHTML = (p.phases || []).map(ph => `
      <div class="sn-phase">
        <span class="sn-phase-title">${ph.title}</span>
        <span class="sn-phase-desc">${ph.daysRange} • ${ph.objective}</span>
      </div>
    `).join('');
  }

  // Daily Plan (upcoming 3 days)
  const dpDiv = document.getElementById('dashDailyPlan');
  if(dpDiv) {
    let dpHtml = "";
    (p.dailyPlan || []).slice(0, 3).forEach(day => {
      dpHtml += `<div style="margin-bottom:10px; padding:10px; background:#f8fafc; border-radius:6px; border-left:3px solid #3b82f6;">
        <strong style="display:block; margin-bottom:5px;">Day ${day.dayNum} - ${day.dateLabel}</strong>
        <ul style="padding-left:20px; font-size:13px; color:#475569;">
          ${(day.tasks || []).map(t => `<li>${t.topic} (${t.durationMins}m)</li>`).join('')}
        </ul>
      </div>`;
    });
    dpDiv.innerHTML = dpHtml;
  }

  // Snapshot
  const snap = document.getElementById('dashExamSnapshot');
  if(snap) {
    snap.innerHTML = `
      <li><strong>Total Qs:</strong> ${p.examSnapshot?.totalQuestions}</li>
      <li><strong>Total Marks:</strong> ${p.examSnapshot?.totalMarks}</li>
      <li><strong>Duration:</strong> ${p.examSnapshot?.durationMins} mins</li>
      <li><strong>Negative:</strong> ${p.examSnapshot?.negativeMarking}</li>
    `;
  }

  // Capacity
  const cap = document.getElementById('dashCapacity');
  if(cap) {
    const c = p.capacityAnalysis || {};
    cap.innerHTML = `
      <li><strong>Total:</strong> ${c.totalAvailableHours || 0} hrs</li>
      <li><strong>Learning:</strong> ${c.learningHours || 0} hrs</li>
      <li><strong>Practice:</strong> ${c.practiceHours || 0} hrs</li>
      <li><strong>PYQ/Mock:</strong> ${(c.pyqHours || 0) + (c.mockHours || 0)} hrs</li>
      <li><strong>Revision:</strong> ${c.revisionHours || 0} hrs</li>
    `;
  }

  // Subjects
  const subjDiv = document.getElementById('dashSubjectStrategy');
  if(subjDiv) {
    subjDiv.innerHTML = (p.subjects || []).map(s => {
      let fill = s.priority === 'High' ? 90 : s.priority === 'Medium' ? 60 : 30;
      let color = s.priority === 'High' ? '#ef4444' : s.priority === 'Medium' ? '#f59e0b' : '#10b981';
      return `
        <div class="sn-subject-strat" style="margin-bottom:12px;">
          <div class="sn-sub-name" style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span style="font-weight:600; font-size:13px;">${s.name}</span>
            <span style="font-size:11px; color:${color}; font-weight:700;">${s.priority} Priority</span>
          </div>
          <div class="sn-sub-bar-bg" style="width:100%; height:6px; background:#e2e8f0; border-radius:3px; overflow:hidden;">
            <div class="sn-sub-bar-fill" style="width:${fill}%; height:100%; background:${color}"></div>
          </div>
          <p style="font-size:11px; color:#64748b; margin-top:4px;">${s.reason || ''}</p>
        </div>
      `;
    }).join('');
  }
}

function addMentorMessage(sender, text) {
  const chat = document.getElementById('aiMentorChat');
  if(!chat) return;
  const isAI = sender !== "You";
  chat.innerHTML += `<div style="margin-bottom:8px; ${isAI ? 'color:#1e3a8a;' : 'color:#475569; text-align:right;'}">
    <strong>${sender}:</strong> ${text}
  </div>`;
  chat.scrollTop = chat.scrollHeight;
}

// --- EVENTS ---
document.addEventListener('DOMContentLoaded', () => {
  const btnPrev = document.getElementById('wizardBtnPrev');
  const btnNext = document.getElementById('wizardBtnNext');
  
  if(btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (PATH_STATE.step > 0) {
        PATH_STATE.step--;
        renderWizardStep();
      }
    });
  }

  if(btnNext) {
    btnNext.addEventListener('click', () => {
      const stepData = WIZARD_STEPS[PATH_STATE.step];
      if (!stepData.validate()) {
        alert("Please select/enter valid information before proceeding.");
        return;
      }
      if (stepData.onNext) stepData.onNext();

      if (PATH_STATE.step < WIZARD_STEPS.length - 1) {
        PATH_STATE.step++;
        renderWizardStep();
      } else {
        btnNext.innerHTML = "🧠 AI is Building Your Blueprint...";
        btnNext.disabled = true;
        generateAIPlan(false);
      }
    });
  }

  // Dash actions
  document.getElementById('btnBehind')?.addEventListener('click', () => {
    btnBehind.innerHTML = "Processing...";
    generateAIPlan(true, "I missed a few days of study. Adjust my schedule.");
  });

  document.getElementById('btnMoreTime')?.addEventListener('click', () => {
    btnMoreTime.innerHTML = "Processing...";
    generateAIPlan(true, "I have more time today. Give me extra PYQs and practice.");
  });

  // AI Mentor Chat
  document.getElementById('aiMentorSend')?.addEventListener('click', () => {
    const input = document.getElementById('aiMentorInput');
    const text = input.value.trim();
    if(!text) return;
    input.value = "";
    addMentorMessage("You", text);
    
    // Quick replan simulation
    addMentorMessage("AI Mentor", "Thinking and replanning...");
    generateAIPlan(true, text);
  });

  // MULTI-PAGE PDF GENERATOR USING HTML2PDF
  document.getElementById('btnDownloadPdf')?.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
      alert("PDF engine is loading. Please try again in a moment.");
      return;
    }
    
    document.getElementById('btnDownloadPdf').innerText = "Generating 20+ Page A4 PDF...";
    
    setTimeout(() => {
      const p = PATH_STATE.plan;
      if(!p) {
        alert("Plan not ready.");
        document.getElementById('btnDownloadPdf').innerText = "📄 Download A4 PDF";
        return;
      }

      // Create a hidden container for the PDF content
      const pdfContainer = document.createElement('div');
      pdfContainer.style.width = '210mm';
      pdfContainer.style.padding = '20mm';
      pdfContainer.style.backgroundColor = '#ffffff';
      pdfContainer.style.color = '#0f172a';
      pdfContainer.style.fontFamily = 'Inter, sans-serif';

      // CSS for the PDF
      const pdfStyle = `
        <style>
          .pdf-page { page-break-after: always; padding-bottom: 20px; }
          .pdf-header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; margin-bottom: 30px; border-radius: 8px; }
          .pdf-header h1 { margin: 0; font-size: 28px; font-weight: 800; color: #f97316; }
          .pdf-header h2 { margin: 5px 0 0 0; font-size: 20px; font-weight: 600; }
          .pdf-section-title { font-size: 22px; font-weight: 700; color: #1e3a8a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px; margin-bottom: 20px; }
          .pdf-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-bottom: 15px; }
          .pdf-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; }
          .pdf-table th { background: #f1f5f9; text-align: left; padding: 10px; border-bottom: 2px solid #cbd5e1; }
          .pdf-table td { padding: 10px; border-bottom: 1px solid #e2e8f0; }
          .pdf-text { font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 15px; }
          .pdf-task { display: flex; align-items: flex-start; margin-bottom: 10px; }
          .pdf-checkbox { width: 16px; height: 16px; border: 2px solid #94a3b8; border-radius: 3px; margin-right: 10px; margin-top: 3px; flex-shrink:0; }
          .pdf-day-header { background: #e0f2fe; color: #0369a1; padding: 10px 15px; font-weight: 700; font-size: 16px; border-radius: 6px; margin-top: 20px; margin-bottom: 15px; }
        </style>
      `;

      let html = pdfStyle;

      // --- PAGE 1: COVER ---
      html += `
        <div class="pdf-page" style="display:flex; flex-direction:column; justify-content:center; min-height: 250mm;">
          <div class="pdf-header" style="padding: 40px 20px;">
            <h1>SARKARINEXT</h1>
            <h2>AI EXAM PATH BUILDER</h2>
            <p style="margin-top:10px; color:#cbd5e1;">PERSONALIZED EXAM PREPARATION BLUEPRINT</p>
          </div>
          
          <div class="pdf-card" style="font-size: 16px;">
            <table class="pdf-table" style="margin: 0;">
              <tr><td style="font-weight:700; width:40%;">TARGET EXAM</td><td>${p.examSnapshot?.examName} ${p.examSnapshot?.stage}</td></tr>
              <tr><td style="font-weight:700;">DAYS REMAINING</td><td>${p.examSnapshot?.daysRemaining} Days</td></tr>
              <tr><td style="font-weight:700;">DAILY STUDY CAPACITY</td><td>${PATH_STATE.studyHours} Hours</td></tr>
              <tr><td style="font-weight:700;">PREPARATION LEVEL</td><td>${PATH_STATE.level}</td></tr>
            </table>
          </div>
          
          <div style="background:#fff7ed; border:1px solid #fed7aa; padding:20px; border-radius:8px; text-align:center; margin-top:30px;">
            <p style="margin:0; font-size:14px; color:#9a3412; font-weight:600;">PREPARATION READINESS</p>
            <h1 style="margin:10px 0 0 0; color:#ea580c; font-size:36px;">${p.readiness?.score}/100</h1>
          </div>
        </div>
      `;

      // --- PAGE 2: EXECUTIVE SUMMARY & EXAM INTELLIGENCE ---
      html += `<div class="pdf-page">
        <h2 class="pdf-section-title">YOUR EXAM PREPARATION AT A GLANCE</h2>
        <p class="pdf-text"><strong>Target:</strong> ${p.executiveSummary?.target || PATH_STATE.exam}</p>
        <p class="pdf-text"><strong>Total Available Hours:</strong> ${p.executiveSummary?.totalAvailableHours || p.capacityAnalysis?.totalAvailableHours || 0}</p>
        <p class="pdf-text">${p.executiveSummary?.personalizedAnalysis || 'Analysis generated based on your inputs.'}</p>
        
        <h2 class="pdf-section-title">EXAM INTELLIGENCE</h2>
        <div class="pdf-card">
          <p class="pdf-text"><strong>Total Questions:</strong> ${p.examSnapshot?.totalQuestions} | <strong>Total Marks:</strong> ${p.examSnapshot?.totalMarks} | <strong>Duration:</strong> ${p.examSnapshot?.durationMins} mins</p>
          <p class="pdf-text"><strong>Strategic Impact:</strong> ${p.examIntelligence?.strategicImpact || 'Follow the pattern carefully to maximize score.'}</p>
        </div>
        
        <h2 class="pdf-section-title">YOUR PREPARATION PROFILE</h2>
        <div class="pdf-card">
          <p class="pdf-text"><strong>Strong Subjects:</strong> ${(p.studentProfile?.strongestSubjects||[]).join(', ')}</p>
          <p class="pdf-text"><strong>Weak Subjects:</strong> ${(p.studentProfile?.weakestSubjects||[]).join(', ')}</p>
          <p class="pdf-text"><strong>AI Profile Analysis:</strong> ${p.studentProfile?.aiProfileAnalysis || 'Focus heavily on weak areas.'}</p>
        </div>
      </div>`;

      // --- PAGE 3: STRATEGY & ROADMAP ---
      html += `<div class="pdf-page">
        <h2 class="pdf-section-title">CAPACITY & PRIORITY MATRIX</h2>
        <div class="pdf-card">
          <p class="pdf-text"><strong>Learning:</strong> ${p.capacityAnalysis?.learningHours}h | <strong>Practice:</strong> ${p.capacityAnalysis?.practiceHours}h | <strong>PYQs:</strong> ${p.capacityAnalysis?.pyqHours}h | <strong>Revision:</strong> ${p.capacityAnalysis?.revisionHours}h</p>
          <p class="pdf-text"><em>${p.capacityAnalysis?.allocationReason || ''}</em></p>
        </div>
        
        <h3 style="margin-top:20px;">Top 5 Priorities</h3>
        ${(p.priorities||[]).map(pr => `
          <div class="pdf-card"><strong>${pr.task || pr}</strong><br><span style="font-size:13px;color:#64748b;">${pr.why || ''} (Deadline: ${pr.deadline || 'N/A'})</span></div>
        `).join('')}

        <h3 style="margin-top:20px;">Preparation Roadmap (Phases)</h3>
        ${(p.phases||[]).map(ph => `
          <div class="pdf-card">
            <strong style="color:#2563eb;">${ph.title} [${ph.daysRange}]</strong>
            <p class="pdf-text" style="margin-top:5px;">${ph.objective}</p>
          </div>
        `).join('')}
      </div>`;

      // --- PAGE 4: SUBJECT STRATEGY ---
      html += `<div class="pdf-page">
        <h2 class="pdf-section-title">SUBJECT-WISE ACTION PLAN</h2>
        ${(p.subjects||[]).map(s => `
          <div class="pdf-card">
            <h3 style="margin:0 0 10px 0;">${s.name} <span style="font-size:14px; font-weight:normal; color:#ea580c;">(${s.priority} Priority)</span></h3>
            <p class="pdf-text"><strong>Why:</strong> ${s.reason}</p>
            <p class="pdf-text"><strong>Target Level:</strong> ${s.targetLevel}</p>
            <p class="pdf-text"><strong>Time Allocation:</strong> Learning ${s.learningHours}h, Practice ${s.practiceHours}h</p>
          </div>
        `).join('')}
      </div>`;

      // --- PAGE 5: PYQ, MOCK & WEAKNESS REPAIR ---
      html += `<div class="pdf-page">
        <h2 class="pdf-section-title">PYQ & MOCK TEST STRATEGY</h2>
        <div class="pdf-card">
          <h3 style="margin:0 0 10px 0;">PYQ Master Plan</h3>
          <p class="pdf-text">${p.pyqMasterPlan?.strategy || 'Start PYQs immediately after basics.'}</p>
        </div>
        <div class="pdf-card">
          <h3 style="margin:0 0 10px 0;">Mock Test Roadmap</h3>
          <p class="pdf-text">${p.mockTestMasterPlan?.strategy || 'Take mocks weekly and analyze mistakes.'}</p>
        </div>
        
        <h2 class="pdf-section-title">WEAKNESS REPAIR PLAN</h2>
        ${(p.weaknessRepairPlan||[]).map(w => `
          <div class="pdf-card">
            <strong style="color:#dc2626;">${w.weakness}</strong>
            <p class="pdf-text" style="margin-top:5px;"><strong>Strategy:</strong> ${w.repairStrategy}</p>
          </div>
        `).join('')}
      </div>`;
      
      // --- PAGE 6+: WEEKLY / MONTHLY PLANS ---
      if (p.monthlyBlueprints && p.monthlyBlueprints.length > 0) {
        html += `<div class="pdf-page">
          <h2 class="pdf-section-title">MONTHLY BLUEPRINTS</h2>
          ${p.monthlyBlueprints.map(m => `
            <div class="pdf-card">
              <h3 style="margin:0 0 5px 0;">${m.month} (${m.dateRange})</h3>
              <p class="pdf-text"><strong>Objective:</strong> ${m.mainObjective}</p>
              <p class="pdf-text"><strong>Success Criteria:</strong> ${m.successCriteria}</p>
            </div>
          `).join('')}
        </div>`;
      }

      if (p.weeklyBlueprints && p.weeklyBlueprints.length > 0) {
        html += `<div class="pdf-page">
          <h2 class="pdf-section-title">WEEKLY BLUEPRINTS</h2>
          ${p.weeklyBlueprints.map(w => `
            <div class="pdf-card">
              <h3 style="margin:0 0 5px 0;">${w.week} (${w.dateRange})</h3>
              <p class="pdf-text"><strong>Objective:</strong> ${w.weeklyObjective}</p>
            </div>
          `).join('')}
        </div>`;
      }

      // --- PAGE 7+: DAILY BLUEPRINT (First 7 Days) ---
      html += `<div>
        <h2 class="pdf-section-title" style="page-break-before: always;">DAILY ACTION PLAN (NEXT 7 DAYS)</h2>
      `;
      (p.dailyPlan || []).forEach(day => {
        html += `
          <div style="page-break-inside: avoid; margin-bottom:20px;">
            <div class="pdf-day-header">DAY ${day.dayNum} • ${day.dateLabel.toUpperCase()} • ${Math.round(day.totalMins/60)} HRS</div>
        `;
        (day.tasks || []).forEach(task => {
          html += `
            <div class="pdf-task">
              <div class="pdf-checkbox"></div>
              <div>
                <strong style="font-size:15px;">${task.topic} (${task.durationMins}m)</strong>
                <p style="margin:3px 0 0 0; font-size:13px; color:#475569;">${task.detail}</p>
              </div>
            </div>
          `;
        });
        html += `</div>`;
      });
      html += `</div>`;

      // --- PAGE 8: FINAL DAYS & EXAM PLAYBOOK ---
      html += `<div class="pdf-page">
        <h2 class="pdf-section-title">FINAL DAYS & EXAM DAY PLAYBOOK</h2>
        <div class="pdf-card">
          <h3 style="margin:0 0 10px 0;">Final 30 Days Strategy</h3>
          <p class="pdf-text"><strong>30-21:</strong> ${p.final30Days?.days30to21}</p>
          <p class="pdf-text"><strong>20-14:</strong> ${p.final30Days?.days20to14}</p>
          <p class="pdf-text"><strong>13-7:</strong> ${p.final30Days?.days13to7}</p>
          <p class="pdf-text"><strong>6-3:</strong> ${p.final30Days?.days6to3}</p>
          <p class="pdf-text"><strong>2-1:</strong> ${p.final30Days?.days2to1}</p>
        </div>
        
        <div class="pdf-card">
          <h3 style="margin:0 0 10px 0;">Exam Day Strategy</h3>
          <p class="pdf-text"><strong>Time Management:</strong> ${p.examDayPlaybook?.timeManagement}</p>
          <p class="pdf-text"><strong>Section Strategy:</strong> ${p.examDayPlaybook?.sectionStrategy}</p>
        </div>
      </div>`;

      // --- PAGE 9: AI RECOMMENDATIONS & NOTES ---
      html += `<div>
        <h2 class="pdf-section-title">AI MENTOR'S FINAL RECOMMENDATIONS</h2>
        <ul style="font-size:15px; color:#334155; line-height:1.6; padding-left:20px;">
          ${(p.aiRecommendations||[]).map(r => `<li>${r}</li>`).join('')}
        </ul>
        
        <h2 class="pdf-section-title" style="margin-top:50px;">STUDENT NOTES</h2>
        <div style="border: 1px solid #cbd5e1; border-radius:8px; height: 300px;"></div>
      </div>`;

      pdfContainer.innerHTML = html;

      // Generate PDF
      const opt = {
        margin:       15, // 15mm margins
        filename:     `SarkariNext_AI_Exam_Blueprint_${PATH_STATE.exam.replace(/ /g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['css', 'legacy'] }
      };

      html2pdf().set(opt).from(pdfContainer).save().then(() => {
        document.getElementById('btnDownloadPdf').innerText = "📄 Download A4 PDF";
      }).catch(err => {
        console.error("PDF Generation Error", err);
        alert("Failed to generate PDF. Check console.");
        document.getElementById('btnDownloadPdf').innerText = "📄 Download A4 PDF";
      });

    }, 500);
  });

  // Init
  if (document.getElementById('wizardStepContent')) {
    renderWizardStep();
  }
});
