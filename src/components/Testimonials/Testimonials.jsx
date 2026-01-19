import React from "react";
import styles from "../styles/HomeStyle/Testimonial.module.css";
import "./TestimonialCard.css";

function Testimonials() {
  const testimonials = [
    {
      img: "/Person.png",
      name: "Nutan Sai",
      role: "Student",
      stars: "/Stars.png",
      text:
        "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can’t recommend it enough to fellow students!",
      y: -60,
    },
    {
      img: "/Person.png",
      name: "Nutan Sai",
      role: "Student",
      stars: "/Stars.png",
      text:
        "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can’t recommend it enough to fellow students!",
      y: 20,
    },
    {
      img: "/Person.png",
      name: "Nutan Sai",
      role: "Student",
      stars: "/Stars.png",
      text:
        "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can’t recommend it enough to fellow students!",
      y: 100,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <img src="/Fullvector.png" alt="vector" className={styles.vectorTL} />
      <img src="/Fullvector.png" alt="vector" className={styles.vectorBR} />

      <div className={styles.bgLayer}>
        <h2 className={styles.title}>
          What Our Students <br /> Say
        </h2>

        <div className={styles.cardContainer}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{ transform: `translateY(${t.y}px)` }}
              className="tcard-wrapper"
            >
              <div className="tcard">
                <div className="tcard-top">
                  <img src={t.img} alt={t.name} className="tcard-img" />

                  <div className="tcard-top-right" >
                    <div className="tcard-info">
                      <div>
                        <h3 className="tcard-name">{t.name}</h3>
                        <p className="tcard-role">{t.role}</p>
                      </div>
                      <div className="tcard-stars-row">
                        <img src={t.stars} className="tcard-stars" alt="rating" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tcard-body">
                  <p className="tcard-review">{t.text}</p>
                  <img src="/Quote.png" alt="quote" className="tcard-quote" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
