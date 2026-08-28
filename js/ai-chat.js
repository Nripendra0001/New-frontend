/* ===================================================
   SARKARINEXT AI — Personal Study Assistant
   Upgraded UI + Personalization Layer
   Existing Gemini integration preserved & enhanced.
   No external dependencies. All styles inline.
=================================================== */

(function () {
  const AI_API =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://localhost:3000"
      : "https://api.nripendra.online";

  // Don't init on test/series pages
  if (window.location.pathname.includes("series.html")) return;

  // -------------------------------------------------------
  // STUDENT CONTEXT — collect from existing SarkariAuth data
  // Never fabricate. Only use what's available.
  // -------------------------------------------------------
  function getStudentContext() {
    try {
      const user =
        typeof SarkariAuth !== "undefined" ? SarkariAuth.getUser() : null;

      // Try to read cached dashboard data from localStorage
      let dashData = null;
      try {
        const raw = localStorage.getItem("sn_dashboard_cache");
        if (raw) dashData = JSON.parse(raw);
      } catch (e) {}

      const ctx = {};

      if (user) {
        if (user.name) ctx.userName = user.name.split(" ")[0];
        if (user.targetExam) ctx.exam = user.targetExam;
      }

      if (dashData) {
        const stats = dashData.stats || {};
        if (stats.avgScore != null) ctx.score = stats.avgScore;
        if (stats.overallAccuracy != null) ctx.accuracy = stats.overallAccuracy;

        // Weak topics from dashboard
        if (dashData.weakTopics && dashData.weakTopics.length > 0) {
          ctx.weakTopics = dashData.weakTopics.map(
            (w) => `${w.subject}${w.examType ? " (" + w.examType + ")" : ""}`
          );
        }

        // Recent test info
        if (dashData.recentTests && dashData.recentTests.length > 0) {
          const latest = dashData.recentTests[0];
          if (latest.score != null && latest.maxMarks) {
            ctx.score = latest.score;
          }
          if (latest.accuracy != null) ctx.accuracy = latest.accuracy;
        }
      }

      return ctx;
    } catch (e) {
      return {};
    }
  }

  // -------------------------------------------------------
  // WELCOME MESSAGE — dynamic based on context
  // -------------------------------------------------------
  function buildWelcomeHTML() {
    const ctx = getStudentContext();
    const exam = ctx.exam;
    const name = ctx.userName;

    let greeting = name ? `Hi ${name}! 👋` : "Namaste! 👋";
    let subTitle = exam
      ? `<strong>${exam}</strong> ki taiyari mein help karne ke liye main hoon — <strong>SarkariNext AI</strong>.`
      : "Main hoon <strong>SarkariNext AI</strong> — aapka personal study assistant for government exams.";

    let capabilities =
      "Study plans, concept explanations, mock analysis, daily targets — sab kuch ek jagah.";

    if (exam && ctx.score != null) {
      capabilities = `Aapka avg. score <strong>${ctx.score}</strong> hai. Milke improve karte hain!`;
    } else if (exam) {
      capabilities = `Aaj kya padhna hai, weak topics, study plan — sab main handle karta hoon.`;
    }

    return `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="width:36px;height:36px;background:linear-gradient(135deg,#ff9900,#ffb84d);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🎯</div>
        <div>
          <div style="font-weight:700;font-size:15px;color:#111;">${greeting}</div>
          <div style="font-size:12px;color:#888;margin-top:1px;">SarkariNext AI · Personal Study Assistant</div>
        </div>
      </div>
      <p style="margin:0 0 6px;font-size:13px;line-height:1.6;color:#444;">${subTitle}</p>
      <p style="margin:0;font-size:13px;line-height:1.6;color:#555;">${capabilities}</p>
    `;
  }

  // -------------------------------------------------------
  // SUGGESTION CHIPS DATA
  // -------------------------------------------------------
  const SUGGESTIONS = [
    { icon: "📚", label: "Study Plan", prompt: "Mere exam ke liye ek study plan banao" },
    { icon: "🎯", label: "Weak Topics", prompt: "Mere weak topics par kya focus karun?" },
    { icon: "📝", label: "Mock Analysis", prompt: "Mera mock score improve kaise hoga?" },
    { icon: "📅", label: "Kal ka Plan", prompt: "Kal kya padhna chahiye?" },
    { icon: "🧠", label: "Concept Help", prompt: "Percentage mujhe simple language mein samjhao" },
    { icon: "✍️", label: "Practice", prompt: "Mujhe Maths ke 5 practice questions do" },
  ];

  // -------------------------------------------------------
  // MARKDOWN-LITE RENDERER
  // Convert Gemini markdown to clean HTML for display
  // -------------------------------------------------------
  function renderMarkdown(text) {
    if (!text) return "";
    let html = text
      // Escape HTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // Headers ## or ###
      .replace(/^###\s+(.+)$/gm, '<div style="font-weight:700;font-size:13px;color:#ff9900;margin:10px 0 4px;"># $1</div>')
      .replace(/^##\s+(.+)$/gm, '<div style="font-weight:700;font-size:14px;color:#333;margin:12px 0 4px;">$1</div>')
      .replace(/^#\s+(.+)$/gm, '<div style="font-weight:700;font-size:15px;color:#111;margin:12px 0 6px;">$1</div>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // Bullet points
      .replace(/^[-*]\s+(.+)$/gm, '<div style="display:flex;gap:6px;margin:3px 0;"><span style="color:#ff9900;flex-shrink:0;">•</span><span>$1</span></div>')
      // Numbered lists
      .replace(/^(\d+)\.\s+(.+)$/gm, '<div style="display:flex;gap:6px;margin:3px 0;"><span style="color:#ff9900;font-weight:700;flex-shrink:0;min-width:16px;">$1.</span><span>$2</span></div>')
      // Line breaks
      .replace(/\n\n/g, '<div style="height:8px;"></div>')
      .replace(/\n/g, "<br>");

    return html;
  }

  // -------------------------------------------------------
  // FLOATING BUTTON
  // -------------------------------------------------------
  const fab = document.createElement("button");
  fab.id = "sn-ai-fab";
  fab.setAttribute("aria-label", "Ask SarkariNext AI");
  fab.title = "Ask SarkariNext AI — Your Personal Study Assistant";
  fab.innerHTML = `
    <span id="sn-fab-icon" style="display:flex;align-items:center;justify-content:center;gap:8px;">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>
      <span id="sn-fab-text" style="font-size:13px;font-weight:700;white-space:nowrap;letter-spacing:0.3px;">Ask SarkariNext AI</span>
    </span>`;
  Object.assign(fab.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    height: "52px",
    padding: "0 20px",
    borderRadius: "26px",
    background: "linear-gradient(135deg, #ff9900 0%, #ffb84d 100%)",
    color: "#111",
    border: "none",
    cursor: "pointer",
    zIndex: "9999",
    boxShadow: "0 8px 32px rgba(255,153,0,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    fontFamily: "'Poppins', sans-serif",
  });

  fab.onmouseenter = () => {
    fab.style.transform = "translateY(-3px) scale(1.03)";
    fab.style.boxShadow = "0 12px 40px rgba(255,153,0,0.5)";
  };
  fab.onmouseleave = () => {
    fab.style.transform = "translateY(0) scale(1)";
    fab.style.boxShadow = "0 8px 32px rgba(255,153,0,0.35)";
  };

  // Collapse to icon-only on small screens
  function updateFabLayout() {
    const fabText = document.getElementById("sn-fab-text");
    if (!fabText) return;
    if (window.innerWidth <= 480) {
      fabText.style.display = "none";
      fab.style.width = "52px";
      fab.style.padding = "0";
      fab.style.borderRadius = "50%";
    } else {
      fabText.style.display = "inline";
      fab.style.width = "auto";
      fab.style.padding = "0 20px";
      fab.style.borderRadius = "26px";
    }
  }
  window.addEventListener("resize", updateFabLayout);

  // -------------------------------------------------------
  // CHAT PANEL
  // -------------------------------------------------------
  const panel = document.createElement("div");
  panel.id = "sn-ai-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "SarkariNext AI Study Assistant");
  Object.assign(panel.style, {
    position: "fixed",
    bottom: "90px",
    right: "24px",
    width: "390px",
    maxWidth: "calc(100vw - 32px)",
    height: "560px",
    maxHeight: "80vh",
    background: "#fff",
    borderRadius: "24px",
    boxShadow: "0 24px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04)",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: "9999",
    fontFamily: "'Poppins', sans-serif",
  });

  // -------------------------------------------------------
  // HEADER — Premium AI Identity
  // -------------------------------------------------------
  const header = document.createElement("div");
  Object.assign(header.style, {
    padding: "14px 16px",
    background: "#131921",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: "0",
  });
  header.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;">
      <!-- AI Avatar -->
      <div style="position:relative;flex-shrink:0;">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,#ff9900 0%,#ffb84d 100%);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 16px rgba(255,153,0,0.4);">🎯</div>
        <div style="position:absolute;bottom:-2px;right:-2px;width:12px;height:12px;background:#22c55e;border-radius:50%;border:2px solid #131921;" title="SarkariNext AI is online"></div>
      </div>
      <!-- Identity -->
      <div>
        <div style="font-size:14px;font-weight:800;color:#ff9900;letter-spacing:0.5px;line-height:1.2;">
          SarkariNext <span style="color:#fff;">AI</span>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.55);font-weight:600;text-transform:uppercase;letter-spacing:0.8px;margin-top:1px;">
          Personal Study Assistant
        </div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <!-- Clear chat -->
      <button id="sn-ai-clear" title="Clear conversation" aria-label="Clear conversation" style="background:rgba(255,255,255,0.08);border:none;color:rgba(255,255,255,0.5);font-size:11px;cursor:pointer;width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:0.2s;font-family:inherit;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>
      </button>
    </div>
  `;

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "✕";
  closeBtn.setAttribute("aria-label", "Close SarkariNext AI");
  Object.assign(closeBtn.style, {
    background: "rgba(255,255,255,0.1)",
    border: "none",
    color: "rgba(255,255,255,0.8)",
    fontSize: "14px",
    cursor: "pointer",
    width: "28px",
    height: "28px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.2s",
    flexShrink: "0",
    marginLeft: "4px",
    fontFamily: "inherit",
  });
  closeBtn.onmouseenter = () => { closeBtn.style.background = "rgba(255,255,255,0.2)"; };
  closeBtn.onmouseleave = () => { closeBtn.style.background = "rgba(255,255,255,0.1)"; };
  closeBtn.onclick = () => { panel.style.display = "none"; updateFabState(false); };

  const headerRight = header.querySelector("div[style*='display:flex;align-items:center;gap:8px']");
  headerRight.appendChild(closeBtn);

  // -------------------------------------------------------
  // MESSAGES AREA
  // -------------------------------------------------------
  const msgs = document.createElement("div");
  msgs.id = "sn-ai-msgs";
  Object.assign(msgs.style, {
    flex: "1",
    overflowY: "auto",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "#f6f7f9",
  });

  // -------------------------------------------------------
  // WELCOME CARD
  // -------------------------------------------------------
  const welcomeCard = document.createElement("div");
  welcomeCard.id = "sn-ai-welcome";
  Object.assign(welcomeCard.style, {
    background: "white",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: "16px",
    padding: "16px",
    fontSize: "13px",
    color: "#444",
    lineHeight: "1.7",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  });
  welcomeCard.innerHTML = buildWelcomeHTML();

  // -------------------------------------------------------
  // SUGGESTION CHIPS CONTAINER
  // -------------------------------------------------------
  const chipsWrap = document.createElement("div");
  chipsWrap.id = "sn-ai-chips";
  Object.assign(chipsWrap.style, {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    padding: "0 0 4px",
  });

  SUGGESTIONS.forEach((s) => {
    const chip = document.createElement("button");
    chip.setAttribute("aria-label", s.prompt);
    chip.innerHTML = `${s.icon} ${s.label}`;
    Object.assign(chip.style, {
      background: "white",
      border: "1.5px solid rgba(255,153,0,0.3)",
      borderRadius: "20px",
      padding: "6px 12px",
      fontSize: "12px",
      color: "#555",
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: "600",
      transition: "all 0.2s",
      lineHeight: "1.4",
    });
    chip.onmouseenter = () => {
      chip.style.background = "#fff8ec";
      chip.style.borderColor = "#ff9900";
      chip.style.color = "#111";
    };
    chip.onmouseleave = () => {
      chip.style.background = "white";
      chip.style.borderColor = "rgba(255,153,0,0.3)";
      chip.style.color = "#555";
    };
    chip.onclick = () => {
      input.value = s.prompt;
      send();
      // Hide chips after use
      chipsWrap.style.display = "none";
    };
    chipsWrap.appendChild(chip);
  });

  msgs.appendChild(welcomeCard);
  msgs.appendChild(chipsWrap);

  // -------------------------------------------------------
  // INPUT AREA
  // -------------------------------------------------------
  const inputArea = document.createElement("div");
  Object.assign(inputArea.style, {
    padding: "12px 16px",
    background: "white",
    borderTop: "1px solid rgba(0,0,0,0.06)",
    display: "flex",
    gap: "10px",
    flexShrink: "0",
    alignItems: "center",
  });

  const input = document.createElement("input");
  input.type = "text";
  input.id = "sn-ai-input";
  input.placeholder = "Apna sawaal puchein...";
  input.setAttribute("aria-label", "Ask SarkariNext AI a question");
  input.autocomplete = "off";
  Object.assign(input.style, {
    flex: "1",
    padding: "11px 14px",
    borderRadius: "12px",
    border: "2px solid #eee",
    background: "#fdfdfd",
    color: "#333",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s",
    fontFamily: "inherit",
    minWidth: "0",
  });
  input.onfocus = () => { input.style.borderColor = "#ff9900"; input.style.background = "#fff"; };
  input.onblur = () => { input.style.borderColor = "#eee"; input.style.background = "#fdfdfd"; };

  const sendBtn = document.createElement("button");
  sendBtn.setAttribute("aria-label", "Send message");
  sendBtn.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>`;
  Object.assign(sendBtn.style, {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #ff9900 0%, #ffb84d 100%)",
    color: "#111",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.2s",
    flexShrink: "0",
    boxShadow: "0 4px 12px rgba(255,153,0,0.3)",
  });
  sendBtn.onmouseenter = () => { sendBtn.style.transform = "scale(1.05)"; sendBtn.style.boxShadow = "0 6px 16px rgba(255,153,0,0.45)"; };
  sendBtn.onmouseleave = () => { sendBtn.style.transform = "scale(1)"; sendBtn.style.boxShadow = "0 4px 12px rgba(255,153,0,0.3)"; };

  inputArea.appendChild(input);
  inputArea.appendChild(sendBtn);

  // -------------------------------------------------------
  // ASSEMBLE PANEL
  // -------------------------------------------------------
  panel.appendChild(header);
  panel.appendChild(msgs);
  panel.appendChild(inputArea);
  document.body.appendChild(panel);
  document.body.appendChild(fab);

  // -------------------------------------------------------
  // FAB STATE MANAGEMENT
  // -------------------------------------------------------
  function updateFabState(isOpen) {
    const fabIcon = document.getElementById("sn-fab-icon");
    if (isOpen) {
      fab.style.background = "#131921";
      fab.style.color = "white";
      if (fabIcon) fabIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
        <span id="sn-fab-text" style="font-size:13px;font-weight:700;">Close</span>`;
    } else {
      fab.style.background = "linear-gradient(135deg, #ff9900 0%, #ffb84d 100%)";
      fab.style.color = "#111";
      if (fabIcon) fabIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1" fill="currentColor"/>
          <circle cx="12" cy="10" r="1" fill="currentColor"/>
          <circle cx="15" cy="10" r="1" fill="currentColor"/>
        </svg>
        <span id="sn-fab-text" style="font-size:13px;font-weight:700;white-space:nowrap;letter-spacing:0.3px;">Ask SarkariNext AI</span>`;
    }
    updateFabLayout();
  }

  // -------------------------------------------------------
  // TOGGLE PANEL
  // -------------------------------------------------------
  fab.onclick = () => {
    const isOpen = panel.style.display === "flex";
    panel.style.display = isOpen ? "none" : "flex";
    if (!isOpen) {
      input.focus();
      // Refresh welcome on open if context may have changed
      const wc = document.getElementById("sn-ai-welcome");
      if (wc) wc.innerHTML = buildWelcomeHTML();
    }
    updateFabState(!isOpen);
  };

  // Clear chat button
  setTimeout(() => {
    const clearBtn = document.getElementById("sn-ai-clear");
    if (clearBtn) {
      clearBtn.onmouseenter = () => { clearBtn.style.background = "rgba(255,255,255,0.15)"; clearBtn.style.color = "rgba(255,255,255,0.8)"; };
      clearBtn.onmouseleave = () => { clearBtn.style.background = "rgba(255,255,255,0.08)"; clearBtn.style.color = "rgba(255,255,255,0.5)"; };
      clearBtn.onclick = () => {
        // Remove all messages except welcome card and chips
        Array.from(msgs.children).forEach((el) => {
          if (el.id !== "sn-ai-welcome" && el.id !== "sn-ai-chips") el.remove();
        });
        chatHistory = [];
        const wc = document.getElementById("sn-ai-welcome");
        if (wc) wc.innerHTML = buildWelcomeHTML();
        const chips = document.getElementById("sn-ai-chips");
        if (chips) chips.style.display = "flex";
      };
    }
  }, 100);

  // -------------------------------------------------------
  // CHAT HISTORY (in-memory, for conversation memory)
  // -------------------------------------------------------
  let chatHistory = [];
  const MAX_HISTORY = 10; // keep last 10 messages

  // -------------------------------------------------------
  // ADD MESSAGE BUBBLE
  // -------------------------------------------------------
  function addMsg(text, isUser) {
    // Hide chips after first user message
    if (isUser) {
      const chips = document.getElementById("sn-ai-chips");
      if (chips) chips.style.display = "none";
    }

    const bubble = document.createElement("div");
    Object.assign(bubble.style, {
      maxWidth: "88%",
      padding: "12px 16px",
      borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
      fontSize: "13.5px",
      lineHeight: "1.7",
      wordWrap: "break-word",
      alignSelf: isUser ? "flex-end" : "flex-start",
      background: isUser ? "#131921" : "white",
      color: isUser ? "white" : "#333",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      border: isUser ? "none" : "1px solid rgba(0,0,0,0.05)",
    });

    if (isUser) {
      bubble.textContent = text;
    } else {
      // Render markdown for AI responses
      bubble.innerHTML = renderMarkdown(text);
    }

    msgs.appendChild(bubble);
    msgs.scrollTop = msgs.scrollHeight;

    // Track in history
    chatHistory.push({ role: isUser ? "user" : "ai", text });
    if (chatHistory.length > MAX_HISTORY) chatHistory = chatHistory.slice(-MAX_HISTORY);

    return bubble;
  }

  // -------------------------------------------------------
  // LOADING INDICATOR
  // -------------------------------------------------------
  function addLoading() {
    const bubble = document.createElement("div");
    Object.assign(bubble.style, {
      padding: "12px 16px",
      borderRadius: "18px 18px 18px 4px",
      fontSize: "13px",
      background: "white",
      color: "#ff9900",
      fontWeight: "700",
      alignSelf: "flex-start",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      border: "1px solid rgba(255,153,0,0.15)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    });
    bubble.id = "sn-ai-loading";
    bubble.innerHTML = `
      <div style="display:flex;gap:4px;align-items:center;">
        <div class="sn-dot" style="width:7px;height:7px;border-radius:50%;background:#ff9900;animation:snDot 1.2s infinite;"></div>
        <div class="sn-dot" style="width:7px;height:7px;border-radius:50%;background:#ff9900;animation:snDot 1.2s 0.2s infinite;"></div>
        <div class="sn-dot" style="width:7px;height:7px;border-radius:50%;background:#ff9900;animation:snDot 1.2s 0.4s infinite;"></div>
      </div>
      <span style="font-size:12px;color:#888;font-weight:600;">SarkariNext AI is thinking...</span>`;

    // Inject dot animation if not present
    if (!document.getElementById("sn-dot-style")) {
      const style = document.createElement("style");
      style.id = "sn-dot-style";
      style.textContent = `
        @keyframes snDot {
          0%,80%,100%{opacity:0.2;transform:scale(0.7);}
          40%{opacity:1;transform:scale(1);}
        }`;
      document.head.appendChild(style);
    }

    msgs.appendChild(bubble);
    msgs.scrollTop = msgs.scrollHeight;
    return bubble;
  }

  // -------------------------------------------------------
  // SEND MESSAGE
  // -------------------------------------------------------
  async function send() {
    const text = input.value.trim();
    if (!text) return;

    addMsg(text, true);
    input.value = "";
    input.disabled = true;
    sendBtn.disabled = true;
    sendBtn.style.opacity = "0.5";

    const loader = addLoading();

    try {
      // Build student context from available data
      const ctx = getStudentContext();

      // Send context + recent history for conversation memory
      const res = await fetch(AI_API + "/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          context: Object.keys(ctx).length > 0 ? ctx : undefined,
          history: chatHistory.slice(-6), // last 6 for token efficiency
        }),
      });

      const data = await res.json();
      loader.remove();

      if (data.reply) {
        addMsg(data.reply, false);
      } else {
        addMsg("SarkariNext AI se response nahi mila. Dobara try karo.", false);
      }
    } catch (err) {
      loader.remove();
      addMsg(
        "**SarkariNext AI abhi unavailable hai.**\n\nInternet connection check karo aur thodi der baad try karo.",
        false
      );
    }

    input.disabled = false;
    sendBtn.disabled = false;
    sendBtn.style.opacity = "1";
    input.focus();
  }

  sendBtn.onclick = send;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) send();
  });

  // -------------------------------------------------------
  // INIT — run layout adjustments on load
  // -------------------------------------------------------
  updateFabLayout();
})();
