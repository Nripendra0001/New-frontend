let testQuestions = [];
let answers = [];
let current = 0;

let timer = null;
let secondsLeft = 0;
let totalSeconds = 0;

function shuffleArray(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startTest(){
  const exam = document.getElementById("exam").value;
  const subject = document.getElementById("subject").value;
  const limit = Number(document.getElementById("limit").value);
  const timeMin = Number(document.getElementById("time").value);

  const bank = QUESTION_BANK[exam] || [];

  if(bank.length === 0){
    alert("No questions found for this exam!");
    return;
  }

  let filtered = bank;
  if(subject !== "all"){
    filtered = bank.filter(q => q.subject === subject);
  }

  if(filtered.length < limit){
    alert(`Not enough questions! Available: ${filtered.length}`);
    return;
  }

  const shuffled = shuffleArray([...filtered]);
  testQuestions = shuffled.slice(0, limit);

  answers = new Array(testQuestions.length).fill(null);
  current = 0;

  // UI
  document.getElementById("setupBox").classList.add("hidden");
  document.getElementById("resultBox").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");

  buildPalette();

  // Timer
  clearInterval(timer);
  if(timeMin > 0){
    secondsLeft = timeMin * 60;
    totalSeconds = secondsLeft;
    document.getElementById("timerBox").classList.remove("hidden");
    startTimer();
  } else {
    document.getElementById("timerBox").classList.add("hidden");
  }

  renderQ();
}

function startTimer(){
  updateTimerUI();
  timer = setInterval(()=>{
    secondsLeft--;
    updateTimerUI();
    if(secondsLeft <= 0){
      clearInterval(timer);
      submitTest();
    }
  }, 1000);
}

function updateTimerUI(){
  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  document.getElementById("timeLeft").innerText = `${m}:${String(s).padStart(2,"0")}`;
}

function renderQ(){
  const q = testQuestions[current];

  document.getElementById("qCount").innerText =
    `Question ${current+1} / ${testQuestions.length}`;

  document.getElementById("questionText").innerText = q.q;

  // Progress
  const percent = ((current+1) / testQuestions.length) * 100;
  document.getElementById("progressFill").style.width = percent + "%";

  // Options
  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  q.options.forEach((opt, idx)=>{
    const div = document.createElement("div");
    div.className = "opt";
    div.innerText = opt;

    if(answers[current] === idx) div.classList.add("selected");

    div.onclick = ()=>{
      answers[current] = idx;
      renderQ();
      updatePalette();
    };

    optionsBox.appendChild(div);
  });

  updatePalette();
}

function nextQ(){
  if(current < testQuestions.length - 1){
    current++;
    renderQ();
  }
}

function prevQ(){
  if(current > 0){
    current--;
    renderQ();
  }
}

function clearAnswer(){
  answers[current] = null;
  renderQ();
  updatePalette();
}

function buildPalette(){
  const palette = document.getElementById("palette");
  palette.innerHTML = "";

  for(let i = 0; i < testQuestions.length; i++){
    const btn = document.createElement("button");
    btn.className = "pbtn";
    btn.innerText = i + 1;
    btn.onclick = ()=>{
      current = i;
      renderQ();
    };
    palette.appendChild(btn);
  }
}

function updatePalette(){
  const buttons = document.querySelectorAll(".pbtn");

  buttons.forEach((b, i)=>{
    b.classList.remove("attempted","current");

    if(i === current) b.classList.add("current");
    else if(answers[i] !== null) b.classList.add("attempted");
  });

  // Meta text
  const attempted = answers.filter(a => a !== null).length;
  document.getElementById("metaText").innerText =
    `Attempted: ${attempted} / ${testQuestions.length}`;
}

function openSubmitPopup(){
  const attempted = answers.filter(a => a !== null).length;
  const notAttempted = testQuestions.length - attempted;

  document.getElementById("popupText").innerText =
    `Attempted: ${attempted}, Not Attempted: ${notAttempted}. Submit करना है?`;

  document.getElementById("submitPopup").classList.remove("hidden");
}

function closeSubmitPopup(){
  document.getElementById("submitPopup").classList.add("hidden");
}

function submitTest(){
  closeSubmitPopup();
  clearInterval(timer);

  let correct = 0;
  let wrong = 0;
  let notAttempted = 0;

  testQuestions.forEach((q, i)=>{
    if(answers[i] === null) notAttempted++;
    else if(answers[i] === q.ans) correct++;
    else wrong++;
  });

  const score = correct;
  const accuracy = ((correct / (correct + wrong || 1)) * 100).toFixed(2);

  // time taken
  let timeTaken = "No Timer";
  if(totalSeconds > 0){
    const used = totalSeconds - secondsLeft;
    const m = Math.floor(used / 60);
    const s = used % 60;
    timeTaken = `${m}m ${s}s`;
  }

  document.getElementById("quizBox").classList.add("hidden");
  document.getElementById("resultBox").classList.remove("hidden");

  document.getElementById("scoreMain").innerText = `${score}/${testQuestions.length}`;
  document.getElementById("correctMain").innerText = correct;
  document.getElementById("wrongMain").innerText = wrong;
  document.getElementById("accuracyMain").innerText = accuracy + "%";

  document.getElementById("resultText").innerHTML = `
    <b>Not Attempted:</b> ${notAttempted}<br/>
    <b>Time Taken:</b> ${timeTaken}<br/>
    <b>Tip:</b> रोज़ 1 mock + 1 revision से selection fix हो जाता है 
  `;
}

function restart(){
  document.getElementById("resultBox").classList.add("hidden");
  document.getElementById("setupBox").classList.remove("hidden");
}
