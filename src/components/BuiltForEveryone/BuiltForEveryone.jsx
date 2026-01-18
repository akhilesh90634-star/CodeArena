import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomeStyle/BuiltForEveryone.module.css";

function BuiltForEveryone() {
  const navigate = useNavigate();

  const blocks = [
    {
      img: "/Boe1.png",
      label: "FOR PROFESSIONALS",
    },
    {
      img: "/Boe2.png",
      label: "FOR STUDENTS",
    }
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <span className={styles.red}>Built for</span>{" "}
        <span className={styles.blue}>Every one</span>
      </h2>

      <div className={styles.row}>
        {blocks.map((b, i) => (
          <div key={i} className={styles.box}>
            <img src={b.img} className={styles.bgImg} alt="" />
            <div className={styles.overlay}>
              <h3 className={styles.label}>{b.label}</h3>
              <button
                className={styles.btn}
                onClick={() => navigate("/signup")}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuiltForEveryone;
