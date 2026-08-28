const prep = localStorage.getItem("selectedPrep");
const channel = localStorage.getItem("selectedChannel");

const subjectArea = document.getElementById("subjectArea");
const player = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");
const prepBadge = document.getElementById("prepBadge");
const channelBadge = document.getElementById("channelBadge");
const heroHeading = document.getElementById("heroHeading");
const heroSubtext = document.getElementById("heroSubtext");
const activeSubject = document.getElementById("activeSubject");
const activeLesson = document.getElementById("activeLesson");
const playerEmptyState = document.getElementById("playerEmptyState");
const playerFrame = player?.parentElement;
const searchInput = document.getElementById("topicSearch");
const backToChannels = document.getElementById("backToChannels");
const showSubjectsBtn = document.getElementById("showSubjectsBtn");
const breadcrumb = document.getElementById("breadcrumb");
const viewLabel = document.getElementById("viewLabel");
const lessonCount = document.getElementById("lessonCount");

const state = {
  currentSubject: null,
  currentTopicTitle: null,
  query: ""
};

/* ====== DEMO DATA (same videos) ====== */
const data = {

  /* ======================================================
     🚓 UP POLICE (Constable/SI)
  ====================================================== */
  "UP Police": {

    rojgar: {
      "Maths": [
        { title: "Number System video 1 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Number System video 2 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "Number System video 3 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Number System video 4 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Number System video 5 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "Number System video 6 by ~sarkariNext", id: "kYJ5n1yT-00" },
         { title: "Number System video 7 by ~sarkariNext", id: "8mve0UoSxTo" },
          { title: "Number System video 8 by ~sarkariNext", id: "tG-wO1n9G2k" },
           { title: "Number System video 9 by ~sarkariNext", id: "kYJ5n1yT-00" },
            { title: "Number System video 10 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Simplification video 1 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "Simplification video 2 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Simplification video 3 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "HCF & LCM video 1 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "HCF & LCM video 2 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "HCF & LCM video 3 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "HCF & LCM video 4 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "HCF & LCM video 5 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "HCF & LCM video 6 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "HCF & LCM video 7 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "HCF & LCM video 8 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "TIME & WORK video 1 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "TIME & WORK video 2 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "TIME & WORK video 3 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "TIME & WORK video 4 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "TIME & WORK video 5 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "TIME & WORK video 6 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "TIME & WORK video 7 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "TIME & WORK video 8 by ~sarkariNext", id: "tG-wO1n9G2k" },
        { title: "PIPE & Cistern video 1 by ~sarkariNext", id: "kYJ5n1yT-00" },
         { title: "PIPE & Cistern video 1 by ~sarkariNext", id: "8mve0UoSxTo" },
          { title: "PIPE & Cistern video 1 by ~sarkariNext", id: "tG-wO1n9G2k" },
            { title: "Average video 1 by ~sarkariNext", id: "kYJ5n1yT-00" },
              { title: "Average video 2 by ~sarkariNext", id: "8mve0UoSxTo" },
              { title: "Average video 3 by ~sarkariNext", id: "tG-wO1n9G2k" },
                { title: "Average video 4 by ~sarkariNext", id: "kYJ5n1yT-00" },
                { title: "Average video 5 by ~sarkariNext", id: "8mve0UoSxTo" },
                  { title: "Average video 6 by ~sarkariNext", id: "tG-wO1n9G2k" },
                  { title: "Average video 7 by ~sarkariNext", id: "kYJ5n1yT-00" },
                  { title: "Average video 8 by ~sarkariNext", id: "8mve0UoSxTo" },
                  { title: "PERCENTAGE video 1 by ~sarkariNext", id: "tG-wO1n9G2k"}, 
                   { title: "PERCENTAGE video 2 by ~sarkariNext", id: "kYJ5n1yT-00"}, 
                    { title: "PERCENTAGE video 3 by ~sarkariNext", id: "8mve0UoSxTo"}, 
                     { title: "PERCENTAGE video 4 by ~sarkariNext", id: "tG-wO1n9G2k"}, 
                      { title: "PERCENTAGE video 5 by ~sarkariNext", id: "kYJ5n1yT-00"}, 
                       { title: "PERCENTAGE video 6 by ~sarkariNext", id: "8mve0UoSxTo"}, 
                        { title: "PERCENTAGE video 7 by ~sarkariNext", id: "tG-wO1n9G2k"}, 
                         { title: "PERCENTAGE video 8 by ~sarkariNext", id: "kYJ5n1yT-00"}, 
                          { title: "PERCENTAGE video 9 by ~sarkariNext", id: "8mve0UoSxTo"}, 
                           { title: "PERCENTAGE video 10 by ~sarkariNext", id: "tG-wO1n9G2k"}, 
                            { title: "PERCENTAGE video 11 by ~sarkariNext", id: "kYJ5n1yT-00"}, 
                             { title: "PERCENTAGE video 12 by ~sarkariNext", id: "8mve0UoSxTo"}, 
                              { title: "PERCENTAGE video 13 by ~sarkariNext", id: "tG-wO1n9G2k"}, 
                              

               
        { title: "PROFIT AND LOSS video 1 by ~sarkariNext", id: "kYJ5n1yT-00" },
         { title: "PROFIT AND LOSS video 2 by ~sarkariNext", id: "8mve0UoSxTo" },
          { title: "PROFIT AND LOSS video 3 by ~sarkariNext", id: "tG-wO1n9G2k" },
           { title: "PROFIT AND LOSS video 4 by ~sarkariNext", id: "kYJ5n1yT-00" },
            { title: "PROFIT AND LOSS video 5 by ~sarkariNext", id: "8mve0UoSxTo" },
             { title: "PROFIT AND LOSS video 6 by ~sarkariNext", id: "tG-wO1n9G2k" },
              { title: "PROFIT AND LOSS video 7 by ~sarkariNext", id: "kYJ5n1yT-00" },
               { title: "PROFIT AND LOSS video 8 by ~sarkariNext", id: "8mve0UoSxTo" },
                { title: "PROFIT AND LOSS video 9 by ~sarkariNext", id: "tG-wO1n9G2k" },
                 { title: "PROFIT AND LOSS video 10 by ~sarkariNext", id: "kYJ5n1yT-00" },
                  { title: "PROFIT AND LOSS video 11 by ~sarkariNext", id: "8mve0UoSxTo" },
                   { title: "PROFIT AND LOSS video 12 by ~sarkariNext", id: "tG-wO1n9G2k" },
                    { title: "PROFIT AND LOSS video 13 by ~sarkariNext", id: "kYJ5n1yT-00" },
                     { title: "PROFIT AND LOSS video 14 by ~sarkariNext", id: "8mve0UoSxTo" },
                      { title: "PROFIT AND LOSS video 15 by ~sarkariNext", id: "tG-wO1n9G2k" },
                       { title: "PROFIT AND LOSS video 16 by ~sarkariNext", id: "kYJ5n1yT-00" },
                        { title: "PROFIT AND LOSS video 17 by ~sarkariNext", id: "8mve0UoSxTo" },
                         { title: "PROFIT AND LOSS video 18 by ~sarkariNext", id: "tG-wO1n9G2k" },
                          { title: "PROFIT AND LOSS video 19 by ~sarkariNext", id: "kYJ5n1yT-00" },
                           { title: "PROFIT AND LOSS video 20 by ~sarkariNext", id: "8mve0UoSxTo" },
                            { title: "PROFIT AND LOSS video 21 by ~sarkariNext", id: "tG-wO1n9G2k" },
                             { title: "PROFIT AND LOSS video 22 by ~sarkariNext", id: "kYJ5n1yT-00" },
                              { title: "PROFIT AND LOSS video 23 by ~sarkariNext", id: "8mve0UoSxTo" },
                               { title: "PROFIT AND LOSS video 24 by ~sarkariNext", id: "tG-wO1n9G2k" },
                                { title: "PROFIT AND LOSS video 25 by ~sarkariNext", id: "kYJ5n1yT-00" },
                                 { title: "PROFIT AND LOSS video 26 by ~sarkariNext", id: "8mve0UoSxTo" },
                                 { title: "Time, Speed & Distance  video 1 by ~sarkariNext", id: "tG-wO1n9G2k" },
                                 { title: "Time, Speed & Distance  video 2 by ~sarkariNext", id: "kYJ5n1yT-00" },
                                 { title: "Time, Speed & Distance  video 3 by ~sarkariNext", id: "8mve0UoSxTo" },
                                 { title: "Time, Speed & Distance  video 4 by ~sarkariNext", id: "tG-wO1n9G2k" },
                                 { title: "Time, Speed & Distance  video 5 by ~sarkariNext", id: "kYJ5n1yT-00" },
                                 { title: "Time, Speed & Distance  video 6 by ~sarkariNext", id: "8mve0UoSxTo" },
                                 { title: "Time, Speed & Distance  video 7 by ~sarkariNext", id: "tG-wO1n9G2k" },
                                 { title: "Time, Speed & Distance  video 8 by ~sarkariNext", id: "kYJ5n1yT-00" },
                                 {title:"Race video 1 by ~sarkarinext" ,id: "8mve0UoSxTo"},
                                  {title:"Race video 2 by ~sarkarinext" ,id: "tG-wO1n9G2k"},
                                  {title:"Train video 1 by ~sarkarinext" ,id: "kYJ5n1yT-00"},
                                  {title:"Train video 2 by ~sarkarinext" ,id: "8mve0UoSxTo"},
                                  {title:"Train video 3 by ~sarkarinext" ,id: "tG-wO1n9G2k"},
                                   {title:"Boat and stream video 1 by ~sarkarinext" ,id: "kYJ5n1yT-00"},
                                   {title:"Boat and stream video 1 by ~sarkarinext" ,id: "8mve0UoSxTo"},
                                  {title:"MENSURATION VIDEO 1 BY ~sarkariNext", id: "tG-wO1n9G2k"},
                                  {title:"MENSURATION VIDEO 2 BY ~sarkariNext", id: "kYJ5n1yT-00"},
                                  {title:"MENSURATION VIDEO 3 BY ~sarkariNext", id: "8mve0UoSxTo"},
                                  {title:"MENSURATION VIDEO 4 BY ~sarkariNext", id: "tG-wO1n9G2k"},
                                  {title:"MENSURATION VIDEO 5 BY ~sarkariNext", id: "kYJ5n1yT-00"},
                                  {title:"MENSURATION VIDEO 6 BY ~sarkariNext", id: "8mve0UoSxTo"},
                                  {title:"MENSURATION VIDEO 7 BY ~sarkariNext", id: "tG-wO1n9G2k"},
                                  {title:"MENSURATION VIDEO 8 BY ~sarkariNext", id: "kYJ5n1yT-00"},
                                   {title:"MENSURATION VIDEO 9 BY ~sarkariNext", id: "8mve0UoSxTo"},
                                   {title:"SURDS AND INDICES video 1 by ~sarkariNext", id: "tG-wO1n9G2k"},
                                  
                                    {title:"MIXTURE AND ALIGATION video 1 by ~sarkariNext", id: "kYJ5n1yT-00"},
                                    {title:"MIXTURE AND ALIGATION video 2 by ~sarkariNext", id: "8mve0UoSxTo"},
                                     {title:"MIXTURE AND ALIGATION video 3 by ~sarkariNext", id: "tG-wO1n9G2k"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "kYJ5n1yT-00"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "8mve0UoSxTo"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "tG-wO1n9G2k"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "kYJ5n1yT-00"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "8mve0UoSxTo"},
                                      {title:"Age  video 1 by ~sarkariNext", id: "tG-wO1n9G2k"},
                                       {title:"Date interpretation  video 1 by ~sarkariNext", id: "kYJ5n1yT-00"},
                                      {title:"Date interpretation  video 2 by ~sarkariNext", id: "8mve0UoSxTo"},

                                   




        
      ],

      "Reasoning": [
        { title: "Analogies  by ~sarkariNext ", id: "8mve0UoSxTo" },
          { title: "Analogies video 1  by ~sarkariNext ", id: "kYJ5n1yT-00" },
          { title: "Analogies video 2  by ~sarkariNext ", id: "8mve0UoSxTo" },
          { title: "Analogies video 3 quick revision by ~sarkariNext ", id: "kYJ5n1yT-00" },
        { title: "Classification  by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Classification  video 1 by ~sarkariNext", id: "kYJ5n1yT-00" },
          { title: "Series  by ~sarkariNext", id: "8mve0UoSxTo" },
          { title: "Series  video 1  by ~sarkariNext", id: "kYJ5n1yT-00" },
          { title: "Series  video 2  by ~sarkariNext", id: "8mve0UoSxTo" },
         { title: "Coding-Decoding  by ~sarkariNext", id: "kYJ5n1yT-00" },
         { title: "Coding-Decoding video 1  by ~sarkariNext", id: "8mve0UoSxTo" },
           { title: "Blood Relation  by ~sarkariNext", id: "kYJ5n1yT-00" },
           { title: "Blood Relation  video 1 by ~sarkariNext", id: "8mve0UoSxTo" },
           { title: "Blood Relation  video 2 by ~sarkariNext", id: "kYJ5n1yT-00" },
           { title: "Blood Relation  video 3 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Direction Sense  by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Direction Sense video 1 by ~sarkariNext", id: "8mve0UoSxTo" },
          { title: "Ranking & Order  by ~sarkariNext", id: "kYJ5n1yT-00" },
          { title: "Ranking & Order  video 2 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Syllogism  by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Syllogism  video 2 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Syllogism  video 3 by ~sarkariNext", id: "kYJ5n1yT-00" },
            { title: "Venn Diagram  by ~sarkariNext", id: "8mve0UoSxTo" },
            { title: "Venn Diagram video 2 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Dice and puzzle  by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: " Dice and Puzzle video 2 by ~sarkariNext", id: "kYJ5n1yT-00" },
          { title: "Seating Arrangement  by ~sarkariNext", id: "8mve0UoSxTo" },
          { title: "Seating Arrangement   video 2 by ~sarkariNext", id: "kYJ5n1yT-00" },
          { title: "Seating Arrangement   video 3 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Clock & Calendar  by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Clock & Calendar video 2 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Clock & Calendar video 3 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Clock & Calendar video 5 by ~sarkariNext", id: "8mve0UoSxTo" },
        { title: "Clock & Calendar video 6 by ~sarkariNext", id: "kYJ5n1yT-00" },
        { title: "Clock & Calendar video 7 by ~sarkariNext", id: "8mve0UoSxTo" },
            { title: "Non-Verbal Reasoning  by ~sarkariNext", id: "kYJ5n1yT-00" },
            { title: "Hidden figures  by ~sarkariNext", id: "8mve0UoSxTo" },
             { title: " figure complition and paper folding &cutting by ~sarkariNext", id: "kYJ5n1yT-00" },
              { title: " Figure analogy & Classification by ~sarkariNext", id: "8mve0UoSxTo" },
               { title: " Figure series by ~sarkariNext", id: "kYJ5n1yT-00" },
               { title: " Non verbal & Miscellaneous by ~sarkariNext", id: "8mve0UoSxTo" },
               { title: " Decisions Making by ~sarkariNext", id: "kYJ5n1yT-00" },
               { title: " Decisions Making video 2  by ~sarkariNext", id: "8mve0UoSxTo" },
                    { title: " Alphabet test 2  by ~sarkariNext", id: "kYJ5n1yT-00" },
                    { title: " Mathematical operations by ~sarkariNext", id: "8mve0UoSxTo" },
                    { title: " Inequality by ~sarkariNext", id: "kYJ5n1yT-00" },
                     { title: " Inequality video 2  by ~sarkariNext", id: "8mve0UoSxTo" },
                     { title: " Condition Number & Letter,Sign by ~sarkariNext", id: "kYJ5n1yT-00" },
                     { title: " Condition Number & Letter,Sign  VIDEO 2 by ~sarkariNext", id: "8mve0UoSxTo" },
                         { title: "Finding the Missing number   by ~sarkariNext", id: "kYJ5n1yT-00" },
                     { title: " Cube   by ~sarkariNext", id: "8mve0UoSxTo" },
                     { title: " Cube video 2  by ~sarkariNext", id: "kYJ5n1yT-00" },
      ],

      "GK/GS": [
          { title: "Indian History by sarkariNext", id: "gS6S7G8l_vA" },
             { title: "Indian History video 1 by sarkariNext", id: "gS6S7G8l_vA" },
             { title: "Indian History video 2 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Indian Geography by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Indian Geography  video 2 by sarkariNext", id: "gS6S7G8l_vA" },
            { title: "Indian Polity by sarkariNext", id: "gS6S7G8l_vA" },
            { title: "Indian Polity video 2 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Indian Economy by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Indian Economy video 2  by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Indian Economy video 3  by sarkariNext", id: "gS6S7G8l_vA" },
           { title: "General Science by sarkariNext", id: "gS6S7G8l_vA" },
                 { title: "Physics Basics by sarkariNext", id: "gS6S7G8l_vA" },
             { title: "Chemistry Basics by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Biology Basics by sarkariNext", id: "gS6S7G8l_vA" },
                 { title: "Computer Awareness by sarkariNext", id: "gS6S7G8l_vA" },
                 { title: "Computer Awareness  video 2 by sarkariNext", id: "gS6S7G8l_vA" },
                 { title: "Computer Awareness video 3  by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 1 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 2 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 3 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 4 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 5 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 6 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 7 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 8 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 9 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "Current Affairs  video 11 by sarkariNext", id: "gS6S7G8l_vA" },
         { title: "Current Affairs  video 12 by sarkariNext", id: "gS6S7G8l_vA" },
          { title: "Current Affairs  video 13 by sarkariNext", id: "gS6S7G8l_vA" },
           { title: "Current Affairs  video 14 by sarkariNext", id: "gS6S7G8l_vA" },
            { title: "Current Affairs  video 15 by sarkariNext", id: "gS6S7G8l_vA" },
            { title: "Current Affairs  video 16 by sarkariNext", id: "gS6S7G8l_vA" },
            { title: "Current Affairs  video 17 by sarkariNext", id: "gS6S7G8l_vA" },
             { title: "Current Affairs  video 18 by sarkariNext", id: "gS6S7G8l_vA" },
        { title: "UP Special GK by sarkariNext", id: "gS6S7G8l_vA" },
         { title: "UP Special GK video 2 by sarkariNext", id: "gS6S7G8l_vA" },
          { title: "UP Special GK video 3 by sarkariNext", id: "gS6S7G8l_vA" },
           { title: "UP Special GK  video 4 by sarkariNext", id: "gS6S7G8l_vA" },
       { title: "UP Special GK video 5 by sarkariNext", id: "gS6S7G8l_vA" },
       { title: "UP Special GK video 6 by sarkariNext", id: "gS6S7G8l_vA" },
       { title: "UP Special GK video 6 by sarkariNext", id: "gS6S7G8l_vA" }
      ],

      "Hindi": [
        { title: "शब्दावली by sarkariNext", id: "JUDehE7jZow" },
        { title: "हिंदी साहित्य by sarkariNext ", id: "JUDehE7jZow" },
        { title: "हिंदी व्याकरण by sarkariNext", id: "JUDehE7jZow" },
        { title: "हिंदी वर्णमाला practice  by sarkariNext", id: "JUDehE7jZow" },
        { title: "संज्ञा & सर्वनाम  practice by sarkariNext", id: "JUDehE7jZow" },
        { title: "क्रिया practice by sarkariNext", id: "JUDehE7jZow" },
        { title: "विशेषण practice by sarkariNext", id: "JUDehE7jZow" },
        { title: "क्रिया विशेषण practice  by sarkariNext", id: "JUDehE7jZow" },
        { title: "लिंग वचन कारक practice  by sarkariNext", id: "JUDehE7jZow" },
        { title: " संधि practice by sarkariNext", id: "JUDehE7jZow" },
         { title: " समास practice by sarkariNext", id: "JUDehE7jZow" },
          { title: " काल  practice by sarkariNext", id: "JUDehE7jZow" },
           { title: " उपसर्ग & प्रत्यय  practice by sarkariNext", id: "JUDehE7jZow" },
            { title: " अव्यय practice by sarkariNext", id: "JUDehE7jZow" },
             { title: " रस practice by sarkariNext", id: "JUDehE7jZow" },
              { title: "अलंकार practice by sarkariNext", id: "JUDehE7jZow" },
               { title: "अशुद्धि सुधार & शुद्ध practice by sarkariNext", id: "JUDehE7jZow" },
                { title: " पर्यायवाची शब्द & अनेकार्थी शब्द practice by sarkariNext", id: "JUDehE7jZow" },
                 { title: " विलोम शब्द practice by sarkariNext", id: "JUDehE7jZow" },
                  { title: " तत्सम & तद्भव practice by sarkariNext", id: "JUDehE7jZow" },
                   { title: " वर्तनी practice by sarkariNext", id: "JUDehE7jZow" },
                    { title: " कवि और लेखक practice by sarkariNext", id: "JUDehE7jZow" },
                     { title: " कवि और लेखक video 2 practice by sarkariNext", id: "JUDehE7jZow" }
      ]
    },

    exampur: {
      "Maths": [
        { title: "Number System", id: "tG-wO1n9G2k" },
        { title: "Simplification", id: "kYJ5n1yT-00" },
        { title: "HCF & LCM", id: "8mve0UoSxTo" },
        { title: "Percentage", id: "tG-wO1n9G2k" },
        { title: "Profit & Loss", id: "kYJ5n1yT-00" },
        { title: "Simple Interest", id: "8mve0UoSxTo" },
        { title: "Compound Interest", id: "tG-wO1n9G2k" },
        { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
        { title: "Average", id: "8mve0UoSxTo" },
        { title: "Time & Work", id: "tG-wO1n9G2k" },
        { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
        { title: "Mensuration (2D/3D)", id: "8mve0UoSxTo" },
        { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
        { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" },
        { title: "Data Interpretation", id: "8mve0UoSxTo" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "8mve0UoSxTo" },
        { title: "Classification", id: "kYJ5n1yT-00" },
        { title: "Series", id: "8mve0UoSxTo" },
        { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
        { title: "Blood Relation", id: "8mve0UoSxTo" },
        { title: "Direction Sense", id: "kYJ5n1yT-00" },
        { title: "Ranking & Order", id: "8mve0UoSxTo" },
        { title: "Syllogism", id: "kYJ5n1yT-00" },
        { title: "Venn Diagram", id: "8mve0UoSxTo" },
        { title: "Puzzle", id: "kYJ5n1yT-00" },
        { title: "Seating Arrangement", id: "8mve0UoSxTo" },
        { title: "Clock & Calendar", id: "kYJ5n1yT-00" },
        { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "gS6S7G8l_vA" },
        { title: "Indian Geography", id: "gS6S7G8l_vA" },
        { title: "Indian Polity", id: "gS6S7G8l_vA" },
        { title: "Indian Economy", id: "gS6S7G8l_vA" },
        { title: "General Science", id: "gS6S7G8l_vA" },
        { title: "Physics Basics", id: "gS6S7G8l_vA" },
        { title: "Chemistry Basics", id: "gS6S7G8l_vA" },
        { title: "Biology Basics", id: "gS6S7G8l_vA" },
        { title: "Computer Awareness", id: "gS6S7G8l_vA" },
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "UP Special GK", id: "gS6S7G8l_vA" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "JUDehE7jZow" },
        { title: "संज्ञा", id: "JUDehE7jZow" },
        { title: "सर्वनाम", id: "JUDehE7jZow" },
        { title: "विशेषण", id: "JUDehE7jZow" },
        { title: "क्रिया", id: "JUDehE7jZow" },
        { title: "समास", id: "JUDehE7jZow" },
        { title: "संधि", id: "JUDehE7jZow" },
        { title: "मुहावरे", id: "JUDehE7jZow" },
        { title: "लोकोक्तियाँ", id: "JUDehE7jZow" },
        { title: "वाक्य शुद्धि", id: "JUDehE7jZow" }
      ]
    },
    khansir: {
      "Maths": [
        { title: "Number System", id: "tG-wO1n9G2k" },
        { title: "Simplification", id: "kYJ5n1yT-00" },
        { title: "HCF & LCM", id: "8mve0UoSxTo" },
        { title: "Percentage", id: "tG-wO1n9G2k" },
        { title: "Profit & Loss", id: "kYJ5n1yT-00" },
        { title: "Simple Interest", id: "8mve0UoSxTo" },
        { title: "Compound Interest", id: "tG-wO1n9G2k" },
        { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
        { title: "Average", id: "8mve0UoSxTo" },
        { title: "Time & Work", id: "tG-wO1n9G2k" },
        { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
        { title: "Mensuration (2D/3D)", id: "8mve0UoSxTo" },
        { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
        { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" },
        { title: "Data Interpretation", id: "8mve0UoSxTo" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "kYJ5n1yT-00" },
        { title: "Classification", id: "8mve0UoSxTo" },
        { title: "Series", id: "kYJ5n1yT-00" },
        { title: "Coding-Decoding", id: "8mve0UoSxTo" },
        { title: "Blood Relation", id: "kYJ5n1yT-00" },
        { title: "Direction Sense", id: "8mve0UoSxTo" },
        { title: "Ranking & Order", id: "kYJ5n1yT-00" },
        { title: "Syllogism", id: "8mve0UoSxTo" },
        { title: "Venn Diagram", id: "kYJ5n1yT-00" },
        { title: "Puzzle", id: "8mve0UoSxTo" },
        { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
        { title: "Clock & Calendar", id: "8mve0UoSxTo" },
        { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "gS6S7G8l_vA" },
        { title: "Indian Geography", id: "gS6S7G8l_vA" },
        { title: "Indian Polity", id: "gS6S7G8l_vA" },
        { title: "Indian Economy", id: "gS6S7G8l_vA" },
        { title: "General Science", id: "gS6S7G8l_vA" },
        { title: "Physics Basics", id: "gS6S7G8l_vA" },
        { title: "Chemistry Basics", id: "gS6S7G8l_vA" },
        { title: "Biology Basics", id: "gS6S7G8l_vA" },
        { title: "Computer Awareness", id: "gS6S7G8l_vA" },
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "UP Special GK", id: "gS6S7G8l_vA" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "JUDehE7jZow" },
        { title: "संज्ञा", id: "JUDehE7jZow" },
        { title: "सर्वनाम", id: "JUDehE7jZow" },
        { title: "विशेषण", id: "JUDehE7jZow" },
        { title: "क्रिया", id: "JUDehE7jZow" },
        { title: "समास", id: "JUDehE7jZow" },
        { title: "संधि", id: "JUDehE7jZow" },
        { title: "मुहावरे", id: "JUDehE7jZow" },
        { title: "लोकोक्तियाँ", id: "JUDehE7jZow" },
        { title: "वाक्य शुद्धि", id: "JUDehE7jZow" }
      ]
    },
    
    adda247: {
      "Maths": [
        { title: "Number System", id: "tG-wO1n9G2k" },
        { title: "Simplification", id: "kYJ5n1yT-00" },
        { title: "HCF & LCM", id: "8mve0UoSxTo" },
        { title: "Percentage", id: "tG-wO1n9G2k" },
        { title: "Profit & Loss", id: "kYJ5n1yT-00" },
        { title: "Simple Interest", id: "8mve0UoSxTo" },
        { title: "Compound Interest", id: "tG-wO1n9G2k" },
        { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
        { title: "Average", id: "8mve0UoSxTo" },
        { title: "Time & Work", id: "tG-wO1n9G2k" },
        { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
        { title: "Mensuration (2D/3D)", id: "8mve0UoSxTo" },
        { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
        { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" },
        { title: "Data Interpretation", id: "8mve0UoSxTo" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "8mve0UoSxTo" },
        { title: "Classification", id: "kYJ5n1yT-00" },
        { title: "Series", id: "8mve0UoSxTo" },
        { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
        { title: "Blood Relation", id: "8mve0UoSxTo" },
        { title: "Direction Sense", id: "kYJ5n1yT-00" },
        { title: "Ranking & Order", id: "8mve0UoSxTo" },
        { title: "Syllogism", id: "kYJ5n1yT-00" },
        { title: "Venn Diagram", id: "8mve0UoSxTo" },
        { title: "Puzzle", id: "kYJ5n1yT-00" },
        { title: "Seating Arrangement", id: "8mve0UoSxTo" },
        { title: "Clock & Calendar", id: "kYJ5n1yT-00" },
        { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "gS6S7G8l_vA" },
        { title: "Indian Geography", id: "gS6S7G8l_vA" },
        { title: "Indian Polity", id: "gS6S7G8l_vA" },
        { title: "Indian Economy", id: "gS6S7G8l_vA" },
        { title: "General Science", id: "gS6S7G8l_vA" },
        { title: "Physics Basics", id: "gS6S7G8l_vA" },
        { title: "Chemistry Basics", id: "gS6S7G8l_vA" },
        { title: "Biology Basics", id: "gS6S7G8l_vA" },
        { title: "Computer Awareness", id: "gS6S7G8l_vA" },
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "UP Special GK", id: "gS6S7G8l_vA" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "JUDehE7jZow" },
        { title: "संज्ञा", id: "JUDehE7jZow" },
        { title: "सर्वनाम", id: "JUDehE7jZow" },
        { title: "विशेषण", id: "JUDehE7jZow" },
        { title: "क्रिया", id: "JUDehE7jZow" },
        { title: "समास", id: "JUDehE7jZow" },
        { title: "संधि", id: "JUDehE7jZow" },
        { title: "मुहावरे", id: "JUDehE7jZow" },
        { title: "लोकोक्तियाँ", id: "JUDehE7jZow" },
        { title: "वाक्य शुद्धि", id: "JUDehE7jZow" }
      ]
    },
    
    studyiq: {
      "Maths": [
        { title: "Number System", id: "tG-wO1n9G2k" },
        { title: "Simplification", id: "kYJ5n1yT-00" },
        { title: "HCF & LCM", id: "8mve0UoSxTo" },
        { title: "Percentage", id: "tG-wO1n9G2k" },
        { title: "Profit & Loss", id: "kYJ5n1yT-00" },
        { title: "Simple Interest", id: "8mve0UoSxTo" },
        { title: "Compound Interest", id: "tG-wO1n9G2k" },
        { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
        { title: "Average", id: "8mve0UoSxTo" },
        { title: "Time & Work", id: "tG-wO1n9G2k" },
        { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
        { title: "Mensuration (2D/3D)", id: "8mve0UoSxTo" },
        { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
        { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" },
        { title: "Data Interpretation", id: "8mve0UoSxTo" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "kYJ5n1yT-00" },
        { title: "Classification", id: "8mve0UoSxTo" },
        { title: "Series", id: "kYJ5n1yT-00" },
        { title: "Coding-Decoding", id: "8mve0UoSxTo" },
        { title: "Blood Relation", id: "kYJ5n1yT-00" },
        { title: "Direction Sense", id: "8mve0UoSxTo" },
        { title: "Ranking & Order", id: "kYJ5n1yT-00" },
        { title: "Syllogism", id: "8mve0UoSxTo" },
        { title: "Venn Diagram", id: "kYJ5n1yT-00" },
        { title: "Puzzle", id: "8mve0UoSxTo" },
        { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
        { title: "Clock & Calendar", id: "8mve0UoSxTo" },
        { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "gS6S7G8l_vA" },
        { title: "Indian Geography", id: "gS6S7G8l_vA" },
        { title: "Indian Polity", id: "gS6S7G8l_vA" },
        { title: "Indian Economy", id: "gS6S7G8l_vA" },
        { title: "General Science", id: "gS6S7G8l_vA" },
        { title: "Physics Basics", id: "gS6S7G8l_vA" },
        { title: "Chemistry Basics", id: "gS6S7G8l_vA" },
        { title: "Biology Basics", id: "gS6S7G8l_vA" },
        { title: "Computer Awareness", id: "gS6S7G8l_vA" },
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "UP Special GK", id: "gS6S7G8l_vA" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "JUDehE7jZow" },
        { title: "संज्ञा", id: "JUDehE7jZow" },
        { title: "सर्वनाम", id: "JUDehE7jZow" },
        { title: "विशेषण", id: "JUDehE7jZow" },
        { title: "क्रिया", id: "JUDehE7jZow" },
        { title: "समास", id: "JUDehE7jZow" },
        { title: "संधि", id: "JUDehE7jZow" },
        { title: "मुहावरे", id: "JUDehE7jZow" },
        { title: "लोकोक्तियाँ", id: "JUDehE7jZow" },
        { title: "वाक्य शुद्धि", id: "JUDehE7jZow" }
      ]
    
    },
    careerwill: {
      "Maths": [
        { title: "Number System", id: "tG-wO1n9G2k" },
        { title: "Simplification", id: "kYJ5n1yT-00" },
        { title: "HCF & LCM", id: "8mve0UoSxTo" },
        { title: "Percentage", id: "tG-wO1n9G2k" },
        { title: "Profit & Loss", id: "kYJ5n1yT-00" },
        { title: "Simple Interest", id: "8mve0UoSxTo" },
        { title: "Compound Interest", id: "tG-wO1n9G2k" },
        { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
        { title: "Average", id: "8mve0UoSxTo" },
        { title: "Time & Work", id: "tG-wO1n9G2k" },
        { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
        { title: "Mensuration (2D/3D)", id: "8mve0UoSxTo" },
        { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
        { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" },
        { title: "Data Interpretation", id: "8mve0UoSxTo" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "8mve0UoSxTo" },
        { title: "Classification", id: "kYJ5n1yT-00" },
        { title: "Series", id: "8mve0UoSxTo" },
        { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
        { title: "Blood Relation", id: "8mve0UoSxTo" },
        { title: "Direction Sense", id: "kYJ5n1yT-00" },
        { title: "Ranking & Order", id: "8mve0UoSxTo" },
        { title: "Syllogism", id: "kYJ5n1yT-00" },
        { title: "Venn Diagram", id: "8mve0UoSxTo" },
        { title: "Puzzle", id: "kYJ5n1yT-00" },
        { title: "Seating Arrangement", id: "8mve0UoSxTo" },
        { title: "Clock & Calendar", id: "kYJ5n1yT-00" },
        { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "gS6S7G8l_vA" },
        { title: "Indian Geography", id: "gS6S7G8l_vA" },
        { title: "Indian Polity", id: "gS6S7G8l_vA" },
        { title: "Indian Economy", id: "gS6S7G8l_vA" },
        { title: "General Science", id: "gS6S7G8l_vA" },
        { title: "Physics Basics", id: "gS6S7G8l_vA" },
        { title: "Chemistry Basics", id: "gS6S7G8l_vA" },
        { title: "Biology Basics", id: "gS6S7G8l_vA" },
        { title: "Computer Awareness", id: "gS6S7G8l_vA" },
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "UP Special GK", id: "gS6S7G8l_vA" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "JUDehE7jZow" },
        { title: "संज्ञा", id: "JUDehE7jZow" },
        { title: "सर्वनाम", id: "JUDehE7jZow" },
        { title: "विशेषण", id: "JUDehE7jZow" },
        { title: "क्रिया", id: "JUDehE7jZow" },
        { title: "समास", id: "JUDehE7jZow" },
        { title: "संधि", id: "JUDehE7jZow" },
        { title: "मुहावरे", id: "JUDehE7jZow" },
        { title: "लोकोक्तियाँ", id: "JUDehE7jZow" },
        { title: "वाक्य शुद्धि", id: "JUDehE7jZow" }
      ]
    }
  },
    
  



  /* ======================================================
     📑 SSC (CGL/CHSL/MTS/GD)
  ====================================================== */
  /*THIS SYLLABOUS IS FOR SSC CGL*/ 
  "SSC_CGL": {

  adda247: {
    "Quantitative Aptitude": [
      { title: "Number System", id: "tG-wO1n9G2k" },
      { title: "Simplification", id: "kYJ5n1yT-00" },
      { title: "HCF & LCM", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple & Compound Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mixture & Alligation", id: "kYJ5n1yT-00" },
      { title: "Mensuration (2D & 3D)", id: "8mve0UoSxTo" },
      { title: "Algebra", id: "tG-wO1n9G2k" },
      { title: "Trigonometry", id: "kYJ5n1yT-00" },
      { title: "Geometry", id: "8mve0UoSxTo" },
      { title: "Coordinate Geometry", id: "tG-wO1n9G2k" },
      { title: "Data Interpretation", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Clock & Calendar", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
  },

  exampur: { "Quantitative Aptitude": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "Simplification", id: "tG-wO1n9G2k" },
      { title: "HCF & LCM", id: "kYJ5n1yT-00" },
      { title: "Percentage", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Profit & Loss", id: "8mve0UoSxTo" },
      { title: "Simple & Compound Interest", id: "tG-wO1n9G2k" },
      { title: "Time & Work", id: "kYJ5n1yT-00" },
      { title: "Time, Speed & Distance", id: "8mve0UoSxTo" },
      { title: "Mixture & Alligation", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D & 3D)", id: "kYJ5n1yT-00" },
      { title: "Algebra", id: "8mve0UoSxTo" },
      { title: "Trigonometry", id: "tG-wO1n9G2k" },
      { title: "Geometry", id: "kYJ5n1yT-00" },
      { title: "Coordinate Geometry", id: "8mve0UoSxTo" },
      { title: "Data Interpretation", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Order & Ranking", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Clock & Calendar", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ] },
  rojgar: { "Quantitative Aptitude": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "HCF & LCM", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple & Compound Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mixture & Alligation", id: "8mve0UoSxTo" },
      { title: "Mensuration (2D & 3D)", id: "tG-wO1n9G2k" },
      { title: "Algebra", id: "kYJ5n1yT-00" },
      { title: "Trigonometry", id: "8mve0UoSxTo" },
      { title: "Geometry", id: "tG-wO1n9G2k" },
      { title: "Coordinate Geometry", id: "kYJ5n1yT-00" },
      { title: "Data Interpretation", id: "8mve0UoSxTo" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Clock & Calendar", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   },
  studyiq: { "Quantitative Aptitude": [
      { title: "Number System", id: "tG-wO1n9G2k" },
      { title: "Simplification", id: "kYJ5n1yT-00" },
      { title: "HCF & LCM", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple & Compound Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mixture & Alligation", id: "kYJ5n1yT-00" },
      { title: "Mensuration (2D & 3D)", id: "8mve0UoSxTo" },
      { title: "Algebra", id: "tG-wO1n9G2k" },
      { title: "Trigonometry", id: "kYJ5n1yT-00" },
      { title: "Geometry", id: "8mve0UoSxTo" },
      { title: "Coordinate Geometry", id: "tG-wO1n9G2k" },
      { title: "Data Interpretation", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Order & Ranking", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Clock & Calendar", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
  },
  unacademy: { "Quantitative Aptitude": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "Simplification", id: "tG-wO1n9G2k" },
      { title: "HCF & LCM", id: "kYJ5n1yT-00" },
      { title: "Percentage", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Profit & Loss", id: "8mve0UoSxTo" },
      { title: "Simple & Compound Interest", id: "tG-wO1n9G2k" },
      { title: "Time & Work", id: "kYJ5n1yT-00" },
      { title: "Time, Speed & Distance", id: "8mve0UoSxTo" },
      { title: "Mixture & Alligation", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D & 3D)", id: "kYJ5n1yT-00" },
      { title: "Algebra", id: "8mve0UoSxTo" },
      { title: "Trigonometry", id: "tG-wO1n9G2k" },
      { title: "Geometry", id: "kYJ5n1yT-00" },
      { title: "Coordinate Geometry", id: "8mve0UoSxTo" },
      { title: "Data Interpretation", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Clock & Calendar", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   }
   /*THIS IS THE SYLLABOUS OF SSC CHSL*/ 

},
"SSC_CHSL": {

  adda247: {

    "Quantitative Aptitude": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (Basic)", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "gS6S7G8l_vA" },
      { title: "Typing Test (LDC/JSA)", id: "gS6S7G8l_vA" },
      { title: "DEST (Data Entry Speed Test)", id: "gS6S7G8l_vA" }
    ]

  },

  exampur: { "Quantitative Aptitude": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (Basic)", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "gS6S7G8l_vA" },
      { title: "Typing Test (LDC/JSA)", id: "gS6S7G8l_vA" },
      { title: "DEST (Data Entry Speed Test)", id: "gS6S7G8l_vA" }
    ]
   },
  rojgar: { "Quantitative Aptitude": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (Basic)", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "gS6S7G8l_vA" },
      { title: "Typing Test (LDC/JSA)", id: "gS6S7G8l_vA" },
      { title: "DEST (Data Entry Speed Test)", id: "gS6S7G8l_vA" }
    ]
   },
  studyiq: { "Quantitative Aptitude": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (Basic)", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "gS6S7G8l_vA" },
      { title: "Typing Test (LDC/JSA)", id: "gS6S7G8l_vA" },
      { title: "DEST (Data Entry Speed Test)", id: "gS6S7G8l_vA" }
    ]
   },
  unacademy: { "Quantitative Aptitude": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (Basic)", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Active & Passive Voice", id: "JUDehE7jZow" },
      { title: "Direct & Indirect Speech", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "gS6S7G8l_vA" },
      { title: "Typing Test (LDC/JSA)", id: "gS6S7G8l_vA" },
      { title: "DEST (Data Entry Speed Test)", id: "gS6S7G8l_vA" }
    ]
   }

},
/*THIS IS THE SYYLABOUS OF SSC MTS*/ 
"SSC_MTS": {

  adda247: {

    "Numerical Aptitude": [
      { title: "Number System", id: "8mAITcNt710" },
      { title: "Simplification", id: "qz0aGYrrlhU" },
      { title: "HCF & LCM", id: "8mAITcNt710" },
      { title: "Percentage", id: "qz0aGYrrlhU" },
      { title: "Ratio & Proportion", id: "8mAITcNt710" },
      { title: "Average", id: "qz0aGYrrlhU" },
      { title: "Profit & Loss", id: "8mAITcNt710" },
      { title: "Simple Interest", id: "qz0aGYrrlhU" },
      { title: "Time & Work", id: "8mAITcNt710" },
      { title: "Time, Speed & Distance", id: "qz0aGYrrlhU" },
      { title: "Mensuration (Basic)", id: "8mAITcNt710" },
      { title: "Data Interpretation (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
  },

  exampur: { "Numerical Aptitude": [
      { title: "Number System", id: "8mAITcNt710" },
      { title: "Simplification", id: "qz0aGYrrlhU" },
      { title: "HCF & LCM", id: "8mAITcNt710" },
      { title: "Percentage", id: "qz0aGYrrlhU" },
      { title: "Ratio & Proportion", id: "8mAITcNt710" },
      { title: "Average", id: "qz0aGYrrlhU" },
      { title: "Profit & Loss", id: "8mAITcNt710" },
      { title: "Simple Interest", id: "qz0aGYrrlhU" },
      { title: "Time & Work", id: "8mAITcNt710" },
      { title: "Time, Speed & Distance", id: "qz0aGYrrlhU" },
      { title: "Mensuration (Basic)", id: "8mAITcNt710" },
      { title: "Data Interpretation (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" },
      { title: "Puzzle (Basic)", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   },
  rojgar: { "Numerical Aptitude": [
      { title: "Number System", id: "8mAITcNt710" },
      { title: "Simplification", id: "qz0aGYrrlhU" },
      { title: "HCF & LCM", id: "8mAITcNt710" },
      { title: "Percentage", id: "qz0aGYrrlhU" },
      { title: "Ratio & Proportion", id: "8mAITcNt710" },
      { title: "Average", id: "qz0aGYrrlhU" },
      { title: "Profit & Loss", id: "8mAITcNt710" },
      { title: "Simple Interest", id: "qz0aGYrrlhU" },
      { title: "Time & Work", id: "8mAITcNt710" },
      { title: "Time, Speed & Distance", id: "qz0aGYrrlhU" },
      { title: "Mensuration (Basic)", id: "8mAITcNt710" },
      { title: "Data Interpretation (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   },
  studyiq: { "Numerical Aptitude": [
      { title: "Number System", id: "8mAITcNt710" },
      { title: "Simplification", id: "qz0aGYrrlhU" },
      { title: "HCF & LCM", id: "8mAITcNt710" },
      { title: "Percentage", id: "qz0aGYrrlhU" },
      { title: "Ratio & Proportion", id: "8mAITcNt710" },
      { title: "Average", id: "qz0aGYrrlhU" },
      { title: "Profit & Loss", id: "8mAITcNt710" },
      { title: "Simple Interest", id: "qz0aGYrrlhU" },
      { title: "Time & Work", id: "8mAITcNt710" },
      { title: "Time, Speed & Distance", id: "qz0aGYrrlhU" },
      { title: "Mensuration (Basic)", id: "8mAITcNt710" },
      { title: "Data Interpretation (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" },
      { title: "Puzzle (Basic)", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   },
  unacademy: { "Numerical Aptitude": [
      { title: "Number System", id: "8mAITcNt710" },
      { title: "Simplification", id: "qz0aGYrrlhU" },
      { title: "HCF & LCM", id: "8mAITcNt710" },
      { title: "Percentage", id: "qz0aGYrrlhU" },
      { title: "Ratio & Proportion", id: "8mAITcNt710" },
      { title: "Average", id: "qz0aGYrrlhU" },
      { title: "Profit & Loss", id: "8mAITcNt710" },
      { title: "Simple Interest", id: "qz0aGYrrlhU" },
      { title: "Time & Work", id: "8mAITcNt710" },
      { title: "Time, Speed & Distance", id: "qz0aGYrrlhU" },
      { title: "Mensuration (Basic)", id: "8mAITcNt710" },
      { title: "Data Interpretation (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" },
      { title: "Puzzle (Basic)", id: "8mve0UoSxTo" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "Spellings", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   }

},
/*THIS IS THE SYLLABOUS OF SSC GD */

"SSC_GD": {

  adda247: {

    "General Intelligence & Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Similarities & Differences", id: "8mve0UoSxTo" },
      { title: "Space Visualization", id: "kYJ5n1yT-00" },
      { title: "Problem Solving", id: "8mve0UoSxTo" },
      { title: "Analysis & Judgment", id: "kYJ5n1yT-00" },
      { title: "Decision Making", id: "8mve0UoSxTo" },
      { title: "Visual Memory", id: "kYJ5n1yT-00" },
      { title: "Discrimination", id: "8mve0UoSxTo" },
      { title: "Observation", id: "kYJ5n1yT-00" },
      { title: "Relationship Concepts", id: "8mve0UoSxTo" },
      { title: "Arithmetical Reasoning", id: "kYJ5n1yT-00" },
      { title: "Verbal & Figure Classification", id: "8mve0UoSxTo" },
      { title: "Arithmetic Number Series", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Culture", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "HCF & LCM", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mensuration (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "JUDehE7jZow" },
      { title: "Vocabulary", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Reading Comprehension", id: "JUDehE7jZow" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "gS6S7G8l_vA" },
      { title: "Running (Male/Female)", id: "gS6S7G8l_vA" },
      { title: "Physical Efficiency Test (PET)", id: "gS6S7G8l_vA" }
    ]

  },

  exampur: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Similarities & Differences", id: "kYJ5n1yT-00" },
      { title: "Space Visualization", id: "8mve0UoSxTo" },
      { title: "Problem Solving", id: "kYJ5n1yT-00" },
      { title: "Analysis & Judgment", id: "8mve0UoSxTo" },
      { title: "Decision Making", id: "kYJ5n1yT-00" },
      { title: "Visual Memory", id: "8mve0UoSxTo" },
      { title: "Discrimination", id: "kYJ5n1yT-00" },
      { title: "Observation", id: "8mve0UoSxTo" },
      { title: "Relationship Concepts", id: "kYJ5n1yT-00" },
      { title: "Arithmetical Reasoning", id: "8mve0UoSxTo" },
      { title: "Verbal & Figure Classification", id: "kYJ5n1yT-00" },
      { title: "Arithmetic Number Series", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Culture", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "HCF & LCM", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mensuration (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "JUDehE7jZow" },
      { title: "Vocabulary", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Reading Comprehension", id: "JUDehE7jZow" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "gS6S7G8l_vA" },
      { title: "Running (Male/Female)", id: "gS6S7G8l_vA" },
      { title: "Physical Efficiency Test (PET)", id: "gS6S7G8l_vA" }
    ]
   },
  rojgar: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Similarities & Differences", id: "8mve0UoSxTo" },
      { title: "Space Visualization", id: "kYJ5n1yT-00" },
      { title: "Problem Solving", id: "8mve0UoSxTo" },
      { title: "Analysis & Judgment", id: "kYJ5n1yT-00" },
      { title: "Decision Making", id: "8mve0UoSxTo" },
      { title: "Visual Memory", id: "kYJ5n1yT-00" },
      { title: "Discrimination", id: "8mve0UoSxTo" },
      { title: "Observation", id: "kYJ5n1yT-00" },
      { title: "Relationship Concepts", id: "8mve0UoSxTo" },
      { title: "Arithmetical Reasoning", id: "kYJ5n1yT-00" },
      { title: "Verbal & Figure Classification", id: "8mve0UoSxTo" },
      { title: "Arithmetic Number Series", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Culture", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "HCF & LCM", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mensuration (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "JUDehE7jZow" },
      { title: "Vocabulary", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Reading Comprehension", id: "JUDehE7jZow" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "gS6S7G8l_vA" },
      { title: "Running (Male/Female)", id: "gS6S7G8l_vA" },
      { title: "Physical Efficiency Test (PET)", id: "gS6S7G8l_vA" }
    ]
   },
  studyiq: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Similarities & Differences", id: "kYJ5n1yT-00" },
      { title: "Space Visualization", id: "8mve0UoSxTo" },
      { title: "Problem Solving", id: "kYJ5n1yT-00" },
      { title: "Analysis & Judgment", id: "8mve0UoSxTo" },
      { title: "Decision Making", id: "kYJ5n1yT-00" },
      { title: "Visual Memory", id: "8mve0UoSxTo" },
      { title: "Discrimination", id: "kYJ5n1yT-00" },
      { title: "Observation", id: "8mve0UoSxTo" },
      { title: "Relationship Concepts", id: "kYJ5n1yT-00" },
      { title: "Arithmetical Reasoning", id: "8mve0UoSxTo" },
      { title: "Verbal & Figure Classification", id: "kYJ5n1yT-00" },
      { title: "Arithmetic Number Series", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Culture", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "HCF & LCM", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mensuration (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "JUDehE7jZow" },
      { title: "Vocabulary", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Reading Comprehension", id: "JUDehE7jZow" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "gS6S7G8l_vA" },
      { title: "Running (Male/Female)", id: "gS6S7G8l_vA" },
      { title: "Physical Efficiency Test (PET)", id: "gS6S7G8l_vA" }
    ]
  },
  unacademy: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Similarities & Differences", id: "8mve0UoSxTo" },
      { title: "Space Visualization", id: "kYJ5n1yT-00" },
      { title: "Problem Solving", id: "8mve0UoSxTo" },
      { title: "Analysis & Judgment", id: "kYJ5n1yT-00" },
      { title: "Decision Making", id: "8mve0UoSxTo" },
      { title: "Visual Memory", id: "kYJ5n1yT-00" },
      { title: "Discrimination", id: "8mve0UoSxTo" },
      { title: "Observation", id: "kYJ5n1yT-00" },
      { title: "Relationship Concepts", id: "8mve0UoSxTo" },
      { title: "Arithmetical Reasoning", id: "kYJ5n1yT-00" },
      { title: "Verbal & Figure Classification", id: "8mve0UoSxTo" },
      { title: "Arithmetic Number Series", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Culture", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "Simplification", id: "8mve0UoSxTo" },
      { title: "HCF & LCM", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mensuration (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation (Basic)", id: "tG-wO1n9G2k" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "JUDehE7jZow" },
      { title: "Vocabulary", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Detection", id: "JUDehE7jZow" },
      { title: "Synonyms & Antonyms", id: "JUDehE7jZow" },
      { title: "Idioms & Phrases", id: "JUDehE7jZow" },
      { title: "One Word Substitution", id: "JUDehE7jZow" },
      { title: "Reading Comprehension", id: "JUDehE7jZow" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "gS6S7G8l_vA" },
      { title: "Running (Male/Female)", id: "gS6S7G8l_vA" },
      { title: "Physical Efficiency Test (PET)", id: "gS6S7G8l_vA" }
    ]
   }

},




  /* ======================================================
     🚆 RAILWAY (NTPC/Group-D/ALP)
  ====================================================== */
  "RAILWAY_NTPC": {

  exampur: {

    "Maths": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "BODMAS / Simplification", id: "8mve0UoSxTo" },
      { title: "LCM & HCF", id: "tG-wO1n9G2k" },
      { title: "Decimal & Fractions", id: "kYJ5n1yT-00" },
      { title: "Percentage", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Profit & Loss", id: "8mve0UoSxTo" },
      { title: "Simple Interest", id: "tG-wO1n9G2k" },
      { title: "Compound Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Pipes & Cistern", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Train Problems", id: "8mve0UoSxTo" },
      { title: "Boat & Stream", id: "tG-wO1n9G2k" },
      { title: "Mixture & Alligation", id: "kYJ5n1yT-00" },
      { title: "Mensuration (2D)", id: "8mve0UoSxTo" },
      { title: "Mensuration (3D)", id: "tG-wO1n9G2k" },
      { title: "Geometry (Basic)", id: "kYJ5n1yT-00" },
      { title: "Trigonometry (Basic)", id: "8mve0UoSxTo" },
      { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
      { title: "Statistics", id: "kYJ5n1yT-00" },
      { title: "Data Interpretation", id: "8mve0UoSxTo" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series (Number/Alphabet)", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Order & Ranking", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Argument", id: "kYJ5n1yT-00" },
      { title: "Decision Making", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Mathematical Operations", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "gS6S7G8l_vA" },
      { title: "Indian Geography", id: "gS6S7G8l_vA" },
      { title: "Indian Polity", id: "gS6S7G8l_vA" },
      { title: "Indian Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Computer Awareness", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Sports", id: "gS6S7G8l_vA" },
      { title: "Books & Authors", id: "gS6S7G8l_vA" },
      { title: "Awards & Honours", id: "gS6S7G8l_vA" },
      { title: "Important Days", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
  },

  rojgar: { "Maths": [
      { title: "Number System", id: "tG-wO1n9G2k" },
      { title: "BODMAS / Simplification", id: "kYJ5n1yT-00" },
      { title: "LCM & HCF", id: "8mve0UoSxTo" },
      { title: "Decimal & Fractions", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Compound Interest", id: "tG-wO1n9G2k" },
      { title: "Time & Work", id: "kYJ5n1yT-00" },
      { title: "Pipes & Cistern", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Train Problems", id: "kYJ5n1yT-00" },
      { title: "Boat & Stream", id: "8mve0UoSxTo" },
      { title: "Mixture & Alligation", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D)", id: "kYJ5n1yT-00" },
      { title: "Mensuration (3D)", id: "8mve0UoSxTo" },
      { title: "Geometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Statistics", id: "tG-wO1n9G2k" },
      { title: "Data Interpretation", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series (Number/Alphabet)", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Statement & Conclusion", id: "8mve0UoSxTo" },
      { title: "Statement & Assumption", id: "kYJ5n1yT-00" },
      { title: "Statement & Argument", id: "8mve0UoSxTo" },
      { title: "Decision Making", id: "kYJ5n1yT-00" },
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Mathematical Operations", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "gS6S7G8l_vA" },
      { title: "Indian Geography", id: "gS6S7G8l_vA" },
      { title: "Indian Polity", id: "gS6S7G8l_vA" },
      { title: "Indian Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Computer Awareness", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Sports", id: "gS6S7G8l_vA" },
      { title: "Books & Authors", id: "gS6S7G8l_vA" },
      { title: "Awards & Honours", id: "gS6S7G8l_vA" },
      { title: "Important Days", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   },
  adda247: { "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Compound Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Pipes & Cistern", id: "kYJ5n1yT-00" },
      { title: "Time, Speed & Distance", id: "8mve0UoSxTo" },
      { title: "Train Problems", id: "tG-wO1n9G2k" },
      { title: "Boat & Stream", id: "kYJ5n1yT-00" },
      { title: "Mixture & Alligation", id: "8mve0UoSxTo" },
      { title: "Mensuration (2D)", id: "tG-wO1n9G2k" },
      { title: "Mensuration (3D)", id: "kYJ5n1yT-00" },
      { title: "Geometry (Basic)", id: "8mve0UoSxTo" },
      { title: "Trigonometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Algebra (Basic)", id: "kYJ5n1yT-00" },
      { title: "Statistics", id: "8mve0UoSxTo" },
      { title: "Data Interpretation", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series (Number/Alphabet)", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Order & Ranking", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Argument", id: "kYJ5n1yT-00" },
      { title: "Decision Making", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Mathematical Operations", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "gS6S7G8l_vA" },
      { title: "Indian Geography", id: "gS6S7G8l_vA" },
      { title: "Indian Polity", id: "gS6S7G8l_vA" },
      { title: "Indian Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Computer Awareness", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Sports", id: "gS6S7G8l_vA" },
      { title: "Books & Authors", id: "gS6S7G8l_vA" },
      { title: "Awards & Honours", id: "gS6S7G8l_vA" },
      { title: "Important Days", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
  },
  studyiq: { "Maths": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "BODMAS / Simplification", id: "8mve0UoSxTo" },
      { title: "LCM & HCF", id: "tG-wO1n9G2k" },
      { title: "Decimal & Fractions", id: "kYJ5n1yT-00" },
      { title: "Percentage", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Profit & Loss", id: "8mve0UoSxTo" },
      { title: "Simple Interest", id: "tG-wO1n9G2k" },
      { title: "Compound Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Pipes & Cistern", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Train Problems", id: "8mve0UoSxTo" },
      { title: "Boat & Stream", id: "tG-wO1n9G2k" },
      { title: "Mixture & Alligation", id: "kYJ5n1yT-00" },
      { title: "Mensuration (2D)", id: "8mve0UoSxTo" },
      { title: "Mensuration (3D)", id: "tG-wO1n9G2k" },
      { title: "Geometry (Basic)", id: "kYJ5n1yT-00" },
      { title: "Trigonometry (Basic)", id: "8mve0UoSxTo" },
      { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
      { title: "Statistics", id: "kYJ5n1yT-00" },
      { title: "Data Interpretation", id: "8mve0UoSxTo" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series (Number/Alphabet)", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Statement & Conclusion", id: "8mve0UoSxTo" },
      { title: "Statement & Assumption", id: "kYJ5n1yT-00" },
      { title: "Statement & Argument", id: "8mve0UoSxTo" },
      { title: "Decision Making", id: "kYJ5n1yT-00" },
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Mathematical Operations", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "gS6S7G8l_vA" },
      { title: "Indian Geography", id: "gS6S7G8l_vA" },
      { title: "Indian Polity", id: "gS6S7G8l_vA" },
      { title: "Indian Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Computer Awareness", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Sports", id: "gS6S7G8l_vA" },
      { title: "Books & Authors", id: "gS6S7G8l_vA" },
      { title: "Awards & Honours", id: "gS6S7G8l_vA" },
      { title: "Important Days", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
   },
  careerwill: { "Maths": [
      { title: "Number System", id: "tG-wO1n9G2k" },
      { title: "BODMAS / Simplification", id: "kYJ5n1yT-00" },
      { title: "LCM & HCF", id: "8mve0UoSxTo" },
      { title: "Decimal & Fractions", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Compound Interest", id: "tG-wO1n9G2k" },
      { title: "Time & Work", id: "kYJ5n1yT-00" },
      { title: "Pipes & Cistern", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Train Problems", id: "kYJ5n1yT-00" },
      { title: "Boat & Stream", id: "8mve0UoSxTo" },
      { title: "Mixture & Alligation", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D)", id: "kYJ5n1yT-00" },
      { title: "Mensuration (3D)", id: "8mve0UoSxTo" },
      { title: "Geometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Statistics", id: "tG-wO1n9G2k" },
      { title: "Data Interpretation", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series (Number/Alphabet)", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Order & Ranking", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Argument", id: "kYJ5n1yT-00" },
      { title: "Decision Making", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Mathematical Operations", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "gS6S7G8l_vA" },
      { title: "Indian Geography", id: "gS6S7G8l_vA" },
      { title: "Indian Polity", id: "gS6S7G8l_vA" },
      { title: "Indian Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Computer Awareness", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Sports", id: "gS6S7G8l_vA" },
      { title: "Books & Authors", id: "gS6S7G8l_vA" },
      { title: "Awards & Honours", id: "gS6S7G8l_vA" },
      { title: "Important Days", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" }
    ]
  }

},
"RAILWAY_GROUP_D": {

  exampur: {

    "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D)", id: "kYJ5n1yT-00" },
      { title: "Mensuration (3D Basic)", id: "8mve0UoSxTo" },
      { title: "Geometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism (Basic)", id: "kYJ5n1yT-00" },
      { title: "Mathematical Operations", id: "8mve0UoSxTo" },
      { title: "Puzzle (Basic)", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy", id: "52AZBXB9kF8" },
      { title: "Heat & Temperature", id: "g7U0ySnkE_A" },
      { title: "Electricity", id: "52AZBXB9kF8" },
      { title: "Human Body", id: "g7U0ySnkE_A" },
      { title: "Nutrition", id: "52AZBXB9kF8" },
      { title: "Cells & Tissues", id: "g7U0ySnkE_A" },
      { title: "Metals & Non-metals", id: "52AZBXB9kF8" },
      { title: "Acids, Bases & Salts", id: "g7U0ySnkE_A" }
    ]
  },

  rojgar: {  "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D)", id: "kYJ5n1yT-00" },
      { title: "Mensuration (3D Basic)", id: "8mve0UoSxTo" },
      { title: "Geometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism (Basic)", id: "kYJ5n1yT-00" },
      { title: "Mathematical Operations", id: "8mve0UoSxTo" },
      { title: "Puzzle (Basic)", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "52AZBXB9kF8" },
      { title: "Work, Power & Energy", id: "g7U0ySnkE_A" },
      { title: "Heat & Temperature", id: "52AZBXB9kF8" },
      { title: "Electricity", id: "g7U0ySnkE_A" },
      { title: "Human Body", id: "52AZBXB9kF8" },
      { title: "Nutrition", id: "g7U0ySnkE_A" },
      { title: "Cells & Tissues", id: "52AZBXB9kF8" },
      { title: "Metals & Non-metals", id: "g7U0ySnkE_A" },
      { title: "Acids, Bases & Salts", id: "52AZBXB9kF8" }
    ]
   },
  adda247: {  "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D)", id: "kYJ5n1yT-00" },
      { title: "Mensuration (3D Basic)", id: "8mve0UoSxTo" },
      { title: "Geometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism (Basic)", id: "kYJ5n1yT-00" },
      { title: "Mathematical Operations", id: "8mve0UoSxTo" },
      { title: "Puzzle (Basic)", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy", id: "52AZBXB9kF8" },
      { title: "Heat & Temperature", id: "g7U0ySnkE_A" },
      { title: "Electricity", id: "52AZBXB9kF8" },
      { title: "Human Body", id: "g7U0ySnkE_A" },
      { title: "Nutrition", id: "52AZBXB9kF8" },
      { title: "Cells & Tissues", id: "g7U0ySnkE_A" },
      { title: "Metals & Non-metals", id: "52AZBXB9kF8" },
      { title: "Acids, Bases & Salts", id: "g7U0ySnkE_A" }
    ]
   },
  studyiq: {  "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D)", id: "kYJ5n1yT-00" },
      { title: "Mensuration (3D Basic)", id: "8mve0UoSxTo" },
      { title: "Geometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism (Basic)", id: "kYJ5n1yT-00" },
      { title: "Mathematical Operations", id: "8mve0UoSxTo" },
      { title: "Puzzle (Basic)", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "52AZBXB9kF8" },
      { title: "Work, Power & Energy", id: "g7U0ySnkE_A" },
      { title: "Heat & Temperature", id: "52AZBXB9kF8" },
      { title: "Electricity", id: "g7U0ySnkE_A" },
      { title: "Human Body", id: "52AZBXB9kF8" },
      { title: "Nutrition", id: "g7U0ySnkE_A" },
      { title: "Cells & Tissues", id: "52AZBXB9kF8" },
      { title: "Metals & Non-metals", id: "g7U0ySnkE_A" },
      { title: "Acids, Bases & Salts", id: "52AZBXB9kF8" }
    ]
   },
  careerwill: { "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D)", id: "kYJ5n1yT-00" },
      { title: "Mensuration (3D Basic)", id: "8mve0UoSxTo" },
      { title: "Geometry (Basic)", id: "tG-wO1n9G2k" },
      { title: "Trigonometry (Basic)", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Syllogism (Basic)", id: "kYJ5n1yT-00" },
      { title: "Mathematical Operations", id: "8mve0UoSxTo" },
      { title: "Puzzle (Basic)", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy", id: "52AZBXB9kF8" },
      { title: "Heat & Temperature", id: "g7U0ySnkE_A" },
      { title: "Electricity", id: "52AZBXB9kF8" },
      { title: "Human Body", id: "g7U0ySnkE_A" },
      { title: "Nutrition", id: "52AZBXB9kF8" },
      { title: "Cells & Tissues", id: "g7U0ySnkE_A" },
      { title: "Metals & Non-metals", id: "52AZBXB9kF8" },
      { title: "Acids, Bases & Salts", id: "g7U0ySnkE_A" }
    ]
  }

},
"RAILWAY_ALP": {

  exampur: {

    "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D & 3D)", id: "kYJ5n1yT-00" },
      { title: "Geometry", id: "8mve0UoSxTo" },
      { title: "Trigonometry", id: "tG-wO1n9G2k" },
      { title: "Algebra (Basic)", id: "kYJ5n1yT-00" },
      { title: "Data Interpretation", id: "8mve0UoSxTo" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Statement & Conclusion", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "52AZBXB9kF8" },
      { title: "Current, Voltage & Resistance", id: "g7U0ySnkE_A" },
      { title: "Ohm’s Law", id: "52AZBXB9kF8" },
      { title: "Series & Parallel Circuit", id: "g7U0ySnkE_A" },
      { title: "Magnetism", id: "52AZBXB9kF8" },
      { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy (Science)", id: "52AZBXB9kF8" },
      { title: "Heat & Thermodynamics (Basic)", id: "g7U0ySnkE_A" },
      { title: "Basic Mechanics", id: "52AZBXB9kF8" },
      { title: "Tools & Safety", id: "g7U0ySnkE_A" }
    ]
  },

  rojgar: { "Maths": [
      { title: "Number System", id: "tG-wO1n9G2k" },
      { title: "BODMAS / Simplification", id: "kYJ5n1yT-00" },
      { title: "LCM & HCF", id: "8mve0UoSxTo" },
      { title: "Decimal & Fractions", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mensuration (2D & 3D)", id: "8mve0UoSxTo" },
      { title: "Geometry", id: "tG-wO1n9G2k" },
      { title: "Trigonometry", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Order & Ranking", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" },
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "52AZBXB9kF8" },
      { title: "Current, Voltage & Resistance", id: "g7U0ySnkE_A" },
      { title: "Ohm’s Law", id: "52AZBXB9kF8" },
      { title: "Series & Parallel Circuit", id: "g7U0ySnkE_A" },
      { title: "Magnetism", id: "52AZBXB9kF8" },
      { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy (Science)", id: "52AZBXB9kF8" },
      { title: "Heat & Thermodynamics (Basic)", id: "g7U0ySnkE_A" },
      { title: "Basic Mechanics", id: "52AZBXB9kF8" },
      { title: "Tools & Safety", id: "g7U0ySnkE_A" }
    ]
  },
  adda247: {"Maths": [
      { title: "Number System", id: "kYJ5n1yT-00" },
      { title: "BODMAS / Simplification", id: "8mve0UoSxTo" },
      { title: "LCM & HCF", id: "tG-wO1n9G2k" },
      { title: "Decimal & Fractions", id: "kYJ5n1yT-00" },
      { title: "Percentage", id: "8mve0UoSxTo" },
      { title: "Ratio & Proportion", id: "tG-wO1n9G2k" },
      { title: "Average", id: "kYJ5n1yT-00" },
      { title: "Profit & Loss", id: "8mve0UoSxTo" },
      { title: "Simple Interest", id: "tG-wO1n9G2k" },
      { title: "Time & Work", id: "kYJ5n1yT-00" },
      { title: "Time, Speed & Distance", id: "8mve0UoSxTo" },
      { title: "Mensuration (2D & 3D)", id: "tG-wO1n9G2k" },
      { title: "Geometry", id: "kYJ5n1yT-00" },
      { title: "Trigonometry", id: "8mve0UoSxTo" },
      { title: "Algebra (Basic)", id: "tG-wO1n9G2k" },
      { title: "Data Interpretation", id: "kYJ5n1yT-00" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Statement & Conclusion", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "52AZBXB9kF8" },
      { title: "Current, Voltage & Resistance", id: "g7U0ySnkE_A" },
      { title: "Ohm’s Law", id: "52AZBXB9kF8" },
      { title: "Series & Parallel Circuit", id: "g7U0ySnkE_A" },
      { title: "Magnetism", id: "52AZBXB9kF8" },
      { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy (Science)", id: "52AZBXB9kF8" },
      { title: "Heat & Thermodynamics (Basic)", id: "g7U0ySnkE_A" },
      { title: "Basic Mechanics", id: "52AZBXB9kF8" },
      { title: "Tools & Safety", id: "g7U0ySnkE_A" }
    ]
  },
  studyiq: { "Maths": [
      { title: "Number System", id: "8mve0UoSxTo" },
      { title: "BODMAS / Simplification", id: "tG-wO1n9G2k" },
      { title: "LCM & HCF", id: "kYJ5n1yT-00" },
      { title: "Decimal & Fractions", id: "8mve0UoSxTo" },
      { title: "Percentage", id: "tG-wO1n9G2k" },
      { title: "Ratio & Proportion", id: "kYJ5n1yT-00" },
      { title: "Average", id: "8mve0UoSxTo" },
      { title: "Profit & Loss", id: "tG-wO1n9G2k" },
      { title: "Simple Interest", id: "kYJ5n1yT-00" },
      { title: "Time & Work", id: "8mve0UoSxTo" },
      { title: "Time, Speed & Distance", id: "tG-wO1n9G2k" },
      { title: "Mensuration (2D & 3D)", id: "kYJ5n1yT-00" },
      { title: "Geometry", id: "8mve0UoSxTo" },
      { title: "Trigonometry", id: "tG-wO1n9G2k" },
      { title: "Algebra (Basic)", id: "kYJ5n1yT-00" },
      { title: "Data Interpretation", id: "8mve0UoSxTo" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "8mve0UoSxTo" },
      { title: "Classification", id: "kYJ5n1yT-00" },
      { title: "Series", id: "8mve0UoSxTo" },
      { title: "Coding-Decoding", id: "kYJ5n1yT-00" },
      { title: "Blood Relation", id: "8mve0UoSxTo" },
      { title: "Direction Sense", id: "kYJ5n1yT-00" },
      { title: "Order & Ranking", id: "8mve0UoSxTo" },
      { title: "Syllogism", id: "kYJ5n1yT-00" },
      { title: "Venn Diagram", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" },
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Non-Verbal Reasoning", id: "8mve0UoSxTo" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "52AZBXB9kF8" },
      { title: "Current, Voltage & Resistance", id: "g7U0ySnkE_A" },
      { title: "Ohm’s Law", id: "52AZBXB9kF8" },
      { title: "Series & Parallel Circuit", id: "g7U0ySnkE_A" },
      { title: "Magnetism", id: "52AZBXB9kF8" },
      { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy (Science)", id: "52AZBXB9kF8" },
      { title: "Heat & Thermodynamics (Basic)", id: "g7U0ySnkE_A" },
      { title: "Basic Mechanics", id: "52AZBXB9kF8" },
      { title: "Tools & Safety", id: "g7U0ySnkE_A" }
    ]
  },
  careerwill: { "Maths": [
      { title: "Number System", id: "tG-wO1n9G2k" },
      { title: "BODMAS / Simplification", id: "kYJ5n1yT-00" },
      { title: "LCM & HCF", id: "8mve0UoSxTo" },
      { title: "Decimal & Fractions", id: "tG-wO1n9G2k" },
      { title: "Percentage", id: "kYJ5n1yT-00" },
      { title: "Ratio & Proportion", id: "8mve0UoSxTo" },
      { title: "Average", id: "tG-wO1n9G2k" },
      { title: "Profit & Loss", id: "kYJ5n1yT-00" },
      { title: "Simple Interest", id: "8mve0UoSxTo" },
      { title: "Time & Work", id: "tG-wO1n9G2k" },
      { title: "Time, Speed & Distance", id: "kYJ5n1yT-00" },
      { title: "Mensuration (2D & 3D)", id: "8mve0UoSxTo" },
      { title: "Geometry", id: "tG-wO1n9G2k" },
      { title: "Trigonometry", id: "kYJ5n1yT-00" },
      { title: "Algebra (Basic)", id: "8mve0UoSxTo" },
      { title: "Data Interpretation", id: "tG-wO1n9G2k" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "kYJ5n1yT-00" },
      { title: "Classification", id: "8mve0UoSxTo" },
      { title: "Series", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Venn Diagram", id: "kYJ5n1yT-00" },
      { title: "Statement & Conclusion", id: "8mve0UoSxTo" },
      { title: "Puzzle", id: "kYJ5n1yT-00" },
      { title: "Seating Arrangement", id: "8mve0UoSxTo" },
      { title: "Non-Verbal Reasoning", id: "kYJ5n1yT-00" }
    ],

    "GK/GS": [
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science (Physics)", id: "gS6S7G8l_vA" },
      { title: "General Science (Chemistry)", id: "gS6S7G8l_vA" },
      { title: "General Science (Biology)", id: "gS6S7G8l_vA" },
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "52AZBXB9kF8" },
      { title: "Current, Voltage & Resistance", id: "g7U0ySnkE_A" },
      { title: "Ohm’s Law", id: "52AZBXB9kF8" },
      { title: "Series & Parallel Circuit", id: "g7U0ySnkE_A" },
      { title: "Magnetism", id: "52AZBXB9kF8" },
      { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
      { title: "Work, Power & Energy (Science)", id: "52AZBXB9kF8" },
      { title: "Heat & Thermodynamics (Basic)", id: "g7U0ySnkE_A" },
      { title: "Basic Mechanics", id: "52AZBXB9kF8" },
      { title: "Tools & Safety", id: "g7U0ySnkE_A" }
    ]
  }

},







  /* ======================================================
     🏦 BANKING (IBPS/SBI/RRB)
  ====================================================== */
 /* ======================================================
     🏦 BANKING (IBPS/SBI/RRB)
====================================================== */

"IBPS_PO": {

  adda247: {

    "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Probability (Basic)", id: "gS6S7G8l_vA" },
      { title: "Permutation & Combination (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" },
      { title: "Caselet DI", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" },
      { title: "Logical Reasoning", id: "8mve0UoSxTo" },
      { title: "Data Sufficiency", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Word Swap", id: "JUDehE7jZow" },
      { title: "Sentence Rearrangement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Budget & Economic Survey", id: "gS6S7G8l_vA" },
      { title: "Government Schemes", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Financial Institutions", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" },
      { title: "Cyber Security (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "gS6S7G8l_vA" },
      { title: "Letter Writing", id: "gS6S7G8l_vA" },
      { title: "Precis Writing", id: "gS6S7G8l_vA" }
    ]
  },

  exampur: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Probability (Basic)", id: "gS6S7G8l_vA" },
      { title: "Permutation & Combination (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" },
      { title: "Caselet DI", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" },
      { title: "Logical Reasoning", id: "8mve0UoSxTo" },
      { title: "Data Sufficiency", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Word Swap", id: "JUDehE7jZow" },
      { title: "Sentence Rearrangement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Budget & Economic Survey", id: "gS6S7G8l_vA" },
      { title: "Government Schemes", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Financial Institutions", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" },
      { title: "Cyber Security (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "gS6S7G8l_vA" },
      { title: "Letter Writing", id: "gS6S7G8l_vA" },
      { title: "Precis Writing", id: "gS6S7G8l_vA" }
    ]
  },
  rojgar: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Probability (Basic)", id: "gS6S7G8l_vA" },
      { title: "Permutation & Combination (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" },
      { title: "Caselet DI", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" },
      { title: "Logical Reasoning", id: "8mve0UoSxTo" },
      { title: "Data Sufficiency", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Word Swap", id: "JUDehE7jZow" },
      { title: "Sentence Rearrangement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Budget & Economic Survey", id: "gS6S7G8l_vA" },
      { title: "Government Schemes", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Financial Institutions", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" },
      { title: "Cyber Security (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "gS6S7G8l_vA" },
      { title: "Letter Writing", id: "gS6S7G8l_vA" },
      { title: "Precis Writing", id: "gS6S7G8l_vA" }
    ]
  },
  studyiq: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Probability (Basic)", id: "gS6S7G8l_vA" },
      { title: "Permutation & Combination (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" },
      { title: "Caselet DI", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" },
      { title: "Logical Reasoning", id: "8mve0UoSxTo" },
      { title: "Data Sufficiency", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Word Swap", id: "JUDehE7jZow" },
      { title: "Sentence Rearrangement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Budget & Economic Survey", id: "gS6S7G8l_vA" },
      { title: "Government Schemes", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Financial Institutions", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" },
      { title: "Cyber Security (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "gS6S7G8l_vA" },
      { title: "Letter Writing", id: "gS6S7G8l_vA" },
      { title: "Precis Writing", id: "gS6S7G8l_vA" }
    ]
  },
  unacademy: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Probability (Basic)", id: "gS6S7G8l_vA" },
      { title: "Permutation & Combination (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" },
      { title: "Caselet DI", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" },
      { title: "Logical Reasoning", id: "8mve0UoSxTo" },
      { title: "Data Sufficiency", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Word Swap", id: "JUDehE7jZow" },
      { title: "Sentence Rearrangement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Budget & Economic Survey", id: "gS6S7G8l_vA" },
      { title: "Government Schemes", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Financial Institutions", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" },
      { title: "Cyber Security (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "gS6S7G8l_vA" },
      { title: "Letter Writing", id: "gS6S7G8l_vA" },
      { title: "Precis Writing", id: "gS6S7G8l_vA" }
    ]
  },
  careerwill: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Probability (Basic)", id: "gS6S7G8l_vA" },
      { title: "Permutation & Combination (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" },
      { title: "Caselet DI", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" },
      { title: "Logical Reasoning", id: "8mve0UoSxTo" },
      { title: "Data Sufficiency", id: "kYJ5n1yT-00" },
      { title: "Statement & Assumption", id: "8mve0UoSxTo" },
      { title: "Statement & Conclusion", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Word Swap", id: "JUDehE7jZow" },
      { title: "Sentence Rearrangement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Budget & Economic Survey", id: "gS6S7G8l_vA" },
      { title: "Government Schemes", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Financial Institutions", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" },
      { title: "Cyber Security (Basic)", id: "qz0aGYrrlhU" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "gS6S7G8l_vA" },
      { title: "Letter Writing", id: "gS6S7G8l_vA" },
      { title: "Precis Writing", id: "gS6S7G8l_vA" }
    ]
   }

},
/* ======================================================
     🏦 IBPS CLERK (Pre + Mains)
====================================================== */
"IBPS_CLERK": {

  adda247: {

    "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Functions", id: "gS6S7G8l_vA" },
      { title: "Financial Awareness", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" }
    ]
  },

  exampur: { 
    "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Functions", id: "gS6S7G8l_vA" },
      { title: "Financial Awareness", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "qz0aGYrrlhU" },
      { title: "MS Office", id: "8mAITcNt710" },
      { title: "Internet", id: "qz0aGYrrlhU" },
      { title: "Networking", id: "8mAITcNt710" },
      { title: "Shortcut Keys", id: "qz0aGYrrlhU" }
    ]
  },
  rojgar: { "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Functions", id: "gS6S7G8l_vA" },
      { title: "Financial Awareness", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" }
    ]
  },
  studyiq: { "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Functions", id: "gS6S7G8l_vA" },
      { title: "Financial Awareness", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "qz0aGYrrlhU" },
      { title: "MS Office", id: "8mAITcNt710" },
      { title: "Internet", id: "qz0aGYrrlhU" },
      { title: "Networking", id: "8mAITcNt710" },
      { title: "Shortcut Keys", id: "qz0aGYrrlhU" }
    ]
  },
  unacademy: { "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Functions", id: "gS6S7G8l_vA" },
      { title: "Financial Awareness", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" }
    ]
   },
  careerwill: { "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "JUDehE7jZow" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "RBI & Functions", id: "gS6S7G8l_vA" },
      { title: "Financial Awareness", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "qz0aGYrrlhU" },
      { title: "MS Office", id: "8mAITcNt710" },
      { title: "Internet", id: "qz0aGYrrlhU" },
      { title: "Networking", id: "8mAITcNt710" },
      { title: "Shortcut Keys", id: "qz0aGYrrlhU" }
    ]
   }

},
/* ======================================================
     🏦 RRB PO + CLERK (Officer Scale + Office Assistant)
====================================================== */
"RRB_PO_CLERK": {

  adda247: {

    "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "JUDehE7jZow" },
      { title: "विलोम / पर्यायवाची", id: "JUDehE7jZow" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "JUDehE7jZow" },
      { title: "गद्यांश", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "Digital Banking", id: "gS6S7G8l_vA" }
    ]
  },

  exampur: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "JUDehE7jZow" },
      { title: "विलोम / पर्यायवाची", id: "JUDehE7jZow" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "JUDehE7jZow" },
      { title: "गद्यांश", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "qz0aGYrrlhU" },
      { title: "MS Office", id: "8mAITcNt710" },
      { title: "Internet", id: "qz0aGYrrlhU" },
      { title: "Networking", id: "8mAITcNt710" },
      { title: "Shortcut Keys", id: "qz0aGYrrlhU" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "Digital Banking", id: "gS6S7G8l_vA" }
    ]
  },
  rojgar: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "JUDehE7jZow" },
      { title: "विलोम / पर्यायवाची", id: "JUDehE7jZow" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "JUDehE7jZow" },
      { title: "गद्यांश", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "Digital Banking", id: "gS6S7G8l_vA" }
    ]
  },
  studyiq: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "JUDehE7jZow" },
      { title: "विलोम / पर्यायवाची", id: "JUDehE7jZow" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "JUDehE7jZow" },
      { title: "गद्यांश", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "qz0aGYrrlhU" },
      { title: "MS Office", id: "8mAITcNt710" },
      { title: "Internet", id: "qz0aGYrrlhU" },
      { title: "Networking", id: "8mAITcNt710" },
      { title: "Shortcut Keys", id: "qz0aGYrrlhU" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "Digital Banking", id: "gS6S7G8l_vA" }
    ]
   },
  unacademy: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "JUDehE7jZow" },
      { title: "विलोम / पर्यायवाची", id: "JUDehE7jZow" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "JUDehE7jZow" },
      { title: "गद्यांश", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "8mAITcNt710" },
      { title: "MS Office", id: "qz0aGYrrlhU" },
      { title: "Internet", id: "8mAITcNt710" },
      { title: "Networking", id: "qz0aGYrrlhU" },
      { title: "Shortcut Keys", id: "8mAITcNt710" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "Digital Banking", id: "gS6S7G8l_vA" }
    ]
  },
  careerwill: {  "Quant": [
      { title: "Simplification / Approximation", id: "gS6S7G8l_vA" },
      { title: "Number Series", id: "gS6S7G8l_vA" },
      { title: "Percentage", id: "gS6S7G8l_vA" },
      { title: "Ratio & Proportion", id: "gS6S7G8l_vA" },
      { title: "Average", id: "gS6S7G8l_vA" },
      { title: "Profit & Loss", id: "gS6S7G8l_vA" },
      { title: "Simple Interest (SI)", id: "gS6S7G8l_vA" },
      { title: "Compound Interest (CI)", id: "gS6S7G8l_vA" },
      { title: "Time & Work", id: "gS6S7G8l_vA" },
      { title: "Pipes & Cistern", id: "gS6S7G8l_vA" },
      { title: "Time, Speed & Distance", id: "gS6S7G8l_vA" },
      { title: "Boat & Stream", id: "gS6S7G8l_vA" },
      { title: "Train Problems", id: "gS6S7G8l_vA" },
      { title: "Mixture & Alligation", id: "gS6S7G8l_vA" },
      { title: "Mensuration (Basic)", id: "gS6S7G8l_vA" },
      { title: "Data Interpretation (DI)", id: "gS6S7G8l_vA" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "8mve0UoSxTo" },
      { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
      { title: "Syllogism", id: "8mve0UoSxTo" },
      { title: "Inequality", id: "kYJ5n1yT-00" },
      { title: "Coding-Decoding", id: "8mve0UoSxTo" },
      { title: "Blood Relation", id: "kYJ5n1yT-00" },
      { title: "Direction Sense", id: "8mve0UoSxTo" },
      { title: "Order & Ranking", id: "kYJ5n1yT-00" },
      { title: "Alphanumeric Series", id: "8mve0UoSxTo" },
      { title: "Input Output", id: "kYJ5n1yT-00" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "JUDehE7jZow" },
      { title: "Cloze Test", id: "JUDehE7jZow" },
      { title: "Para Jumble", id: "JUDehE7jZow" },
      { title: "Fill in the Blanks", id: "JUDehE7jZow" },
      { title: "Error Spotting", id: "JUDehE7jZow" },
      { title: "Sentence Improvement", id: "JUDehE7jZow" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "JUDehE7jZow" },
      { title: "विलोम / पर्यायवाची", id: "JUDehE7jZow" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "JUDehE7jZow" },
      { title: "गद्यांश", id: "JUDehE7jZow" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "gS6S7G8l_vA" },
      { title: "Static GK", id: "gS6S7G8l_vA" },
      { title: "History", id: "gS6S7G8l_vA" },
      { title: "Geography", id: "gS6S7G8l_vA" },
      { title: "Polity", id: "gS6S7G8l_vA" },
      { title: "Economy", id: "gS6S7G8l_vA" },
      { title: "General Science", id: "gS6S7G8l_vA" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "qz0aGYrrlhU" },
      { title: "MS Office", id: "8mAITcNt710" },
      { title: "Internet", id: "qz0aGYrrlhU" },
      { title: "Networking", id: "8mAITcNt710" },
      { title: "Shortcut Keys", id: "qz0aGYrrlhU" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "gS6S7G8l_vA" },
      { title: "RBI & Monetary Policy", id: "gS6S7G8l_vA" },
      { title: "Banking Terms", id: "gS6S7G8l_vA" },
      { title: "Digital Banking", id: "gS6S7G8l_vA" }
    ]
  }

},





  /* ======================================================
     📚 TEACHING (CTET/UPTET/SUPER TET)
  ====================================================== */
  "Teaching": {

    studyiq: {
      "Child Development (CDP)": [
        { title: "Piaget Theory", id: "gS6S7G8l_vA" },
        { title: "Vygotsky Theory", id: "gS6S7G8l_vA" },
        { title: "Learning Theories", id: "gS6S7G8l_vA" }
      ],

      "Pedagogy": [
        { title: "Hindi Pedagogy", id: "gS6S7G8l_vA" },
        { title: "Math Pedagogy", id: "gS6S7G8l_vA" },
        { title: "EVS Pedagogy", id: "gS6S7G8l_vA" }
      ],

      "Maths": [
        { title: "Number System", id: "kYJ5n1yT-00" },
        { title: "Percentage", id: "8mve0UoSxTo" }
      ],

      "EVS": [
        { title: "Environment", id: "gS6S7G8l_vA" },
        { title: "Food & Nutrition", id: "gS6S7G8l_vA" }
      ]
    },

    unacademy: {},
    careerwill: {}
  },



  /* ======================================================
     🪖 DEFENCE (NDA/CDS/AGNIVEER)
  ====================================================== */
  "Defence": {

    studyiq: {
      "Maths": [
        { title: "Trigonometry", id: "tG-wO1n9G2k" },
        { title: "Algebra", id: "kYJ5n1yT-00" }
      ],
      "GK/GS": [
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "Science", id: "gS6S7G8l_vA" }
      ]
    },

    unacademy: {}
  },



  /* ======================================================
     📘 CLASS 9 UP BOARD
  ====================================================== */
  "Class 9 UP Board": {

    pw: {
      "Physics": [
        { title: "गति (Motion)", id: "52AZBXB9kF8" },
        { title: "बल तथा गति के नियम", id: "g7U0ySnkE_A" },
        { title: "कार्य तथा ऊर्जा", id: "52AZBXB9kF8" },
        { title: "गुरुत्वाकर्षण", id: "g7U0ySnkE_A" },
        { title: "ध्वनि", id: "52AZBXB9kF8" }
      ],

      "Chemistry": [
        { title: "हमारे आस-पास के पदार्थ", id: "g7U0ySnkE_A" },
        { title: "क्या हमारे आस-पास के पदार्थ शुद्ध हैं?", id: "52AZBXB9kF8" },
        { title: "परमाणु एवं अणु", id: "g7U0ySnkE_A" },
        { title: "संरचना के परमाणु", id: "52AZBXB9kF8" }
      ],

      "Biology": [
        { title: "जीवन की मौलिक इकाई", id: "g7U0ySnkE_A" },
        { title: "ऊतक (Tissues)", id: "52AZBXB9kF8" },
        { title: "जीवन की विविधता", id: "g7U0ySnkE_A" },
        { title: "खाद्य संसाधनों में सुधार", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "संख्या पद्धति", id: "8mve0UoSxTo" },
        { title: "बहुपद", id: "tG-wO1n9G2k" },
        { title: "दो चर वाले रैखिक समीकरण", id: "kYJ5n1yT-00" },
        { title: "रेखाएँ और कोण", id: "8mve0UoSxTo" },
        { title: "त्रिभुज", id: "tG-wO1n9G2k" },
        { title: "चतुर्भुज", id: "kYJ5n1yT-00" },
        { title: "वृत्त", id: "8mve0UoSxTo" },
        { title: "हेरॉन का सूत्र", id: "tG-wO1n9G2k" },
        { title: "पृष्ठीय क्षेत्रफल एवं आयतन", id: "kYJ5n1yT-00" },
        { title: "सांख्यिकी", id: "8mve0UoSxTo" },
        { title: "प्रायिकता", id: "tG-wO1n9G2k" }
      ]
    },

    magnetbrains: {
      "Quant": [
        { title: "Simplification", id: "gS6S7G8l_vA" },
        { title: "Number Series", id: "gS6S7G8l_vA" },
        { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
        { title: "Approximation", id: "gS6S7G8l_vA" },
        { title: "Percentage", id: "gS6S7G8l_vA" },
        { title: "Profit & Loss", id: "gS6S7G8l_vA" },
        { title: "SI & CI", id: "gS6S7G8l_vA" },
        { title: "Time Work", id: "gS6S7G8l_vA" },
        { title: "Time Distance", id: "gS6S7G8l_vA" },
        { title: "Ratio", id: "gS6S7G8l_vA" },
        { title: "DI (Data Interpretation)", id: "gS6S7G8l_vA" }
      ],

      "Reasoning": [
        { title: "Puzzle", id: "8mve0UoSxTo" },
        { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
        { title: "Syllogism", id: "8mve0UoSxTo" },
        { title: "Inequality", id: "kYJ5n1yT-00" },
        { title: "Coding Decoding", id: "8mve0UoSxTo" },
        { title: "Blood Relation", id: "kYJ5n1yT-00" }
      ],

      "English": [
        { title: "Reading Comprehension", id: "JUDehE7jZow" },
        { title: "Cloze Test", id: "JUDehE7jZow" },
        { title: "Error Spotting", id: "JUDehE7jZow" },
        { title: "Para Jumble", id: "JUDehE7jZow" },
        { title: "Fill in the blanks", id: "JUDehE7jZow" }
      ]
    },

    unacademy: {},
    studyiq: {}
  },



  /* ======================================================
     📚 TEACHING (CTET/UPTET/SUPER TET)
  ====================================================== */
  "Teaching": {

    studyiq: {
      "Child Development (CDP)": [
        { title: "Piaget Theory", id: "gS6S7G8l_vA" },
        { title: "Vygotsky Theory", id: "gS6S7G8l_vA" },
        { title: "Learning Theories", id: "gS6S7G8l_vA" }
      ],

      "Pedagogy": [
        { title: "Hindi Pedagogy", id: "gS6S7G8l_vA" },
        { title: "Math Pedagogy", id: "gS6S7G8l_vA" },
        { title: "EVS Pedagogy", id: "gS6S7G8l_vA" }
      ],

      "Maths": [
        { title: "Number System", id: "kYJ5n1yT-00" },
        { title: "Percentage", id: "8mve0UoSxTo" }
      ],

      "EVS": [
        { title: "Environment", id: "gS6S7G8l_vA" },
        { title: "Food & Nutrition", id: "gS6S7G8l_vA" }
      ]
    },

    unacademy: {},
    careerwill: {}
  },



  /* ======================================================
     🪖 DEFENCE (NDA/CDS/AGNIVEER)
  ====================================================== */
  "Defence": {

    studyiq: {
      "Maths": [
        { title: "Trigonometry", id: "tG-wO1n9G2k" },
        { title: "Algebra", id: "kYJ5n1yT-00" }
      ],
      "GK/GS": [
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "Science", id: "gS6S7G8l_vA" }
      ]
    },

    unacademy: {}
  },



  /* ======================================================
     📘 CLASS 9 UP BOARD
  ====================================================== */
  "Class 9 UP Board": {

    pw: {
      "Physics": [
        { title: "गति (Motion)", id: "g7U0ySnkE_A" },
        { title: "बल तथा गति के नियम", id: "52AZBXB9kF8" },
        { title: "कार्य तथा ऊर्जा", id: "g7U0ySnkE_A" },
        { title: "गुरुत्वाकर्षण", id: "52AZBXB9kF8" },
        { title: "ध्वनि", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "हमारे आस-पास के पदार्थ", id: "52AZBXB9kF8" },
        { title: "क्या हमारे आस-पास के पदार्थ शुद्ध हैं?", id: "g7U0ySnkE_A" },
        { title: "परमाणु एवं अणु", id: "52AZBXB9kF8" },
        { title: "संरचना के परमाणु", id: "g7U0ySnkE_A" }
      ],

      "Biology": [
        { title: "जीवन की मौलिक इकाई", id: "52AZBXB9kF8" },
        { title: "ऊतक (Tissues)", id: "g7U0ySnkE_A" },
        { title: "जीवन की विविधता", id: "52AZBXB9kF8" },
        { title: "खाद्य संसाधनों में सुधार", id: "g7U0ySnkE_A" }
      ],

      "Mathematics": [
        { title: "संख्या पद्धति", id: "8mve0UoSxTo" },
        { title: "बहुपद", id: "tG-wO1n9G2k" },
        { title: "दो चर वाले रैखिक समीकरण", id: "kYJ5n1yT-00" },
        { title: "रेखाएँ और कोण", id: "8mve0UoSxTo" },
        { title: "त्रिभुज", id: "tG-wO1n9G2k" },
        { title: "चतुर्भुज", id: "kYJ5n1yT-00" },
        { title: "वृत्त", id: "8mve0UoSxTo" },
        { title: "हेरॉन का सूत्र", id: "tG-wO1n9G2k" },
        { title: "पृष्ठीय क्षेत्रफल एवं आयतन", id: "kYJ5n1yT-00" },
        { title: "सांख्यिकी", id: "8mve0UoSxTo" },
        { title: "प्रायिकता", id: "tG-wO1n9G2k" }
      ]
    },
    vidyakul: {
      "Quant": [
        { title: "Simplification", id: "gS6S7G8l_vA" },
        { title: "Number Series", id: "gS6S7G8l_vA" },
        { title: "Quadratic Equation", id: "gS6S7G8l_vA" },
        { title: "Approximation", id: "gS6S7G8l_vA" },
        { title: "Percentage", id: "gS6S7G8l_vA" },
        { title: "Profit & Loss", id: "gS6S7G8l_vA" },
        { title: "SI & CI", id: "gS6S7G8l_vA" },
        { title: "Time Work", id: "gS6S7G8l_vA" },
        { title: "Time Distance", id: "gS6S7G8l_vA" },
        { title: "Ratio", id: "gS6S7G8l_vA" },
        { title: "DI (Data Interpretation)", id: "gS6S7G8l_vA" }
      ],

      "Reasoning": [
        { title: "Puzzle", id: "8mve0UoSxTo" },
        { title: "Seating Arrangement", id: "kYJ5n1yT-00" },
        { title: "Syllogism", id: "8mve0UoSxTo" },
        { title: "Inequality", id: "kYJ5n1yT-00" },
        { title: "Coding Decoding", id: "8mve0UoSxTo" },
        { title: "Blood Relation", id: "kYJ5n1yT-00" }
      ],

      "English": [
        { title: "Reading Comprehension", id: "JUDehE7jZow" },
        { title: "Cloze Test", id: "JUDehE7jZow" },
        { title: "Error Spotting", id: "JUDehE7jZow" },
        { title: "Para Jumble", id: "JUDehE7jZow" },
        { title: "Fill in the blanks", id: "JUDehE7jZow" }
      ]
    },

    unacademy: {},
    studyiq: {}
  },



  /* ======================================================
     📚 TEACHING (CTET/UPTET/SUPER TET)
  ====================================================== */
  "Teaching": {

    studyiq: {
      "Child Development (CDP)": [
        { title: "Piaget Theory", id: "gS6S7G8l_vA" },
        { title: "Vygotsky Theory", id: "gS6S7G8l_vA" },
        { title: "Learning Theories", id: "gS6S7G8l_vA" }
      ],

      "Pedagogy": [
        { title: "Hindi Pedagogy", id: "gS6S7G8l_vA" },
        { title: "Math Pedagogy", id: "gS6S7G8l_vA" },
        { title: "EVS Pedagogy", id: "gS6S7G8l_vA" }
      ],

      "Maths": [
        { title: "Number System", id: "kYJ5n1yT-00" },
        { title: "Percentage", id: "8mve0UoSxTo" }
      ],

      "EVS": [
        { title: "Environment", id: "gS6S7G8l_vA" },
        { title: "Food & Nutrition", id: "gS6S7G8l_vA" }
      ]
    },

    unacademy: {},
    careerwill: {}
  },



  /* ======================================================
     🪖 DEFENCE (NDA/CDS/AGNIVEER)
  ====================================================== */
  "Defence": {

    studyiq: {
      "Maths": [
        { title: "Trigonometry", id: "tG-wO1n9G2k" },
        { title: "Algebra", id: "kYJ5n1yT-00" }
      ],
      "GK/GS": [
        { title: "Current Affairs", id: "gS6S7G8l_vA" },
        { title: "Science", id: "gS6S7G8l_vA" }
      ]
    },

    unacademy: {}
  },



  /* ======================================================
     📘 CLASS 9 UP BOARD
  ====================================================== */
  "Class 9 UP Board": {

    pw: {
      "Physics": [
        { title: "गति (Motion)", id: "52AZBXB9kF8" },
        { title: "बल तथा गति के नियम", id: "g7U0ySnkE_A" },
        { title: "कार्य तथा ऊर्जा", id: "52AZBXB9kF8" },
        { title: "गुरुत्वाकर्षण", id: "g7U0ySnkE_A" },
        { title: "ध्वनि", id: "52AZBXB9kF8" }
      ],

      "Chemistry": [
        { title: "हमारे आस-पास के पदार्थ", id: "g7U0ySnkE_A" },
        { title: "क्या हमारे आस-पास के पदार्थ शुद्ध हैं?", id: "52AZBXB9kF8" },
        { title: "परमाणु एवं अणु", id: "g7U0ySnkE_A" },
        { title: "संरचना के परमाणु", id: "52AZBXB9kF8" }
      ],

      "Biology": [
        { title: "जीवन की मौलिक इकाई", id: "g7U0ySnkE_A" },
        { title: "ऊतक (Tissues)", id: "52AZBXB9kF8" },
        { title: "जीवन की विविधता", id: "g7U0ySnkE_A" },
        { title: "खाद्य संसाधनों में सुधार", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "संख्या पद्धति", id: "8mve0UoSxTo" },
        { title: "बहुपद", id: "tG-wO1n9G2k" },
        { title: "दो चर वाले रैखिक समीकरण", id: "kYJ5n1yT-00" },
        { title: "रेखाएँ और कोण", id: "8mve0UoSxTo" },
        { title: "त्रिभुज", id: "tG-wO1n9G2k" },
        { title: "चतुर्भुज", id: "kYJ5n1yT-00" },
        { title: "वृत्त", id: "8mve0UoSxTo" },
        
        { title: "हेरॉन का सूत्र video 1", id: "tG-wO1n9G2k" },
            { title: "हेरॉन का सूत्र video 2", id: "kYJ5n1yT-00" },
        { title: "पृष्ठीय क्षेत्रफल एवं आयतन", id: "8mve0UoSxTo" },
        { title: "सांख्यिकी", id: "tG-wO1n9G2k" },
        { title: "प्रायिकता", id: "kYJ5n1yT-00" }
      ]
    }
  },



  /* ======================================================
     📘 CLASS 10 UP BOARD
  ====================================================== */
  "Class 10 UP Board": {

    pw: {
      "Physics": [
        { title: "प्रकाश – परावर्तन और अपवर्तन", id: "g7U0ySnkE_A" },
        { title: "मानव नेत्र तथा रंगबिरंगा संसार", id: "52AZBXB9kF8" },
        { title: "विद्युत", id: "g7U0ySnkE_A" },
        { title: "विद्युत धारा के चुंबकीय प्रभाव", id: "52AZBXB9kF8" },
        { title: "हमारा पर्यावरण", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "रासायनिक अभिक्रियाएँ एवं समीकरण", id: "52AZBXB9kF8" },
        { title: "अम्ल, क्षार एवं लवण", id: "g7U0ySnkE_A" },
        { title: "धातु एवं अधातु", id: "52AZBXB9kF8" },
        { title: "कार्बन एवं उसके यौगिक", id: "g7U0ySnkE_A" }
      ],

      "Biology": [
        { title: "जैव प्रक्रम", id: "52AZBXB9kF8" },
        { title: "नियंत्रण एवं समन्वय", id: "g7U0ySnkE_A" },
        { title: "जीव जनन कैसे करते हैं", id: "52AZBXB9kF8" },
        { title: "आनुवंशिकता एवं जैव विकास", id: "g7U0ySnkE_A" },
        { title: "संसाधनों का प्रबंधन", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "वास्तविक संख्याएँ", id: "8mve0UoSxTo" },
        { title: "बहुपद", id: "tG-wO1n9G2k" },
        { title: "दो चर वाले रैखिक समीकरण", id: "kYJ5n1yT-00" },
        { title: "द्विघात समीकरण", id: "8mve0UoSxTo" },
        { title: "समांतर श्रेणियाँ", id: "tG-wO1n9G2k" },
        { title: "त्रिकोणमिति", id: "kYJ5n1yT-00" },
        { title: "निर्देशांक ज्यामिति", id: "8mve0UoSxTo" },
        { title: "वृत्त", id: "tG-wO1n9G2k" },
        { title: "सांख्यिकी", id: "kYJ5n1yT-00" },
        { title: "प्रायिकता", id: "8mve0UoSxTo" }
      ]
    },

    magnetbrains: {
      "Physics": [
        { title: "प्रकाश – परावर्तन और अपवर्तन", id: "g7U0ySnkE_A" },
        { title: "मानव नेत्र तथा रंगबिरंगा संसार", id: "52AZBXB9kF8" },
        { title: "विद्युत", id: "g7U0ySnkE_A" },
        { title: "विद्युत धारा के चुंबकीय प्रभाव", id: "52AZBXB9kF8" },
        { title: "हमारा पर्यावरण", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "रासायनिक अभिक्रियाएँ एवं समीकरण", id: "52AZBXB9kF8" },
        { title: "अम्ल, क्षार एवं लवण", id: "g7U0ySnkE_A" },
        { title: "धातु एवं अधातु", id: "52AZBXB9kF8" },
        { title: "कार्बन एवं उसके यौगिक", id: "g7U0ySnkE_A" }
      ],

      "Biology": [
        { title: "जैव प्रक्रम", id: "52AZBXB9kF8" },
        { title: "नियंत्रण एवं समन्वय", id: "g7U0ySnkE_A" },
        { title: "जीव जनन कैसे करते हैं", id: "52AZBXB9kF8" },
        { title: "आनुवंशिकता एवं जैव विकास", id: "g7U0ySnkE_A" },
        { title: "संसाधनों का प्रबंधन", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "वास्तविक संख्याएँ", id: "tG-wO1n9G2k" },
        { title: "बहुपद", id: "kYJ5n1yT-00" },
        { title: "दो चर वाले रैखिक समीकरण", id: "8mve0UoSxTo" },
        { title: "द्विघात समीकरण", id: "tG-wO1n9G2k" },
        { title: "समांतर श्रेणियाँ", id: "kYJ5n1yT-00" },
        { title: "त्रिकोणमिति", id: "8mve0UoSxTo" },
        { title: "निर्देशांक ज्यामिति", id: "tG-wO1n9G2k" },
        { title: "वृत्त", id: "kYJ5n1yT-00" },
        { title: "सांख्यिकी", id: "8mve0UoSxTo" },
        { title: "प्रायिकता", id: "tG-wO1n9G2k" }
      ]
    },
    vidyakul: {
      "Physics": [
        { title: "प्रकाश – परावर्तन और अपवर्तन", id: "g7U0ySnkE_A" },
        { title: "मानव नेत्र तथा रंगबिरंगा संसार", id: "52AZBXB9kF8" },
        { title: "विद्युत", id: "g7U0ySnkE_A" },
        { title: "विद्युत धारा के चुंबकीय प्रभाव", id: "52AZBXB9kF8" },
        { title: "हमारा पर्यावरण", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "रासायनिक अभिक्रियाएँ एवं समीकरण", id: "52AZBXB9kF8" },
        { title: "अम्ल, क्षार एवं लवण", id: "g7U0ySnkE_A" },
        { title: "धातु एवं अधातु", id: "52AZBXB9kF8" },
        { title: "कार्बन एवं उसके यौगिक", id: "g7U0ySnkE_A" }
      ],

      "Biology": [
        { title: "जैव प्रक्रम", id: "52AZBXB9kF8" },
        { title: "नियंत्रण एवं समन्वय", id: "g7U0ySnkE_A" },
        { title: "जीव जनन कैसे करते हैं", id: "52AZBXB9kF8" },
        { title: "आनुवंशिकता एवं जैव विकास", id: "g7U0ySnkE_A" },
        { title: "संसाधनों का प्रबंधन", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "वास्तविक संख्याएँ", id: "kYJ5n1yT-00" },
        { title: "बहुपद", id: "8mve0UoSxTo" },
        { title: "दो चर वाले रैखिक समीकरण", id: "tG-wO1n9G2k" },
        { title: "द्विघात समीकरण", id: "kYJ5n1yT-00" },
        { title: "समांतर श्रेणियाँ", id: "8mve0UoSxTo" },
        { title: "त्रिकोणमिति", id: "tG-wO1n9G2k" },
        { title: "निर्देशांक ज्यामिति", id: "kYJ5n1yT-00" },
        { title: "वृत्त", id: "8mve0UoSxTo" },
        { title: "सांख्यिकी", id: "tG-wO1n9G2k" },
        { title: "प्रायिकता", id: "kYJ5n1yT-00" }
      ]
    }
  },



  /* ======================================================
     📙 CLASS 11 UP BOARD
  ====================================================== */
  "Class 11 UP Board": {

    pw: {
      "Physics": [
        { title: "Units & Measurements", id: "g7U0ySnkE_A" },
        { title: "Motion in a Straight Line", id: "52AZBXB9kF8" },
        { title: "Motion in a Plane", id: "g7U0ySnkE_A" },
        { title: "Laws of Motion", id: "52AZBXB9kF8" },
        { title: "Work, Energy & Power", id: "g7U0ySnkE_A" },
        { title: "System of Particles", id: "52AZBXB9kF8" },
        { title: "Rotational Motion", id: "g7U0ySnkE_A" },
        { title: "Gravitation", id: "52AZBXB9kF8" },
        { title: "Mechanical Properties of Solids", id: "g7U0ySnkE_A" },
        { title: "Mechanical Properties of Fluids", id: "52AZBXB9kF8" },
        { title: "Thermal Properties of Matter", id: "g7U0ySnkE_A" },
        { title: "Thermodynamics", id: "52AZBXB9kF8" },
        { title: "Kinetic Theory", id: "g7U0ySnkE_A" },
        { title: "Oscillations", id: "52AZBXB9kF8" },
        { title: "Waves", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "52AZBXB9kF8" },
        { title: "Structure of Atom", id: "g7U0ySnkE_A" },
        { title: "Classification of Elements", id: "52AZBXB9kF8" },
        { title: "Chemical Bonding", id: "g7U0ySnkE_A" },
        { title: "States of Matter", id: "52AZBXB9kF8" },
        { title: "Thermodynamics", id: "g7U0ySnkE_A" },
        { title: "Equilibrium", id: "52AZBXB9kF8" },
        { title: "Redox Reactions", id: "g7U0ySnkE_A" },
        { title: "Hydrogen", id: "52AZBXB9kF8" },
        { title: "s-Block Elements", id: "g7U0ySnkE_A" },
        { title: "p-Block Elements", id: "52AZBXB9kF8" },
        { title: "Organic Chemistry Basics", id: "g7U0ySnkE_A" },
        { title: "Hydrocarbons", id: "52AZBXB9kF8" },
        { title: "Environmental Chemistry", id: "g7U0ySnkE_A" }
      ],

      "Mathematics": [
        { title: "Sets", id: "8mve0UoSxTo" },
        { title: "Relations & Functions", id: "tG-wO1n9G2k" },
        { title: "Trigonometric Functions", id: "kYJ5n1yT-00" },
        { title: "Complex Numbers", id: "8mve0UoSxTo" },
        { title: "Linear Inequalities", id: "tG-wO1n9G2k" },
        { title: "Permutations & Combinations", id: "kYJ5n1yT-00" },
        { title: "Binomial Theorem", id: "8mve0UoSxTo" },
        { title: "Sequences & Series", id: "tG-wO1n9G2k" },
        { title: "Straight Lines", id: "kYJ5n1yT-00" },
        { title: "Conic Sections", id: "8mve0UoSxTo" },
        { title: "Limits & Derivatives", id: "tG-wO1n9G2k" },
        { title: "Statistics", id: "kYJ5n1yT-00" },
        { title: "Probability", id: "8mve0UoSxTo" }
      ],

      "Biology": [
        { title: "The Living World", id: "52AZBXB9kF8" },
        { title: "Biological Classification", id: "g7U0ySnkE_A" },
        { title: "Plant Kingdom", id: "52AZBXB9kF8" },
        { title: "Animal Kingdom", id: "g7U0ySnkE_A" },
        { title: "Morphology of Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Anatomy of Flowering Plants", id: "g7U0ySnkE_A" },
        { title: "Structural Organisation in Animals", id: "52AZBXB9kF8" },
        { title: "Cell: Structure & Function", id: "g7U0ySnkE_A" },
        { title: "Biomolecules", id: "52AZBXB9kF8" },
        { title: "Cell Cycle & Division", id: "g7U0ySnkE_A" },
        { title: "Transport in Plants", id: "52AZBXB9kF8" },
        { title: "Mineral Nutrition", id: "g7U0ySnkE_A" },
        { title: "Photosynthesis", id: "52AZBXB9kF8" },
        { title: "Respiration in Plants", id: "g7U0ySnkE_A" },
        { title: "Plant Growth & Development", id: "52AZBXB9kF8" },
        { title: "Digestion & Absorption", id: "g7U0ySnkE_A" },
        { title: "Breathing & Exchange of Gases", id: "52AZBXB9kF8" },
        { title: "Body Fluids & Circulation", id: "g7U0ySnkE_A" },
        { title: "Excretory Products", id: "52AZBXB9kF8" },
        { title: "Locomotion & Movement", id: "g7U0ySnkE_A" },
        { title: "Neural Control", id: "52AZBXB9kF8" },
        { title: "Chemical Coordination", id: "g7U0ySnkE_A" }
      ]
    },

    unacademy: {
       "Physics": [
        { title: "Units & Measurements", id: "52AZBXB9kF8" },
        { title: "Motion in a Straight Line", id: "g7U0ySnkE_A" },
        { title: "Motion in a Plane", id: "52AZBXB9kF8" },
        { title: "Laws of Motion", id: "g7U0ySnkE_A" },
        { title: "Work, Energy & Power", id: "52AZBXB9kF8" },
        { title: "System of Particles", id: "g7U0ySnkE_A" },
        { title: "Rotational Motion", id: "52AZBXB9kF8" },
        { title: "Gravitation", id: "g7U0ySnkE_A" },
        { title: "Mechanical Properties of Solids", id: "52AZBXB9kF8" },
        { title: "Mechanical Properties of Fluids", id: "g7U0ySnkE_A" },
        { title: "Thermal Properties of Matter", id: "52AZBXB9kF8" },
        { title: "Thermodynamics", id: "g7U0ySnkE_A" },
        { title: "Kinetic Theory", id: "52AZBXB9kF8" },
        { title: "Oscillations", id: "g7U0ySnkE_A" },
        { title: "Waves", id: "52AZBXB9kF8" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "g7U0ySnkE_A" },
        { title: "Structure of Atom", id: "52AZBXB9kF8" },
        { title: "Classification of Elements", id: "g7U0ySnkE_A" },
        { title: "Chemical Bonding", id: "52AZBXB9kF8" },
        { title: "States of Matter", id: "g7U0ySnkE_A" },
        { title: "Thermodynamics", id: "52AZBXB9kF8" },
        { title: "Equilibrium", id: "g7U0ySnkE_A" },
        { title: "Redox Reactions", id: "52AZBXB9kF8" },
        { title: "Hydrogen", id: "g7U0ySnkE_A" },
        { title: "s-Block Elements", id: "52AZBXB9kF8" },
        { title: "p-Block Elements", id: "g7U0ySnkE_A" },
        { title: "Organic Chemistry Basics", id: "52AZBXB9kF8" },
        { title: "Hydrocarbons", id: "g7U0ySnkE_A" },
        { title: "Environmental Chemistry", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "Sets", id: "tG-wO1n9G2k" },
        { title: "Relations & Functions", id: "kYJ5n1yT-00" },
        { title: "Trigonometric Functions", id: "8mve0UoSxTo" },
        { title: "Complex Numbers", id: "tG-wO1n9G2k" },
        { title: "Linear Inequalities", id: "kYJ5n1yT-00" },
        { title: "Permutations & Combinations", id: "8mve0UoSxTo" },
        { title: "Binomial Theorem", id: "tG-wO1n9G2k" },
        { title: "Sequences & Series", id: "kYJ5n1yT-00" },
        { title: "Straight Lines", id: "8mve0UoSxTo" },
        { title: "Conic Sections", id: "tG-wO1n9G2k" },
        { title: "Limits & Derivatives", id: "kYJ5n1yT-00" },
        { title: "Statistics", id: "8mve0UoSxTo" },
        { title: "Probability", id: "tG-wO1n9G2k" }
      ],

      "Biology": [
        { title: "The Living World", id: "g7U0ySnkE_A" },
        { title: "Biological Classification", id: "52AZBXB9kF8" },
        { title: "Plant Kingdom", id: "g7U0ySnkE_A" },
        { title: "Animal Kingdom", id: "52AZBXB9kF8" },
        { title: "Morphology of Flowering Plants", id: "g7U0ySnkE_A" },
        { title: "Anatomy of Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Structural Organisation in Animals", id: "g7U0ySnkE_A" },
        { title: "Cell: Structure & Function", id: "52AZBXB9kF8" },
        { title: "Biomolecules", id: "g7U0ySnkE_A" },
        { title: "Cell Cycle & Division", id: "52AZBXB9kF8" },
        { title: "Transport in Plants", id: "g7U0ySnkE_A" },
        { title: "Mineral Nutrition", id: "52AZBXB9kF8" },
        { title: "Photosynthesis", id: "g7U0ySnkE_A" },
        { title: "Respiration in Plants", id: "52AZBXB9kF8" },
        { title: "Plant Growth & Development", id: "g7U0ySnkE_A" },
        { title: "Digestion & Absorption", id: "52AZBXB9kF8" },
        { title: "Breathing & Exchange of Gases", id: "g7U0ySnkE_A" },
        { title: "Body Fluids & Circulation", id: "52AZBXB9kF8" },
        { title: "Excretory Products", id: "g7U0ySnkE_A" },
        { title: "Locomotion & Movement", id: "52AZBXB9kF8" },
        { title: "Neural Control", id: "g7U0ySnkE_A" },
        { title: "Chemical Coordination", id: "52AZBXB9kF8" }
      ]
    },
    magnetbrains: {
       "Physics": [
        { title: "Units & Measurements", id: "g7U0ySnkE_A" },
        { title: "Motion in a Straight Line", id: "52AZBXB9kF8" },
        { title: "Motion in a Plane", id: "g7U0ySnkE_A" },
        { title: "Laws of Motion", id: "52AZBXB9kF8" },
        { title: "Work, Energy & Power", id: "g7U0ySnkE_A" },
        { title: "System of Particles", id: "52AZBXB9kF8" },
        { title: "Rotational Motion", id: "g7U0ySnkE_A" },
        { title: "Gravitation", id: "52AZBXB9kF8" },
        { title: "Mechanical Properties of Solids", id: "g7U0ySnkE_A" },
        { title: "Mechanical Properties of Fluids", id: "52AZBXB9kF8" },
        { title: "Thermal Properties of Matter", id: "g7U0ySnkE_A" },
        { title: "Thermodynamics", id: "52AZBXB9kF8" },
        { title: "Kinetic Theory", id: "g7U0ySnkE_A" },
        { title: "Oscillations", id: "52AZBXB9kF8" },
        { title: "Waves", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "52AZBXB9kF8" },
        { title: "Structure of Atom", id: "g7U0ySnkE_A" },
        { title: "Classification of Elements", id: "52AZBXB9kF8" },
        { title: "Chemical Bonding", id: "g7U0ySnkE_A" },
        { title: "States of Matter", id: "52AZBXB9kF8" },
        { title: "Thermodynamics", id: "g7U0ySnkE_A" },
        { title: "Equilibrium", id: "52AZBXB9kF8" },
        { title: "Redox Reactions", id: "g7U0ySnkE_A" },
        { title: "Hydrogen", id: "52AZBXB9kF8" },
        { title: "s-Block Elements", id: "g7U0ySnkE_A" },
        { title: "p-Block Elements", id: "52AZBXB9kF8" },
        { title: "Organic Chemistry Basics", id: "g7U0ySnkE_A" },
        { title: "Hydrocarbons", id: "52AZBXB9kF8" },
        { title: "Environmental Chemistry", id: "g7U0ySnkE_A" }
      ],

      "Mathematics": [
        { title: "Sets", id: "kYJ5n1yT-00" },
        { title: "Relations & Functions", id: "8mve0UoSxTo" },
        { title: "Trigonometric Functions", id: "tG-wO1n9G2k" },
        { title: "Complex Numbers", id: "kYJ5n1yT-00" },
        { title: "Linear Inequalities", id: "8mve0UoSxTo" },
        { title: "Permutations & Combinations", id: "tG-wO1n9G2k" },
        { title: "Binomial Theorem", id: "kYJ5n1yT-00" },
        { title: "Sequences & Series", id: "8mve0UoSxTo" },
        { title: "Straight Lines", id: "tG-wO1n9G2k" },
        { title: "Conic Sections", id: "kYJ5n1yT-00" },
        { title: "Limits & Derivatives", id: "8mve0UoSxTo" },
        { title: "Statistics", id: "tG-wO1n9G2k" },
        { title: "Probability", id: "kYJ5n1yT-00" }
      ],

      "Biology": [
        { title: "The Living World", id: "52AZBXB9kF8" },
        { title: "Biological Classification", id: "g7U0ySnkE_A" },
        { title: "Plant Kingdom", id: "52AZBXB9kF8" },
        { title: "Animal Kingdom", id: "g7U0ySnkE_A" },
        { title: "Morphology of Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Anatomy of Flowering Plants", id: "g7U0ySnkE_A" },
        { title: "Structural Organisation in Animals", id: "52AZBXB9kF8" },
        { title: "Cell: Structure & Function", id: "g7U0ySnkE_A" },
        { title: "Biomolecules", id: "52AZBXB9kF8" },
        { title: "Cell Cycle & Division", id: "g7U0ySnkE_A" },
        { title: "Transport in Plants", id: "52AZBXB9kF8" },
        { title: "Mineral Nutrition", id: "g7U0ySnkE_A" },
        { title: "Photosynthesis", id: "52AZBXB9kF8" },
        { title: "Respiration in Plants", id: "g7U0ySnkE_A" },
        { title: "Plant Growth & Development", id: "52AZBXB9kF8" },
        { title: "Digestion & Absorption", id: "g7U0ySnkE_A" },
        { title: "Breathing & Exchange of Gases", id: "52AZBXB9kF8" },
        { title: "Body Fluids & Circulation", id: "g7U0ySnkE_A" },
        { title: "Excretory Products", id: "52AZBXB9kF8" },
        { title: "Locomotion & Movement", id: "g7U0ySnkE_A" },
        { title: "Neural Control", id: "52AZBXB9kF8" },
        { title: "Chemical Coordination", id: "g7U0ySnkE_A" }
      ]
    },
    vedantu: {
       "Physics": [
        { title: "Units & Measurements", id: "52AZBXB9kF8" },
        { title: "Motion in a Straight Line", id: "g7U0ySnkE_A" },
        { title: "Motion in a Plane", id: "52AZBXB9kF8" },
        { title: "Laws of Motion", id: "g7U0ySnkE_A" },
        { title: "Work, Energy & Power", id: "52AZBXB9kF8" },
        { title: "System of Particles", id: "g7U0ySnkE_A" },
        { title: "Rotational Motion", id: "52AZBXB9kF8" },
        { title: "Gravitation", id: "g7U0ySnkE_A" },
        { title: "Mechanical Properties of Solids", id: "52AZBXB9kF8" },
        { title: "Mechanical Properties of Fluids", id: "g7U0ySnkE_A" },
        { title: "Thermal Properties of Matter", id: "52AZBXB9kF8" },
        { title: "Thermodynamics", id: "g7U0ySnkE_A" },
        { title: "Kinetic Theory", id: "52AZBXB9kF8" },
        { title: "Oscillations", id: "g7U0ySnkE_A" },
        { title: "Waves", id: "52AZBXB9kF8" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "g7U0ySnkE_A" },
        { title: "Structure of Atom", id: "52AZBXB9kF8" },
        { title: "Classification of Elements", id: "g7U0ySnkE_A" },
        { title: "Chemical Bonding", id: "52AZBXB9kF8" },
        { title: "States of Matter", id: "g7U0ySnkE_A" },
        { title: "Thermodynamics", id: "52AZBXB9kF8" },
        { title: "Equilibrium", id: "g7U0ySnkE_A" },
        { title: "Redox Reactions", id: "52AZBXB9kF8" },
        { title: "Hydrogen", id: "g7U0ySnkE_A" },
        { title: "s-Block Elements", id: "52AZBXB9kF8" },
        { title: "p-Block Elements", id: "g7U0ySnkE_A" },
        { title: "Organic Chemistry Basics", id: "52AZBXB9kF8" },
        { title: "Hydrocarbons", id: "g7U0ySnkE_A" },
        { title: "Environmental Chemistry", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "Sets", id: "8mve0UoSxTo" },
        { title: "Relations & Functions", id: "tG-wO1n9G2k" },
        { title: "Trigonometric Functions", id: "kYJ5n1yT-00" },
        { title: "Complex Numbers", id: "8mve0UoSxTo" },
        { title: "Linear Inequalities", id: "tG-wO1n9G2k" },
        { title: "Permutations & Combinations", id: "kYJ5n1yT-00" },
        { title: "Binomial Theorem", id: "8mve0UoSxTo" },
        { title: "Sequences & Series", id: "tG-wO1n9G2k" },
        { title: "Straight Lines", id: "kYJ5n1yT-00" },
        { title: "Conic Sections", id: "8mve0UoSxTo" },
        { title: "Limits & Derivatives", id: "tG-wO1n9G2k" },
        { title: "Statistics", id: "kYJ5n1yT-00" },
        { title: "Probability", id: "8mve0UoSxTo" }
      ],

      "Biology": [
        { title: "The Living World", id: "g7U0ySnkE_A" },
        { title: "Biological Classification", id: "52AZBXB9kF8" },
        { title: "Plant Kingdom", id: "g7U0ySnkE_A" },
        { title: "Animal Kingdom", id: "52AZBXB9kF8" },
        { title: "Morphology of Flowering Plants", id: "g7U0ySnkE_A" },
        { title: "Anatomy of Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Structural Organisation in Animals", id: "g7U0ySnkE_A" },
        { title: "Cell: Structure & Function", id: "52AZBXB9kF8" },
        { title: "Biomolecules", id: "g7U0ySnkE_A" },
        { title: "Cell Cycle & Division", id: "52AZBXB9kF8" },
        { title: "Transport in Plants", id: "g7U0ySnkE_A" },
        { title: "Mineral Nutrition", id: "52AZBXB9kF8" },
        { title: "Photosynthesis", id: "g7U0ySnkE_A" },
        { title: "Respiration in Plants", id: "52AZBXB9kF8" },
        { title: "Plant Growth & Development", id: "g7U0ySnkE_A" },
        { title: "Digestion & Absorption", id: "52AZBXB9kF8" },
        { title: "Breathing & Exchange of Gases", id: "g7U0ySnkE_A" },
        { title: "Body Fluids & Circulation", id: "52AZBXB9kF8" },
        { title: "Excretory Products", id: "g7U0ySnkE_A" },
        { title: "Locomotion & Movement", id: "52AZBXB9kF8" },
        { title: "Neural Control", id: "g7U0ySnkE_A" },
        { title: "Chemical Coordination", id: "52AZBXB9kF8" }
      ]
    },
    khanacademy: {
       "Physics": [
        { title: "Units & Measurements", id: "g7U0ySnkE_A" },
        { title: "Motion in a Straight Line", id: "52AZBXB9kF8" },
        { title: "Motion in a Plane", id: "g7U0ySnkE_A" },
        { title: "Laws of Motion", id: "52AZBXB9kF8" },
        { title: "Work, Energy & Power", id: "g7U0ySnkE_A" },
        { title: "System of Particles", id: "52AZBXB9kF8" },
        { title: "Rotational Motion", id: "g7U0ySnkE_A" },
        { title: "Gravitation", id: "52AZBXB9kF8" },
        { title: "Mechanical Properties of Solids", id: "g7U0ySnkE_A" },
        { title: "Mechanical Properties of Fluids", id: "52AZBXB9kF8" },
        { title: "Thermal Properties of Matter", id: "g7U0ySnkE_A" },
        { title: "Thermodynamics", id: "52AZBXB9kF8" },
        { title: "Kinetic Theory", id: "g7U0ySnkE_A" },
        { title: "Oscillations", id: "52AZBXB9kF8" },
        { title: "Waves", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "52AZBXB9kF8" },
        { title: "Structure of Atom", id: "g7U0ySnkE_A" },
        { title: "Classification of Elements", id: "52AZBXB9kF8" },
        { title: "Chemical Bonding", id: "g7U0ySnkE_A" },
        { title: "States of Matter", id: "52AZBXB9kF8" },
        { title: "Thermodynamics", id: "g7U0ySnkE_A" },
        { title: "Equilibrium", id: "52AZBXB9kF8" },
        { title: "Redox Reactions", id: "g7U0ySnkE_A" },
        { title: "Hydrogen", id: "52AZBXB9kF8" },
        { title: "s-Block Elements", id: "g7U0ySnkE_A" },
        { title: "p-Block Elements", id: "52AZBXB9kF8" },
        { title: "Organic Chemistry Basics", id: "g7U0ySnkE_A" },
        { title: "Hydrocarbons", id: "52AZBXB9kF8" },
        { title: "Environmental Chemistry", id: "g7U0ySnkE_A" }
      ],

      "Mathematics": [
        { title: "Sets", id: "tG-wO1n9G2k" },
        { title: "Relations & Functions", id: "kYJ5n1yT-00" },
        { title: "Trigonometric Functions", id: "8mve0UoSxTo" },
        { title: "Complex Numbers", id: "tG-wO1n9G2k" },
        { title: "Linear Inequalities", id: "kYJ5n1yT-00" },
        { title: "Permutations & Combinations", id: "8mve0UoSxTo" },
        { title: "Binomial Theorem", id: "tG-wO1n9G2k" },
        { title: "Sequences & Series", id: "kYJ5n1yT-00" },
        { title: "Straight Lines", id: "8mve0UoSxTo" },
        { title: "Conic Sections", id: "tG-wO1n9G2k" },
        { title: "Limits & Derivatives", id: "kYJ5n1yT-00" },
        { title: "Statistics", id: "8mve0UoSxTo" },
        { title: "Probability", id: "tG-wO1n9G2k" }
      ],

      "Biology": [
        { title: "The Living World", id: "52AZBXB9kF8" },
        { title: "Biological Classification", id: "g7U0ySnkE_A" },
        { title: "Plant Kingdom", id: "52AZBXB9kF8" },
        { title: "Animal Kingdom", id: "g7U0ySnkE_A" },
        { title: "Morphology of Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Anatomy of Flowering Plants", id: "g7U0ySnkE_A" },
        { title: "Structural Organisation in Animals", id: "52AZBXB9kF8" },
        { title: "Cell: Structure & Function", id: "g7U0ySnkE_A" },
        { title: "Biomolecules", id: "52AZBXB9kF8" },
        { title: "Cell Cycle & Division", id: "g7U0ySnkE_A" },
        { title: "Transport in Plants", id: "52AZBXB9kF8" },
        { title: "Mineral Nutrition", id: "g7U0ySnkE_A" },
        { title: "Photosynthesis", id: "52AZBXB9kF8" },
        { title: "Respiration in Plants", id: "g7U0ySnkE_A" },
        { title: "Plant Growth & Development", id: "52AZBXB9kF8" },
        { title: "Digestion & Absorption", id: "g7U0ySnkE_A" },
        { title: "Breathing & Exchange of Gases", id: "52AZBXB9kF8" },
        { title: "Body Fluids & Circulation", id: "g7U0ySnkE_A" },
        { title: "Excretory Products", id: "52AZBXB9kF8" },
        { title: "Locomotion & Movement", id: "g7U0ySnkE_A" },
        { title: "Neural Control", id: "52AZBXB9kF8" },
        { title: "Chemical Coordination", id: "g7U0ySnkE_A" }
      ]
    }
  },



  /* ======================================================
     📕 CLASS 12 UP BOARD
  ====================================================== */
  "Class 12 UP Board": {

    pw: {
      "Physics": [
        { title: "Electric Charges & Fields", id: "52AZBXB9kF8" },
        { title: "Electrostatic Potential & Capacitance", id: "g7U0ySnkE_A" },
        { title: "Current Electricity", id: "52AZBXB9kF8" },
        { title: "Moving Charges & Magnetism", id: "g7U0ySnkE_A" },
        { title: "Magnetism & Matter", id: "52AZBXB9kF8" },
        { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
        { title: "Alternating Current", id: "52AZBXB9kF8" },
        { title: "Ray Optics", id: "g7U0ySnkE_A" },
        { title: "Wave Optics", id: "52AZBXB9kF8" },
        { title: "Dual Nature", id: "g7U0ySnkE_A" },
        { title: "Atoms", id: "52AZBXB9kF8" },
        { title: "Nuclei", id: "g7U0ySnkE_A" },
        { title: "Semiconductor", id: "52AZBXB9kF8" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "g7U0ySnkE_A" },
        { title: "Solutions", id: "52AZBXB9kF8" },
        { title: "Electrochemistry", id: "g7U0ySnkE_A" },
        { title: "Chemical Kinetics", id: "52AZBXB9kF8" },
        { title: "Surface Chemistry", id: "g7U0ySnkE_A" },
        { title: "General Principles of Metallurgy", id: "52AZBXB9kF8" },
        { title: "p-Block Elements", id: "g7U0ySnkE_A" },
        { title: "d & f Block Elements", id: "52AZBXB9kF8" },
        { title: "Coordination Compounds", id: "g7U0ySnkE_A" },
        { title: "Haloalkanes & Haloarenes", id: "52AZBXB9kF8" },
        { title: "Alcohols Phenols Ethers", id: "g7U0ySnkE_A" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "52AZBXB9kF8" },
        { title: "Amines", id: "g7U0ySnkE_A" },
        { title: "Biomolecules", id: "52AZBXB9kF8" },
        { title: "Polymers", id: "g7U0ySnkE_A" },
        { title: "Chemistry in Everyday Life", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "kYJ5n1yT-00" },
        { title: "Inverse Trigonometric Functions", id: "8mve0UoSxTo" },
        { title: "Matrices", id: "tG-wO1n9G2k" },
        { title: "Determinants", id: "kYJ5n1yT-00" },
        { title: "Continuity & Differentiability", id: "8mve0UoSxTo" },
        { title: "Applications of Derivatives", id: "tG-wO1n9G2k" },
        { title: "Integrals", id: "kYJ5n1yT-00" },
        { title: "Applications of Integrals", id: "8mve0UoSxTo" },
        { title: "Differential Equations", id: "tG-wO1n9G2k" },
        { title: "Vector Algebra", id: "kYJ5n1yT-00" },
        { title: "3D Geometry", id: "8mve0UoSxTo" },
        { title: "Linear Programming", id: "tG-wO1n9G2k" },
        { title: "Probability", id: "kYJ5n1yT-00" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "g7U0ySnkE_A" },
        { title: "Sexual Reproduction in Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Human Reproduction", id: "g7U0ySnkE_A" },
        { title: "Reproductive Health", id: "52AZBXB9kF8" },
        { title: "Principles of Inheritance", id: "g7U0ySnkE_A" },
        { title: "Molecular Basis of Inheritance", id: "52AZBXB9kF8" },
        { title: "Evolution", id: "g7U0ySnkE_A" },
        { title: "Human Health & Disease", id: "52AZBXB9kF8" },
        { title: "Strategies for Enhancement", id: "g7U0ySnkE_A" },
        { title: "Microbes in Human Welfare", id: "52AZBXB9kF8" },
        { title: "Biotechnology Principles", id: "g7U0ySnkE_A" },
        { title: "Biotechnology Applications", id: "52AZBXB9kF8" },
        { title: "Organisms & Populations", id: "g7U0ySnkE_A" },
        { title: "Ecosystem", id: "52AZBXB9kF8" },
        { title: "Biodiversity & Conservation", id: "g7U0ySnkE_A" },
        { title: "Environmental Issues", id: "52AZBXB9kF8" }
      ]
    },

    unacademy: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "g7U0ySnkE_A" },
        { title: "Electrostatic Potential & Capacitance", id: "52AZBXB9kF8" },
        { title: "Current Electricity", id: "g7U0ySnkE_A" },
        { title: "Moving Charges & Magnetism", id: "52AZBXB9kF8" },
        { title: "Magnetism & Matter", id: "g7U0ySnkE_A" },
        { title: "Electromagnetic Induction", id: "52AZBXB9kF8" },
        { title: "Alternating Current", id: "g7U0ySnkE_A" },
        { title: "Ray Optics", id: "52AZBXB9kF8" },
        { title: "Wave Optics", id: "g7U0ySnkE_A" },
        { title: "Dual Nature", id: "52AZBXB9kF8" },
        { title: "Atoms", id: "g7U0ySnkE_A" },
        { title: "Nuclei", id: "52AZBXB9kF8" },
        { title: "Semiconductor", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "52AZBXB9kF8" },
        { title: "Solutions", id: "g7U0ySnkE_A" },
        { title: "Electrochemistry", id: "52AZBXB9kF8" },
        { title: "Chemical Kinetics", id: "g7U0ySnkE_A" },
        { title: "Surface Chemistry", id: "52AZBXB9kF8" },
        { title: "General Principles of Metallurgy", id: "g7U0ySnkE_A" },
        { title: "p-Block Elements", id: "52AZBXB9kF8" },
        { title: "d & f Block Elements", id: "g7U0ySnkE_A" },
        { title: "Coordination Compounds", id: "52AZBXB9kF8" },
        { title: "Haloalkanes & Haloarenes", id: "g7U0ySnkE_A" },
        { title: "Alcohols Phenols Ethers", id: "52AZBXB9kF8" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "g7U0ySnkE_A" },
        { title: "Amines", id: "52AZBXB9kF8" },
        { title: "Biomolecules", id: "g7U0ySnkE_A" },
        { title: "Polymers", id: "52AZBXB9kF8" },
        { title: "Chemistry in Everyday Life", id: "g7U0ySnkE_A" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "8mve0UoSxTo" },
        { title: "Inverse Trigonometric Functions", id: "tG-wO1n9G2k" },
        { title: "Matrices", id: "kYJ5n1yT-00" },
        { title: "Determinants", id: "8mve0UoSxTo" },
        { title: "Continuity & Differentiability", id: "tG-wO1n9G2k" },
        { title: "Applications of Derivatives", id: "kYJ5n1yT-00" },
        { title: "Integrals", id: "8mve0UoSxTo" },
        { title: "Applications of Integrals", id: "tG-wO1n9G2k" },
        { title: "Differential Equations", id: "kYJ5n1yT-00" },
        { title: "Vector Algebra", id: "8mve0UoSxTo" },
        { title: "3D Geometry", id: "tG-wO1n9G2k" },
        { title: "Linear Programming", id: "kYJ5n1yT-00" },
        { title: "Probability", id: "8mve0UoSxTo" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "52AZBXB9kF8" },
        { title: "Sexual Reproduction in Flowering Plants", id: "g7U0ySnkE_A" },
        { title: "Human Reproduction", id: "52AZBXB9kF8" },
        { title: "Reproductive Health", id: "g7U0ySnkE_A" },
        { title: "Principles of Inheritance", id: "52AZBXB9kF8" },
        { title: "Molecular Basis of Inheritance", id: "g7U0ySnkE_A" },
        { title: "Evolution", id: "52AZBXB9kF8" },
        { title: "Human Health & Disease", id: "g7U0ySnkE_A" },
        { title: "Strategies for Enhancement", id: "52AZBXB9kF8" },
        { title: "Microbes in Human Welfare", id: "g7U0ySnkE_A" },
        { title: "Biotechnology Principles", id: "52AZBXB9kF8" },
        { title: "Biotechnology Applications", id: "g7U0ySnkE_A" },
        { title: "Organisms & Populations", id: "52AZBXB9kF8" },
        { title: "Ecosystem", id: "g7U0ySnkE_A" },
        { title: "Biodiversity & Conservation", id: "52AZBXB9kF8" },
        { title: "Environmental Issues", id: "g7U0ySnkE_A" }
      ]
    },
    magnetbrains: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "52AZBXB9kF8" },
        { title: "Electrostatic Potential & Capacitance", id: "g7U0ySnkE_A" },
        { title: "Current Electricity", id: "52AZBXB9kF8" },
        { title: "Moving Charges & Magnetism", id: "g7U0ySnkE_A" },
        { title: "Magnetism & Matter", id: "52AZBXB9kF8" },
        { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
        { title: "Alternating Current", id: "52AZBXB9kF8" },
        { title: "Ray Optics", id: "g7U0ySnkE_A" },
        { title: "Wave Optics", id: "52AZBXB9kF8" },
        { title: "Dual Nature", id: "g7U0ySnkE_A" },
        { title: "Atoms", id: "52AZBXB9kF8" },
        { title: "Nuclei", id: "g7U0ySnkE_A" },
        { title: "Semiconductor", id: "52AZBXB9kF8" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "g7U0ySnkE_A" },
        { title: "Solutions", id: "52AZBXB9kF8" },
        { title: "Electrochemistry", id: "g7U0ySnkE_A" },
        { title: "Chemical Kinetics", id: "52AZBXB9kF8" },
        { title: "Surface Chemistry", id: "g7U0ySnkE_A" },
        { title: "General Principles of Metallurgy", id: "52AZBXB9kF8" },
        { title: "p-Block Elements", id: "g7U0ySnkE_A" },
        { title: "d & f Block Elements", id: "52AZBXB9kF8" },
        { title: "Coordination Compounds", id: "g7U0ySnkE_A" },
        { title: "Haloalkanes & Haloarenes", id: "52AZBXB9kF8" },
        { title: "Alcohols Phenols Ethers", id: "g7U0ySnkE_A" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "52AZBXB9kF8" },
        { title: "Amines", id: "g7U0ySnkE_A" },
        { title: "Biomolecules", id: "52AZBXB9kF8" },
        { title: "Polymers", id: "g7U0ySnkE_A" },
        { title: "Chemistry in Everyday Life", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "tG-wO1n9G2k" },
        { title: "Inverse Trigonometric Functions", id: "kYJ5n1yT-00" },
        { title: "Matrices", id: "8mve0UoSxTo" },
        { title: "Determinants", id: "tG-wO1n9G2k" },
        { title: "Continuity & Differentiability", id: "kYJ5n1yT-00" },
        { title: "Applications of Derivatives", id: "8mve0UoSxTo" },
        { title: "Integrals", id: "tG-wO1n9G2k" },
        { title: "Applications of Integrals", id: "kYJ5n1yT-00" },
        { title: "Differential Equations", id: "8mve0UoSxTo" },
        { title: "Vector Algebra", id: "tG-wO1n9G2k" },
        { title: "3D Geometry", id: "kYJ5n1yT-00" },
        { title: "Linear Programming", id: "8mve0UoSxTo" },
        { title: "Probability", id: "tG-wO1n9G2k" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "g7U0ySnkE_A" },
        { title: "Sexual Reproduction in Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Human Reproduction", id: "g7U0ySnkE_A" },
        { title: "Reproductive Health", id: "52AZBXB9kF8" },
        { title: "Principles of Inheritance", id: "g7U0ySnkE_A" },
        { title: "Molecular Basis of Inheritance", id: "52AZBXB9kF8" },
        { title: "Evolution", id: "g7U0ySnkE_A" },
        { title: "Human Health & Disease", id: "52AZBXB9kF8" },
        { title: "Strategies for Enhancement", id: "g7U0ySnkE_A" },
        { title: "Microbes in Human Welfare", id: "52AZBXB9kF8" },
        { title: "Biotechnology Principles", id: "g7U0ySnkE_A" },
        { title: "Biotechnology Applications", id: "52AZBXB9kF8" },
        { title: "Organisms & Populations", id: "g7U0ySnkE_A" },
        { title: "Ecosystem", id: "52AZBXB9kF8" },
        { title: "Biodiversity & Conservation", id: "g7U0ySnkE_A" },
        { title: "Environmental Issues", id: "52AZBXB9kF8" }
      ]
    },
    vedantu: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "g7U0ySnkE_A" },
        { title: "Electrostatic Potential & Capacitance", id: "52AZBXB9kF8" },
        { title: "Current Electricity", id: "g7U0ySnkE_A" },
        { title: "Moving Charges & Magnetism", id: "52AZBXB9kF8" },
        { title: "Magnetism & Matter", id: "g7U0ySnkE_A" },
        { title: "Electromagnetic Induction", id: "52AZBXB9kF8" },
        { title: "Alternating Current", id: "g7U0ySnkE_A" },
        { title: "Ray Optics", id: "52AZBXB9kF8" },
        { title: "Wave Optics", id: "g7U0ySnkE_A" },
        { title: "Dual Nature", id: "52AZBXB9kF8" },
        { title: "Atoms", id: "g7U0ySnkE_A" },
        { title: "Nuclei", id: "52AZBXB9kF8" },
        { title: "Semiconductor", id: "g7U0ySnkE_A" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "52AZBXB9kF8" },
        { title: "Solutions", id: "g7U0ySnkE_A" },
        { title: "Electrochemistry", id: "52AZBXB9kF8" },
        { title: "Chemical Kinetics", id: "g7U0ySnkE_A" },
        { title: "Surface Chemistry", id: "52AZBXB9kF8" },
        { title: "General Principles of Metallurgy", id: "g7U0ySnkE_A" },
        { title: "p-Block Elements", id: "52AZBXB9kF8" },
        { title: "d & f Block Elements", id: "g7U0ySnkE_A" },
        { title: "Coordination Compounds", id: "52AZBXB9kF8" },
        { title: "Haloalkanes & Haloarenes", id: "g7U0ySnkE_A" },
        { title: "Alcohols Phenols Ethers", id: "52AZBXB9kF8" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "g7U0ySnkE_A" },
        { title: "Amines", id: "52AZBXB9kF8" },
        { title: "Biomolecules", id: "g7U0ySnkE_A" },
        { title: "Polymers", id: "52AZBXB9kF8" },
        { title: "Chemistry in Everyday Life", id: "g7U0ySnkE_A" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "kYJ5n1yT-00" },
        { title: "Inverse Trigonometric Functions", id: "8mve0UoSxTo" },
        { title: "Matrices", id: "tG-wO1n9G2k" },
        { title: "Determinants", id: "kYJ5n1yT-00" },
        { title: "Continuity & Differentiability", id: "8mve0UoSxTo" },
        { title: "Applications of Derivatives", id: "tG-wO1n9G2k" },
        { title: "Integrals", id: "kYJ5n1yT-00" },
        { title: "Applications of Integrals", id: "8mve0UoSxTo" },
        { title: "Differential Equations", id: "tG-wO1n9G2k" },
        { title: "Vector Algebra", id: "kYJ5n1yT-00" },
        { title: "3D Geometry", id: "8mve0UoSxTo" },
        { title: "Linear Programming", id: "tG-wO1n9G2k" },
        { title: "Probability", id: "kYJ5n1yT-00" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "52AZBXB9kF8" },
        { title: "Sexual Reproduction in Flowering Plants", id: "g7U0ySnkE_A" },
        { title: "Human Reproduction", id: "52AZBXB9kF8" },
        { title: "Reproductive Health", id: "g7U0ySnkE_A" },
        { title: "Principles of Inheritance", id: "52AZBXB9kF8" },
        { title: "Molecular Basis of Inheritance", id: "g7U0ySnkE_A" },
        { title: "Evolution", id: "52AZBXB9kF8" },
        { title: "Human Health & Disease", id: "g7U0ySnkE_A" },
        { title: "Strategies for Enhancement", id: "52AZBXB9kF8" },
        { title: "Microbes in Human Welfare", id: "g7U0ySnkE_A" },
        { title: "Biotechnology Principles", id: "52AZBXB9kF8" },
        { title: "Biotechnology Applications", id: "g7U0ySnkE_A" },
        { title: "Organisms & Populations", id: "52AZBXB9kF8" },
        { title: "Ecosystem", id: "g7U0ySnkE_A" },
        { title: "Biodiversity & Conservation", id: "52AZBXB9kF8" },
        { title: "Environmental Issues", id: "g7U0ySnkE_A" }
      ]
    },
    khanacademy: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "52AZBXB9kF8" },
        { title: "Electrostatic Potential & Capacitance", id: "g7U0ySnkE_A" },
        { title: "Current Electricity", id: "52AZBXB9kF8" },
        { title: "Moving Charges & Magnetism", id: "g7U0ySnkE_A" },
        { title: "Magnetism & Matter", id: "52AZBXB9kF8" },
        { title: "Electromagnetic Induction", id: "g7U0ySnkE_A" },
        { title: "Alternating Current", id: "52AZBXB9kF8" },
        { title: "Ray Optics", id: "g7U0ySnkE_A" },
        { title: "Wave Optics", id: "52AZBXB9kF8" },
        { title: "Dual Nature", id: "g7U0ySnkE_A" },
        { title: "Atoms", id: "52AZBXB9kF8" },
        { title: "Nuclei", id: "g7U0ySnkE_A" },
        { title: "Semiconductor", id: "52AZBXB9kF8" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "g7U0ySnkE_A" },
        { title: "Solutions", id: "52AZBXB9kF8" },
        { title: "Electrochemistry", id: "g7U0ySnkE_A" },
        { title: "Chemical Kinetics", id: "52AZBXB9kF8" },
        { title: "Surface Chemistry", id: "g7U0ySnkE_A" },
        { title: "General Principles of Metallurgy", id: "52AZBXB9kF8" },
        { title: "p-Block Elements", id: "g7U0ySnkE_A" },
        { title: "d & f Block Elements", id: "52AZBXB9kF8" },
        { title: "Coordination Compounds", id: "g7U0ySnkE_A" },
        { title: "Haloalkanes & Haloarenes", id: "52AZBXB9kF8" },
        { title: "Alcohols Phenols Ethers", id: "g7U0ySnkE_A" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "52AZBXB9kF8" },
        { title: "Amines", id: "g7U0ySnkE_A" },
        { title: "Biomolecules", id: "52AZBXB9kF8" },
        { title: "Polymers", id: "g7U0ySnkE_A" },
        { title: "Chemistry in Everyday Life", id: "52AZBXB9kF8" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "8mve0UoSxTo" },
        { title: "Inverse Trigonometric Functions", id: "tG-wO1n9G2k" },
        { title: "Matrices", id: "kYJ5n1yT-00" },
        { title: "Determinants", id: "8mve0UoSxTo" },
        { title: "Continuity & Differentiability", id: "tG-wO1n9G2k" },
        { title: "Applications of Derivatives", id: "kYJ5n1yT-00" },
        { title: "Integrals", id: "8mve0UoSxTo" },
        { title: "Applications of Integrals", id: "tG-wO1n9G2k" },
        { title: "Differential Equations", id: "kYJ5n1yT-00" },
        { title: "Vector Algebra", id: "8mve0UoSxTo" },
        { title: "3D Geometry", id: "tG-wO1n9G2k" },
        { title: "Linear Programming", id: "kYJ5n1yT-00" },
        { title: "Probability", id: "8mve0UoSxTo" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "g7U0ySnkE_A" },
        { title: "Sexual Reproduction in Flowering Plants", id: "52AZBXB9kF8" },
        { title: "Human Reproduction", id: "g7U0ySnkE_A" },
        { title: "Reproductive Health", id: "52AZBXB9kF8" },
        { title: "Principles of Inheritance", id: "g7U0ySnkE_A" },
        { title: "Molecular Basis of Inheritance", id: "52AZBXB9kF8" },
        { title: "Evolution", id: "g7U0ySnkE_A" },
        { title: "Human Health & Disease", id: "52AZBXB9kF8" },
        { title: "Strategies for Enhancement", id: "g7U0ySnkE_A" },
        { title: "Microbes in Human Welfare", id: "52AZBXB9kF8" },
        { title: "Biotechnology Principles", id: "g7U0ySnkE_A" },
        { title: "Biotechnology Applications", id: "52AZBXB9kF8" },
        { title: "Organisms & Populations", id: "g7U0ySnkE_A" },
        { title: "Ecosystem", id: "52AZBXB9kF8" },
        { title: "Biodiversity & Conservation", id: "g7U0ySnkE_A" },
        { title: "Environmental Issues", id: "52AZBXB9kF8" }
      ]
    }
  }

};


/* ====== CHECK ====== */
if (!prep || !channel) {
  subjectArea.innerHTML = `<div class="subject-title"> Select preparation + channel first</div>`;
} else {
  loadSubjects();
}

/* ====== SUBJECTS ====== */
function loadSubjects() {

  subjectArea.innerHTML = "";

  const back = document.createElement("div");
  back.className = "subject-title";
  back.innerText = "⬅ Back (Change Channel)";
  back.onclick = () => window.location.href = "channels.html";
  subjectArea.appendChild(back);

  const heading = document.createElement("div");
  heading.className = "subject-title";
  heading.innerText = " " + prep + " | Channel: " + channel;
  subjectArea.appendChild(heading);

  const subjects = data[prep]?.[channel];

  if (!subjects) {
    subjectArea.innerHTML += `<div class="subject-title"> Data not added for this channel yet</div>`;
    return;
  }

  for (let sub in subjects) {
    const title = document.createElement("div");
    title.className = "subject-title";
    title.innerText = " " + sub;
    title.onclick = () => showTopics(sub);
    subjectArea.appendChild(title);
  }

  videoTitle.innerText = "Select a topic to start learning";
}

/* ====== TOPICS ====== */
function showTopics(subject) {

  subjectArea.innerHTML = "";

  const back = document.createElement("div");
  back.className = "subject-title";
  back.innerText = " Back to subjects";
  back.onclick = () => loadSubjects();
  subjectArea.appendChild(back);

  const heading = document.createElement("div");
  heading.className = "subject-title";
  heading.innerText = "" + subject;
  subjectArea.appendChild(heading);

  const videos = document.createElement("div");
  videos.className = "video-grid";

  const list = data[prep][channel][subject];

  list.forEach((v) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = ` <b>${v.title}</b>`;
    card.onclick = () => playVideo(v.id, card, v.title);
    videos.appendChild(card);
  });

  subjectArea.appendChild(videos);
}

/* ===============================
   YOUTUBE PLAYER API (ULTRA v4.1)
================================ */
let ytPlayer;
let isPlayerReady = false;
let progressInterval;

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('videoPlayer', {
    height: '100%',
    width: '100%',
    videoId: '',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'rel': 0,
      'modestbranding': 1,
      'iv_load_policy': 3,
      'playsinline': 1,
      'enablejsapi': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  isPlayerReady = true;
  setupCustomControls();
  setupGestures();
}

function onPlayerStateChange(event) {
  updatePlayPauseIcons();
  if (event.data === YT.PlayerState.PLAYING) {
    startProgressLoop();
  } else {
    clearInterval(progressInterval);
  }
}

function setupCustomControls() {
  const playPauseCenter = document.getElementById('playPauseCenter');
  const playPauseSmall = document.getElementById('playPauseSmall');
  const progressBar = document.getElementById('progressBar');
  const playerOverlay = document.getElementById('playerOverlay');
  const sidebar = document.getElementById('courseSidebar');
  const toggleSidebar = document.getElementById('toggleSidebar');

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!isPlayerReady) return;
    const state = ytPlayer.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      ytPlayer.pauseVideo();
    } else {
      ytPlayer.playVideo();
    }
  };

  playPauseCenter?.addEventListener('click', togglePlay);
  playPauseSmall?.addEventListener('click', togglePlay);

  progressBar?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!isPlayerReady) return;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const duration = ytPlayer.getDuration();
    ytPlayer.seekTo(duration * pos, true);
    updateProgressUI(duration * pos, duration);
  });

  // Mobile Sidebar & Backdrop
  const closeSidebar = () => {
    sidebar.classList.remove('open');
    if (toggleSidebar) toggleSidebar.querySelector('span').textContent = 'Show Subjects';
    document.getElementById('sidebarBackdrop')?.remove();
  };

  toggleSidebar?.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggleSidebar.querySelector('span').textContent = isOpen ? 'Hide Subjects' : 'Show Subjects';
    
    if (isOpen) {
      const backdrop = document.createElement('div');
      backdrop.id = 'sidebarBackdrop';
      backdrop.style = 'position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:900;backdrop-filter:blur(4px);';
      backdrop.onclick = closeSidebar;
      document.body.appendChild(backdrop);
    } else {
      document.getElementById('sidebarBackdrop')?.remove();
    }
  });

  // Overlay Visibility
  let timeout;
  const showControls = () => {
    playerOverlay.classList.add('visible');
    clearTimeout(timeout);
    if (ytPlayer && ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
      timeout = setTimeout(() => playerOverlay.classList.remove('visible'), 3000);
    }
  };

  const playerBox = document.getElementById('playerBox');
  ['mousemove', 'click', 'touchstart'].forEach(evt => {
    playerBox?.addEventListener(evt, showControls);
  });

  // Fullscreen
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  fullscreenBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!playerBox) return;
    if (!document.fullscreenElement) {
      if (playerBox.requestFullscreen) {
        playerBox.requestFullscreen();
      } else if (playerBox.webkitRequestFullscreen) {
        playerBox.webkitRequestFullscreen();
      } else if (playerBox.msRequestFullscreen) {
        playerBox.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });
}

function setupGestures() {
  const playerOverlay = document.getElementById('playerOverlay');
  let lastTap = 0;

  playerOverlay?.addEventListener('click', (e) => {
    const now = Date.now();
    const timesince = now - lastTap;
    if (timesince < 300 && timesince > 0) {
      // Double Tap
      const rect = playerOverlay.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x < rect.width / 2) {
        seekRelative(-10);
        showRipple(e.clientX, e.clientY, 'rewind');
      } else {
        seekRelative(10);
        showRipple(e.clientX, e.clientY, 'forward');
      }
      e.preventDefault();
    }
    lastTap = now;
  });
}

function seekRelative(seconds) {
  if (!isPlayerReady) return;
  const current = ytPlayer.getCurrentTime();
  ytPlayer.seekTo(current + seconds, true);
}

function showRipple(x, y, type) {
  const ripple = document.createElement('div');
  ripple.className = 'seek-ripple';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.innerHTML = type === 'forward' ? '+10s' : '-10s';
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

function updatePlayPauseIcons() {
  const state = ytPlayer.getPlayerState();
  const isPlaying = state === YT.PlayerState.PLAYING;
  document.querySelectorAll('.play-icon').forEach(i => i.classList.toggle('hidden', isPlaying));
  document.querySelectorAll('.pause-icon').forEach(i => i.classList.toggle('hidden', !isPlaying));
}

function startProgressLoop() {
  clearInterval(progressInterval);
  progressInterval = setInterval(() => {
    if (isPlayerReady) {
      updateProgressUI(ytPlayer.getCurrentTime(), ytPlayer.getDuration());
    }
  }, 500);
}

function updateProgressUI(current, total) {
  const pct = (current / total) * 100;
  const progressFilled = document.getElementById('progressFilled');
  if (progressFilled) progressFilled.style.width = pct + '%';
  
  const currentTimeEl = document.getElementById('currentTime');
  const durationEl = document.getElementById('duration');
  if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
  if (durationEl) durationEl.textContent = formatTime(total);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return min + ":" + (sec < 10 ? '0' : '') + sec;
}

/* ====== PLAY VIDEO ====== */
function playVideo(topic, element, subject) {
  const safeId = sanitizeVideoId(topic?.id);
  
  document.querySelectorAll(".topic-card").forEach(c => c.classList.remove("active"));
  if (element) element.classList.add("active");

  state.currentSubject = subject || state.currentSubject;
  state.currentTopicTitle = topic?.title || "Untitled lesson";

  updatePlayerSummary(state.currentSubject, state.currentTopicTitle, state.currentTopicTitle);

  if (isPlayerReady && safeId) {
    ytPlayer.loadVideoById(safeId);
    document.getElementById('playerOverlay')?.classList.remove('visible');
  }

  // Mobile Auto-Close (Removed jumpy scrollTo)
  if (window.innerWidth <= 768) {
    document.getElementById('courseSidebar')?.classList.remove('open');
    document.getElementById('sidebarBackdrop')?.remove();
    const btn = document.getElementById('toggleSidebar');
    if (btn) btn.querySelector('span').textContent = 'Show Subjects';
  }
}

/* ====== REFINED RENDERING ====== */
function loadSubjects() {
  const subjects = data[prep]?.[channel] || {};
  const entries = Object.entries(subjects).filter(([name]) => 
    !state.query || name.toLowerCase().includes(state.query)
  );

  subjectArea.innerHTML = "";
  updateHero(`${prep} Academy`, `Explore ${entries.length} subjects available in your ${formatChannel(channel)} channel.`);

  entries.forEach(([name, topics], idx) => {
    const card = document.createElement("button");
    card.className = `subject-card fade-in${state.currentSubject === name ? " active" : ""}`;
    card.style.animationDelay = (idx * 0.05) + 's';
    card.innerHTML = `
      <div class="card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      </div>
      <div class="card-content">
        <span class="subject-name">${escapeHtml(name)}</span>
        <span class="subject-meta">${topics.length} Lectures • Full Course</span>
      </div>
      <div class="subject-count">${topics.length}</div>
    `;
    card.onclick = () => {
      state.currentSubject = name;
      showTopics(name);
    };
    subjectArea.appendChild(card);
  });
}

function showTopics(subject) {
  const topics = data[prep]?.[channel]?.[subject] || [];
  const filtered = topics.filter(t => !state.query || t.title.toLowerCase().includes(state.query));

  subjectArea.innerHTML = "";
  
  const backBtn = document.createElement("button");
  backBtn.className = "subject-card fade-in";
  backBtn.innerHTML = `
    <div class="card-icon" style="background:#f1f5f9;color:#64748b;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
    <div class="card-content"><span class="subject-name">Back to Subjects</span></div>
  `;
  backBtn.onclick = () => {
    state.currentSubject = null;
    loadSubjects();
  };
  subjectArea.appendChild(backBtn);

  filtered.forEach((topic, idx) => {
    const hasVideo = sanitizeVideoId(topic.id).length > 0;
    const card = document.createElement("button");
    card.className = `topic-card fade-in${state.currentTopicTitle === topic.title ? " active" : ""}`;
    card.style.animationDelay = (idx * 0.05) + 's';
    card.innerHTML = `
      <div class="card-icon">
        ${hasVideo ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>'}
      </div>
      <div class="card-content">
        <span class="topic-card-title">${escapeHtml(topic.title || `Lesson ${idx + 1}`)}</span>
        <span class="topic-card-meta">Lesson ${idx + 1} • ${hasVideo ? "Start Learning" : "Coming Soon"}</span>
      </div>
    `;
    card.onclick = () => playVideo(topic, card, subject);
    subjectArea.appendChild(card);
  });
}

/* ====== UTILS ====== */
initializeCoursePage();

function initializeCoursePage() {
  if (prepBadge) prepBadge.textContent = prep || "Selection Required";
  if (channelBadge) channelBadge.textContent = formatChannel(channel) || "None";

  backToChannels?.addEventListener("click", () => window.location.href = "channels.html");
  searchInput?.addEventListener("input", (e) => {
    state.query = e.target.value.trim().toLowerCase();
    loadSubjects();
  });

  if (!prep || !channel) {
    updateHero("Quick Setup", "Choose your course and channel to begin.");
    subjectArea.innerHTML = `<div style="padding:20px;text-align:center;color:var(--muted);font-weight:600;">Please select a channel first.</div>`;
    return;
  }

  loadSubjects();
}

function updateHero(title, desc) {
  if (heroHeading) heroHeading.textContent = title;
  if (heroSubtext) heroSubtext.textContent = desc;
}

function updatePlayerSummary(sub, lesson, title) {
  if (activeSubject) activeSubject.textContent = sub || "Academy";
  if (activeLesson) activeLesson.textContent = lesson || "Select a Topic";
  if (videoTitle) videoTitle.textContent = title || "Select a Topic to Start Learning";
}

function sanitizeVideoId(rawId) {
  return String(rawId || "").trim().replace(/^.*v=/, "").split("&")[0].replace(/[^a-zA-Z0-9_-]/g, "");
}

function formatChannel(val) {
  return String(val || "").replace(/[-_]+/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

function escapeHtml(val) {
  return String(val).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]));
}


