/* =========================================
   SARKARINEXT – SYLLABUS HUB JS (ULTRA DETAILED)
   Author: SarkariNext
========================================= */

/*
  FEATURES:
  ✅ Exam-wise full syllabus
  ✅ Subject-wise topics
  ✅ High weightage + PYQ focus
  ✅ Search by exam/subject/topic
  ✅ Expand/Collapse cards
  ✅ Show more/less for long topics
*/

// Elements
const grid = document.getElementById("syllabusGrid");
const search = document.getElementById("syllabusSearch");
const resetBtn = document.getElementById("resetBtn");

/* ===============================
   SAFE HTML
================================ */
function safeHTML(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ===============================
   DATA (DETAILED)
================================ */
const DATA = [
  {
    exam: "UP Police Constable",
    level: "12th Pass",
    type: "State Exam",
    paper: "Single Written + PET/PST + DV",
    focusLine: "GK + Hindi + Reasoning + Aptitude (Speed + Accuracy)",
    subjects: [
      {
        name: "General Knowledge",
        weightage: "High",
        topics: [
          "Indian History (Ancient, Medieval, Modern)",
          "Freedom Movement (1885–1947)",
          "Indian Polity (Constitution, Fundamental Rights, Parliament)",
          "Geography (India + World, Rivers, Climate, Soil)",
          "Economy (Budget, GDP, Inflation, Banking basics)",
          "Science & Technology (Basic + Current)",
          "Current Affairs (Last 6–8 months)",
          "UP Special GK (Districts, Rivers, Culture, Schemes)"
        ],
        pyqFocus: [
          "UP GK + Polity basic",
          "Static GK facts + Current mix",
          "Schemes, Awards, Sports, Appointments"
        ]
      },
      {
        name: "General Hindi",
        weightage: "Medium-High",
        topics: [
          "संधि (स्वर/व्यंजन)",
          "समास (अव्ययीभाव, तत्पुरुष, द्वंद्व, बहुव्रीहि)",
          "उपसर्ग-प्रत्यय",
          "विलोम-पर्यायवाची",
          "मुहावरे-लोकोक्तियाँ",
          "वाक्य शुद्धि",
          "अशुद्धि सुधार",
          "अलंकार (basic)",
          "अपठित गद्यांश (Comprehension)"
        ],
        pyqFocus: [
          "Grammar rules based questions",
          "Samas + Sandhi repeated"
        ]
      },
      {
        name: "Numerical Ability",
        weightage: "Medium",
        topics: [
          "Number System",
          "Simplification",
          "Percentage",
          "Profit & Loss",
          "Ratio & Proportion",
          "Average",
          "Time & Work",
          "Time, Speed & Distance",
          "Simple Interest + Compound Interest (basic)",
          "Mensuration (2D/3D basic)",
          "Data Interpretation (basic)"
        ],
        pyqFocus: [
          "Arithmetic heavy",
          "Speed calculation + percentage repeated"
        ]
      },
      {
        name: "Reasoning + IQ",
        weightage: "High",
        topics: [
          "Series (Number/Alphabet)",
          "Coding-Decoding",
          "Analogy",
          "Classification",
          "Direction Sense",
          "Blood Relation",
          "Syllogism",
          "Venn Diagram",
          "Ranking",
          "Calendar & Clock",
          "Puzzle (basic)",
          "Non-Verbal Reasoning"
        ],
        pyqFocus: [
          "Coding, Series, Direction repeated",
          "Blood relation + syllogism common"
        ]
      },
      {
        name: "Mental Aptitude",
        weightage: "Medium",
        topics: [
          "Law & Constitution basic awareness",
          "Professional behavior",
          "Logical decision making",
          "Public interest questions",
          "Ethics + integrity (basic)",
          "Social responsibility",
          "Attitude based statements"
        ],
        pyqFocus: [
          "Statement based questions",
          "Situation judgement"
        ]
      }
    ],
    strategy: [
      "पहले Reasoning + Maths (daily) build करो",
      "GK में Static + Current parallel चलाओ",
      "Hindi grammar daily 20 questions",
      "हर हफ्ते 2 mock test + analysis जरूरी"
    ]
  },

  {
    exam: "SSC GD",
    level: "10th Pass",
    type: "All India",
    paper: "CBT + Physical + Medical",
    focusLine: "Easy syllabus but high competition (speed matters)",
    subjects: [
      {
        name: "Reasoning",
        weightage: "High",
        topics: [
          "Analogies",
          "Classification",
          "Series",
          "Coding-Decoding",
          "Blood Relation",
          "Direction",
          "Order & Ranking",
          "Syllogism",
          "Venn Diagram",
          "Mirror/Water Image",
          "Paper Folding",
          "Figure Completion"
        ],
        pyqFocus: [
          "Series + coding highest repeat",
          "Non-verbal daily practice"
        ]
      },
      {
        name: "Maths",
        weightage: "High",
        topics: [
          "Number System",
          "Simplification",
          "Percentage",
          "Ratio",
          "Profit & Loss",
          "SI/CI",
          "Time & Work",
          "Time-Speed",
          "Mensuration",
          "Algebra (basic)",
          "Trigonometry (basic)"
        ],
        pyqFocus: [
          "Arithmetic dominates",
          "Mensuration repeat"
        ]
      },
      {
        name: "GK/GA",
        weightage: "Medium",
        topics: [
          "Current Affairs",
          "Indian History",
          "Polity",
          "Geography",
          "Economy (basic)",
          "General Science (Physics/Chem/Bio basic)",
          "Sports, Awards, Books",
          "Important Days"
        ],
        pyqFocus: [
          "Static GK + Current mix",
          "Science basic direct questions"
        ]
      },
      {
        name: "English/Hindi",
        weightage: "Medium",
        topics: [
          "Synonyms/Antonyms",
          "One Word Substitution",
          "Idioms & Phrases",
          "Error Spotting",
          "Fill in the blanks",
          "Cloze Test (easy)",
          "Basic Grammar"
        ],
        pyqFocus: [
          "Vocabulary repeated",
          "Error spotting common"
        ]
      }
    ],
    strategy: [
      "Maths + Reasoning daily 2–3 hours",
      "GK में daily current affairs short notes",
      "English vocabulary रोज 20 words",
      "Mock test 3/week"
    ]
  },

  {
    exam: "SSC CGL",
    level: "Graduate",
    type: "All India",
    paper: "Tier 1 + Tier 2 (CBT) + DV",
    focusLine: "Tier-2 decides selection (Maths + English + Computer)",
    subjects: [
      {
        name: "Quantitative Aptitude",
        weightage: "Very High",
        topics: [
          "Arithmetic (Percentage, Ratio, SI/CI, Time&Work, Time-Speed, Profit-Loss)",
          "Algebra (Identities, Equations, Inequalities)",
          "Geometry (Lines, Triangles, Circles)",
          "Mensuration (2D/3D)",
          "Trigonometry (Heights & Distances)",
          "Data Interpretation (Tables, Graphs)",
          "Statistics (Mean, Median, Mode)",
          "Probability (basic)"
        ],
        pyqFocus: [
          "Mensuration + Geometry very frequent",
          "DI + arithmetic high scoring"
        ]
      },
      {
        name: "Reasoning",
        weightage: "High",
        topics: [
          "Series",
          "Coding",
          "Puzzle",
          "Syllogism",
          "Venn Diagram",
          "Statement Conclusion",
          "Non-verbal reasoning"
        ],
        pyqFocus: [
          "Puzzle + syllogism repeated"
        ]
      },
      {
        name: "English",
        weightage: "Very High",
        topics: [
          "Reading Comprehension",
          "Cloze Test",
          "Para Jumble",
          "Error Detection",
          "Sentence Improvement",
          "Vocabulary (Synonyms, Antonyms)",
          "Active-Passive",
          "Direct-Indirect"
        ],
        pyqFocus: [
          "RC + Cloze + Error most important"
        ]
      },
      {
        name: "General Awareness",
        weightage: "Medium",
        topics: [
          "History",
          "Polity",
          "Geography",
          "Economy",
          "Science",
          "Current Affairs",
          "Static GK"
        ],
        pyqFocus: [
          "Current + static facts"
        ]
      },
      {
        name: "Computer Knowledge (Tier-2)",
        weightage: "High",
        topics: [
          "Basics of Computer",
          "MS Word/Excel/PowerPoint",
          "Internet & Networking",
          "Cyber security basics",
          "Shortcut keys",
          "Hardware vs Software"
        ],
        pyqFocus: [
          "MS Office + Internet repeated"
        ]
      }
    ],
    strategy: [
      "Tier-2 को main target मानकर पढ़ो",
      "Daily 1 mock + analysis (after base build)",
      "English RC रोज 1",
      "Maths में formula notebook जरूरी"
    ]
  },

  {
    exam: "Railway NTPC",
    level: "12th/Graduate",
    type: "All India",
    paper: "CBT 1 + CBT 2 + Skill/DV + Medical",
    focusLine: "Maths + Reasoning scoring, GA selection maker",
    subjects: [
      {
        name: "Mathematics",
        weightage: "High",
        topics: [
          "Number System",
          "BODMAS",
          "Percentage",
          "Ratio",
          "Profit-Loss",
          "Average",
          "Time & Work",
          "Time-Speed",
          "SI/CI",
          "Mensuration",
          "DI (basic)"
        ],
        pyqFocus: [
          "Arithmetic heavy",
          "Time-work repeated"
        ]
      },
      {
        name: "Reasoning",
        weightage: "High",
        topics: [
          "Series",
          "Coding",
          "Direction",
          "Blood Relation",
          "Puzzle",
          "Syllogism",
          "Venn",
          "Non-verbal"
        ],
        pyqFocus: [
          "Series + coding + puzzle"
        ]
      },
      {
        name: "General Awareness",
        weightage: "Very High",
        topics: [
          "Current Affairs (6–10 months)",
          "History",
          "Polity",
          "Geography",
          "Economy",
          "Science (9–10 level)",
          "Railway GK (basic)",
          "Awards, Sports, Schemes"
        ],
        pyqFocus: [
          "Current Affairs decides rank",
          "Science direct questions"
        ]
      }
    ],
    strategy: [
      "GA को daily priority दो",
      "Maths reasoning speed daily practice",
      "Weekly 2 full mocks"
    ]
  },

  {
    exam: "IBPS PO",
    level: "Graduate",
    type: "Banking",
    paper: "Prelims + Mains + Interview",
    focusLine: "Mains is tough: DI + Reasoning + GA required",
    subjects: [
      {
        name: "Reasoning",
        weightage: "Very High",
        topics: [
          "Seating Arrangement",
          "Puzzles",
          "Syllogism",
          "Inequality",
          "Coding",
          "Blood Relation",
          "Input Output",
          "Logical Reasoning"
        ],
        pyqFocus: [
          "Puzzles + seating dominates"
        ]
      },
      {
        name: "Quantitative Aptitude",
        weightage: "Very High",
        topics: [
          "Data Interpretation (Bar/Line/Caselet)",
          "Simplification/Approximation",
          "Number Series",
          "Arithmetic basics",
          "Quadratic Equation",
          "Probability (basic)"
        ],
        pyqFocus: [
          "DI is king in mains",
          "Simplification scoring"
        ]
      },
      {
        name: "English",
        weightage: "High",
        topics: [
          "Reading Comprehension",
          "Cloze Test",
          "Para Jumble",
          "Error Detection",
          "Vocabulary",
          "Sentence Improvement"
        ],
        pyqFocus: [
          "RC + Cloze most asked"
        ]
      },
      {
        name: "GA + Banking Awareness",
        weightage: "Very High",
        topics: [
          "Current Affairs (last 6 months)",
          "Banking terms",
          "RBI & Monetary policy",
          "Government schemes",
          "Budget highlights",
          "Static GK (banks, HQ, CEO)"
        ],
        pyqFocus: [
          "GA decides final selection"
        ]
      }
    ],
    strategy: [
      "Prelims में speed build करो",
      "Mains में GA + DI daily",
      "Weekly 3 sectional mocks"
    ]
  }
];

/* ===============================
   RENDER CARD
================================ */
function render(list) {
  if (!grid) return;

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="syllabus-card open">
        <h2>No Result Found</h2>
        <p style="opacity:.9;font-size:13px;line-height:1.7">
          Try searching: SSC, Railway, Police, Banking, NDA, Reasoning, Maths...
        </p>
      </div>
    `;
    return;
  }

  list.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "syllabus-card";

    // Build Subjects HTML
    const subjectsHTML = item.subjects
      .map((sub) => {
        return `
          <div class="subBlock">
            <h3>${safeHTML(sub.name)} <span class="subWeight">(${safeHTML(sub.weightage)} Weightage)</span></h3>

            <div class="subCols">
              <div>
                <h4>Topics</h4>
                <ul>
                  ${sub.topics.map((t) => `<li>${safeHTML(t)}</li>`).join("")}
                </ul>
              </div>

              <div>
                <h4>PYQ Focus</h4>
                <ul>
                  ${sub.pyqFocus.map((p) => `<li>${safeHTML(p)}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    // Strategy HTML
    const strategyHTML = (item.strategy || [])
      .map((s) => `<li>${safeHTML(s)}</li>`)
      .join("");

    card.innerHTML = `
      <div class="syllabusCardHead" data-idx="${idx}">
        <div>
          <h2>${safeHTML(item.exam)}</h2>
          <p class="syllabusMini">${safeHTML(item.focusLine || "")}</p>
        </div>

        <div class="syllabusMetaRight">
          <span class="syllabus-pill orange">${safeHTML(item.type)}</span>
          <span class="syllabus-pill">${safeHTML(item.level)}</span>
        </div>
      </div>

      <div class="syllabusCardBody">
        <div class="paperLine">
          <b>Paper Pattern:</b> ${safeHTML(item.paper || "")}
        </div>

        <div class="subjectsWrap">
          ${subjectsHTML}
        </div>

        <div class="strategyBox">
          <h3>Smart Preparation Strategy</h3>
          <ul>
            ${strategyHTML}
          </ul>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  attachToggle();
}

/* ===============================
   EXPAND / COLLAPSE
================================ */
function attachToggle() {
  const heads = document.querySelectorAll(".syllabusCardHead");

  heads.forEach((head) => {
    head.addEventListener("click", () => {
      const card = head.closest(".syllabus-card");
      if (!card) return;

      // Toggle open class
      card.classList.toggle("open");
    });
  });
}

/* ===============================
   FILTER (SEARCH)
================================ */
function filterNow() {
  const q = (search?.value || "").toLowerCase().trim();

  if (!q) {
    render(DATA);
    return;
  }

  const filtered = DATA.filter((exam) => {
    // Search in exam name
    const examName = (exam.exam || "").toLowerCase();
    const type = (exam.type || "").toLowerCase();
    const level = (exam.level || "").toLowerCase();
    const focus = (exam.focusLine || "").toLowerCase();

    // Search inside subjects topics
    const subjectText = (exam.subjects || [])
      .map((s) => {
        return [
          s.name,
          ...(s.topics || []),
          ...(s.pyqFocus || [])
        ].join(" ");
      })
      .join(" ")
      .toLowerCase();

    return (
      examName.includes(q) ||
      type.includes(q) ||
      level.includes(q) ||
      focus.includes(q) ||
      subjectText.includes(q)
    );
  });

  render(filtered);
}

/* ===============================
   INIT
================================ */
if (search) search.addEventListener("input", filterNow);

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    search.value = "";
    render(DATA);
  });
}

render(DATA);
