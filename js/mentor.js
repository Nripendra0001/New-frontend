const bookingIdInput = document.getElementById("bookingIdInput");
const nameInput = document.getElementById("nameInput");

const joinBtn = document.getElementById("joinBtn");
const pasteBtn = document.getElementById("pasteBtn");

const copyLinkBtn = document.getElementById("copyLinkBtn");
const openCallBtn = document.getElementById("openCallBtn");

const callLinkText = document.getElementById("callLinkText");

function buildMentorCallLink(bookingId){
  return (
    location.origin +
    "/call.html?bookingId=" +
    encodeURIComponent(bookingId) +
    "&role=mentor"
  );
}

function refreshLink(){
  const id = bookingIdInput.value.trim();
  if(!id){
    callLinkText.textContent = "---";
    return;
  }
  callLinkText.textContent = buildMentorCallLink(id);
}

/* Auto fill from URL */
(function(){
  const params = new URLSearchParams(window.location.search);
  const bk = params.get("bookingId");
  if(bk){
    bookingIdInput.value = bk;
    refreshLink();
  }
})();

bookingIdInput.addEventListener("input", refreshLink);

pasteBtn.addEventListener("click", async ()=>{
  try{
    const text = await navigator.clipboard.readText();
    if(text){
      bookingIdInput.value = text.trim();
      refreshLink();
    }
  }catch{
    alert("Paste not supported. Please paste manually.");
  }
});

copyLinkBtn.addEventListener("click", async ()=>{
  const id = bookingIdInput.value.trim();
  if(!id) return alert("Booking ID required.");

  const link = buildMentorCallLink(id);

  try{
    await navigator.clipboard.writeText(link);
    alert("Mentor Join Link Copied ✅\n\n" + link);
  }catch{
    alert("Copy failed ❌\n\nLink:\n" + link);
  }
});

openCallBtn.addEventListener("click", ()=>{
  const id = bookingIdInput.value.trim();
  if(!id) return alert("Booking ID required.");

  const link = buildMentorCallLink(id);
  window.location.href = link;
});

joinBtn.addEventListener("click", ()=>{
  const id = bookingIdInput.value.trim();
  if(!id) return alert("Booking ID required.");

  // Optional: store mentor name in localStorage (future use)
  const nm = nameInput.value.trim();
  if(nm){
    localStorage.setItem("nripendra_mentor_name", nm);
  }

  const link = buildMentorCallLink(id);
  window.location.href = link;
});
