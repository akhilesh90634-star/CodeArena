import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomeStyle/Home.module.css";
import Testimonials from "../Testimonials/Testimonials";
import BuiltForEveryone from "../BuiltForEveryone/BuiltForEveryone";
import HowItWorks from "../HowItWorks/HowItWorks";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "/Icon1.png",
      hover: "/Image1.png",
      title: "Solution Walkthroughs",
      desc: "See multiple approaches to each coding challenge."
    },
    {
      icon: "/Icon2.png",
      hover: "/Image2.png",
      title: "Real-Time Feedback",
      desc: "Get immediate feedback as you code, along with hints."
    },
    {
      icon: "/Icon3.png",
      hover: "/Image3.png",
      title: "Adaptive Learning Paths",
      desc: "Follow personalized learning paths that adapt to your skill level and goals."
    }
  ];

  return (
    <div className={styles.wrapper}>

      {/* ===== HERO SECTION (isolated) ===== */}
      <div className={styles.heroBlock}>

        {/* vectors inside hero */}
        <img src="/Fullvector.png" className={styles.vectorTL} alt="vector" />
        <img src="/Fullvector.png" className={styles.vectorTR} alt="vector" />

        <div className={styles.heroContainer}>
          {/* LEFT TEXT */}
          <div className={styles.textBox}>
            <h1 className={styles.heroTitle}>
              <span className={styles.red}>Where</span> Skills <br />
              are Sharpened <span className={styles.red}>and</span> <br />
              Code Comes to Life
            </h1>

            <p className={styles.heroDesc}>
              Unlock your coding potential through interactive challenges, real-time
              feedback, and a supportive community.
            </p>

            <button
              className={styles.heroBtn}
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>

          {/* RIGHT IMG */}
          <div className={styles.heroImgBox}>
            <img src="/BG.png" className={styles.heroBG} alt="bg" />
            <img src="/Hero.png" className={styles.heroModel} alt="hero" />
          </div>
        </div>

        <img src="/Fullvector.png" className={styles.vectorBL} alt="vector" />
        <img src="/Fullvector.png" className={styles.vectorBR} alt="vector" />

      </div>

      {/* ===== FEATURE SECTION ===== */}
      <div className={styles.featureSection}>
        
        <h2 className={styles.featureTitle}>
          <span className={styles.red}>Feature</span>{" "}
          <span className={styles.blue}>Highlights</span>
        </h2>

        <div className={styles.featureCards}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              
              <img
                src={f.icon}
                className={styles.cardIcon}
                alt="icon"
                onMouseEnter={(e) => (e.currentTarget.src = f.hover)}
                onMouseLeave={(e) => (e.currentTarget.src = f.icon)}
              />

              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>

            </div>
          ))}
        </div>

      </div>

      <Testimonials/>
      <BuiltForEveryone/>
      <HowItWorks/>

    </div>
  );
}

export default Home;