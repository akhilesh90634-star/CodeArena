import React from "react";
import styles from "../styles/Mcqs/Mcqs.module.css";

function Mcqs() {
  const mcqData = [
    {
      id: 1,
      question:
        "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide With In 1 Month.She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroying The Approaching Comet.In Order To Achieve Highest Accuracy Of The Missile Trajectory What Data Type Should She Use For The Variables In Her Equation?",
      options: ["Double", "Double", "Double", "Double"],
    },
    {
      id: 2,
      question:
        "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide With In 1 Month.She Is Developing A C Program To Calculate The Trajectory Of The Missile To Be Launched To Intercept And Destroying The Approaching Comet...",
      options: ["Double", "Double", "Double", "Double"],
    },
    {
      id: 3,
      question:
        "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide With In 1 Month...",
      options: ["Double", "Double", "Double", "Double"],
    },
    {
      id: 4,
      question:
        "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet That Is Likely To Collide With In 1 Month...",
      options: ["Double", "Double", "Double", "Double"],
    },
    {
      id: 5,
      question:
        "Eesha Works For ISRO Where She Is Involved In A Mission To Intercept A Comet...",
      options: ["Double", "Double", "Double", "Double"],
    },
  ];

  return (
    <div className={styles.mcqWrapper}>
      
      {/* Title */}
      <div className={styles.mcqTitle}>
        <span className={styles.mTitle}>MCQ</span>
        <span className={styles.qTitle}>Questions</span>
      </div>

      {/* OUTER BOX */}
      <div className={styles.outerBox}>
        
        {/* INNER BOX */}
        <div className={styles.innerBox}>
          {mcqData.map((item) => (
            <div key={item.id} className={styles.mcqCard}>
              <p className={styles.question}>{item.question}</p>

              <div className={styles.optionsGrid}>
                {item.options.map((op, index) => (
                  <label key={index} className={styles.option}>
                    <input type="radio" name={`q-${item.id}`} />
                    {op}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SUBMIT BUTTON */}
        <button className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
}

export default Mcqs;
