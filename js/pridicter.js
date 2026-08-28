
// Rank Predictor – Student Details
console.log("Predictor JS Loaded v3");

// API Base (same as auth.js)
const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:3000"
  : "https://api.nripendra.online";

// Check for payment verification or auto-pay on load
document.addEventListener("DOMContentLoaded", async () => {
    console.log("Predictor DOMContentLoaded");
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const orderId = urlParams.get("order_id");
        const autoPay = urlParams.get("autoPay");

        if (orderId && typeof SarkariAuth !== 'undefined' && SarkariAuth.isLoggedIn()) {
            verifyOrder(orderId);
        }

        if (autoPay === "true" && typeof SarkariAuth !== 'undefined' && SarkariAuth.isLoggedIn()) {
            handleAutoPay();
        }
    } catch (err) {
        console.error("Predictor Init Error:", err);
    }
});

async function verifyOrder(orderId) {
    try {
        const res = await fetch(`${API_BASE}/api/payment/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json", ...SarkariAuth.authHeader() },
            body: JSON.stringify({ orderId })
        });
        const data = await res.json();
        if (res.ok) {
            alert("Success! SSC CGL Pro lifetime access activated.");
            const user = SarkariAuth.getUser();
            if (user) { user.isPro = true; localStorage.setItem("sn_user", JSON.stringify(user)); }
            window.history.replaceState({}, document.title, window.location.pathname);
            const saved = JSON.parse(sessionStorage.getItem("pendingProData") || "{}");
            if (saved.name) proceedToTest(saved.name, "ssc_cgl", saved.cat, saved.mode, true);
        }
    } catch (e) { console.error("Verify Error:", e); }
}

function handleAutoPay() {
    const saved = JSON.parse(sessionStorage.getItem("pendingProData") || "{}");
    if (saved.name) {
        if(document.getElementById("stuName")) document.getElementById("stuName").value = saved.name;
        if(document.getElementById("stuExam")) document.getElementById("stuExam").value = "ssc_cgl_pro";
        if(document.getElementById("stuCat")) document.getElementById("stuCat").value = saved.cat || "";
        if(document.getElementById("stuMode")) document.getElementById("stuMode").value = saved.mode || "full";
        
        setTimeout(() => {
            const btn = document.getElementById("startBtn");
            if (btn) {
                console.log("Auto-clicking button...");
                btn.click();
            }
        }, 1000);
    }
}

// ATTACH CLICK LISTENER DIRECTLY
const initBtnListener = () => {
    const btn = document.getElementById("startBtn");
    if (btn) {
        console.log("Attaching click listener to startBtn");
        btn.onclick = function() {
            console.log("Button Clicked!");
            processSubmission();
        };
    } else {
        console.error("startBtn NOT FOUND in DOM");
    }
};

async function processSubmission() {
    try {
        const name = document.getElementById("stuName").value.trim();
        const exam = document.getElementById("stuExam").value;
        const cat = document.getElementById("stuCat").value;
        const mode = document.getElementById("stuMode").value;

        console.log("Processing:", { name, exam, cat, mode });

        if (!name || !exam) { alert("Please fill Name and Exam."); return; }

        if (exam === "ssc_cgl_pro") {
            if (typeof SarkariAuth === 'undefined' || !SarkariAuth.isLoggedIn()) {
                sessionStorage.setItem("pendingProData", JSON.stringify({ name, cat, mode }));
                alert("SSC CGL Pro requires login. Redirecting...");
                window.location.href = `index.html?auth=signup&redirect=${encodeURIComponent(window.location.pathname + "?autoPay=true")}`;
                return;
            }

            const user = SarkariAuth.getUser();
            if (user && user.isPro) {
                proceedToTest(name, "ssc_cgl", cat, mode, true);
                return;
            }

            // Payment Flow
            const btn = document.getElementById("startBtn");
            btn.innerHTML = "Opening Gateway...";
            btn.disabled = true;

            sessionStorage.setItem("pendingProData", JSON.stringify({ name, cat, mode }));

            const res = await fetch(`${API_BASE}/api/payment/create-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json", ...SarkariAuth.authHeader() },
                body: JSON.stringify({
                    amount: 11,
                    customerName: user.name,
                    customerEmail: user.email,
                    customerPhone: user.phone || "9999999999"
                })
            });

            const orderData = await res.json();
            if (!res.ok) throw new Error(orderData.message);

            if (typeof Cashfree === 'undefined') throw new Error("Cashfree SDK not loaded.");

            const cashfree = Cashfree({ mode: orderData.environment || "sandbox" });
            cashfree.checkout({
                paymentSessionId: orderData.data.payment_session_id,
                redirectTarget: "_self", 
            }).then(r => {
                if (r.error) { alert(r.error.message); btn.disabled = false; btn.innerHTML = "Start CBT Paper →"; }
            });
            return;
        }

        proceedToTest(name, exam, cat, mode);
    } catch (err) {
        console.error("Submission Error:", err);
        alert("Error: " + err.message);
        const btn = document.getElementById("startBtn");
        if (btn) { btn.disabled = false; btn.innerHTML = "Start CBT Paper →"; }
    }
}

// Try multiple initialization points
initBtnListener();
document.addEventListener("DOMContentLoaded", initBtnListener);
window.addEventListener("load", initBtnListener);

function proceedToTest(name, exam, cat, mode, isPro = false) {
    console.log("Redirecting to test...");
    const student = { name, exam, cat, mode, isPro, startedAt: Date.now() };
    localStorage.setItem("studentDetails", JSON.stringify(student));
    sessionStorage.removeItem("pendingProData");
    window.location.href = `test.html?exam=${encodeURIComponent(exam)}&mode=${encodeURIComponent(mode)}${isPro ? '&pro=true' : ''}`;
}
