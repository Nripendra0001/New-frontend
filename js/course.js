const prep = localStorage.getItem("selectedPrep");
const channel = localStorage.getItem("selectedChannel");

const subjectArea = document.getElementById("subjectArea");
const player = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");

/* ====== DEMO DATA (same videos) ====== */
const data = {

  /* ======================================================
     🚓 UP POLICE (Constable/SI)
  ====================================================== */
  "UP Police": {

    rojgar: {
      "Maths": [
        { title: "Number System video 1 by ~sarkariNext", id: "FCzwWn_VUMo" },
        { title: "Number System video 2 by ~sarkariNext", id: "T9Ec6FPA82A" },
        { title: "Number System video 3 by ~sarkariNext", id: "w5o_O8G8QWY" },
        { title: "Number System video 4 by ~sarkariNext", id: "OlcJLkLL8s4" },
        { title: "Number System video 5 by ~sarkariNext", id: "lOYzNl9yGXQ" },
        { title: "Number System video 6 by ~sarkariNext", id: "4Tbiu5PHX30" },
         { title: "Number System video 7 by ~sarkariNext", id: "BxHCIXU_rC0" },
          { title: "Number System video 8 by ~sarkariNext", id: "jd6sI5CmwiU" },
           { title: "Number System video 9 by ~sarkariNext", id: "FT08iohDICM" },
            { title: "Number System video 10 by ~sarkariNext", id: "zj9DS_Zuwg" },
        { title: "Simplification video 1 by ~sarkariNext", id: "wkaXiXBHWjw" },
        { title: "Simplification video 2 by ~sarkariNext", id: "PJpEOHo-bas" },
        { title: "Simplification video 3 by ~sarkariNext", id: "fuWVXpSZ3Eo" },
        { title: "HCF & LCM video 1 by ~sarkariNext", id: "obm7P9WtTm4" },
        { title: "HCF & LCM video 2 by ~sarkariNext", id: "7VqGm12Xx9A" },
        { title: "HCF & LCM video 3 by ~sarkariNext", id: "RV6oOJLCU2Q" },
        { title: "HCF & LCM video 4 by ~sarkariNext", id: "bhQsFnoG0PQ" },
        { title: "HCF & LCM video 5 by ~sarkariNext", id: "C490baN8XjE" },
        { title: "HCF & LCM video 6 by ~sarkariNext", id: "xXwJE8T5_4E" },
        { title: "HCF & LCM video 7 by ~sarkariNext", id: "OT82EPnmqZo" },
        { title: "HCF & LCM video 8 by ~sarkariNext", id: "BSwGVrBPgcI" },
        { title: "TIME & WORK video 1 by ~sarkariNext", id: "LrsSTvEzzIU" },
        { title: "TIME & WORK video 2 by ~sarkariNext", id: "aBmBcGfeZKw" },
        { title: "TIME & WORK video 3 by ~sarkariNext", id: "4vJa2AvQkKY" },
        { title: "TIME & WORK video 4 by ~sarkariNext", id: "ARlWyhuYEwY" },
        { title: "TIME & WORK video 5 by ~sarkariNext", id: "KT5aw215d5k" },
        { title: "TIME & WORK video 6 by ~sarkariNext", id: "nt8mAvzORzA" },
        { title: "TIME & WORK video 7 by ~sarkariNext", id: "C-7TECDBgDU" },
        { title: "TIME & WORK video 8 by ~sarkariNext", id: "fXeGPZXkDqc" },
        { title: "PIPE & Cistern video 1 by ~sarkariNext", id: "cvooFGyXYKY" },
         { title: "PIPE & Cistern video 1 by ~sarkariNext", id: "nuZv5JAEG_8" },
          { title: "PIPE & Cistern video 1 by ~sarkariNext", id: "CJHUq0IYpr4" },
            { title: "Average video 1 by ~sarkariNext", id: "z78yEpz9hbw" },
              { title: "Average video 2 by ~sarkariNext", id: "qcme3IyeFGg" },
              { title: "Average video 3 by ~sarkariNext", id: "mIAK0ZQM8BM" },
                { title: "Average video 4 by ~sarkariNext", id: "ofysnODTNJo" },
                { title: "Average video 5 by ~sarkariNext", id: "5p0a_Tv82xM" },
                  { title: "Average video 6 by ~sarkariNext", id: "XiSVBEJOUHg" },
                  { title: "Average video 7 by ~sarkariNext", id: "jctiNANJOzQ" },
                  { title: "Average video 8 by ~sarkariNext", id: "jX5GtRhlE1Y" },
                  { title: "PERCENTAGE video 1 by ~sarkariNext", id: "wEBprltUetE"}, 
                   { title: "PERCENTAGE video 2 by ~sarkariNext", id: "cIIh9FhTprA"}, 
                    { title: "PERCENTAGE video 3 by ~sarkariNext", id: "wefT5tPBBng"}, 
                     { title: "PERCENTAGE video 4 by ~sarkariNext", id: "W_8vVL4mcmw"}, 
                      { title: "PERCENTAGE video 5 by ~sarkariNext", id: "PbMQjDfsZ4w"}, 
                       { title: "PERCENTAGE video 6 by ~sarkariNext", id: "XzNrh6CIf8c"}, 
                        { title: "PERCENTAGE video 7 by ~sarkariNext", id: "erwQXAhf5Mw"}, 
                         { title: "PERCENTAGE video 8 by ~sarkariNext", id: "AADnmtx3d-o"}, 
                          { title: "PERCENTAGE video 9 by ~sarkariNext", id: "mX6sZBij7-M"}, 
                           { title: "PERCENTAGE video 10 by ~sarkariNext", id: "icWfnU9Z-K4"}, 
                            { title: "PERCENTAGE video 11 by ~sarkariNext", id: "egJFpk5DImw"}, 
                             { title: "PERCENTAGE video 12 by ~sarkariNext", id: "oFjTIBXqDtU"}, 
                              { title: "PERCENTAGE video 13 by ~sarkariNext", id: "txXrTXlDWtw"}, 
                              

               
        { title: "PROFIT AND LOSS video 1 by ~sarkariNext", id: "rbsQnEs0Uy8" },
         { title: "PROFIT AND LOSS video 2 by ~sarkariNext", id: "rRYfYeY0yUc" },
          { title: "PROFIT AND LOSS video 3 by ~sarkariNext", id: "9SSgkhs1Jjw" },
           { title: "PROFIT AND LOSS video 4 by ~sarkariNext", id: "WOr3sZOdBOA" },
            { title: "PROFIT AND LOSS video 5 by ~sarkariNext", id: "tJ_scSxS3hQ" },
             { title: "PROFIT AND LOSS video 6 by ~sarkariNext", id: "2Y7Pyvz5Ino" },
              { title: "PROFIT AND LOSS video 7 by ~sarkariNext", id: "lb8LMJ5pH6Q" },
               { title: "PROFIT AND LOSS video 8 by ~sarkariNext", id: "sRCY0UfgUO8" },
                { title: "PROFIT AND LOSS video 9 by ~sarkariNext", id: "cOtsC4g8y_o" },
                 { title: "PROFIT AND LOSS video 10 by ~sarkariNext", id: "IfiVK9eZz14" },
                  { title: "PROFIT AND LOSS video 11 by ~sarkariNext", id: "1B9mXZrxDE4" },
                   { title: "PROFIT AND LOSS video 12 by ~sarkariNext", id: "K-O1Whm0G4c" },
                    { title: "PROFIT AND LOSS video 13 by ~sarkariNext", id: "2y4PK-xhLwI" },
                     { title: "PROFIT AND LOSS video 14 by ~sarkariNext", id: "HTnKS1F2AXU" },
                      { title: "PROFIT AND LOSS video 15 by ~sarkariNext", id: "uVm7WDVwCU" },
                       { title: "PROFIT AND LOSS video 16 by ~sarkariNext", id: "4LG8mF3g8cM" },
                        { title: "PROFIT AND LOSS video 17 by ~sarkariNext", id: "MkVoEcVJkw0" },
                         { title: "PROFIT AND LOSS video 18 by ~sarkariNext", id: "DeKR-EN52Yc" },
                          { title: "PROFIT AND LOSS video 19 by ~sarkariNext", id: "PlIINHILgZs" },
                           { title: "PROFIT AND LOSS video 20 by ~sarkariNext", id: "wRuaeee6Bwo" },
                            { title: "PROFIT AND LOSS video 21 by ~sarkariNext", id: "7WYJ1gHe_p8" },
                             { title: "PROFIT AND LOSS video 22 by ~sarkariNext", id: "Ugdg-wFInQg" },
                              { title: "PROFIT AND LOSS video 23 by ~sarkariNext", id: "dEuQHGOObyI" },
                               { title: "PROFIT AND LOSS video 24 by ~sarkariNext", id: "VQVpmU97zBI" },
                                { title: "PROFIT AND LOSS video 25 by ~sarkariNext", id: "UR5XjdoebyU" },
                                 { title: "PROFIT AND LOSS video 26 by ~sarkariNext", id: "zqs2EtpNCew" },
                                 { title: "Time, Speed & Distance  video 1 by ~sarkariNext", id: "vDQI5lVv44w" },
                                 { title: "Time, Speed & Distance  video 2 by ~sarkariNext", id: "JRgmITvCAbc" },
                                 { title: "Time, Speed & Distance  video 3 by ~sarkariNext", id: "gWVI735Qx5I" },
                                 { title: "Time, Speed & Distance  video 4 by ~sarkariNext", id: "1qxLxYccJC4" },
                                 { title: "Time, Speed & Distance  video 5 by ~sarkariNext", id: "jPsw9pmm7l0" },
                                 { title: "Time, Speed & Distance  video 6 by ~sarkariNext", id: "ewt5DNiMZ78" },
                                 { title: "Time, Speed & Distance  video 7 by ~sarkariNext", id: "_NS2-RVpS1I" },
                                 { title: "Time, Speed & Distance  video 8 by ~sarkariNext", id: "cxIQ5mizWxk" },
                                 {title:"Race video 1 by ~sarkarinext" ,id: "-3Yxx3MK38c"},
                                  {title:"Race video 2 by ~sarkarinext" ,id: "rB1eT4DhFHs"},
                                  {title:"Train video 1 by ~sarkarinext" ,id: "5HQCzYOls24"},
                                  {title:"Train video 2 by ~sarkarinext" ,id: "XDoLzd_kiFU"},
                                  {title:"Train video 3 by ~sarkarinext" ,id: "B5pFjndO0FE"},
                                   {title:"Boat and stream video 1 by ~sarkarinext" ,id: "9D9v5hVcE9Q"},
                                   {title:"Boat and stream video 1 by ~sarkarinext" ,id: "C9tJ031hP64"},
                                  {title:"MENSURATION VIDEO 1 BY ~sarkariNext", id:"rfkEi59iNJY"},
                                  {title:"MENSURATION VIDEO 2 BY ~sarkariNext", id:"P7awMoP1seg"},
                                  {title:"MENSURATION VIDEO 3 BY ~sarkariNext", id:"H18pa_EKKQI"},
                                  {title:"MENSURATION VIDEO 4 BY ~sarkariNext", id:"zYp7IKzXaAk"},
                                  {title:"MENSURATION VIDEO 5 BY ~sarkariNext", id:"miwsjKxXU_0"},
                                  {title:"MENSURATION VIDEO 6 BY ~sarkariNext", id:"x2A1_FQv9Mo"},
                                  {title:"MENSURATION VIDEO 7 BY ~sarkariNext", id:"WdxiqmmddNY"},
                                  {title:"MENSURATION VIDEO 8 BY ~sarkariNext", id:"QoN0H7pHiMM"},
                                   {title:"MENSURATION VIDEO 9 BY ~sarkariNext", id:"4fbFazdAVOA"},
                                   {title:"SURDS AND INDICES video 1 by ~sarkariNext", id:"r3fglKBktqk"},
                                  
                                    {title:"MIXTURE AND ALIGATION video 1 by ~sarkariNext", id:"uJeZGpE-EQU&list"},
                                    {title:"MIXTURE AND ALIGATION video 2 by ~sarkariNext", id:"3br_H0E30xA"},
                                     {title:"MIXTURE AND ALIGATION video 3 by ~sarkariNext", id:"uJeZGpE-EQU"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "2YvP0EVuzFg"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "I25Mdu2T71o"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "Q3ALXiFdIKU"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "yB1aL2mXAMc"},
                                     {title:"RATIO  video 1 by ~sarkariNext", id: "xXlHjuOVY7o"},
                                      {title:"Age  video 1 by ~sarkariNext", id: "j6j3xBU-QJY"},
                                       {title:"Date interpretation  video 1 by ~sarkariNext", id: "vrM16MO_xxQ"},
                                      {title:"Date interpretation  video 2 by ~sarkariNext", id: "SCXhum9Pixk"},

                                   




        
      ],

      "Reasoning": [
        { title: "Analogies  by ~sarkariNext ", id: "RzIih2HMtww" },
          { title: "Analogies video 1  by ~sarkariNext ", id: "DMynEwTyHCo" },
          { title: "Analogies video 2  by ~sarkariNext ", id: "CgWbq7YYn_Y" },
          { title: "Analogies video 3 quick revision by ~sarkariNext ", id: "LlOT5xGSilA" },
        { title: "Classification  by ~sarkariNext", id: "_ita0kc2-1s" },
        { title: "Classification  video 1 by ~sarkariNext", id: "Mhp89w_rV70" },
          { title: "Series  by ~sarkariNext", id: "xBkxy4mJiZA" },
          { title: "Series  video 1  by ~sarkariNext", id: "KxmujT6Iayg" },
          { title: "Series  video 2  by ~sarkariNext", id: "tUtCK9thKcA" },
         { title: "Coding-Decoding  by ~sarkariNext", id: "G16ctzIro9g" },
         { title: "Coding-Decoding video 1  by ~sarkariNext", id: "UzumLtkA00k" },
           { title: "Blood Relation  by ~sarkariNext", id: "DSEytMyY4Xc" },
           { title: "Blood Relation  video 1 by ~sarkariNext", id: "vQ_WdPXz45E" },
           { title: "Blood Relation  video 2 by ~sarkariNext", id: "sQmxrt_VFR0" },
           { title: "Blood Relation  video 3 by ~sarkariNext", id: "ajpEgYFFQC4" },
        { title: "Direction Sense  by ~sarkariNext", id: "zNsNWjNgT6E" },
        { title: "Direction Sense video 1 by ~sarkariNext", id: "lChEW41nPbE" },
          { title: "Ranking & Order  by ~sarkariNext", id: "mZ5IhJfCpJY" },
          { title: "Ranking & Order  video 2 by ~sarkariNext", id: "IjtWl9esSdA" },
        { title: "Syllogism  by ~sarkariNext", id: "b3yQhdAolfs" },
        { title: "Syllogism  video 2 by ~sarkariNext", id: "uHBmygMEA" },
        { title: "Syllogism  video 3 by ~sarkariNext", id: "3gek5Nin0Rw" },
            { title: "Venn Diagram  by ~sarkariNext", id: "GeiGeAApYNE" },
            { title: "Venn Diagram video 2 by ~sarkariNext", id: "1t1XvOAy7Co" },
        { title: "Dice and puzzle  by ~sarkariNext", id: "0zjzjJRjknM" },
        { title: " Dice and Puzzle video 2 by ~sarkariNext", id: "e9Gt2CBAF9c" },
          { title: "Seating Arrangement  by ~sarkariNext", id: "g37uc56LuN8" },
          { title: "Seating Arrangement   video 2 by ~sarkariNext", id: "n4R6mGj2_2Y" },
          { title: "Seating Arrangement   video 3 by ~sarkariNext", id: "c&list=PLw2ZiQ6OwlOXZUiQk_zBXTt4WItAscHYl" },
        { title: "Clock & Calendar  by ~sarkariNext", id: "nrMtD8RzKME" },
        { title: "Clock & Calendar video 2 by ~sarkariNext", id: "J7sQftVT22M" },
        { title: "Clock & Calendar video 3 by ~sarkariNext", id: "dXdxFkcv89g" },
        { title: "Clock & Calendar video 5 by ~sarkariNext", id: "Aign831i9TI" },
        { title: "Clock & Calendar video 6 by ~sarkariNext", id: "XBUKFgbAay8" },
        { title: "Clock & Calendar video 7 by ~sarkariNext", id: "c5LBitPWJP4" },
            { title: "Non-Verbal Reasoning  by ~sarkariNext", id: "Z_4hlJ6f0Yk" },
            { title: "Hidden figures  by ~sarkariNext", id: "e5gBNxawzNE" },
             { title: " figure complition and paper folding &cutting by ~sarkariNext", id: "--3lxNT-xyg" },
              { title: " Figure analogy & Classification by ~sarkariNext", id: "89YkKOYUsHM" },
               { title: " Figure series by ~sarkariNext", id: "snKQ1G6u834" },
               { title: " Non verbal & Miscellaneous by ~sarkariNext", id: "_QAOaw9TcbM" },
               { title: " Decisions Making by ~sarkariNext", id: "pg0hhRfSVLo" },
               { title: " Decisions Making video 2  by ~sarkariNext", id: "bjR9eoKiMoI" },
                    { title: " Alphabet test 2  by ~sarkariNext", id: "4VJyDmSoU5s" },
                    { title: " Mathematical operations by ~sarkariNext", id: "hXAX4A5Hqp4" },
                    { title: " Inequality by ~sarkariNext", id: "U4T4Jo_bcRs" },
                     { title: " Inequality video 2  by ~sarkariNext", id: "yOvG5zGocdk" },
                     { title: " Condition Number & Letter,Sign by ~sarkariNext", id: "IfMG9wYfbEI" },
                     { title: " Condition Number & Letter,Sign  VIDEO 2 by ~sarkariNext", id: "n1H5u8Yblz8" },
                         { title: "Finding the Missing number   by ~sarkariNext", id: "Eg620F3yL5A" },
                     { title: " Cube   by ~sarkariNext", id: "7wARlxcFKao" },
                     { title: " Cube video 2  by ~sarkariNext", id: "5Z9ZWLhLRFM" },
      ],

      "GK/GS": [
          { title: "Indian History by sarkariNext", id: " JY7T6q7O-yI" },
             { title: "Indian History video 1 by sarkariNext", id: "eP49zAdME5Q" },
             { title: "Indian History video 2 by sarkariNext", id: "b3BU8CP8SEQ" },
        { title: "Indian Geography by sarkariNext", id: "8tShYgCqqV0" },
        { title: "Indian Geography  video 2 by sarkariNext", id: "gts4mgXC4A" },
            { title: "Indian Polity by sarkariNext", id: "lbmzPycZD00" },
            { title: "Indian Polity video 2 by sarkariNext", id: "6imZZ9Uxdvs" },
        { title: "Indian Economy by sarkariNext", id: "1fsFSRhRq6g" },
        { title: "Indian Economy video 2  by sarkariNext", id: "9L9qSgS1dBM" },
        { title: "Indian Economy video 3  by sarkariNext", id: "1fsFSRhRq6g" },
           { title: "General Science by sarkariNext", id: "kpUHZgEXC4w" },
                 { title: "Physics Basics by sarkariNext", id: "EYqMdCfvD9E" },
             { title: "Chemistry Basics by sarkariNext", id: "BoHXtmp9ECw" },
        { title: "Biology Basics by sarkariNext", id: "SNsbqGxJSlk" },
                 { title: "Computer Awareness by sarkariNext", id: "AKdhX5AigU4" },
                 { title: "Computer Awareness  video 2 by sarkariNext", id: "tdhw_eGqS0A" },
                 { title: "Computer Awareness video 3  by sarkariNext", id: "sd1DHZZTMPw" },
        { title: "Current Affairs by sarkariNext", id: "C6NsNX4DuFs" },
        { title: "Current Affairs  video 1 by sarkariNext", id: "c0BsjZqgy1w" },
        { title: "Current Affairs  video 2 by sarkariNext", id: "y12Xpislkdc" },
        { title: "Current Affairs  video 3 by sarkariNext", id: "_iZvawUAYCk" },
        { title: "Current Affairs  video 4 by sarkariNext", id: "gdulMbPx5hM" },
        { title: "Current Affairs  video 5 by sarkariNext", id: "jhW3yap_vmI" },
        { title: "Current Affairs  video 6 by sarkariNext", id: "H0ZxgKkF61s" },
        { title: "Current Affairs  video 7 by sarkariNext", id: "u1JeZCKNkDM" },
        { title: "Current Affairs  video 8 by sarkariNext", id: "XMKd8GNAt4w" },
        { title: "Current Affairs  video 9 by sarkariNext", id: "8MYIqlrlNUo" },
        { title: "Current Affairs  video 11 by sarkariNext", id: "RpqMXcnxLcE" },
         { title: "Current Affairs  video 12 by sarkariNext", id: "VJuqWT0_RzY" },
          { title: "Current Affairs  video 13 by sarkariNext", id: "0QvyyUaTgpM" },
           { title: "Current Affairs  video 14 by sarkariNext", id: "zSssrtLfvWQ" },
            { title: "Current Affairs  video 15 by sarkariNext", id: "kf9WgDqPCIA" },
            { title: "Current Affairs  video 16 by sarkariNext", id: "vbkgofmPWew" },
            { title: "Current Affairs  video 17 by sarkariNext", id: "v-3JMlWzjNY" },
             { title: "Current Affairs  video 18 by sarkariNext", id: "0rHPRLI8M9o" },
        { title: "UP Special GK by sarkariNext", id: "K6ruTtzEscE" },
         { title: "UP Special GK video 2 by sarkariNext", id: "nvUif22Nips" },
          { title: "UP Special GK video 3 by sarkariNext", id: "jhmjt2eC4s8" },
           { title: "UP Special GK  video 4 by sarkariNext", id: "JAZ51oxSUUQ" },
       { title: "UP Special GK video 5 by sarkariNext", id: "g9vIrKB-5NM" },
       { title: "UP Special GK video 6 by sarkariNext", id: "s4t8LwQfoik" },
       { title: "UP Special GK video 6 by sarkariNext", id: "56cZFIofDuY" }
      ],

      "Hindi": [
        { title: "शब्दावली by sarkariNext", id: "bAuCT_JmT5U" },
        { title: "हिंदी साहित्य by sarkariNext ", id: "KiiC2FVbD7I" },
        { title: "हिंदी व्याकरण by sarkariNext", id: "V4rl7u_uXSU" },
        { title: "हिंदी वर्णमाला practice  by sarkariNext", id: "pIdDo21hWRM" },
        { title: "संज्ञा & सर्वनाम  practice by sarkariNext", id: "R-GCAUy_ick" },
        { title: "क्रिया practice by sarkariNext", id: "E1cSVulR1QU" },
        { title: "विशेषण practice by sarkariNext", id: "2Y0MmUol3yI" },
        { title: "क्रिया विशेषण practice  by sarkariNext", id: "V-gl9YVzW64" },
        { title: "लिंग वचन कारक practice  by sarkariNext", id: "HaRNODExHqk" },
        { title: " संधि practice by sarkariNext", id: "nlL2TOPcF3k" },
         { title: " समास practice by sarkariNext", id: "Zet647jGcX0" },
          { title: " काल  practice by sarkariNext", id: "aPD3S_iC0-E" },
           { title: " उपसर्ग & प्रत्यय  practice by sarkariNext", id: "wKh8eezUfCk" },
            { title: " अव्यय practice by sarkariNext", id: "nSAVNmT2lZo" },
             { title: " रस practice by sarkariNext", id: "9H9WlNkcWbM" },
              { title: "अलंकार practice by sarkariNext", id: "fH8OKov32BQ" },
               { title: "अशुद्धि सुधार & शुद्ध practice by sarkariNext", id: "HBbR_0M1LgU" },
                { title: " पर्यायवाची शब्द & अनेकार्थी शब्द practice by sarkariNext", id: "WdlulXGeIqw" },
                 { title: " विलोम शब्द practice by sarkariNext", id: "tA1xEH3HTL8" },
                  { title: " तत्सम & तद्भव practice by sarkariNext", id: "jGZhZyZglJg" },
                   { title: " वर्तनी practice by sarkariNext", id: "q8Z1FsqWLIY" },
                    { title: " कवि और लेखक practice by sarkariNext", id: "4FScU8RHgYU" },
                     { title: " कवि और लेखक video 2 practice by sarkariNext", id: "0880OsTfn_c" }
      ]
    },

    exampur: {
      "Maths": [
        { title: "Number System", id: "" },
        { title: "Simplification", id: "" },
        { title: "HCF & LCM", id: "" },
        { title: "Percentage", id: "" },
        { title: "Profit & Loss", id: "" },
        { title: "Simple Interest", id: "" },
        { title: "Compound Interest", id: "" },
        { title: "Ratio & Proportion", id: "" },
        { title: "Average", id: "" },
        { title: "Time & Work", id: "" },
        { title: "Time, Speed & Distance", id: "" },
        { title: "Mensuration (2D/3D)", id: "" },
        { title: "Algebra (Basic)", id: "" },
        { title: "Trigonometry (Basic)", id: "" },
        { title: "Data Interpretation", id: "" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "" },
        { title: "Classification", id: "" },
        { title: "Series", id: "" },
        { title: "Coding-Decoding", id: "" },
        { title: "Blood Relation", id: "" },
        { title: "Direction Sense", id: "" },
        { title: "Ranking & Order", id: "" },
        { title: "Syllogism", id: "" },
        { title: "Venn Diagram", id: "" },
        { title: "Puzzle", id: "" },
        { title: "Seating Arrangement", id: "" },
        { title: "Clock & Calendar", id: "" },
        { title: "Non-Verbal Reasoning", id: "" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "" },
        { title: "Indian Geography", id: "" },
        { title: "Indian Polity", id: "" },
        { title: "Indian Economy", id: "" },
        { title: "General Science", id: "" },
        { title: "Physics Basics", id: "" },
        { title: "Chemistry Basics", id: "" },
        { title: "Biology Basics", id: "" },
        { title: "Computer Awareness", id: "" },
        { title: "Current Affairs", id: "" },
        { title: "UP Special GK", id: "" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "" },
        { title: "संज्ञा", id: "" },
        { title: "सर्वनाम", id: "" },
        { title: "विशेषण", id: "" },
        { title: "क्रिया", id: "" },
        { title: "समास", id: "" },
        { title: "संधि", id: "" },
        { title: "मुहावरे", id: "" },
        { title: "लोकोक्तियाँ", id: "" },
        { title: "वाक्य शुद्धि", id: "" }
      ]
    },
    },
    khansir: {
      "Maths": [
        { title: "Number System", id: "" },
        { title: "Simplification", id: "" },
        { title: "HCF & LCM", id: "" },
        { title: "Percentage", id: "" },
        { title: "Profit & Loss", id: "" },
        { title: "Simple Interest", id: "" },
        { title: "Compound Interest", id: "" },
        { title: "Ratio & Proportion", id: "" },
        { title: "Average", id: "" },
        { title: "Time & Work", id: "" },
        { title: "Time, Speed & Distance", id: "" },
        { title: "Mensuration (2D/3D)", id: "" },
        { title: "Algebra (Basic)", id: "" },
        { title: "Trigonometry (Basic)", id: "" },
        { title: "Data Interpretation", id: "" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "" },
        { title: "Classification", id: "" },
        { title: "Series", id: "" },
        { title: "Coding-Decoding", id: "" },
        { title: "Blood Relation", id: "" },
        { title: "Direction Sense", id: "" },
        { title: "Ranking & Order", id: "" },
        { title: "Syllogism", id: "" },
        { title: "Venn Diagram", id: "" },
        { title: "Puzzle", id: "" },
        { title: "Seating Arrangement", id: "" },
        { title: "Clock & Calendar", id: "" },
        { title: "Non-Verbal Reasoning", id: "" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "" },
        { title: "Indian Geography", id: "" },
        { title: "Indian Polity", id: "" },
        { title: "Indian Economy", id: "" },
        { title: "General Science", id: "" },
        { title: "Physics Basics", id: "" },
        { title: "Chemistry Basics", id: "" },
        { title: "Biology Basics", id: "" },
        { title: "Computer Awareness", id: "" },
        { title: "Current Affairs", id: "" },
        { title: "UP Special GK", id: "" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "" },
        { title: "संज्ञा", id: "" },
        { title: "सर्वनाम", id: "" },
        { title: "विशेषण", id: "" },
        { title: "क्रिया", id: "" },
        { title: "समास", id: "" },
        { title: "संधि", id: "" },
        { title: "मुहावरे", id: "" },
        { title: "लोकोक्तियाँ", id: "" },
        { title: "वाक्य शुद्धि", id: "" }
      ]
    },
    
    adda247: {
      "Maths": [
        { title: "Number System", id: "" },
        { title: "Simplification", id: "" },
        { title: "HCF & LCM", id: "" },
        { title: "Percentage", id: "" },
        { title: "Profit & Loss", id: "" },
        { title: "Simple Interest", id: "" },
        { title: "Compound Interest", id: "" },
        { title: "Ratio & Proportion", id: "" },
        { title: "Average", id: "" },
        { title: "Time & Work", id: "" },
        { title: "Time, Speed & Distance", id: "" },
        { title: "Mensuration (2D/3D)", id: "" },
        { title: "Algebra (Basic)", id: "" },
        { title: "Trigonometry (Basic)", id: "" },
        { title: "Data Interpretation", id: "" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "" },
        { title: "Classification", id: "" },
        { title: "Series", id: "" },
        { title: "Coding-Decoding", id: "" },
        { title: "Blood Relation", id: "" },
        { title: "Direction Sense", id: "" },
        { title: "Ranking & Order", id: "" },
        { title: "Syllogism", id: "" },
        { title: "Venn Diagram", id: "" },
        { title: "Puzzle", id: "" },
        { title: "Seating Arrangement", id: "" },
        { title: "Clock & Calendar", id: "" },
        { title: "Non-Verbal Reasoning", id: "" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "" },
        { title: "Indian Geography", id: "" },
        { title: "Indian Polity", id: "" },
        { title: "Indian Economy", id: "" },
        { title: "General Science", id: "" },
        { title: "Physics Basics", id: "" },
        { title: "Chemistry Basics", id: "" },
        { title: "Biology Basics", id: "" },
        { title: "Computer Awareness", id: "" },
        { title: "Current Affairs", id: "" },
        { title: "UP Special GK", id: "" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "" },
        { title: "संज्ञा", id: "" },
        { title: "सर्वनाम", id: "" },
        { title: "विशेषण", id: "" },
        { title: "क्रिया", id: "" },
        { title: "समास", id: "" },
        { title: "संधि", id: "" },
        { title: "मुहावरे", id: "" },
        { title: "लोकोक्तियाँ", id: "" },
        { title: "वाक्य शुद्धि", id: "" }
      ]
    },
    
    studyiq: {
      "Maths": [
        { title: "Number System", id: "" },
        { title: "Simplification", id: "" },
        { title: "HCF & LCM", id: "" },
        { title: "Percentage", id: "" },
        { title: "Profit & Loss", id: "" },
        { title: "Simple Interest", id: "" },
        { title: "Compound Interest", id: "" },
        { title: "Ratio & Proportion", id: "" },
        { title: "Average", id: "" },
        { title: "Time & Work", id: "" },
        { title: "Time, Speed & Distance", id: "" },
        { title: "Mensuration (2D/3D)", id: "" },
        { title: "Algebra (Basic)", id: "" },
        { title: "Trigonometry (Basic)", id: "" },
        { title: "Data Interpretation", id: "" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "" },
        { title: "Classification", id: "" },
        { title: "Series", id: "" },
        { title: "Coding-Decoding", id: "" },
        { title: "Blood Relation", id: "" },
        { title: "Direction Sense", id: "" },
        { title: "Ranking & Order", id: "" },
        { title: "Syllogism", id: "" },
        { title: "Venn Diagram", id: "" },
        { title: "Puzzle", id: "" },
        { title: "Seating Arrangement", id: "" },
        { title: "Clock & Calendar", id: "" },
        { title: "Non-Verbal Reasoning", id: "" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "" },
        { title: "Indian Geography", id: "" },
        { title: "Indian Polity", id: "" },
        { title: "Indian Economy", id: "" },
        { title: "General Science", id: "" },
        { title: "Physics Basics", id: "" },
        { title: "Chemistry Basics", id: "" },
        { title: "Biology Basics", id: "" },
        { title: "Computer Awareness", id: "" },
        { title: "Current Affairs", id: "" },
        { title: "UP Special GK", id: "" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "" },
        { title: "संज्ञा", id: "" },
        { title: "सर्वनाम", id: "" },
        { title: "विशेषण", id: "" },
        { title: "क्रिया", id: "" },
        { title: "समास", id: "" },
        { title: "संधि", id: "" },
        { title: "मुहावरे", id: "" },
        { title: "लोकोक्तियाँ", id: "" },
        { title: "वाक्य शुद्धि", id: "" }
      ]
    
    },
    careerwill: {
      "Maths": [
        { title: "Number System", id: "" },
        { title: "Simplification", id: "" },
        { title: "HCF & LCM", id: "" },
        { title: "Percentage", id: "" },
        { title: "Profit & Loss", id: "" },
        { title: "Simple Interest", id: "" },
        { title: "Compound Interest", id: "" },
        { title: "Ratio & Proportion", id: "" },
        { title: "Average", id: "" },
        { title: "Time & Work", id: "" },
        { title: "Time, Speed & Distance", id: "" },
        { title: "Mensuration (2D/3D)", id: "" },
        { title: "Algebra (Basic)", id: "" },
        { title: "Trigonometry (Basic)", id: "" },
        { title: "Data Interpretation", id: "" }
      ],

      "Reasoning": [
        { title: "Analogies", id: "" },
        { title: "Classification", id: "" },
        { title: "Series", id: "" },
        { title: "Coding-Decoding", id: "" },
        { title: "Blood Relation", id: "" },
        { title: "Direction Sense", id: "" },
        { title: "Ranking & Order", id: "" },
        { title: "Syllogism", id: "" },
        { title: "Venn Diagram", id: "" },
        { title: "Puzzle", id: "" },
        { title: "Seating Arrangement", id: "" },
        { title: "Clock & Calendar", id: "" },
        { title: "Non-Verbal Reasoning", id: "" }
      ],

      "GK/GS": [
        { title: "Indian History", id: "" },
        { title: "Indian Geography", id: "" },
        { title: "Indian Polity", id: "" },
        { title: "Indian Economy", id: "" },
        { title: "General Science", id: "" },
        { title: "Physics Basics", id: "" },
        { title: "Chemistry Basics", id: "" },
        { title: "Biology Basics", id: "" },
        { title: "Computer Awareness", id: "" },
        { title: "Current Affairs", id: "" },
        { title: "UP Special GK", id: "" }
      ],

      "Hindi": [
        { title: "वर्णमाला", id: "" },
        { title: "संज्ञा", id: "" },
        { title: "सर्वनाम", id: "" },
        { title: "विशेषण", id: "" },
        { title: "क्रिया", id: "" },
        { title: "समास", id: "" },
        { title: "संधि", id: "" },
        { title: "मुहावरे", id: "" },
        { title: "लोकोक्तियाँ", id: "" },
        { title: "वाक्य शुद्धि", id: "" }
      ]
    },
    
  



  /* ======================================================
     📑 SSC (CGL/CHSL/MTS/GD)
  ====================================================== */
  /*THIS SYLLABOUS IS FOR SSC CGL*/ 
  "SSC_CGL": {

  adda247: {
    "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple & Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Algebra", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Geometry", id: "" },
      { title: "Coordinate Geometry", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Clock & Calendar", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
  },

  exampur: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple & Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Algebra", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Geometry", id: "" },
      { title: "Coordinate Geometry", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Clock & Calendar", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ] },
  rojgar: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple & Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Algebra", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Geometry", id: "" },
      { title: "Coordinate Geometry", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Clock & Calendar", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   },
  studyiq: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple & Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Algebra", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Geometry", id: "" },
      { title: "Coordinate Geometry", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Clock & Calendar", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
  },
  unacademy: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple & Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Algebra", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Geometry", id: "" },
      { title: "Coordinate Geometry", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Clock & Calendar", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   }
   /*THIS IS THE SYLLABOUS OF SSC CHSL*/ 

},
"SSC_CHSL": {

  adda247: {

    "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "Percentage", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "" },
      { title: "Typing Test (LDC/JSA)", id: "" },
      { title: "DEST (Data Entry Speed Test)", id: "" }
    ]

  },

  exampur: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "Percentage", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "" },
      { title: "Typing Test (LDC/JSA)", id: "" },
      { title: "DEST (Data Entry Speed Test)", id: "" }
    ]
   },
  rojgar: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "Percentage", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "" },
      { title: "Typing Test (LDC/JSA)", id: "" },
      { title: "DEST (Data Entry Speed Test)", id: "" }
    ]
   },
  studyiq: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "Percentage", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "" },
      { title: "Typing Test (LDC/JSA)", id: "" },
      { title: "DEST (Data Entry Speed Test)", id: "" }
    ]
   },
  unacademy: { "Quantitative Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "Percentage", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Active & Passive Voice", id: "" },
      { title: "Direct & Indirect Speech", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ],

    "Typing / Skill Test": [
      { title: "Typing Test (DEO)", id: "" },
      { title: "Typing Test (LDC/JSA)", id: "" },
      { title: "DEST (Data Entry Speed Test)", id: "" }
    ]
   }

},
/*THIS IS THE SYYLABOUS OF SSC MTS*/ 
"SSC_MTS": {

  adda247: {

    "Numerical Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Non-Verbal Reasoning", id: "" },
      { title: "Puzzle (Basic)", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
  },

  exampur: { "Numerical Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Non-Verbal Reasoning", id: "" },
      { title: "Puzzle (Basic)", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   },
  rojgar: { "Numerical Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Non-Verbal Reasoning", id: "" },
      { title: "Puzzle (Basic)", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   },
  studyiq: { "Numerical Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Non-Verbal Reasoning", id: "" },
      { title: "Puzzle (Basic)", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   },
  unacademy: { "Numerical Aptitude": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Non-Verbal Reasoning", id: "" },
      { title: "Puzzle (Basic)", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "Spellings", id: "" }
    ],

    "General Awareness": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" },
      { title: "Static GK", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   }

},
/*THIS IS THE SYLLABOUS OF SSC GD */

"SSC_GD": {

  adda247: {

    "General Intelligence & Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Similarities & Differences", id: "" },
      { title: "Space Visualization", id: "" },
      { title: "Problem Solving", id: "" },
      { title: "Analysis & Judgment", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Visual Memory", id: "" },
      { title: "Discrimination", id: "" },
      { title: "Observation", id: "" },
      { title: "Relationship Concepts", id: "" },
      { title: "Arithmetical Reasoning", id: "" },
      { title: "Verbal & Figure Classification", id: "" },
      { title: "Arithmetic Number Series", id: "" },
      { title: "Non-Verbal Series", id: "" },
      { title: "Coding-Decoding", id: "" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "" },
      { title: "History", id: "" },
      { title: "Culture", id: "" },
      { title: "Geography", id: "" },
      { title: "Economy", id: "" },
      { title: "Polity", id: "" },
      { title: "General Science", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "" },
      { title: "Vocabulary", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Reading Comprehension", id: "" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "" },
      { title: "Running (Male/Female)", id: "" },
      { title: "Physical Efficiency Test (PET)", id: "" }
    ]

  },

  exampur: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Similarities & Differences", id: "" },
      { title: "Space Visualization", id: "" },
      { title: "Problem Solving", id: "" },
      { title: "Analysis & Judgment", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Visual Memory", id: "" },
      { title: "Discrimination", id: "" },
      { title: "Observation", id: "" },
      { title: "Relationship Concepts", id: "" },
      { title: "Arithmetical Reasoning", id: "" },
      { title: "Verbal & Figure Classification", id: "" },
      { title: "Arithmetic Number Series", id: "" },
      { title: "Non-Verbal Series", id: "" },
      { title: "Coding-Decoding", id: "" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "" },
      { title: "History", id: "" },
      { title: "Culture", id: "" },
      { title: "Geography", id: "" },
      { title: "Economy", id: "" },
      { title: "Polity", id: "" },
      { title: "General Science", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "" },
      { title: "Vocabulary", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Reading Comprehension", id: "" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "" },
      { title: "Running (Male/Female)", id: "" },
      { title: "Physical Efficiency Test (PET)", id: "" }
    ]
   },
  rojgar: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Similarities & Differences", id: "" },
      { title: "Space Visualization", id: "" },
      { title: "Problem Solving", id: "" },
      { title: "Analysis & Judgment", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Visual Memory", id: "" },
      { title: "Discrimination", id: "" },
      { title: "Observation", id: "" },
      { title: "Relationship Concepts", id: "" },
      { title: "Arithmetical Reasoning", id: "" },
      { title: "Verbal & Figure Classification", id: "" },
      { title: "Arithmetic Number Series", id: "" },
      { title: "Non-Verbal Series", id: "" },
      { title: "Coding-Decoding", id: "" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "" },
      { title: "History", id: "" },
      { title: "Culture", id: "" },
      { title: "Geography", id: "" },
      { title: "Economy", id: "" },
      { title: "Polity", id: "" },
      { title: "General Science", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "" },
      { title: "Vocabulary", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Reading Comprehension", id: "" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "" },
      { title: "Running (Male/Female)", id: "" },
      { title: "Physical Efficiency Test (PET)", id: "" }
    ]
   },
  studyiq: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Similarities & Differences", id: "" },
      { title: "Space Visualization", id: "" },
      { title: "Problem Solving", id: "" },
      { title: "Analysis & Judgment", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Visual Memory", id: "" },
      { title: "Discrimination", id: "" },
      { title: "Observation", id: "" },
      { title: "Relationship Concepts", id: "" },
      { title: "Arithmetical Reasoning", id: "" },
      { title: "Verbal & Figure Classification", id: "" },
      { title: "Arithmetic Number Series", id: "" },
      { title: "Non-Verbal Series", id: "" },
      { title: "Coding-Decoding", id: "" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "" },
      { title: "History", id: "" },
      { title: "Culture", id: "" },
      { title: "Geography", id: "" },
      { title: "Economy", id: "" },
      { title: "Polity", id: "" },
      { title: "General Science", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "" },
      { title: "Vocabulary", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Reading Comprehension", id: "" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "" },
      { title: "Running (Male/Female)", id: "" },
      { title: "Physical Efficiency Test (PET)", id: "" }
    ]
  },
  unacademy: { "General Intelligence & Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Similarities & Differences", id: "" },
      { title: "Space Visualization", id: "" },
      { title: "Problem Solving", id: "" },
      { title: "Analysis & Judgment", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Visual Memory", id: "" },
      { title: "Discrimination", id: "" },
      { title: "Observation", id: "" },
      { title: "Relationship Concepts", id: "" },
      { title: "Arithmetical Reasoning", id: "" },
      { title: "Verbal & Figure Classification", id: "" },
      { title: "Arithmetic Number Series", id: "" },
      { title: "Non-Verbal Series", id: "" },
      { title: "Coding-Decoding", id: "" }
    ],

    "General Knowledge & Awareness": [
      { title: "India & Neighbouring Countries", id: "" },
      { title: "History", id: "" },
      { title: "Culture", id: "" },
      { title: "Geography", id: "" },
      { title: "Economy", id: "" },
      { title: "Polity", id: "" },
      { title: "General Science", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "Elementary Mathematics": [
      { title: "Number System", id: "" },
      { title: "Simplification", id: "" },
      { title: "HCF & LCM", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (Basic)", id: "" }
    ],

    "Hindi / English": [
      { title: "Basic Grammar", id: "" },
      { title: "Vocabulary", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Detection", id: "" },
      { title: "Synonyms & Antonyms", id: "" },
      { title: "Idioms & Phrases", id: "" },
      { title: "One Word Substitution", id: "" },
      { title: "Reading Comprehension", id: "" }
    ],

    "Physical Standards / PET": [
      { title: "Height & Chest Standards", id: "" },
      { title: "Running (Male/Female)", id: "" },
      { title: "Physical Efficiency Test (PET)", id: "" }
    ]
   }

},




  /* ======================================================
     🚆 RAILWAY (NTPC/Group-D/ALP)
  ====================================================== */
  "RAILWAY_NTPC": {

  exampur: {

    "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Statistics", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series (Number/Alphabet)", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Argument", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "" },
      { title: "Indian Geography", id: "" },
      { title: "Indian Polity", id: "" },
      { title: "Indian Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Computer Awareness", id: "" },
      { title: "Static GK", id: "" },
      { title: "Sports", id: "" },
      { title: "Books & Authors", id: "" },
      { title: "Awards & Honours", id: "" },
      { title: "Important Days", id: "" },
      { title: "Current Affairs", id: "" }
    ]
  },

  rojgar: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Statistics", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series (Number/Alphabet)", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Argument", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "" },
      { title: "Indian Geography", id: "" },
      { title: "Indian Polity", id: "" },
      { title: "Indian Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Computer Awareness", id: "" },
      { title: "Static GK", id: "" },
      { title: "Sports", id: "" },
      { title: "Books & Authors", id: "" },
      { title: "Awards & Honours", id: "" },
      { title: "Important Days", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   },
  adda247: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Statistics", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series (Number/Alphabet)", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Argument", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "" },
      { title: "Indian Geography", id: "" },
      { title: "Indian Polity", id: "" },
      { title: "Indian Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Computer Awareness", id: "" },
      { title: "Static GK", id: "" },
      { title: "Sports", id: "" },
      { title: "Books & Authors", id: "" },
      { title: "Awards & Honours", id: "" },
      { title: "Important Days", id: "" },
      { title: "Current Affairs", id: "" }
    ]
  },
  studyiq: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Statistics", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series (Number/Alphabet)", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Argument", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "" },
      { title: "Indian Geography", id: "" },
      { title: "Indian Polity", id: "" },
      { title: "Indian Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Computer Awareness", id: "" },
      { title: "Static GK", id: "" },
      { title: "Sports", id: "" },
      { title: "Books & Authors", id: "" },
      { title: "Awards & Honours", id: "" },
      { title: "Important Days", id: "" },
      { title: "Current Affairs", id: "" }
    ]
   },
  careerwill: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Compound Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Statistics", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series (Number/Alphabet)", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Argument", id: "" },
      { title: "Decision Making", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "Indian History", id: "" },
      { title: "Indian Geography", id: "" },
      { title: "Indian Polity", id: "" },
      { title: "Indian Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Computer Awareness", id: "" },
      { title: "Static GK", id: "" },
      { title: "Sports", id: "" },
      { title: "Books & Authors", id: "" },
      { title: "Awards & Honours", id: "" },
      { title: "Important Days", id: "" },
      { title: "Current Affairs", id: "" }
    ]
  }

},
"RAILWAY_GROUP_D": {

  exampur: {

    "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D Basic)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism (Basic)", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "" },
      { title: "Work, Power & Energy", id: "" },
      { title: "Heat & Temperature", id: "" },
      { title: "Electricity", id: "" },
      { title: "Human Body", id: "" },
      { title: "Nutrition", id: "" },
      { title: "Cells & Tissues", id: "" },
      { title: "Metals & Non-metals", id: "" },
      { title: "Acids, Bases & Salts", id: "" }
    ]
  },

  rojgar: {  "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D Basic)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism (Basic)", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "" },
      { title: "Work, Power & Energy", id: "" },
      { title: "Heat & Temperature", id: "" },
      { title: "Electricity", id: "" },
      { title: "Human Body", id: "" },
      { title: "Nutrition", id: "" },
      { title: "Cells & Tissues", id: "" },
      { title: "Metals & Non-metals", id: "" },
      { title: "Acids, Bases & Salts", id: "" }
    ]
   },
  adda247: {  "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D Basic)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism (Basic)", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "" },
      { title: "Work, Power & Energy", id: "" },
      { title: "Heat & Temperature", id: "" },
      { title: "Electricity", id: "" },
      { title: "Human Body", id: "" },
      { title: "Nutrition", id: "" },
      { title: "Cells & Tissues", id: "" },
      { title: "Metals & Non-metals", id: "" },
      { title: "Acids, Bases & Salts", id: "" }
    ]
   },
  studyiq: {  "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D Basic)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism (Basic)", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "" },
      { title: "Work, Power & Energy", id: "" },
      { title: "Heat & Temperature", id: "" },
      { title: "Electricity", id: "" },
      { title: "Human Body", id: "" },
      { title: "Nutrition", id: "" },
      { title: "Cells & Tissues", id: "" },
      { title: "Metals & Non-metals", id: "" },
      { title: "Acids, Bases & Salts", id: "" }
    ]
   },
  careerwill: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D)", id: "" },
      { title: "Mensuration (3D Basic)", id: "" },
      { title: "Geometry (Basic)", id: "" },
      { title: "Trigonometry (Basic)", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Syllogism (Basic)", id: "" },
      { title: "Mathematical Operations", id: "" },
      { title: "Puzzle (Basic)", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science (Extra Focus)": [
      { title: "Motion & Force", id: "" },
      { title: "Work, Power & Energy", id: "" },
      { title: "Heat & Temperature", id: "" },
      { title: "Electricity", id: "" },
      { title: "Human Body", id: "" },
      { title: "Nutrition", id: "" },
      { title: "Cells & Tissues", id: "" },
      { title: "Metals & Non-metals", id: "" },
      { title: "Acids, Bases & Salts", id: "" }
    ]
  }

},
"RAILWAY_ALP": {

  exampur: {

    "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Geometry", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "" },
      { title: "Current, Voltage & Resistance", id: "" },
      { title: "Ohm’s Law", id: "" },
      { title: "Series & Parallel Circuit", id: "" },
      { title: "Magnetism", id: "" },
      { title: "Electromagnetic Induction", id: "" },
      { title: "Work, Power & Energy (Science)", id: "" },
      { title: "Heat & Thermodynamics (Basic)", id: "" },
      { title: "Basic Mechanics", id: "" },
      { title: "Tools & Safety", id: "" }
    ]
  },

  rojgar: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Geometry", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "" },
      { title: "Current, Voltage & Resistance", id: "" },
      { title: "Ohm’s Law", id: "" },
      { title: "Series & Parallel Circuit", id: "" },
      { title: "Magnetism", id: "" },
      { title: "Electromagnetic Induction", id: "" },
      { title: "Work, Power & Energy (Science)", id: "" },
      { title: "Heat & Thermodynamics (Basic)", id: "" },
      { title: "Basic Mechanics", id: "" },
      { title: "Tools & Safety", id: "" }
    ]
  },
  adda247: {"Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Geometry", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "" },
      { title: "Current, Voltage & Resistance", id: "" },
      { title: "Ohm’s Law", id: "" },
      { title: "Series & Parallel Circuit", id: "" },
      { title: "Magnetism", id: "" },
      { title: "Electromagnetic Induction", id: "" },
      { title: "Work, Power & Energy (Science)", id: "" },
      { title: "Heat & Thermodynamics (Basic)", id: "" },
      { title: "Basic Mechanics", id: "" },
      { title: "Tools & Safety", id: "" }
    ]
  },
  studyiq: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Geometry", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "" },
      { title: "Current, Voltage & Resistance", id: "" },
      { title: "Ohm’s Law", id: "" },
      { title: "Series & Parallel Circuit", id: "" },
      { title: "Magnetism", id: "" },
      { title: "Electromagnetic Induction", id: "" },
      { title: "Work, Power & Energy (Science)", id: "" },
      { title: "Heat & Thermodynamics (Basic)", id: "" },
      { title: "Basic Mechanics", id: "" },
      { title: "Tools & Safety", id: "" }
    ]
  },
  careerwill: { "Maths": [
      { title: "Number System", id: "" },
      { title: "BODMAS / Simplification", id: "" },
      { title: "LCM & HCF", id: "" },
      { title: "Decimal & Fractions", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Mensuration (2D & 3D)", id: "" },
      { title: "Geometry", id: "" },
      { title: "Trigonometry", id: "" },
      { title: "Algebra (Basic)", id: "" },
      { title: "Data Interpretation", id: "" }
    ],

    "Reasoning": [
      { title: "Analogies", id: "" },
      { title: "Classification", id: "" },
      { title: "Series", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Venn Diagram", id: "" },
      { title: "Statement & Conclusion", id: "" },
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Non-Verbal Reasoning", id: "" }
    ],

    "GK/GS": [
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science (Physics)", id: "" },
      { title: "General Science (Chemistry)", id: "" },
      { title: "General Science (Biology)", id: "" },
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" }
    ],

    "General Science + Technical (ALP Special)": [
      { title: "Basic Electricity", id: "" },
      { title: "Current, Voltage & Resistance", id: "" },
      { title: "Ohm’s Law", id: "" },
      { title: "Series & Parallel Circuit", id: "" },
      { title: "Magnetism", id: "" },
      { title: "Electromagnetic Induction", id: "" },
      { title: "Work, Power & Energy (Science)", id: "" },
      { title: "Heat & Thermodynamics (Basic)", id: "" },
      { title: "Basic Mechanics", id: "" },
      { title: "Tools & Safety", id: "" }
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
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Quadratic Equation", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Probability (Basic)", id: "" },
      { title: "Permutation & Combination (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" },
      { title: "Caselet DI", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" },
      { title: "Logical Reasoning", id: "" },
      { title: "Data Sufficiency", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Conclusion", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Word Swap", id: "" },
      { title: "Sentence Rearrangement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "" },
      { title: "Static GK", id: "" },
      { title: "Budget & Economic Survey", id: "" },
      { title: "Government Schemes", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Financial Institutions", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" },
      { title: "Cyber Security (Basic)", id: "" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "" },
      { title: "Letter Writing", id: "" },
      { title: "Precis Writing", id: "" }
    ]
  },

  exampur: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Quadratic Equation", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Probability (Basic)", id: "" },
      { title: "Permutation & Combination (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" },
      { title: "Caselet DI", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" },
      { title: "Logical Reasoning", id: "" },
      { title: "Data Sufficiency", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Conclusion", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Word Swap", id: "" },
      { title: "Sentence Rearrangement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "" },
      { title: "Static GK", id: "" },
      { title: "Budget & Economic Survey", id: "" },
      { title: "Government Schemes", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Financial Institutions", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" },
      { title: "Cyber Security (Basic)", id: "" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "" },
      { title: "Letter Writing", id: "" },
      { title: "Precis Writing", id: "" }
    ]
  },
  rojgar: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Quadratic Equation", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Probability (Basic)", id: "" },
      { title: "Permutation & Combination (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" },
      { title: "Caselet DI", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" },
      { title: "Logical Reasoning", id: "" },
      { title: "Data Sufficiency", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Conclusion", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Word Swap", id: "" },
      { title: "Sentence Rearrangement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "" },
      { title: "Static GK", id: "" },
      { title: "Budget & Economic Survey", id: "" },
      { title: "Government Schemes", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Financial Institutions", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" },
      { title: "Cyber Security (Basic)", id: "" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "" },
      { title: "Letter Writing", id: "" },
      { title: "Precis Writing", id: "" }
    ]
  },
  studyiq: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Quadratic Equation", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Probability (Basic)", id: "" },
      { title: "Permutation & Combination (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" },
      { title: "Caselet DI", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" },
      { title: "Logical Reasoning", id: "" },
      { title: "Data Sufficiency", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Conclusion", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Word Swap", id: "" },
      { title: "Sentence Rearrangement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "" },
      { title: "Static GK", id: "" },
      { title: "Budget & Economic Survey", id: "" },
      { title: "Government Schemes", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Financial Institutions", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" },
      { title: "Cyber Security (Basic)", id: "" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "" },
      { title: "Letter Writing", id: "" },
      { title: "Precis Writing", id: "" }
    ]
  },
  unacademy: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Quadratic Equation", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Probability (Basic)", id: "" },
      { title: "Permutation & Combination (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" },
      { title: "Caselet DI", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" },
      { title: "Logical Reasoning", id: "" },
      { title: "Data Sufficiency", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Conclusion", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Word Swap", id: "" },
      { title: "Sentence Rearrangement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "" },
      { title: "Static GK", id: "" },
      { title: "Budget & Economic Survey", id: "" },
      { title: "Government Schemes", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Financial Institutions", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" },
      { title: "Cyber Security (Basic)", id: "" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "" },
      { title: "Letter Writing", id: "" },
      { title: "Precis Writing", id: "" }
    ]
  },
  careerwill: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Quadratic Equation", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Probability (Basic)", id: "" },
      { title: "Permutation & Combination (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" },
      { title: "Caselet DI", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" },
      { title: "Logical Reasoning", id: "" },
      { title: "Data Sufficiency", id: "" },
      { title: "Statement & Assumption", id: "" },
      { title: "Statement & Conclusion", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Word Swap", id: "" },
      { title: "Sentence Rearrangement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Economy Awareness": [
      { title: "Current Affairs (Banking)", id: "" },
      { title: "Static GK", id: "" },
      { title: "Budget & Economic Survey", id: "" },
      { title: "Government Schemes", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Financial Institutions", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" },
      { title: "Cyber Security (Basic)", id: "" }
    ],

    "Descriptive (Mains)": [
      { title: "Essay Writing", id: "" },
      { title: "Letter Writing", id: "" },
      { title: "Precis Writing", id: "" }
    ]
   }

},
/* ======================================================
     🏦 IBPS CLERK (Pre + Mains)
====================================================== */
"IBPS_CLERK": {

  adda247: {

    "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Functions", id: "" },
      { title: "Financial Awareness", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ]
  },

  exampur: { 
    "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Functions", id: "" },
      { title: "Financial Awareness", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ]
  },
  rojgar: { "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Functions", id: "" },
      { title: "Financial Awareness", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ]
  },
  studyiq: { "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Functions", id: "" },
      { title: "Financial Awareness", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ]
  },
  unacademy: { "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Functions", id: "" },
      { title: "Financial Awareness", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ]
   },
  careerwill: { "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" },
      { title: "Vocabulary (Synonyms/Antonyms)", id: "" }
    ],

    "General / Banking Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "RBI & Functions", id: "" },
      { title: "Financial Awareness", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ]
   }

},
/* ======================================================
     🏦 RRB PO + CLERK (Officer Scale + Office Assistant)
====================================================== */
"RRB_PO_CLERK": {

  adda247: {

    "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "" },
      { title: "विलोम / पर्यायवाची", id: "" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "" },
      { title: "गद्यांश", id: "" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "Digital Banking", id: "" }
    ]
  },

  exampur: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "" },
      { title: "विलोम / पर्यायवाची", id: "" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "" },
      { title: "गद्यांश", id: "" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "Digital Banking", id: "" }
    ]
  },
  rojgar: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "" },
      { title: "विलोम / पर्यायवाची", id: "" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "" },
      { title: "गद्यांश", id: "" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "Digital Banking", id: "" }
    ]
  },
  studyiq: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "" },
      { title: "विलोम / पर्यायवाची", id: "" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "" },
      { title: "गद्यांश", id: "" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "Digital Banking", id: "" }
    ]
   },
  unacademy: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "" },
      { title: "विलोम / पर्यायवाची", id: "" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "" },
      { title: "गद्यांश", id: "" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "Digital Banking", id: "" }
    ]
  },
  careerwill: {  "Quant": [
      { title: "Simplification / Approximation", id: "" },
      { title: "Number Series", id: "" },
      { title: "Percentage", id: "" },
      { title: "Ratio & Proportion", id: "" },
      { title: "Average", id: "" },
      { title: "Profit & Loss", id: "" },
      { title: "Simple Interest (SI)", id: "" },
      { title: "Compound Interest (CI)", id: "" },
      { title: "Time & Work", id: "" },
      { title: "Pipes & Cistern", id: "" },
      { title: "Time, Speed & Distance", id: "" },
      { title: "Boat & Stream", id: "" },
      { title: "Train Problems", id: "" },
      { title: "Mixture & Alligation", id: "" },
      { title: "Mensuration (Basic)", id: "" },
      { title: "Data Interpretation (DI)", id: "" }
    ],

    "Reasoning": [
      { title: "Puzzle", id: "" },
      { title: "Seating Arrangement", id: "" },
      { title: "Syllogism", id: "" },
      { title: "Inequality", id: "" },
      { title: "Coding-Decoding", id: "" },
      { title: "Blood Relation", id: "" },
      { title: "Direction Sense", id: "" },
      { title: "Order & Ranking", id: "" },
      { title: "Alphanumeric Series", id: "" },
      { title: "Input Output", id: "" }
    ],

    "English": [
      { title: "Reading Comprehension", id: "" },
      { title: "Cloze Test", id: "" },
      { title: "Para Jumble", id: "" },
      { title: "Fill in the Blanks", id: "" },
      { title: "Error Spotting", id: "" },
      { title: "Sentence Improvement", id: "" }
    ],

    "Hindi (RRB Special)": [
      { title: "व्याकरण (Basic)", id: "" },
      { title: "विलोम / पर्यायवाची", id: "" },
      { title: "मुहावरे / लोकोक्तियाँ", id: "" },
      { title: "गद्यांश", id: "" }
    ],

    "General Awareness": [
      { title: "Current Affairs", id: "" },
      { title: "Static GK", id: "" },
      { title: "History", id: "" },
      { title: "Geography", id: "" },
      { title: "Polity", id: "" },
      { title: "Economy", id: "" },
      { title: "General Science", id: "" }
    ],

    "Computer": [
      { title: "Basics of Computer", id: "" },
      { title: "MS Office", id: "" },
      { title: "Internet", id: "" },
      { title: "Networking", id: "" },
      { title: "Shortcut Keys", id: "" }
    ],

    "Banking Awareness": [
      { title: "Basics of Banking", id: "" },
      { title: "RBI & Monetary Policy", id: "" },
      { title: "Banking Terms", id: "" },
      { title: "Digital Banking", id: "" }
    ]
  }

},





  /* ======================================================
     📚 TEACHING (CTET/UPTET/SUPER TET)
  ====================================================== */
  "Teaching": {

    studyiq: {
      "Child Development (CDP)": [
        { title: "Piaget Theory", id: "" },
        { title: "Vygotsky Theory", id: "" },
        { title: "Learning Theories", id: "" }
      ],

      "Pedagogy": [
        { title: "Hindi Pedagogy", id: "" },
        { title: "Math Pedagogy", id: "" },
        { title: "EVS Pedagogy", id: "" }
      ],

      "Maths": [
        { title: "Number System", id: "" },
        { title: "Percentage", id: "" }
      ],

      "EVS": [
        { title: "Environment", id: "" },
        { title: "Food & Nutrition", id: "" }
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
        { title: "Trigonometry", id: "" },
        { title: "Algebra", id: "" }
      ],
      "GK/GS": [
        { title: "Current Affairs", id: "" },
        { title: "Science", id: "" }
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
        { title: "गति (Motion)", id: "" },
        { title: "बल तथा गति के नियम", id: "" },
        { title: "कार्य तथा ऊर्जा", id: "" },
        { title: "गुरुत्वाकर्षण", id: "" },
        { title: "ध्वनि", id: "" }
      ],

      "Chemistry": [
        { title: "हमारे आस-पास के पदार्थ", id: "" },
        { title: "क्या हमारे आस-पास के पदार्थ शुद्ध हैं?", id: "" },
        { title: "परमाणु एवं अणु", id: "" },
        { title: "संरचना के परमाणु", id: "" }
      ],

      "Biology": [
        { title: "जीवन की मौलिक इकाई", id: "" },
        { title: "ऊतक (Tissues)", id: "" },
        { title: "जीवन की विविधता", id: "" },
        { title: "खाद्य संसाधनों में सुधार", id: "" }
      ],

      "Mathematics": [
        { title: "संख्या पद्धति", id: "" },
        { title: "बहुपद", id: "" },
        { title: "दो चर वाले रैखिक समीकरण", id: "" },
        { title: "रेखाएँ और कोण", id: "" },
        { title: "त्रिभुज", id: "" },
        { title: "चतुर्भुज", id: "" },
        { title: "वृत्त", id: "" },
        { title: "हेरॉन का सूत्र", id: "" },
        { title: "पृष्ठीय क्षेत्रफल एवं आयतन", id: "" },
        { title: "सांख्यिकी", id: "" },
        { title: "प्रायिकता", id: "" }
      ]
    },

    magnetbrains: {
      "Quant": [
        { title: "Simplification", id: "" },
        { title: "Number Series", id: "" },
        { title: "Quadratic Equation", id: "" },
        { title: "Approximation", id: "" },
        { title: "Percentage", id: "" },
        { title: "Profit & Loss", id: "" },
        { title: "SI & CI", id: "" },
        { title: "Time Work", id: "" },
        { title: "Time Distance", id: "" },
        { title: "Ratio", id: "" },
        { title: "DI (Data Interpretation)", id: "" }
      ],

      "Reasoning": [
        { title: "Puzzle", id: "" },
        { title: "Seating Arrangement", id: "" },
        { title: "Syllogism", id: "" },
        { title: "Inequality", id: "" },
        { title: "Coding Decoding", id: "" },
        { title: "Blood Relation", id: "" }
      ],

      "English": [
        { title: "Reading Comprehension", id: "" },
        { title: "Cloze Test", id: "" },
        { title: "Error Spotting", id: "" },
        { title: "Para Jumble", id: "" },
        { title: "Fill in the blanks", id: "" }
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
        { title: "Piaget Theory", id: "" },
        { title: "Vygotsky Theory", id: "" },
        { title: "Learning Theories", id: "" }
      ],

      "Pedagogy": [
        { title: "Hindi Pedagogy", id: "" },
        { title: "Math Pedagogy", id: "" },
        { title: "EVS Pedagogy", id: "" }
      ],

      "Maths": [
        { title: "Number System", id: "" },
        { title: "Percentage", id: "" }
      ],

      "EVS": [
        { title: "Environment", id: "" },
        { title: "Food & Nutrition", id: "" }
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
        { title: "Trigonometry", id: "" },
        { title: "Algebra", id: "" }
      ],
      "GK/GS": [
        { title: "Current Affairs", id: "" },
        { title: "Science", id: "" }
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
        { title: "गति (Motion)", id: "" },
        { title: "बल तथा गति के नियम", id: "" },
        { title: "कार्य तथा ऊर्जा", id: "" },
        { title: "गुरुत्वाकर्षण", id: "" },
        { title: "ध्वनि", id: "" }
      ],

      "Chemistry": [
        { title: "हमारे आस-पास के पदार्थ", id: "" },
        { title: "क्या हमारे आस-पास के पदार्थ शुद्ध हैं?", id: "" },
        { title: "परमाणु एवं अणु", id: "" },
        { title: "संरचना के परमाणु", id: "" }
      ],

      "Biology": [
        { title: "जीवन की मौलिक इकाई", id: "" },
        { title: "ऊतक (Tissues)", id: "" },
        { title: "जीवन की विविधता", id: "" },
        { title: "खाद्य संसाधनों में सुधार", id: "" }
      ],

      "Mathematics": [
        { title: "संख्या पद्धति", id: "" },
        { title: "बहुपद", id: "" },
        { title: "दो चर वाले रैखिक समीकरण", id: "" },
        { title: "रेखाएँ और कोण", id: "" },
        { title: "त्रिभुज", id: "" },
        { title: "चतुर्भुज", id: "" },
        { title: "वृत्त", id: "" },
        { title: "हेरॉन का सूत्र", id: "" },
        { title: "पृष्ठीय क्षेत्रफल एवं आयतन", id: "" },
        { title: "सांख्यिकी", id: "" },
        { title: "प्रायिकता", id: "" }
      ]
    },
    vidyakul: {
      "Quant": [
        { title: "Simplification", id: "" },
        { title: "Number Series", id: "" },
        { title: "Quadratic Equation", id: "" },
        { title: "Approximation", id: "" },
        { title: "Percentage", id: "" },
        { title: "Profit & Loss", id: "" },
        { title: "SI & CI", id: "" },
        { title: "Time Work", id: "" },
        { title: "Time Distance", id: "" },
        { title: "Ratio", id: "" },
        { title: "DI (Data Interpretation)", id: "" }
      ],

      "Reasoning": [
        { title: "Puzzle", id: "" },
        { title: "Seating Arrangement", id: "" },
        { title: "Syllogism", id: "" },
        { title: "Inequality", id: "" },
        { title: "Coding Decoding", id: "" },
        { title: "Blood Relation", id: "" }
      ],

      "English": [
        { title: "Reading Comprehension", id: "" },
        { title: "Cloze Test", id: "" },
        { title: "Error Spotting", id: "" },
        { title: "Para Jumble", id: "" },
        { title: "Fill in the blanks", id: "" }
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
        { title: "Piaget Theory", id: "" },
        { title: "Vygotsky Theory", id: "" },
        { title: "Learning Theories", id: "" }
      ],

      "Pedagogy": [
        { title: "Hindi Pedagogy", id: "" },
        { title: "Math Pedagogy", id: "" },
        { title: "EVS Pedagogy", id: "" }
      ],

      "Maths": [
        { title: "Number System", id: "" },
        { title: "Percentage", id: "" }
      ],

      "EVS": [
        { title: "Environment", id: "" },
        { title: "Food & Nutrition", id: "" }
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
        { title: "Trigonometry", id: "" },
        { title: "Algebra", id: "" }
      ],
      "GK/GS": [
        { title: "Current Affairs", id: "" },
        { title: "Science", id: "" }
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
        { title: "गति (Motion)", id: "ieQXzoVQSEo" },
        { title: "बल तथा गति के नियम", id: "PZBIgTh9XeY" },
        { title: "कार्य तथा ऊर्जा", id: "097JPWzvUbg" },
        { title: "गुरुत्वाकर्षण", id: "OAj-lOssNx4" },
        { title: "ध्वनि", id: "-_I1O89HGpo" }
      ],

      "Chemistry": [
        { title: "हमारे आस-पास के पदार्थ", id: "SMVFYxoT1sc" },
        { title: "क्या हमारे आस-पास के पदार्थ शुद्ध हैं?", id: "2pFvCHjvwLM" },
        { title: "परमाणु एवं अणु", id: "pB4Lty0ZxEs" },
        { title: "संरचना के परमाणु", id: "2POFlhrKWjM" }
      ],

      "Biology": [
        { title: "जीवन की मौलिक इकाई", id: "R_3yGBJ6stY" },
        { title: "ऊतक (Tissues)", id: "6VtlAo6_fYE" },
        { title: "जीवन की विविधता", id: "vBovD5PhXk8" },
        { title: "खाद्य संसाधनों में सुधार", id: "KRw4eQwS7-k" }
      ],

      "Mathematics": [
        { title: "संख्या पद्धति", id: "EfmACFO28TI" },
        { title: "बहुपद", id: "GYvgjGF_dPY" },
        { title: "दो चर वाले रैखिक समीकरण", id: "BL5ybT9Ht-w" },
        { title: "रेखाएँ और कोण", id: "sYdKGjnXbbk" },
        { title: "त्रिभुज", id: "f7PRuQOiT6Q" },
        { title: "चतुर्भुज", id: "92KOHSAexx0" },
        { title: "वृत्त", id: "KnIIVuz8bSs" },
        
        { title: "हेरॉन का सूत्र video 1", id: "eq2uFfBnCCs" },
            { title: "हेरॉन का सूत्र video 2", id: "dn6fx2kIyTg" },
        { title: "पृष्ठीय क्षेत्रफल एवं आयतन", id: "uWKNE9_P2_U" },
        { title: "सांख्यिकी", id: "3XbQHSYk6U0" },
        { title: "प्रायिकता", id: "y2RN2UTdKvs" }
      ]
    }
  },



  /* ======================================================
     📘 CLASS 10 UP BOARD
  ====================================================== */
  "Class 10 UP Board": {

    pw: {
      "Physics": [
        { title: "प्रकाश – परावर्तन और अपवर्तन", id: "" },
        { title: "मानव नेत्र तथा रंगबिरंगा संसार", id: "" },
        { title: "विद्युत", id: "" },
        { title: "विद्युत धारा के चुंबकीय प्रभाव", id: "" },
        { title: "हमारा पर्यावरण", id: "" }
      ],

      "Chemistry": [
        { title: "रासायनिक अभिक्रियाएँ एवं समीकरण", id: "" },
        { title: "अम्ल, क्षार एवं लवण", id: "" },
        { title: "धातु एवं अधातु", id: "" },
        { title: "कार्बन एवं उसके यौगिक", id: "" }
      ],

      "Biology": [
        { title: "जैव प्रक्रम", id: "" },
        { title: "नियंत्रण एवं समन्वय", id: "" },
        { title: "जीव जनन कैसे करते हैं", id: "" },
        { title: "आनुवंशिकता एवं जैव विकास", id: "" },
        { title: "संसाधनों का प्रबंधन", id: "" }
      ],

      "Mathematics": [
        { title: "वास्तविक संख्याएँ", id: "" },
        { title: "बहुपद", id: "" },
        { title: "दो चर वाले रैखिक समीकरण", id: "" },
        { title: "द्विघात समीकरण", id: "" },
        { title: "समांतर श्रेणियाँ", id: "" },
        { title: "त्रिकोणमिति", id: "" },
        { title: "निर्देशांक ज्यामिति", id: "" },
        { title: "वृत्त", id: "" },
        { title: "सांख्यिकी", id: "" },
        { title: "प्रायिकता", id: "" }
      ]
    },

    magnetbrains: {
      "Physics": [
        { title: "प्रकाश – परावर्तन और अपवर्तन", id: "" },
        { title: "मानव नेत्र तथा रंगबिरंगा संसार", id: "" },
        { title: "विद्युत", id: "" },
        { title: "विद्युत धारा के चुंबकीय प्रभाव", id: "" },
        { title: "हमारा पर्यावरण", id: "" }
      ],

      "Chemistry": [
        { title: "रासायनिक अभिक्रियाएँ एवं समीकरण", id: "" },
        { title: "अम्ल, क्षार एवं लवण", id: "" },
        { title: "धातु एवं अधातु", id: "" },
        { title: "कार्बन एवं उसके यौगिक", id: "" }
      ],

      "Biology": [
        { title: "जैव प्रक्रम", id: "" },
        { title: "नियंत्रण एवं समन्वय", id: "" },
        { title: "जीव जनन कैसे करते हैं", id: "" },
        { title: "आनुवंशिकता एवं जैव विकास", id: "" },
        { title: "संसाधनों का प्रबंधन", id: "" }
      ],

      "Mathematics": [
        { title: "वास्तविक संख्याएँ", id: "" },
        { title: "बहुपद", id: "" },
        { title: "दो चर वाले रैखिक समीकरण", id: "" },
        { title: "द्विघात समीकरण", id: "" },
        { title: "समांतर श्रेणियाँ", id: "" },
        { title: "त्रिकोणमिति", id: "" },
        { title: "निर्देशांक ज्यामिति", id: "" },
        { title: "वृत्त", id: "" },
        { title: "सांख्यिकी", id: "" },
        { title: "प्रायिकता", id: "" }
      ]
    },
    vidyakul: {
      "Physics": [
        { title: "प्रकाश – परावर्तन और अपवर्तन", id: "" },
        { title: "मानव नेत्र तथा रंगबिरंगा संसार", id: "" },
        { title: "विद्युत", id: "" },
        { title: "विद्युत धारा के चुंबकीय प्रभाव", id: "" },
        { title: "हमारा पर्यावरण", id: "" }
      ],

      "Chemistry": [
        { title: "रासायनिक अभिक्रियाएँ एवं समीकरण", id: "" },
        { title: "अम्ल, क्षार एवं लवण", id: "" },
        { title: "धातु एवं अधातु", id: "" },
        { title: "कार्बन एवं उसके यौगिक", id: "" }
      ],

      "Biology": [
        { title: "जैव प्रक्रम", id: "" },
        { title: "नियंत्रण एवं समन्वय", id: "" },
        { title: "जीव जनन कैसे करते हैं", id: "" },
        { title: "आनुवंशिकता एवं जैव विकास", id: "" },
        { title: "संसाधनों का प्रबंधन", id: "" }
      ],

      "Mathematics": [
        { title: "वास्तविक संख्याएँ", id: "" },
        { title: "बहुपद", id: "" },
        { title: "दो चर वाले रैखिक समीकरण", id: "" },
        { title: "द्विघात समीकरण", id: "" },
        { title: "समांतर श्रेणियाँ", id: "" },
        { title: "त्रिकोणमिति", id: "" },
        { title: "निर्देशांक ज्यामिति", id: "" },
        { title: "वृत्त", id: "" },
        { title: "सांख्यिकी", id: "" },
        { title: "प्रायिकता", id: "" }
      ]
    }
  },



  /* ======================================================
     📙 CLASS 11 UP BOARD
  ====================================================== */
  "Class 11 UP Board": {

    pw: {
      "Physics": [
        { title: "Units & Measurements", id: "" },
        { title: "Motion in a Straight Line", id: "" },
        { title: "Motion in a Plane", id: "" },
        { title: "Laws of Motion", id: "" },
        { title: "Work, Energy & Power", id: "" },
        { title: "System of Particles", id: "" },
        { title: "Rotational Motion", id: "" },
        { title: "Gravitation", id: "" },
        { title: "Mechanical Properties of Solids", id: "" },
        { title: "Mechanical Properties of Fluids", id: "" },
        { title: "Thermal Properties of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Kinetic Theory", id: "" },
        { title: "Oscillations", id: "" },
        { title: "Waves", id: "" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "" },
        { title: "Structure of Atom", id: "" },
        { title: "Classification of Elements", id: "" },
        { title: "Chemical Bonding", id: "" },
        { title: "States of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Equilibrium", id: "" },
        { title: "Redox Reactions", id: "" },
        { title: "Hydrogen", id: "" },
        { title: "s-Block Elements", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "Organic Chemistry Basics", id: "" },
        { title: "Hydrocarbons", id: "" },
        { title: "Environmental Chemistry", id: "" }
      ],

      "Mathematics": [
        { title: "Sets", id: "" },
        { title: "Relations & Functions", id: "" },
        { title: "Trigonometric Functions", id: "" },
        { title: "Complex Numbers", id: "" },
        { title: "Linear Inequalities", id: "" },
        { title: "Permutations & Combinations", id: "" },
        { title: "Binomial Theorem", id: "" },
        { title: "Sequences & Series", id: "" },
        { title: "Straight Lines", id: "" },
        { title: "Conic Sections", id: "" },
        { title: "Limits & Derivatives", id: "" },
        { title: "Statistics", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "The Living World", id: "" },
        { title: "Biological Classification", id: "" },
        { title: "Plant Kingdom", id: "" },
        { title: "Animal Kingdom", id: "" },
        { title: "Morphology of Flowering Plants", id: "" },
        { title: "Anatomy of Flowering Plants", id: "" },
        { title: "Structural Organisation in Animals", id: "" },
        { title: "Cell: Structure & Function", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Cell Cycle & Division", id: "" },
        { title: "Transport in Plants", id: "" },
        { title: "Mineral Nutrition", id: "" },
        { title: "Photosynthesis", id: "" },
        { title: "Respiration in Plants", id: "" },
        { title: "Plant Growth & Development", id: "" },
        { title: "Digestion & Absorption", id: "" },
        { title: "Breathing & Exchange of Gases", id: "" },
        { title: "Body Fluids & Circulation", id: "" },
        { title: "Excretory Products", id: "" },
        { title: "Locomotion & Movement", id: "" },
        { title: "Neural Control", id: "" },
        { title: "Chemical Coordination", id: "" }
      ]
    },

    unacademy: {
       "Physics": [
        { title: "Units & Measurements", id: "" },
        { title: "Motion in a Straight Line", id: "" },
        { title: "Motion in a Plane", id: "" },
        { title: "Laws of Motion", id: "" },
        { title: "Work, Energy & Power", id: "" },
        { title: "System of Particles", id: "" },
        { title: "Rotational Motion", id: "" },
        { title: "Gravitation", id: "" },
        { title: "Mechanical Properties of Solids", id: "" },
        { title: "Mechanical Properties of Fluids", id: "" },
        { title: "Thermal Properties of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Kinetic Theory", id: "" },
        { title: "Oscillations", id: "" },
        { title: "Waves", id: "" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "" },
        { title: "Structure of Atom", id: "" },
        { title: "Classification of Elements", id: "" },
        { title: "Chemical Bonding", id: "" },
        { title: "States of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Equilibrium", id: "" },
        { title: "Redox Reactions", id: "" },
        { title: "Hydrogen", id: "" },
        { title: "s-Block Elements", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "Organic Chemistry Basics", id: "" },
        { title: "Hydrocarbons", id: "" },
        { title: "Environmental Chemistry", id: "" }
      ],

      "Mathematics": [
        { title: "Sets", id: "" },
        { title: "Relations & Functions", id: "" },
        { title: "Trigonometric Functions", id: "" },
        { title: "Complex Numbers", id: "" },
        { title: "Linear Inequalities", id: "" },
        { title: "Permutations & Combinations", id: "" },
        { title: "Binomial Theorem", id: "" },
        { title: "Sequences & Series", id: "" },
        { title: "Straight Lines", id: "" },
        { title: "Conic Sections", id: "" },
        { title: "Limits & Derivatives", id: "" },
        { title: "Statistics", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "The Living World", id: "" },
        { title: "Biological Classification", id: "" },
        { title: "Plant Kingdom", id: "" },
        { title: "Animal Kingdom", id: "" },
        { title: "Morphology of Flowering Plants", id: "" },
        { title: "Anatomy of Flowering Plants", id: "" },
        { title: "Structural Organisation in Animals", id: "" },
        { title: "Cell: Structure & Function", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Cell Cycle & Division", id: "" },
        { title: "Transport in Plants", id: "" },
        { title: "Mineral Nutrition", id: "" },
        { title: "Photosynthesis", id: "" },
        { title: "Respiration in Plants", id: "" },
        { title: "Plant Growth & Development", id: "" },
        { title: "Digestion & Absorption", id: "" },
        { title: "Breathing & Exchange of Gases", id: "" },
        { title: "Body Fluids & Circulation", id: "" },
        { title: "Excretory Products", id: "" },
        { title: "Locomotion & Movement", id: "" },
        { title: "Neural Control", id: "" },
        { title: "Chemical Coordination", id: "" }
      ]
    },
    magnetbrains: {
       "Physics": [
        { title: "Units & Measurements", id: "" },
        { title: "Motion in a Straight Line", id: "" },
        { title: "Motion in a Plane", id: "" },
        { title: "Laws of Motion", id: "" },
        { title: "Work, Energy & Power", id: "" },
        { title: "System of Particles", id: "" },
        { title: "Rotational Motion", id: "" },
        { title: "Gravitation", id: "" },
        { title: "Mechanical Properties of Solids", id: "" },
        { title: "Mechanical Properties of Fluids", id: "" },
        { title: "Thermal Properties of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Kinetic Theory", id: "" },
        { title: "Oscillations", id: "" },
        { title: "Waves", id: "" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "" },
        { title: "Structure of Atom", id: "" },
        { title: "Classification of Elements", id: "" },
        { title: "Chemical Bonding", id: "" },
        { title: "States of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Equilibrium", id: "" },
        { title: "Redox Reactions", id: "" },
        { title: "Hydrogen", id: "" },
        { title: "s-Block Elements", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "Organic Chemistry Basics", id: "" },
        { title: "Hydrocarbons", id: "" },
        { title: "Environmental Chemistry", id: "" }
      ],

      "Mathematics": [
        { title: "Sets", id: "" },
        { title: "Relations & Functions", id: "" },
        { title: "Trigonometric Functions", id: "" },
        { title: "Complex Numbers", id: "" },
        { title: "Linear Inequalities", id: "" },
        { title: "Permutations & Combinations", id: "" },
        { title: "Binomial Theorem", id: "" },
        { title: "Sequences & Series", id: "" },
        { title: "Straight Lines", id: "" },
        { title: "Conic Sections", id: "" },
        { title: "Limits & Derivatives", id: "" },
        { title: "Statistics", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "The Living World", id: "" },
        { title: "Biological Classification", id: "" },
        { title: "Plant Kingdom", id: "" },
        { title: "Animal Kingdom", id: "" },
        { title: "Morphology of Flowering Plants", id: "" },
        { title: "Anatomy of Flowering Plants", id: "" },
        { title: "Structural Organisation in Animals", id: "" },
        { title: "Cell: Structure & Function", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Cell Cycle & Division", id: "" },
        { title: "Transport in Plants", id: "" },
        { title: "Mineral Nutrition", id: "" },
        { title: "Photosynthesis", id: "" },
        { title: "Respiration in Plants", id: "" },
        { title: "Plant Growth & Development", id: "" },
        { title: "Digestion & Absorption", id: "" },
        { title: "Breathing & Exchange of Gases", id: "" },
        { title: "Body Fluids & Circulation", id: "" },
        { title: "Excretory Products", id: "" },
        { title: "Locomotion & Movement", id: "" },
        { title: "Neural Control", id: "" },
        { title: "Chemical Coordination", id: "" }
      ]
    },
    vedantu: {
       "Physics": [
        { title: "Units & Measurements", id: "" },
        { title: "Motion in a Straight Line", id: "" },
        { title: "Motion in a Plane", id: "" },
        { title: "Laws of Motion", id: "" },
        { title: "Work, Energy & Power", id: "" },
        { title: "System of Particles", id: "" },
        { title: "Rotational Motion", id: "" },
        { title: "Gravitation", id: "" },
        { title: "Mechanical Properties of Solids", id: "" },
        { title: "Mechanical Properties of Fluids", id: "" },
        { title: "Thermal Properties of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Kinetic Theory", id: "" },
        { title: "Oscillations", id: "" },
        { title: "Waves", id: "" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "" },
        { title: "Structure of Atom", id: "" },
        { title: "Classification of Elements", id: "" },
        { title: "Chemical Bonding", id: "" },
        { title: "States of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Equilibrium", id: "" },
        { title: "Redox Reactions", id: "" },
        { title: "Hydrogen", id: "" },
        { title: "s-Block Elements", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "Organic Chemistry Basics", id: "" },
        { title: "Hydrocarbons", id: "" },
        { title: "Environmental Chemistry", id: "" }
      ],

      "Mathematics": [
        { title: "Sets", id: "" },
        { title: "Relations & Functions", id: "" },
        { title: "Trigonometric Functions", id: "" },
        { title: "Complex Numbers", id: "" },
        { title: "Linear Inequalities", id: "" },
        { title: "Permutations & Combinations", id: "" },
        { title: "Binomial Theorem", id: "" },
        { title: "Sequences & Series", id: "" },
        { title: "Straight Lines", id: "" },
        { title: "Conic Sections", id: "" },
        { title: "Limits & Derivatives", id: "" },
        { title: "Statistics", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "The Living World", id: "" },
        { title: "Biological Classification", id: "" },
        { title: "Plant Kingdom", id: "" },
        { title: "Animal Kingdom", id: "" },
        { title: "Morphology of Flowering Plants", id: "" },
        { title: "Anatomy of Flowering Plants", id: "" },
        { title: "Structural Organisation in Animals", id: "" },
        { title: "Cell: Structure & Function", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Cell Cycle & Division", id: "" },
        { title: "Transport in Plants", id: "" },
        { title: "Mineral Nutrition", id: "" },
        { title: "Photosynthesis", id: "" },
        { title: "Respiration in Plants", id: "" },
        { title: "Plant Growth & Development", id: "" },
        { title: "Digestion & Absorption", id: "" },
        { title: "Breathing & Exchange of Gases", id: "" },
        { title: "Body Fluids & Circulation", id: "" },
        { title: "Excretory Products", id: "" },
        { title: "Locomotion & Movement", id: "" },
        { title: "Neural Control", id: "" },
        { title: "Chemical Coordination", id: "" }
      ]
    },
    khanacademy: {
       "Physics": [
        { title: "Units & Measurements", id: "" },
        { title: "Motion in a Straight Line", id: "" },
        { title: "Motion in a Plane", id: "" },
        { title: "Laws of Motion", id: "" },
        { title: "Work, Energy & Power", id: "" },
        { title: "System of Particles", id: "" },
        { title: "Rotational Motion", id: "" },
        { title: "Gravitation", id: "" },
        { title: "Mechanical Properties of Solids", id: "" },
        { title: "Mechanical Properties of Fluids", id: "" },
        { title: "Thermal Properties of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Kinetic Theory", id: "" },
        { title: "Oscillations", id: "" },
        { title: "Waves", id: "" }
      ],

      "Chemistry": [
        { title: "Some Basic Concepts of Chemistry", id: "" },
        { title: "Structure of Atom", id: "" },
        { title: "Classification of Elements", id: "" },
        { title: "Chemical Bonding", id: "" },
        { title: "States of Matter", id: "" },
        { title: "Thermodynamics", id: "" },
        { title: "Equilibrium", id: "" },
        { title: "Redox Reactions", id: "" },
        { title: "Hydrogen", id: "" },
        { title: "s-Block Elements", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "Organic Chemistry Basics", id: "" },
        { title: "Hydrocarbons", id: "" },
        { title: "Environmental Chemistry", id: "" }
      ],

      "Mathematics": [
        { title: "Sets", id: "" },
        { title: "Relations & Functions", id: "" },
        { title: "Trigonometric Functions", id: "" },
        { title: "Complex Numbers", id: "" },
        { title: "Linear Inequalities", id: "" },
        { title: "Permutations & Combinations", id: "" },
        { title: "Binomial Theorem", id: "" },
        { title: "Sequences & Series", id: "" },
        { title: "Straight Lines", id: "" },
        { title: "Conic Sections", id: "" },
        { title: "Limits & Derivatives", id: "" },
        { title: "Statistics", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "The Living World", id: "" },
        { title: "Biological Classification", id: "" },
        { title: "Plant Kingdom", id: "" },
        { title: "Animal Kingdom", id: "" },
        { title: "Morphology of Flowering Plants", id: "" },
        { title: "Anatomy of Flowering Plants", id: "" },
        { title: "Structural Organisation in Animals", id: "" },
        { title: "Cell: Structure & Function", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Cell Cycle & Division", id: "" },
        { title: "Transport in Plants", id: "" },
        { title: "Mineral Nutrition", id: "" },
        { title: "Photosynthesis", id: "" },
        { title: "Respiration in Plants", id: "" },
        { title: "Plant Growth & Development", id: "" },
        { title: "Digestion & Absorption", id: "" },
        { title: "Breathing & Exchange of Gases", id: "" },
        { title: "Body Fluids & Circulation", id: "" },
        { title: "Excretory Products", id: "" },
        { title: "Locomotion & Movement", id: "" },
        { title: "Neural Control", id: "" },
        { title: "Chemical Coordination", id: "" }
      ]
    }
  },



  /* ======================================================
     📕 CLASS 12 UP BOARD
  ====================================================== */
  "Class 12 UP Board": {

    pw: {
      "Physics": [
        { title: "Electric Charges & Fields", id: "" },
        { title: "Electrostatic Potential & Capacitance", id: "" },
        { title: "Current Electricity", id: "" },
        { title: "Moving Charges & Magnetism", id: "" },
        { title: "Magnetism & Matter", id: "" },
        { title: "Electromagnetic Induction", id: "" },
        { title: "Alternating Current", id: "" },
        { title: "Ray Optics", id: "" },
        { title: "Wave Optics", id: "" },
        { title: "Dual Nature", id: "" },
        { title: "Atoms", id: "" },
        { title: "Nuclei", id: "" },
        { title: "Semiconductor", id: "" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "" },
        { title: "Solutions", id: "" },
        { title: "Electrochemistry", id: "" },
        { title: "Chemical Kinetics", id: "" },
        { title: "Surface Chemistry", id: "" },
        { title: "General Principles of Metallurgy", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "d & f Block Elements", id: "" },
        { title: "Coordination Compounds", id: "" },
        { title: "Haloalkanes & Haloarenes", id: "" },
        { title: "Alcohols Phenols Ethers", id: "" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "" },
        { title: "Amines", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Polymers", id: "" },
        { title: "Chemistry in Everyday Life", id: "" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "" },
        { title: "Inverse Trigonometric Functions", id: "" },
        { title: "Matrices", id: "" },
        { title: "Determinants", id: "" },
        { title: "Continuity & Differentiability", id: "" },
        { title: "Applications of Derivatives", id: "" },
        { title: "Integrals", id: "" },
        { title: "Applications of Integrals", id: "" },
        { title: "Differential Equations", id: "" },
        { title: "Vector Algebra", id: "" },
        { title: "3D Geometry", id: "" },
        { title: "Linear Programming", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "" },
        { title: "Sexual Reproduction in Flowering Plants", id: "" },
        { title: "Human Reproduction", id: "" },
        { title: "Reproductive Health", id: "" },
        { title: "Principles of Inheritance", id: "" },
        { title: "Molecular Basis of Inheritance", id: "" },
        { title: "Evolution", id: "" },
        { title: "Human Health & Disease", id: "" },
        { title: "Strategies for Enhancement", id: "" },
        { title: "Microbes in Human Welfare", id: "" },
        { title: "Biotechnology Principles", id: "" },
        { title: "Biotechnology Applications", id: "" },
        { title: "Organisms & Populations", id: "" },
        { title: "Ecosystem", id: "" },
        { title: "Biodiversity & Conservation", id: "" },
        { title: "Environmental Issues", id: "" }
      ]
    },

    unacademy: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "" },
        { title: "Electrostatic Potential & Capacitance", id: "" },
        { title: "Current Electricity", id: "" },
        { title: "Moving Charges & Magnetism", id: "" },
        { title: "Magnetism & Matter", id: "" },
        { title: "Electromagnetic Induction", id: "" },
        { title: "Alternating Current", id: "" },
        { title: "Ray Optics", id: "" },
        { title: "Wave Optics", id: "" },
        { title: "Dual Nature", id: "" },
        { title: "Atoms", id: "" },
        { title: "Nuclei", id: "" },
        { title: "Semiconductor", id: "" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "" },
        { title: "Solutions", id: "" },
        { title: "Electrochemistry", id: "" },
        { title: "Chemical Kinetics", id: "" },
        { title: "Surface Chemistry", id: "" },
        { title: "General Principles of Metallurgy", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "d & f Block Elements", id: "" },
        { title: "Coordination Compounds", id: "" },
        { title: "Haloalkanes & Haloarenes", id: "" },
        { title: "Alcohols Phenols Ethers", id: "" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "" },
        { title: "Amines", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Polymers", id: "" },
        { title: "Chemistry in Everyday Life", id: "" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "" },
        { title: "Inverse Trigonometric Functions", id: "" },
        { title: "Matrices", id: "" },
        { title: "Determinants", id: "" },
        { title: "Continuity & Differentiability", id: "" },
        { title: "Applications of Derivatives", id: "" },
        { title: "Integrals", id: "" },
        { title: "Applications of Integrals", id: "" },
        { title: "Differential Equations", id: "" },
        { title: "Vector Algebra", id: "" },
        { title: "3D Geometry", id: "" },
        { title: "Linear Programming", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "" },
        { title: "Sexual Reproduction in Flowering Plants", id: "" },
        { title: "Human Reproduction", id: "" },
        { title: "Reproductive Health", id: "" },
        { title: "Principles of Inheritance", id: "" },
        { title: "Molecular Basis of Inheritance", id: "" },
        { title: "Evolution", id: "" },
        { title: "Human Health & Disease", id: "" },
        { title: "Strategies for Enhancement", id: "" },
        { title: "Microbes in Human Welfare", id: "" },
        { title: "Biotechnology Principles", id: "" },
        { title: "Biotechnology Applications", id: "" },
        { title: "Organisms & Populations", id: "" },
        { title: "Ecosystem", id: "" },
        { title: "Biodiversity & Conservation", id: "" },
        { title: "Environmental Issues", id: "" }
      ]
    },
    magnetbrains: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "" },
        { title: "Electrostatic Potential & Capacitance", id: "" },
        { title: "Current Electricity", id: "" },
        { title: "Moving Charges & Magnetism", id: "" },
        { title: "Magnetism & Matter", id: "" },
        { title: "Electromagnetic Induction", id: "" },
        { title: "Alternating Current", id: "" },
        { title: "Ray Optics", id: "" },
        { title: "Wave Optics", id: "" },
        { title: "Dual Nature", id: "" },
        { title: "Atoms", id: "" },
        { title: "Nuclei", id: "" },
        { title: "Semiconductor", id: "" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "" },
        { title: "Solutions", id: "" },
        { title: "Electrochemistry", id: "" },
        { title: "Chemical Kinetics", id: "" },
        { title: "Surface Chemistry", id: "" },
        { title: "General Principles of Metallurgy", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "d & f Block Elements", id: "" },
        { title: "Coordination Compounds", id: "" },
        { title: "Haloalkanes & Haloarenes", id: "" },
        { title: "Alcohols Phenols Ethers", id: "" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "" },
        { title: "Amines", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Polymers", id: "" },
        { title: "Chemistry in Everyday Life", id: "" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "" },
        { title: "Inverse Trigonometric Functions", id: "" },
        { title: "Matrices", id: "" },
        { title: "Determinants", id: "" },
        { title: "Continuity & Differentiability", id: "" },
        { title: "Applications of Derivatives", id: "" },
        { title: "Integrals", id: "" },
        { title: "Applications of Integrals", id: "" },
        { title: "Differential Equations", id: "" },
        { title: "Vector Algebra", id: "" },
        { title: "3D Geometry", id: "" },
        { title: "Linear Programming", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "" },
        { title: "Sexual Reproduction in Flowering Plants", id: "" },
        { title: "Human Reproduction", id: "" },
        { title: "Reproductive Health", id: "" },
        { title: "Principles of Inheritance", id: "" },
        { title: "Molecular Basis of Inheritance", id: "" },
        { title: "Evolution", id: "" },
        { title: "Human Health & Disease", id: "" },
        { title: "Strategies for Enhancement", id: "" },
        { title: "Microbes in Human Welfare", id: "" },
        { title: "Biotechnology Principles", id: "" },
        { title: "Biotechnology Applications", id: "" },
        { title: "Organisms & Populations", id: "" },
        { title: "Ecosystem", id: "" },
        { title: "Biodiversity & Conservation", id: "" },
        { title: "Environmental Issues", id: "" }
      ]
    },
    vedantu: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "" },
        { title: "Electrostatic Potential & Capacitance", id: "" },
        { title: "Current Electricity", id: "" },
        { title: "Moving Charges & Magnetism", id: "" },
        { title: "Magnetism & Matter", id: "" },
        { title: "Electromagnetic Induction", id: "" },
        { title: "Alternating Current", id: "" },
        { title: "Ray Optics", id: "" },
        { title: "Wave Optics", id: "" },
        { title: "Dual Nature", id: "" },
        { title: "Atoms", id: "" },
        { title: "Nuclei", id: "" },
        { title: "Semiconductor", id: "" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "" },
        { title: "Solutions", id: "" },
        { title: "Electrochemistry", id: "" },
        { title: "Chemical Kinetics", id: "" },
        { title: "Surface Chemistry", id: "" },
        { title: "General Principles of Metallurgy", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "d & f Block Elements", id: "" },
        { title: "Coordination Compounds", id: "" },
        { title: "Haloalkanes & Haloarenes", id: "" },
        { title: "Alcohols Phenols Ethers", id: "" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "" },
        { title: "Amines", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Polymers", id: "" },
        { title: "Chemistry in Everyday Life", id: "" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "" },
        { title: "Inverse Trigonometric Functions", id: "" },
        { title: "Matrices", id: "" },
        { title: "Determinants", id: "" },
        { title: "Continuity & Differentiability", id: "" },
        { title: "Applications of Derivatives", id: "" },
        { title: "Integrals", id: "" },
        { title: "Applications of Integrals", id: "" },
        { title: "Differential Equations", id: "" },
        { title: "Vector Algebra", id: "" },
        { title: "3D Geometry", id: "" },
        { title: "Linear Programming", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "" },
        { title: "Sexual Reproduction in Flowering Plants", id: "" },
        { title: "Human Reproduction", id: "" },
        { title: "Reproductive Health", id: "" },
        { title: "Principles of Inheritance", id: "" },
        { title: "Molecular Basis of Inheritance", id: "" },
        { title: "Evolution", id: "" },
        { title: "Human Health & Disease", id: "" },
        { title: "Strategies for Enhancement", id: "" },
        { title: "Microbes in Human Welfare", id: "" },
        { title: "Biotechnology Principles", id: "" },
        { title: "Biotechnology Applications", id: "" },
        { title: "Organisms & Populations", id: "" },
        { title: "Ecosystem", id: "" },
        { title: "Biodiversity & Conservation", id: "" },
        { title: "Environmental Issues", id: "" }
      ]
    },
    khanacademy: {
       "Physics": [
        { title: "Electric Charges & Fields", id: "" },
        { title: "Electrostatic Potential & Capacitance", id: "" },
        { title: "Current Electricity", id: "" },
        { title: "Moving Charges & Magnetism", id: "" },
        { title: "Magnetism & Matter", id: "" },
        { title: "Electromagnetic Induction", id: "" },
        { title: "Alternating Current", id: "" },
        { title: "Ray Optics", id: "" },
        { title: "Wave Optics", id: "" },
        { title: "Dual Nature", id: "" },
        { title: "Atoms", id: "" },
        { title: "Nuclei", id: "" },
        { title: "Semiconductor", id: "" }
      ],

      "Chemistry": [
        { title: "Solid State", id: "" },
        { title: "Solutions", id: "" },
        { title: "Electrochemistry", id: "" },
        { title: "Chemical Kinetics", id: "" },
        { title: "Surface Chemistry", id: "" },
        { title: "General Principles of Metallurgy", id: "" },
        { title: "p-Block Elements", id: "" },
        { title: "d & f Block Elements", id: "" },
        { title: "Coordination Compounds", id: "" },
        { title: "Haloalkanes & Haloarenes", id: "" },
        { title: "Alcohols Phenols Ethers", id: "" },
        { title: "Aldehydes Ketones Carboxylic Acid", id: "" },
        { title: "Amines", id: "" },
        { title: "Biomolecules", id: "" },
        { title: "Polymers", id: "" },
        { title: "Chemistry in Everyday Life", id: "" }
      ],

      "Mathematics": [
        { title: "Relations & Functions", id: "" },
        { title: "Inverse Trigonometric Functions", id: "" },
        { title: "Matrices", id: "" },
        { title: "Determinants", id: "" },
        { title: "Continuity & Differentiability", id: "" },
        { title: "Applications of Derivatives", id: "" },
        { title: "Integrals", id: "" },
        { title: "Applications of Integrals", id: "" },
        { title: "Differential Equations", id: "" },
        { title: "Vector Algebra", id: "" },
        { title: "3D Geometry", id: "" },
        { title: "Linear Programming", id: "" },
        { title: "Probability", id: "" }
      ],

      "Biology": [
        { title: "Reproduction in Organisms", id: "" },
        { title: "Sexual Reproduction in Flowering Plants", id: "" },
        { title: "Human Reproduction", id: "" },
        { title: "Reproductive Health", id: "" },
        { title: "Principles of Inheritance", id: "" },
        { title: "Molecular Basis of Inheritance", id: "" },
        { title: "Evolution", id: "" },
        { title: "Human Health & Disease", id: "" },
        { title: "Strategies for Enhancement", id: "" },
        { title: "Microbes in Human Welfare", id: "" },
        { title: "Biotechnology Principles", id: "" },
        { title: "Biotechnology Applications", id: "" },
        { title: "Organisms & Populations", id: "" },
        { title: "Ecosystem", id: "" },
        { title: "Biodiversity & Conservation", id: "" },
        { title: "Environmental Issues", id: "" }
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
  back.innerText = "⬅ Back to subjects";
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
    card.innerHTML = `▶ <b>${v.title}</b>`;
    card.onclick = () => playVideo(v.id, card, v.title);
    videos.appendChild(card);
  });

  subjectArea.appendChild(videos);
}

/* ====== PLAY ====== */
function playVideo(id, el, title) {

  document.querySelectorAll(".video-card")
    .forEach(v => v.classList.remove("active"));

  el.classList.add("active");

  player.src = "https://www.youtube.com/embed/" + id +
    "?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1";

  videoTitle.innerText = title;
}
// =======================================
// CART + BUY SYSTEM (FREE ₹0) - FINAL
// =======================================
