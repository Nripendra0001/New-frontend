/* =========================================================
   SARKARINEXT – JOB SYSTEM (FINAL FULL DETAIL)
   ✅ latest_job.html -> list
   ✅ view.html       -> full details
========================================================= */

const data = [
  {
    id: 1,
    title: "UP Police Constable भर्ती 2026",
    state: "Uttar Pradesh",
    org: "UPPRPB",
    posts: "30000+ (Expected)",
    jobType: "Police भर्ती",
    postDate: "08 Feb 2026",
    startDate: "10 Jan 2026",
    lastDate: "10 Feb 2026",
    examDate: "March 2026 (Expected)",
    admitCard: "Before Exam",
    feeGen: "₹400",
    feeScst: "₹400",
    feeFemale: "₹400",
    paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
    ageMin: "18 Years",
    ageMax: "22 Years",
    ageRelax: "As per UP Govt Rules",
    qualification: "10+2 (Intermediate) from recognized board",
    extraReq: "Physical Test Required (PET/PST)",
    selection: "Written Exam → PET/PST → Document Verification → Medical Test",
    salary: "Pay Level-3 (₹21,700 – ₹69,100) + Allowances",
    applyLink: "https://www.upprpb.in/#/auth/register",
    officialSite: "https://uppbpb.gov.in/",
    notification: "https://uppbpb.gov.in/"
  },

  {
    id: 2,
    title: "UP Police SI भर्ती 2026",
    state: "Uttar Pradesh",
    org: "UPPRPB",
    posts: "4500+ (Expected)",
    jobType: "Police भर्ती",
    postDate: "08 Feb 2026",
    startDate: "20 Jan 2026",
    lastDate: "22 Feb 2026",
    examDate: "April 2026 (Expected)",
    admitCard: "Before Exam",
    feeGen: "₹400",
    feeScst: "₹400",
    feeFemale: "₹400",
    paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
    ageMin: "21 Years",
    ageMax: "28 Years",
    ageRelax: "As per UP Govt Rules",
    qualification: "Bachelor Degree in any stream",
    extraReq: "Physical Test Required",
    selection: "Written Exam → PET/PST → DV → Medical",
    salary: "Pay Level-6 (₹35,400 – ₹1,12,400) + Allowances",
    applyLink: "https://uppbpb.gov.in",
    officialSite: "https://uppbpb.gov.in",
    notification: "https://uppbpb.gov.in"
  },
  {
  id: 3,
  title: "UPSSSC Lekhpal भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UPSSSC",
  posts: "8000+ (Expected)",
  jobType: "UPSSSC भर्ती",
  postDate: "08 Feb 2026",
  startDate: "25 Jan 2026",
  lastDate: "28 Feb 2026",
  examDate: "May 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹25 + Processing Fee",
  feeScst: "₹25 + Processing Fee",
  feeFemale: "₹25 + Processing Fee",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "18 Years",
  ageMax: "40 Years",
  ageRelax: "As per UPSSSC Rules",
  qualification: "Bachelor Degree + UPSSSC PET Qualified",
  extraReq: "PET Score Mandatory",
  selection: "PET Score → Mains Exam → DV",
  salary: "Pay Level-3 (₹21,700 – ₹69,100) + Allowances",
  applyLink: "https://upsssc.gov.in",
  officialSite: "https://upsssc.gov.in",
  notification: "https://upsssc.gov.in"
},

{
  id: 4,
  title: "UPSSSC Junior Assistant भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UPSSSC",
  posts: "3500+ (Expected)",
  jobType: "UPSSSC भर्ती",
  postDate: "08 Feb 2026",
  startDate: "28 Jan 2026",
  lastDate: "20 Feb 2026",
  examDate: "April 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹25 + Processing Fee",
  feeScst: "₹25 + Processing Fee",
  feeFemale: "₹25 + Processing Fee",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "18 Years",
  ageMax: "40 Years",
  ageRelax: "As per UPSSSC Rules",
  qualification: "10+2 + Typing (Hindi/English) + PET Qualified",
  extraReq: "Typing Test Required",
  selection: "PET Score → Written Exam → Typing Test → DV",
  salary: "Pay Level-3 (₹21,700 – ₹69,100) + Allowances",
  applyLink: "https://upsssc.gov.in",
  officialSite: "https://upsssc.gov.in",
  notification: "https://upsssc.gov.in"
},

{
  id: 5,
  title: "UP Home Guard भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UP Home Guard Department",
  posts: "15000+ (Expected)",
  jobType: "Home Guard भर्ती",
  postDate: "08 Feb 2026",
  startDate: "05 Feb 2026",
  lastDate: "15 Mar 2026",
  examDate: "April 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹0 (Expected)",
  feeScst: "₹0 (Expected)",
  feeFemale: "₹0 (Expected)",
  paymentMode: "No Fee / Online Mode",
  ageMin: "18 Years",
  ageMax: "45 Years",
  ageRelax: "As per UP Govt Rules",
  qualification: "10th Pass",
  extraReq: "Physical Test Required",
  selection: "Written Exam → PET/PST → DV → Medical",
  salary: "Daily Allowance Based (Govt Norms)",
  applyLink: "https://homeguard.up.gov.in",
  officialSite: "https://homeguard.up.gov.in",
  notification: "https://homeguard.up.gov.in"
},

{
  id: 6,
  title: "UP Forest Guard भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UP Forest Department",
  posts: "2500+ (Expected)",
  jobType: "Forest भर्ती",
  postDate: "08 Feb 2026",
  startDate: "10 Feb 2026",
  lastDate: "25 Feb 2026",
  examDate: "March 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹250",
  feeScst: "₹150",
  feeFemale: "₹150",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "18 Years",
  ageMax: "40 Years",
  ageRelax: "As per UP Govt Rules",
  qualification: "10+2 (Science Preferred)",
  extraReq: "Physical Test Required",
  selection: "Written Exam → PET/PST → DV → Medical",
  salary: "Pay Level-3 (₹21,700 – ₹69,100) + Allowances",
  applyLink: "https://upforest.gov.in",
  officialSite: "https://upforest.gov.in",
  notification: "https://upforest.gov.in"
},

{
  id: 7,
  title: "UP Jail Warder भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UP Prisons Department",
  posts: "4000+ (Expected)",
  jobType: "Prisons भर्ती",
  postDate: "08 Feb 2026",
  startDate: "15 Feb 2026",
  lastDate: "22 Mar 2026",
  examDate: "May 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹400",
  feeScst: "₹400",
  feeFemale: "₹400",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "18 Years",
  ageMax: "25 Years",
  ageRelax: "As per UP Govt Rules",
  qualification: "10+2 (Intermediate)",
  extraReq: "Physical Test Required",
  selection: "Written Exam → PET/PST → DV → Medical",
  salary: "Pay Level-3 (₹21,700 – ₹69,100) + Allowances",
  applyLink: "https://prisons.up.gov.in",
  officialSite: "https://prisons.up.gov.in",
  notification: "https://prisons.up.gov.in"
},

{
  id: 8,
  title: "UP TGT Teacher भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UPSESSB",
  posts: "12000+ (Expected)",
  jobType: "Teaching भर्ती",
  postDate: "08 Feb 2026",
  startDate: "01 Feb 2026",
  lastDate: "12 Mar 2026",
  examDate: "June 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹700",
  feeScst: "₹400",
  feeFemale: "₹400",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "21 Years",
  ageMax: "40 Years",
  ageRelax: "As per UP Govt Rules",
  qualification: "Graduation + B.Ed + TET (If Required)",
  extraReq: "Subject wise eligibility required",
  selection: "Written Exam → DV",
  salary: "Pay Level-7 (₹44,900 – ₹1,42,400) + Allowances",
  applyLink: "https://upsecondaryeducationboard.up.gov.in",
  officialSite: "https://upsecondaryeducationboard.up.gov.in",
  notification: "https://upsecondaryeducationboard.up.gov.in"
},

{
  id: 9,
  title: "UP Primary Teacher भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UP Basic Education Board",
  posts: "15000+ (Expected)",
  jobType: "Teaching भर्ती",
  postDate: "08 Feb 2026",
  startDate: "05 Feb 2026",
  lastDate: "08 Mar 2026",
  examDate: "April 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹0 / ₹200 (Expected)",
  feeScst: "₹0 / ₹200 (Expected)",
  feeFemale: "₹0 / ₹200 (Expected)",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "21 Years",
  ageMax: "40 Years",
  ageRelax: "As per UP Govt Rules",
  qualification: "D.El.Ed / B.Ed + UPTET / CTET",
  extraReq: "TET Qualification Mandatory",
  selection: "Written Exam → DV",
  salary: "Pay Level-6 (₹35,400 – ₹1,12,400) + Allowances",
  applyLink: "https://basiceducation.up.gov.in",
  officialSite: "https://basiceducation.up.gov.in",
  notification: "https://basiceducation.up.gov.in"
},

{
  id: 10,
  title: "UP NHM Staff Nurse भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UP NHM",
  posts: "5000+ (Expected)",
  jobType: "Health भर्ती",
  postDate: "08 Feb 2026",
  startDate: "02 Feb 2026",
  lastDate: "18 Feb 2026",
  examDate: "March 2026 (Expected)",
  admitCard: "Notified Soon",
  feeGen: "₹0 (Expected)",
  feeScst: "₹0 (Expected)",
  feeFemale: "₹0 (Expected)",
  paymentMode: "No Fee / Online Mode",
  ageMin: "18 Years",
  ageMax: "40 Years",
  ageRelax: "As per NHM Rules",
  qualification: "GNM / B.Sc Nursing + Registration",
  extraReq: "Nursing Council Registration Mandatory",
  selection: "Merit List / Written Exam (If Conducted) → DV",
  salary: "₹20,000 – ₹30,000 (Contract Based)",
  applyLink: "https://upnrhm.gov.in",
  officialSite: "https://upnrhm.gov.in",
  notification: "https://upnrhm.gov.in"
},

{
  id: 11,
  title: "UPPCL JE भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UPPCL",
  posts: "2500+ (Expected)",
  jobType: "Technical भर्ती",
  postDate: "08 Feb 2026",
  startDate: "15 Mar 2026",
  lastDate: "12 Apr 2026",
  examDate: "May 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹1180",
  feeScst: "₹826",
  feeFemale: "₹826",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "18 Years",
  ageMax: "40 Years",
  ageRelax: "As per UPPCL Rules",
  qualification: "Diploma / Degree in Electrical Engineering",
  extraReq: "Technical qualification required",
  selection: "CBT Exam → DV",
  salary: "Pay Level-7 (₹44,900 – ₹1,42,400) + Allowances",
  applyLink: "https://uppcl.org",
  officialSite: "https://uppcl.org",
  notification: "https://uppcl.org"
},

{
  id: 12,
  title: "UP Jal Nigam JE भर्ती 2026",
  state: "Uttar Pradesh",
  org: "UP Jal Nigam",
  posts: "1200+ (Expected)",
  jobType: "Technical भर्ती",
  postDate: "08 Feb 2026",
  startDate: "10 Feb 2026",
  lastDate: "08 Mar 2026",
  examDate: "April 2026 (Expected)",
  admitCard: "Before Exam",
  feeGen: "₹1000",
  feeScst: "₹600",
  feeFemale: "₹600",
  paymentMode: "Debit Card / Credit Card / Net Banking / UPI",
  ageMin: "18 Years",
  ageMax: "40 Years",
  ageRelax: "As per UP Jal Nigam Rules",
  qualification: "Diploma / Degree in Civil/Mechanical Engineering",
  extraReq: "Technical qualification required",
  selection: "CBT Exam → DV",
  salary: "Pay Level-7 (₹44,900 – ₹1,42,400) + Allowances",
  applyLink: "https://upjn.org",
  officialSite: "https://upjn.org",
  notification: "https://upjn.org"
},
{
  id: 13,
  title: "SSC CGL भर्ती 2026",
  state: "All India",
  org: "SSC",
  posts: "7500+ (Expected)",
  jobType: "Central Govt",
  postDate: "Upcoming",
  startDate: "June 2026 (Expected)",
  lastDate: "July 2026 (Expected)",
  examDate: "Tier 1: Aug-Sep 2026",
  admitCard: "Before Exam",
  feeGen: "₹100",
  feeScst: "₹0",
  feeFemale: "₹0",
  paymentMode: "Online",
  ageMin: "18 Years",
  ageMax: "32 Years",
  ageRelax: "As per SSC Rules",
  qualification: "Bachelor Degree",
  extraReq: "Post wise eligibility",
  selection: "Tier 1 → Tier 2 → DV",
  salary: "₹25,500 – ₹1,51,100",
  applyLink: "https://ssc.nic.in",
  officialSite: "https://ssc.nic.in",
  notification: "https://ssc.nic.in"
},

{
  id: 14,
  title: "SSC CHSL भर्ती 2026",
  state: "All India",
  org: "SSC",
  posts: "6000+ (Expected)",
  jobType: "Central Govt",
  postDate: "Upcoming",
  startDate: "May 2026 (Expected)",
  lastDate: "June 2026 (Expected)",
  examDate: "July-Aug 2026",
  admitCard: "Before Exam",
  feeGen: "₹100",
  feeScst: "₹0",
  feeFemale: "₹0",
  paymentMode: "Online",
  ageMin: "18 Years",
  ageMax: "27 Years",
  ageRelax: "As per SSC Rules",
  qualification: "10+2",
  extraReq: "Typing Skill",
  selection: "Tier 1 → Tier 2 → Skill Test",
  salary: "₹19,900 – ₹81,100",
  applyLink: "https://ssc.nic.in",
  officialSite: "https://ssc.nic.in",
  notification: "https://ssc.nic.in"
},

{
  id: 15,
  title: "Railway Group D भर्ती 2026",
  state: "All India",
  org: "RRB",
  posts: "1,00,000+ (Expected)",
  jobType: "Railway",
  postDate: "Upcoming",
  startDate: "2026",
  lastDate: "2026",
  examDate: "2026",
  admitCard: "Before Exam",
  feeGen: "₹500",
  feeScst: "₹250",
  feeFemale: "₹250",
  paymentMode: "Online",
  ageMin: "18 Years",
  ageMax: "33 Years",
  ageRelax: "As per RRB Rules",
  qualification: "10th Pass",
  extraReq: "Physical Test",
  selection: "CBT → PET → DV",
  salary: "₹18,000 + Allowances",
  applyLink: "https://www.rrbcdg.gov.in",
  officialSite: "https://indianrailways.gov.in",
  notification: "https://www.rrbcdg.gov.in"
},

{
  id: 16,
  title: "IBPS Clerk भर्ती 2026",
  state: "All India",
  org: "IBPS",
  posts: "6000+ (Expected)",
  jobType: "Banking",
  postDate: "Upcoming",
  startDate: "July 2026",
  lastDate: "Aug 2026",
  examDate: "Pre: Oct 2026",
  admitCard: "Before Exam",
  feeGen: "₹850",
  feeScst: "₹175",
  feeFemale: "₹175",
  paymentMode: "Online",
  ageMin: "20 Years",
  ageMax: "28 Years",
  ageRelax: "As per IBPS Rules",
  qualification: "Bachelor Degree",
  extraReq: "Basic Computer Knowledge",
  selection: "Pre → Mains",
  salary: "₹19,900 – ₹47,920",
  applyLink: "https://www.ibps.in",
  officialSite: "https://www.ibps.in",
  notification: "https://www.ibps.in"
},

{
  id: 17,
  title: "SBI Clerk भर्ती 2026",
  state: "All India",
  org: "SBI",
  posts: "8000+ (Expected)",
  jobType: "Banking",
  postDate: "Upcoming",
  startDate: "Nov 2026",
  lastDate: "Dec 2026",
  examDate: "Jan 2027",
  admitCard: "Before Exam",
  feeGen: "₹750",
  feeScst: "₹0",
  feeFemale: "₹0",
  paymentMode: "Online",
  ageMin: "20 Years",
  ageMax: "28 Years",
  ageRelax: "As per SBI Rules",
  qualification: "Bachelor Degree",
  extraReq: "Computer Knowledge",
  selection: "Pre → Mains",
  salary: "₹19,900 – ₹47,920",
  applyLink: "https://sbi.co.in/web/careers",
  officialSite: "https://sbi.co.in",
  notification: "https://sbi.co.in/web/careers"
},

{
  id: 18,
  title: "Indian Army Agniveer भर्ती 2026",
  state: "All India",
  org: "Indian Army",
  posts: "Multiple",
  jobType: "Defence",
  postDate: "Upcoming",
  startDate: "Feb 2026",
  lastDate: "Mar 2026",
  examDate: "April 2026",
  admitCard: "Before Exam",
  feeGen: "₹250",
  feeScst: "₹250",
  feeFemale: "₹250",
  paymentMode: "Online",
  ageMin: "17.5 Years",
  ageMax: "21 Years",
  ageRelax: "As per Rules",
  qualification: "10th / 12th",
  extraReq: "Physical + Medical",
  selection: "Online Test → Physical → Medical",
  salary: "₹30,000 – ₹40,000",
  applyLink: "https://joinindianarmy.nic.in",
  officialSite: "https://joinindianarmy.nic.in",
  notification: "https://joinindianarmy.nic.in"
},
/* =========================================================
   SARKARINEXT – NEW ACTIVE JOBS (UPDATED FEB 2026)
========================================================= */


  {
    id: 6,
    title: "UPSSSC VDO (Gram Vikas Adhikari) भर्ती 2026",
    state: "Uttar Pradesh",
    org: "UPSSSC",
    posts: "2500+",
    jobType: "UPSSSC",
    postDate: "2026-02-15",
    startDate: "2026-02-20",
    lastDate: "2026-03-20",
    examDate: "2026-06-15",
    admitCard: "Before Exam",
    qualification: "12th Pass + CCC Certificate",
    selection: "Written Exam (CBT) → DV",
    salary: "₹25,500 – ₹81,100",
    applyLink: "https://upsssc.gov.in",
    officialSite: "https://upsssc.gov.in",
    notification: "https://upsssc.gov.in"
  },
  {
    id: 7,
    title: "SSC CHSL (10+2) भर्ती 2026",
    state: "All India",
    org: "SSC",
    posts: "4500+",
    jobType: "Central Govt",
    postDate: "2026-02-10",
    startDate: "2026-02-15",
    lastDate: "2026-03-15",
    examDate: "2026-05-20",
    admitCard: "Before Exam",
    qualification: "10+2 (Intermediate)",
    selection: "Tier-I → Tier-II (Skill Test)",
    salary: "₹19,900 – ₹63,200",
    applyLink: "https://ssc.gov.in",
    officialSite: "https://ssc.gov.in",
    notification: "https://ssc.gov.in"
  },
  {
    id: 8,
    title: "Bihar Police Sub-Inspector (SI) भर्ती 2026",
    state: "Bihar",
    org: "BPSSC",
    posts: "1275",
    jobType: "Police भर्ती",
    postDate: "2026-02-05",
    startDate: "2026-02-12",
    lastDate: "2026-03-12",
    examDate: "2026-05-01",
    admitCard: "April 2026",
    qualification: "Graduate in any stream",
    selection: "Prelims → Mains → PET → Medical",
    salary: "₹35,400 – ₹1,12,400",
    applyLink: "https://bpssc.bih.nic.in",
    officialSite: "https://bpssc.bih.nic.in",
    notification: "https://bpssc.bih.nic.in"
  },
  {
    id: 9,
    title: "ESIC MTS & UDC Recruitment 2026",
    state: "All India",
    org: "ESIC",
    posts: "3500+",
    jobType: "Central Govt",
    postDate: "2026-02-18",
    startDate: "2026-02-22",
    lastDate: "2026-03-25",
    examDate: "2026-06-10",
    admitCard: "June 2026",
    qualification: "10th / Graduate",
    selection: "Phase I → Phase II",
    salary: "₹18,000 – ₹81,100",
    applyLink: "https://www.esic.nic.in",
    officialSite: "https://www.esic.nic.in",
    notification: "https://www.esic.nic.in"
  },
  {
    id: 10,
    title: "Railway RPF Constable भर्ती 2026",
    state: "All India",
    org: "RRB",
    posts: "4200+",
    jobType: "Railway",
    postDate: "2026-02-01",
    startDate: "2026-02-15",
    lastDate: "2026-03-15",
    examDate: "2026-07-12",
    admitCard: "July 2026",
    qualification: "10th Pass",
    selection: "CBT → PET/PMT → DV",
    salary: "₹21,700 + Allowances",
    applyLink: "https://www.rrbcdg.gov.in",
    officialSite: "https://indianrailways.gov.in",
    notification: "https://www.rrbcdg.gov.in"
  },
  /* =========================================================
   SARKARINEXT – LATEST ACTIVE JOBS (UPDATED FEB 2026)
========================================================= */


  {
    id: 11,
    title: "SSC Selection Post Phase XIV 2026",
    state: "All India",
    org: "SSC",
    posts: "2000+",
    jobType: "Central Govt",
    postDate: "2026-02-15",
    startDate: "2026-02-20",
    lastDate: "2026-03-25",
    examDate: "2026-05-10",
    admitCard: "May 2026",
    qualification: "10th / 12th / Graduate",
    selection: "CBT Exam → DV",
    salary: "Level 1 to Level 7",
    applyLink: "https://ssc.gov.in",
    officialSite: "https://ssc.gov.in",
    notification: "https://ssc.gov.in"
  },
  {
    id: 12,
    title: "UPSSSC Junior Assistant भर्ती 2026",
    state: "Uttar Pradesh",
    org: "UPSSSC",
    posts: "3400+",
    jobType: "UPSSSC",
    postDate: "2026-02-18",
    startDate: "2026-02-25",
    lastDate: "2026-03-30",
    examDate: "2026-06-20",
    admitCard: "June 2026",
    qualification: "12th Pass + PET 2025 + Typing",
    selection: "Written → Typing Test → DV",
    salary: "₹21,700 – ₹69,100",
    applyLink: "https://upsssc.gov.in",
    officialSite: "https://upsssc.gov.in",
    notification: "https://upsssc.gov.in"
  },
  {
    id: 13,
    title: "DSSSB PGT & Non-Teaching Posts 2026",
    state: "Delhi",
    org: "DSSSB",
    posts: "1800+",
    jobType: "Delhi Govt",
    postDate: "2026-02-10",
    startDate: "2026-02-15",
    lastDate: "2026-03-15",
    examDate: "2026-05-25",
    admitCard: "May 2026",
    qualification: "Graduate / Post Graduate",
    selection: "One Tier / Two Tier Exam",
    salary: "₹47,600 – ₹1,51,100",
    applyLink: "https://dsssbonline.nic.in",
    officialSite: "https://dsssb.delhi.gov.in",
    notification: "https://dsssbonline.nic.in"
  },
  {
    id: 14,
    title: "Navy B.Tech Entry Scheme 2026",
    state: "All India",
    org: "Indian Navy",
    posts: "35",
    jobType: "Defence",
    postDate: "2026-02-20",
    startDate: "2026-02-22",
    lastDate: "2026-03-10",
    examDate: "SSB Interview",
    admitCard: "March 2026",
    qualification: "10+2 with PCM (70%) + JEE Main",
    selection: "JEE Score → SSB Interview → Medical",
    salary: "₹56,100 (Starting)",
    applyLink: "https://www.joinindiannavy.gov.in",
    officialSite: "https://www.joinindiannavy.gov.in",
    notification: "https://www.joinindiannavy.gov.in"
  },
  {
    id: 15,
    title: "BSSC Inter Level (Phase II) 2026",
    state: "Bihar",
    org: "BSSC",
    posts: "12000+",
    jobType: "State Govt",
    postDate: "2026-01-15",
    startDate: "2026-02-01",
    lastDate: "2026-03-05",
    examDate: "2026-04-15",
    admitCard: "April 2026",
    qualification: "10+2 Pass",
    selection: "Prelims → Mains → Typing → DV",
    salary: "₹19,900 – ₹63,200",
    applyLink: "https://bssc.bihar.gov.in",
    officialSite: "https://bssc.bihar.gov.in",
    notification: "https://onlinebssc.com"
  },
  {
    id: 16,
    title: "CSIR CASE SO/ASO Recruitment 2026",
    state: "All India",
    org: "CSIR",
    posts: "444",
    jobType: "Central Govt",
    postDate: "2026-02-05",
    startDate: "2026-02-10",
    lastDate: "2026-03-12",
    examDate: "2026-05-02",
    admitCard: "April 2026",
    qualification: "Graduate",
    selection: "Stage I → Stage II → Interview/CPT",
    salary: "₹44,900 – ₹1,51,100",
    applyLink: "https://www.csir.res.in",
    officialSite: "https://www.csir.res.in",
    notification: "https://www.csir.res.in"
  }
];



  // बाकी jobs के लिए भी इसी pattern में add कर देना


// Save for future use
localStorage.setItem("allJobsData", JSON.stringify(data));

function safeSet(id, value){
  const el = document.getElementById(id);
  if(el) el.innerText = value;
}

function getQueryParam(key){
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
}

/* ============================
   1) LIST PAGE
============================ */
const jobListBox = document.getElementById("jobList");

if(jobListBox){
  data.forEach(j=>{
    jobListBox.innerHTML += `
      <div class="card">
        <h3>${j.title}</h3>
        <p>Last Date: ${j.lastDate}</p>
        <a class="view-btn" href="view.html?id=${j.id}">
          View Full Details
        </a>
      </div>
    `;
  });
}

/* ============================
   2) DETAIL PAGE
============================ */
const detailTitle = document.getElementById("title");

if(detailTitle){

  const jobId = getQueryParam("id");

  if(!jobId){
    alert("Job ID missing!");
    window.location.href = "./latest_job.html";
  }

  const job = data.find(j => String(j.id) === String(jobId));

  if(!job){
    safeSet("title", "Job Not Found ❌");
  } else {

    // Title
    const pageTitle = document.getElementById("pageTitle");
    if(pageTitle) pageTitle.innerText = job.title + " – SarkariNext";

    safeSet("title", job.title);

    // Mini info
    safeSet("org", job.org);
    safeSet("posts", job.posts);
    safeSet("jobType", job.jobType);
    safeSet("state", job.state);

    // Dates
    safeSet("postDate", job.postDate);
    safeSet("startDate", job.startDate);
    safeSet("lastDate", job.lastDate);
    safeSet("examDate", job.examDate);
    safeSet("admitCard", job.admitCard);

    // Fee
    safeSet("feeGen", job.feeGen);
    safeSet("feeScst", job.feeScst);
    safeSet("feeFemale", job.feeFemale);
    safeSet("paymentMode", job.paymentMode);

    // Age
    safeSet("ageMin", job.ageMin);
    safeSet("ageMax", job.ageMax);
    safeSet("ageRelax", job.ageRelax);

    // Eligibility
    safeSet("qualification", job.qualification);
    safeSet("extraReq", job.extraReq);

    // Selection
    safeSet("selection", job.selection);

    // Salary
    safeSet("salary", job.salary);

    // Links
    const officialLink = document.getElementById("officialLink");
    if(officialLink) officialLink.href = job.applyLink;

    const officialSiteLink = document.getElementById("officialSiteLink");
    if(officialSiteLink) officialSiteLink.href = job.officialSite;

    const notificationLink = document.getElementById("notificationLink");
    if(notificationLink) notificationLink.href = job.notification;
  }
}
