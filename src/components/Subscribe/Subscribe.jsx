import React from "react";
import styles from "../styles/HomeStyle/Subscribe.module.css";

function Subscribe() {
  return (
    <div className={styles.wrapper}>
      <img src="/Fullvector.png" className={styles.vectorTL} alt="vector" />
      <img src="/Fullvector.png" className={styles.vectorBR} alt="vector" />

      <h2 className={styles.title}>Subscribe for our tips</h2>
      <p className={styles.sub}>
        Clearly communicate the benefits of subscribing, such as exclusive content.
      </p>

      <div className={styles.inputRow}>
        <input
          type="email"
          className={styles.input}
          placeholder="Enter your email address"
        />
        <button className={styles.btn}>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
