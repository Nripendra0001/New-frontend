// ===============================
// Rank Predictor – Student Details
// ===============================

const form = document.getElementById("studentForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("stuName").value.trim();
  const exam = document.getElementById("stuExam").value;
  const cat = document.getElementById("stuCat").value;
  const mode = document.getElementById("stuMode").value;

  // Basic validation
  if (!name || name.length < 2) {
    alert("Please enter a valid name.");
    return;
  }

  if (!exam) {
    alert("Please select an exam.");
    return;
  }

  const student = {
    name,
    exam,
    cat,
    mode,
    startedAt: Date.now()
  };

  localStorage.setItem("studentDetails", JSON.stringify(student));

  // Open CBT test page
  window.location.href = `test.html?exam=${encodeURIComponent(exam)}`;
});
