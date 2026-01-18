import React from "react";
import styles from "../styles/HomeStyle/HowItWorks.module.css";

const steps = [
  { num: "01", text: "Sign Up" },
  { num: "02", text: "Code and Learn" },
  { num: "03", text: "Understand" },
  { num: "04", text: "Practice" },
  { num: "05", text: "Achieve" },
];

function HowItWorks() {
  return (
    <div className={styles.wrapper}>
      <img src="/Fullvector.png" className={styles.vectorTL} alt="" />
      <img src="/Fullvector.png" className={styles.vectorBR} alt="" />

      <img src="/RectangleBg.png" className={styles.bg} alt="" />
      <img src="/Halfcircle.png" className={styles.half} alt="" />
      <img src="/Female.png" className={styles.female} alt="" />

      <div className={styles.right}>
        <h2 className={styles.title}>How It Works</h2>
        <p className={styles.sub}>
          Simplify the onboarding process by showing how easy it is to start
          using CodeArena.
        </p>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={i} className={styles.stepBox}>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.text}>{s.text}</span>
            </div>
          ))}

          {/* arrows */}
          <img src="/Arrow1.png" className={`${styles.arrow} ${styles.a1}`} alt="" />
          <img src="/Arrow2.png" className={`${styles.arrow} ${styles.a2}`} alt="" />
          <img src="/Arrow1.png" className={`${styles.arrow} ${styles.a3}`} alt="" />
          <img src="/Arrow2.png" className={`${styles.arrow} ${styles.a4}`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
