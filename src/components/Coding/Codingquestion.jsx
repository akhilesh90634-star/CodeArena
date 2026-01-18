// import React from "react";
// import styles from "../styles/Coding/CodingQuestion.module.css";

// function Codingquestion() {
//   return (
//     <div className={styles.wrapper}>
      
//       {/* HEADER */}
//       <h1 className={styles.heading}>
//         <span className={styles.red}>Coding</span>{" "}
//         <span className={styles.blue}>Question</span>
//       </h1>

//       {/* CENTER CONTAINER */}
//       <div className={styles.centerContainer}>

//         {/* DESCRIPTION BOX */}
//         <div className={styles.descBox}>
//           <h2 className={styles.title}>
//             First And Last Position Of An Element In Sorted Array
//           </h2>

//           <div className={styles.descScroll}>
//             <p className={styles.bold}>Problem Statement</p>

//             <p className={styles.body}>
//               You Have Been Given A Sorted Array/List ARR Consisting Of ‘N’ Elements. You Are Also Given An Integer ‘K’. Now, Your Task Is To Find The First And Last Occurrence Of ‘K’ In ARR.
//             </p>

//             <p className={styles.bold}>Note :</p>
//             <p className={styles.body}>1. If ‘K’ Is Not Present In The Array, Then The First And The Last Occurrence Will Be -1.</p>
//             <p className={styles.body}>2. ARR May Contain Duplicate Elements.</p>

//             <p className={styles.bold}>Detailed Explanation ( Input/Output Format, Notes, Images )</p>

//             <p className={styles.bold}>Input Format :</p>
//             <p className={styles.body}>
//               First Line Contains Integer ‘T’, Number Of Test Cases.
//             </p>

//             <p className={styles.bold}>Output Format :</p>
//             <p className={styles.body}>
//               Return Two Integers For First And Last Occurrence Of ‘K’.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Codingquestion;

// src/components/Coding/Codingquestion.jsx

import React from "react";
import styles from "../styles/Coding/CodingQuestion.module.css";

function Codingquestion() {
  return (
    <div className={styles.wrapper}>

      {/* ==== HEADING ==== */}
      <h1 className={styles.heading}>
        <span className={styles.red}>Coding</span>{" "}
        <span className={styles.blue}>Question</span>
      </h1>

      {/* ==== DESCRIPTION BOX ==== */}
      <div className={styles.descBox}>
        <p className={styles.title}>
          First And Last Position Of An Element In Sorted Array
        </p>

        <p className={styles.subTitle}>Problem Statement</p>

        <p className={styles.text}>
          You Have Been Given A Sorted Array/List ARR Consisting Of ‘N’ Elements.
          You Are Also Given An Integer ‘K’. Now, Your Task Is To Find The First
          And Last Occurrence Of ‘K’ In ARR.
        </p>

        <p className={styles.text}>Note :</p>
        <p className={styles.text}>
          1. If ‘K’ Is Not Present In The Array, Then The First And The Last
          Occurrence Will Be -1.
        </p>
        <p className={styles.text}>
          2. ARR May Contain Duplicate Elements.
        </p>

        <p className={styles.text}>
          For Example, If ARR = [0, 1, 1, 5] And K = 1, Then The First And Last
          Occurrence Of 1 Will Be 1(0 - Indexed) And
        </p>

        <p className={styles.bold}>
          Detailed Explanation ( Input/Output Format, Notes, Images )
        </p>

        <p className={styles.arrow}>keyboard_arrow_down</p>

        <div className={styles.scrollText}>
          <p className={styles.text}>
            Input Format: <br/>
            The First Line Contains Integer T. <br/><br/>
            Output Format:<br/>
            Return Two Integers. <br/><br/>
            Sample Input:<br/>
            2 <br/>
            6 3 <br/>
            0 5 5 6 6 6 <br/>
            8 2 <br/>
            0 0 1 1 2 2 2 2 <br/><br/>
            Sample Output:<br/>
            -1 -1 <br/>
            4 7
          </p>
        </div>
      </div>

      {/* ==== TERMINAL + CONSOLE ==== */}
      <div className={styles.editorWrapper}>
        
        <div className={styles.editorTab}>Python</div>

        <div className={styles.editorBox}>
          
          {/* LEFT CODE AREA */}
          <div className={styles.codeArea}>
            <pre>
{`#include <bits/stdc++.h>

pair<int, int> FirstAndLastPosition(vector<int>& arr, int n, int k)
{
    // Write Your Code Here
}`}
            </pre>
          </div>

          {/* RIGHT CONSOLE */}
          <div className={styles.console}>
            <div className={styles.consoleHeader}>Console</div>

            <div className={styles.consoleTabs}>
              <span className={styles.consoleTabActive}>Sample</span>
              <span className={styles.consoleTab}>Custom</span>
            </div>

            <textarea
              className={styles.consoleInput}
              placeholder="Write Your Input Cases Here Like 1234"
            />
          </div>

        </div>

        <div className={styles.btnRow}>
          <button className={styles.runBtn}>Run</button>
          <button className={styles.submitBtn}>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default Codingquestion;
