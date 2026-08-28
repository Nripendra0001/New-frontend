// roadmap.js - Multi-Exam Dynamic Roadmap Logic

const multiRoadmapData = {
  upPolice: [
    { 
      id: 1, title: "Eligibility + Physical", desc: "Age limit, Height, Chest, and basic fitness parameters.", status: "upcoming",
      fullDetails: {
        points: [
          "Qualification: 12th Passed from any recognized board.",
          "Age Limit: 18 to 25 years (General). Relaxations for OBC/SC/ST.",
          "Male Physical: Height 168 cm, Chest 79-84 cm.",
          "Female Physical: Height 152 cm, Weight Min 40 kg."
        ],
        tip: "Start mild running (2km daily) along with written prep to stay fit and avoid last-minute injuries."
      }
    },
    { 
      id: 2, title: "Syllabus & Pattern", desc: "Understand subjects: GK, Hindi, Math, Reasoning (300 Marks).", status: "upcoming",
      fullDetails: {
        points: [
          "Total Marks: 300 (150 Questions, 2 marks each).",
          "Negative Marking: 0.5 marks deducted for wrong answers.",
          "Subjects: General Knowledge, General Hindi, Numerical Ability, Mental Aptitude.",
          "Time Duration: 2 Hours (120 Minutes) OMR based."
        ],
        tip: "Reasoning and Hindi carry the maximum weightage. Make them your strongest scoring subjects."
      }
    },
    { 
      id: 3, title: "Daily Strategy", desc: "Build a consistent study routine. Focus on weak areas.", status: "upcoming",
      fullDetails: {
        points: [
          "Divide your 8-hour study schedule: 4 hrs concepts, 2 hrs practice, 2 hrs revision.",
          "Use Pomodoro technique (50 mins study, 10 mins break).",
          "Sunday should be strictly for Full-Length Mock Tests and deep analysis.",
          "Make short notes/formula sheets for quick revision."
        ],
        tip: "Consistency beats motivation. Studying 6 hours daily is better than 12 hours once a week."
      }
    },
    { 
      id: 4, title: "Online Form Filling", desc: "Apply on the official UPPRPB portal with correct documents.", status: "upcoming",
      fullDetails: {
        points: [
          "Keep scanned passport photo (light background) and signature ready.",
          "Ensure your EWS/OBC/SC/ST certificates are issued before the cutoff date.",
          "Double-check spelling of Name and Father's Name against 10th marksheet.",
          "Pay fees and keep a printed copy of the final application form."
        ],
        tip: "Never wait for the last date. Server crashes are very common during UP Police recruitment."
      }
    },
    { 
      id: 5, title: "Admit Card & Written", desc: "Download admit card and clear the OMR-based written exam.", status: "upcoming",
      fullDetails: {
        points: [
          "Admit cards are usually released 7-10 days before the exam.",
          "Practice filling OMR sheets at home to avoid bubbling mistakes.",
          "Attempt easiest sections first (Hindi/GK) to save time for Maths.",
          "Do not blindly guess due to negative marking."
        ],
        tip: "Take 2 black ballpoint pens and reach the center 1 hour early to stay calm."
      }
    },
    { 
      id: 6, title: "Answer Key & Result", desc: "Check official key, raise objections, and wait for cutoff.", status: "upcoming",
      fullDetails: {
        points: [
          "Match your OMR carbon copy with the official answer key.",
          "If a question is wrong, file an objection with valid NCERT proof.",
          "Wait for the revised answer key and normalized score.",
          "Shortlisted candidates are called for DVPST."
        ],
        tip: "Normalization plays a huge role. Accuracy matters more than total attempts."
      }
    },
    { 
      id: 7, title: "Physical Test (PET)", desc: "Running: 4.8km in 25 mins (Male) / 2.4km in 14 mins (Female).", status: "upcoming",
      fullDetails: {
        points: [
          "Male: 4.8 KM running in maximum 25 minutes.",
          "Female: 2.4 KM running in maximum 14 minutes.",
          "It is a qualifying test. No extra marks for running faster.",
          "Practice on the ground, not just treadmills. Use proper running shoes."
        ],
        tip: "Hydrate well and do not stop walking immediately after finishing the run."
      }
    },
    { 
      id: 8, title: "Medical Test", desc: "Detailed medical examination at the district hospital.", status: "upcoming",
      fullDetails: {
        points: [
          "Vision test: 6/6 or 6/9 without glasses. Color blindness is a strict rejection.",
          "Knock knee, flat foot, and varicose veins are checked thoroughly.",
          "General health check: Blood pressure, ECG, and basic blood/urine tests.",
          "Tattoos on the saluting arm are generally not allowed."
        ],
        tip: "Avoid wearing tight shoes/jeans before the medical to prevent temporary marks or swollen veins."
      }
    },
    { 
      id: 9, title: "Document Verification", desc: "Final verification of all academic and caste certificates.", status: "upcoming",
      fullDetails: {
        points: [
          "Carry all original documents along with 2 sets of self-attested photocopies.",
          "10th Marksheet (for DOB), 12th Marksheet, Domicile (Niwas), and Caste certificate.",
          "Character certificate from the last attended institute or gazetted officer.",
          "Aadhar Card / PAN card for ID proof."
        ],
        tip: "Keep digital scanned copies of all your documents backed up on Google Drive."
      }
    },
    { 
      id: 10, title: "Final Merit & Training", desc: "Join the training academy and wear the uniform.", status: "upcoming",
      fullDetails: {
        points: [
          "Final merit list is made strictly based on Written Exam marks (out of 300).",
          "Wait for the official joining letter (JTC / RTC dates).",
          "Report to your allotted training center with necessary gear.",
          "Undergo rigorous 6-month physical and legal training."
        ],
        tip: "Enjoy the proud moment. You have earned the uniform through hard work!"
      }
    }
  ],
  ssc: [
    { 
      id: 1, title: "Eligibility & Posts", desc: "CGL, CHSL, MTS, CPO, Steno criteria.", status: "upcoming",
      fullDetails: {
        points: [
          "MTS: 10th Pass, CHSL: 12th Pass, CGL/CPO: Graduation.",
          "Age Limit: Usually 18 to 32 years (varies by post).",
          "Top Posts: Income Tax Inspector, CBI, MEA Assistant, Auditor."
        ],
        tip: "Target CGL from day one. Preparing for CGL automatically covers CHSL and MTS syllabus."
      }
    },
    { 
      id: 2, title: "Syllabus & Pattern", desc: "Tier 1 & Tier 2 structure.", status: "upcoming",
      fullDetails: {
        points: [
          "Tier-1 (Qualifying): Maths(25), English(25), Reasoning(25), GK(25).",
          "Tier-2 (Merit): Heavy focus on Maths, English, and newly added Computer/Typing.",
          "Negative marking is strict (0.5 in Tier 1)."
        ],
        tip: "Maths and English decide your rank. GK decides your selection."
      }
    },
    { 
      id: 3, title: "Daily Preparation", desc: "Mock tests, vocabulary, and arithmetic.", status: "upcoming",
      fullDetails: {
        points: [
          "Read English newspaper (The Hindu/Indian Express) daily for 45 mins.",
          "Solve at least 50 Arithmetic and Advanced Maths questions daily.",
          "Learn 20 new vocab words (Idioms, OWS) every morning.",
          "Give 1 full mock test every weekend and analyze it for 2 hours."
        ],
        tip: "Previous Year Questions (PYQs) of the last 4 years are the holy grail for SSC."
      }
    },
    { 
      id: 4, title: "Form Filling", desc: "SSC OTR (One Time Registration) & Application.", status: "upcoming",
      fullDetails: {
        points: [
          "Create your profile on the new SSC website (ssc.gov.in) via OTR.",
          "Upload photo with exactly the required dimensions (no spectacles/cap).",
          "Double-check post preferences carefully during CGL form filling."
        ],
        tip: "SSC rejects thousands of forms due to blurry photos. Be very careful."
      }
    },
    { 
      id: 5, title: "Tier 1 Exam", desc: "Clear the qualifying cutoff.", status: "upcoming",
      fullDetails: {
        points: [
          "100 Questions in 60 Minutes. Speed is everything.",
          "Attempt sequence: Reasoning -> GK -> English -> Maths.",
          "Target a safe raw score of 135+ for General category."
        ],
        tip: "Do not get stuck on a hard Maths question. Skip and move forward."
      }
    },
    { 
      id: 6, title: "Final Selection (Tier 2)", desc: "Mains, Typing, and Final Merit.", status: "upcoming",
      fullDetails: {
        points: [
          "Tier 2 is conducted in a single day (Sections I, II, III).",
          "Computer Knowledge Test (CKT) is mandatory. Do not ignore it.",
          "Data Entry Speed Test (DEST) happens on the same day.",
          "Final merit is based ONLY on Tier-2 marks."
        ],
        tip: "Start typing practice 15 mins daily from the beginning of your prep."
      }
    }
  ],
  railway: [
    { 
      id: 1, title: "Eligibility", desc: "NTPC, Group D, ALP, Technician.", status: "upcoming",
      fullDetails: {
        points: [
          "Group D: 10th Pass / ITI.",
          "ALP/Tech: ITI / Diploma / B.Tech.",
          "NTPC: 12th Pass (Clerk) / Graduate (Station Master).",
          "Age limit usually 18-33 years with heavy relaxations."
        ],
        tip: "Railway exams are unpredictable in dates, so patience is key."
      }
    },
    { 
      id: 2, title: "CBT 1", desc: "General Awareness, Maths, Reasoning.", status: "upcoming",
      fullDetails: {
        points: [
          "English is NOT asked in Railway exams.",
          "Heavy focus on Science (Physics, Chemistry, Bio) in GK.",
          "100 Questions, 90 Minutes. 1/3rd Negative Marking."
        ],
        tip: "NCERT Science (Class 9 & 10) is the best source for Railway Science."
      }
    },
    { 
      id: 3, title: "CBT 2", desc: "Advanced level test for merit.", status: "upcoming",
      fullDetails: {
        points: [
          "Questions get tougher and more calculative.",
          "For ALP, Part B is a trade-specific qualifying test.",
          "Marks of CBT 2 determine your final selection."
        ],
        tip: "Accuracy is vital due to the high 1/3rd negative marking."
      }
    },
    { 
      id: 4, title: "Skill / Physical Test", desc: "Typing, Psycho, or PET.", status: "upcoming",
      fullDetails: {
        points: [
          "NTPC (Station Master): CBAT (Psycho Test).",
          "NTPC (Clerk): Typing Test (English 30wpm / Hindi 25wpm).",
          "Group D: Physical Efficiency Test (Carrying weight and running)."
        ],
        tip: "Psycho test requires special battery-test practice. Do not take it lightly."
      }
    },
    { 
      id: 5, title: "Medical & DV", desc: "Strict Railway Medical Standards.", status: "upcoming",
      fullDetails: {
        points: [
          "Railway medical is one of the toughest, especially for ALP (A1 standard).",
          "Lasik surgery is strictly NOT allowed for A1 (ALP) and A2 (Station Master).",
          "Document verification matches your name exactly as per 10th certificate."
        ],
        tip: "Check your eyesight category (A1, B1, C1) before targeting a specific post."
      }
    }
  ],
  banking: [
    { 
      id: 1, title: "Prelims Strategy", desc: "Speed and Accuracy (Maths, Reasoning, English).", status: "upcoming",
      fullDetails: {
        points: [
          "100 Questions in 60 Minutes (Sectional timing: 20 mins each).",
          "Focus on Simplification, Number Series, and Syllogism for quick marks.",
          "Read fast. Reading comprehension takes up most of the English section."
        ],
        tip: "Bank exams are purely a game of speed. You must know what to SKIP."
      }
    },
    { 
      id: 2, title: "Mains Strategy", desc: "Deep analytical and logical questions.", status: "upcoming",
      fullDetails: {
        points: [
          "Heavy focus on Data Interpretation (DI) and complex Puzzles.",
          "General/Financial Awareness is the highest scoring section.",
          "Includes a Descriptive Paper (Essay & Letter) in PO exams."
        ],
        tip: "Read daily financial news (Mint/Business Standard) for current affairs and interviews."
      }
    },
    { 
      id: 3, title: "Interview", desc: "Personality and Banking Knowledge.", status: "upcoming",
      fullDetails: {
        points: [
          "Only for PO / SO scale exams (Not for Clerks).",
          "Dress code: Formal attire.",
          "Topics: KYC norms, Repo Rate, NPA, recent banking mergers, personal background."
        ],
        tip: "Be honest. Saying 'I don't know sir' confidently is better than guessing."
      }
    },
    { 
      id: 4, title: "Final Selection", desc: "Merit list based on Mains + Interview.", status: "upcoming",
      fullDetails: {
        points: [
          "Final ratio is usually 80:20 (Mains : Interview marks).",
          "Provisional allotment is done by IBPS based on bank preferences.",
          "Followed by a quick Language Proficiency Test (LPT) for Clerks."
        ],
        tip: "Fill your bank preferences based on headquarters and regional presence in your state."
      }
    }
  ],
  teaching: [
    { 
      id: 1, title: "Eligibility (B.Ed/TET)", desc: "Basic teaching qualifications.", status: "upcoming",
      fullDetails: {
        points: [
          "PRT: D.El.Ed / BTC. TGT/PGT: B.Ed + Post Graduation.",
          "Must qualify CTET or State TET (UPTET).",
          "CTET Paper 1 for Classes 1-5, Paper 2 for Classes 6-8."
        ],
        tip: "CTET is valid for a lifetime now. Clear it once with good marks."
      }
    },
    { 
      id: 2, title: "Written Exam", desc: "Super TET, DSSSB, KVS.", status: "upcoming",
      fullDetails: {
        points: [
          "Heavy focus on Child Development & Pedagogy (CDP).",
          "Language proficiency (Hindi, English, Sanskrit).",
          "Subject specific knowledge for TGT/PGT."
        ],
        tip: "Pedagogy requires understanding child psychology, not rote learning."
      }
    },
    { 
      id: 3, title: "Interview / Demo", desc: "KVS and private institutions.", status: "upcoming",
      fullDetails: {
        points: [
          "KVS has a strict interview and Demo Teaching round (60 marks).",
          "Prepare a solid lesson plan for a 10-minute demo class.",
          "State exams like Super TET usually do not have interviews."
        ],
        tip: "Your confidence on the whiteboard matters more than your knowledge during the demo."
      }
    },
    { 
      id: 4, title: "Joining", desc: "School allotment and counseling.", status: "upcoming",
      fullDetails: {
        points: [
          "Merit is formed combining academic records (10th, 12th, B.Ed) and written marks.",
          "Counseling sessions are held to choose districts/schools.",
          "Police verification and medical checkup before final joining."
        ],
        tip: "Choose schools in districts that have good connectivity to your hometown."
      }
    }
  ],
  defence: [
    { 
      id: 1, title: "Written Exam", desc: "NDA, CDS, AFCAT, Agniveer.", status: "upcoming",
      fullDetails: {
        points: [
          "NDA: Maths + GAT (After 12th). CDS: IMA, INA, AFA, OTA (After Grad).",
          "UPSC conducts NDA/CDS. Standard is very high.",
          "AFCAT is relatively easier but requires fast calculation and reasoning."
        ],
        tip: "For UPSC Defence exams, reading NCERTs line-by-line is mandatory."
      }
    },
    { 
      id: 2, title: "Physical Test", desc: "Running, Pushups, Squats.", status: "upcoming",
      fullDetails: {
        points: [
          "Strict physical criteria (e.g., 1.6km run under 5:30 mins for Army).",
          "Pull-ups, balancing beam, and 9-feet ditch.",
          "Physical fitness is a way of life for Defence, not just an exam stage."
        ],
        tip: "Do not wait for written results to start running. Start today."
      }
    },
    { 
      id: 3, title: "SSB Interview", desc: "The toughest 5-day interview.", status: "upcoming",
      fullDetails: {
        points: [
          "Day 1: Screening (OIR + PPDT).",
          "Day 2: Psychology Tests (TAT, WAT, SRT).",
          "Day 3 & 4: GTO Tasks (Group discussions, outdoor physical tasks).",
          "Day 5: Conference."
        ],
        tip: "SSB checks your Officer Like Qualities (OLQs). Be a team player, not a lone wolf."
      }
    },
    { 
      id: 4, title: "Medical", desc: "Rigorous armed forces medical.", status: "upcoming",
      fullDetails: {
        points: [
          "Every inch of the body is scanned at military hospitals.",
          "Strict rules for eyesight, flat foot, knock knees, and BMI.",
          "Temporary Rejection (TR) gives you 42 days to fix minor issues (like overweight)."
        ],
        tip: "Get a pre-medical checkup done privately before going to SSB to avoid surprises."
      }
    },
    { 
      id: 5, title: "Final Merit", desc: "Academy Allotment.", status: "upcoming",
      fullDetails: {
        points: [
          "Based on Written + SSB marks.",
          "Top rankers get their preferred service (Army, Navy, Air Force).",
          "Proceed to NDA Khadakwasla, IMA Dehradun, or OTA Chennai."
        ],
        tip: "The training is brutal but it transforms you into an elite officer."
      }
    }
  ]
};

// Global State
let currentExamMode = 'upPolice'; // default
let currentModalIndex = -1;

function initRoadmapDashboard() {
  // Check LocalStorage
  const savedExam = localStorage.getItem('sarkariNext_activeRoadmap');
  if (savedExam && multiRoadmapData[savedExam]) {
    currentExamMode = savedExam;
  }

  // Set Theme
  setRoadmapTheme(currentExamMode);
  
  // Render initially
  renderCinematicRoadmap(currentExamMode);
}

function setRoadmapTheme(examId) {
  const wrapper = document.querySelector('.cinematic-roadmap-wrapper');
  if(!wrapper) return;

  // Remove old themes
  wrapper.className = 'cinematic-roadmap-wrapper';
  wrapper.classList.add(`theme-${examId}`);

  // Update Active Tab UI
  document.querySelectorAll('.roadmap-tab').forEach(tab => {
    tab.classList.remove('active');
    if(tab.dataset.exam === examId) {
      tab.classList.add('active');
    }
  });

  // Update Header text dynamically
  const headerTitle = document.getElementById('roadmapHeaderTitle');
  if(headerTitle) {
    headerTitle.innerText = `${examId.toUpperCase()} Mission Path`;
  }
}

// Called when user clicks a tab
function switchRoadmap(examId) {
  if(examId === currentExamMode) return;
  
  currentExamMode = examId;
  localStorage.setItem('sarkariNext_activeRoadmap', examId);
  
  setRoadmapTheme(examId);

  const container = document.getElementById('missionContainer');
  const path = document.getElementById('animatedPath');
  
  if(path) {
    path.style.transition = 'stroke-dashoffset 0.5s ease-out, stroke 0.5s ease, opacity 0.3s ease';
    path.style.opacity = '0';
  }

  if (container) {
    // Fade out old content
    container.classList.add('fade-out');
    
    setTimeout(() => {
      // Re-render and fade in
      renderCinematicRoadmap(examId);
      container.classList.remove('fade-out');
      
      if(path) {
        path.style.opacity = '1';
      }
    }, 400); // Wait for fade out CSS
  }
}

function renderCinematicRoadmap(examId) {
  const container = document.getElementById('missionContainer');
  if (!container) return;

  container.innerHTML = ''; // Clear

  const steps = multiRoadmapData[examId];

  steps.forEach((step, index) => {
    const node = document.createElement('div');
    node.className = `mission-node ${step.status}`;
    node.id = `node-${index}`;
    
    node.innerHTML = `
      <div class="mission-header">
        <div class="mission-badge">${step.id < 10 ? '0'+step.id : step.id}</div>
        <div class="mission-title">${step.title}</div>
      </div>
      <div class="mission-desc">${step.desc}</div>
    `;

    // Magnetic Hover Effect
    node.addEventListener('mousemove', (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      node.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.02)`;
    });
    node.addEventListener('mouseleave', () => {
      node.style.transform = `translate(0px, 0px) scale(1)`;
    });

    // Click to Expand Modal
    node.addEventListener('click', () => {
      openNodeModal(index, node);
    });

    container.appendChild(node);
  });

  setupRevealObserver();
  
  // Wait for layout to settle, then draw SVG
  setTimeout(drawSvgPath, 100);
}

function setupRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.mission-node').forEach(node => observer.observe(node));
}

function drawSvgPath() {
  const svg = document.getElementById('roadmapSvg');
  const pathLayer = document.getElementById('roadmapPathLayer');
  if (!svg || !pathLayer) return;

  const nodes = document.querySelectorAll('.mission-node');
  if (nodes.length === 0) return;

  const wrapperRect = document.querySelector('.cinematic-roadmap-wrapper').getBoundingClientRect();
  
  let d = '';
  nodes.forEach((node, i) => {
    const rect = node.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - wrapperRect.left;
    const y = rect.top + rect.height / 2 - wrapperRect.top + window.scrollY - document.querySelector('.cinematic-roadmap-wrapper').offsetTop;
    
    if (i === 0) {
      d += `M ${x},${y} `;
    } else {
      const prevRect = nodes[i-1].getBoundingClientRect();
      const prevX = prevRect.left + prevRect.width / 2 - wrapperRect.left;
      const prevY = prevRect.top + prevRect.height / 2 - wrapperRect.top + window.scrollY - document.querySelector('.cinematic-roadmap-wrapper').offsetTop;
      
      if (window.innerWidth <= 768) {
        // Mobile: straight vertical line
        d += `L ${x},${y} `;
      } else {
        // Desktop: S-curve bezier
        const controlY = (y + prevY) / 2;
        d += `C ${prevX},${controlY} ${x},${controlY} ${x},${y} `;
      }
    }
  });

  pathLayer.innerHTML = `
    <path class="roadmap-path" d="${d}"></path>
    <path class="roadmap-path-active" id="animatedPath" d="${d}"></path>
    <path class="roadmap-path-glow" d="${d}"></path>
  `;

  setupScrollAnimation();
}

function setupScrollAnimation() {
  const path = document.getElementById('animatedPath');
  if (!path) return;

  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length; // start hidden

  // Initial draw check
  handlePathScroll(path, length);

  // Attach event (remove old ones if necessary to avoid duplicates, but since path is recreated, it's fine)
  window.addEventListener('scroll', () => handlePathScroll(path, length));
}

function handlePathScroll(path, length) {
  const wrapper = document.querySelector('.cinematic-roadmap-wrapper');
  if(!wrapper) return;
  const rect = wrapper.getBoundingClientRect();
  const scrollPercent = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
  const clamped = Math.max(0, Math.min(1, scrollPercent));
  
  // Draw SVG
  const drawLength = length * clamped;
  path.style.strokeDashoffset = length - drawLength;

  // Update Top Progress Bar
  const progressBar = document.getElementById('roadmapProgressBar');
  if (progressBar) {
    progressBar.style.width = `${clamped * 100}%`;
  }
}

// ------------------------------------------------------------------
// MODAL EXPANSION LOGIC
// ------------------------------------------------------------------

function openNodeModal(index, nodeElement) {
  currentModalIndex = index;
  const activeSteps = multiRoadmapData[currentExamMode];
  const data = activeSteps[index];
  
  if (data.status === 'upcoming') {
    data.status = 'visited';
    nodeElement.classList.remove('upcoming');
    nodeElement.classList.add('visited');
  }

  const overlay = document.getElementById('rmModalOverlay');
  const modal = document.getElementById('rmModalContent');

  if (window.innerWidth > 768) {
    // Desktop: Zoom from origin
    if (nodeElement) {
      const rect = nodeElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      modal.style.transformOrigin = `${centerX}px ${centerY}px`;
    } else {
      modal.style.transformOrigin = `50% 50%`;
    }
  } else {
    // Mobile: Bottom Sheet origin
    modal.style.transformOrigin = `50% 100%`;
  }

  populateModalData(data);

  overlay.classList.remove('hide');
  void overlay.offsetWidth;
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden'; 
}

function populateModalData(data) {
  document.getElementById('rmModalTitle').innerText = data.title;
  
  const listContainer = document.getElementById('rmModalPoints');
  listContainer.innerHTML = '';
  data.fullDetails.points.forEach(point => {
    const li = document.createElement('li');
    li.innerText = point;
    listContainer.appendChild(li);
  });

  document.getElementById('rmModalTip').innerText = data.fullDetails.tip;

  const activeSteps = multiRoadmapData[currentExamMode];

  document.getElementById('rmModalPrevBtn').style.display = currentModalIndex > 0 ? 'inline-block' : 'none';
  const nextBtn = document.getElementById('rmModalNextBtn');
  
  if (currentModalIndex < activeSteps.length - 1) {
    nextBtn.innerText = "Next Mission →";
    nextBtn.onclick = () => swapModalContent(currentModalIndex + 1);
  } else {
    nextBtn.innerText = "Complete Journey 🎉";
    nextBtn.onclick = closeNodeModal;
  }
}

function swapModalContent(newIndex) {
  const contentBody = document.querySelector('.rm-modal-body');
  contentBody.style.opacity = '0';
  
  setTimeout(() => {
    currentModalIndex = newIndex;
    const activeSteps = multiRoadmapData[currentExamMode];
    const data = activeSteps[newIndex];
    
    if (data.status === 'upcoming') {
      data.status = 'visited';
      const node = document.getElementById(`node-${newIndex}`);
      if(node) {
        node.classList.remove('upcoming');
        node.classList.add('visited');
      }
    }

    populateModalData(data);
    contentBody.style.opacity = '1';
  }, 300);
}

function closeNodeModal() {
  const overlay = document.getElementById('rmModalOverlay');
  overlay.classList.remove('visible');
  document.body.style.overflow = 'auto';
  
  setTimeout(() => {
    overlay.classList.add('hide');
    currentModalIndex = -1;
  }, 400); 
}

// Global Cursor Glow Background
document.addEventListener('mousemove', (e) => {
  const wrapper = document.querySelector('.cinematic-roadmap-wrapper');
  if (wrapper && wrapper.contains(e.target)) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    wrapper.style.setProperty('--mouse-x', `${x}%`);
    wrapper.style.setProperty('--mouse-y', `${y}%`);
  }
});

// Keypress handling for ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('rmModalOverlay');
    if (overlay && overlay.classList.contains('visible')) {
      closeNodeModal();
    }
  }
});

// Setup on Resize
window.addEventListener('resize', drawSvgPath);

// Expose globals
window.initCinematicRoadmap = initRoadmapDashboard;
window.switchRoadmap = switchRoadmap;
window.closeNodeModal = closeNodeModal;
