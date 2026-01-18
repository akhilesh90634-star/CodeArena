import React from "react";
import styles from "../styles/HomeStyle/Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <img src="/Fullvector.png" className={styles.vector} alt="vector" />

      <div className={styles.container}>

        {/* TOP ROW */}
        <div className={styles.topRow}>
          <img src="/Cdnlogo.png" className={styles.logo} alt="logo" />

          <div className={styles.navText}>
            <span>Home</span>
            <span>About Us</span>
            <span>Prepare</span>
            <span>Dashboard</span>
          </div>

          <img src="/Socials.png" className={styles.socials} alt="social-icons" />
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* BOTTOM ROW */}
        <div className={styles.bottomRow}>
          <div className={styles.bottomLinks}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Legal</span>
          </div>

          <span className={styles.copy}>
            © 2024 Codegnan Destination. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

