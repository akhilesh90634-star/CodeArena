import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/NavbarStyle/Nav.module.css";

function Nav() {
  const [active, setActive] = useState(0);
  const [showMobile, setShowMobile] = useState(false);
  const navigate = useNavigate();

  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },   // page can be added later
    { label: "Coding", path: "/coding" },
    { label: "MCQ’S", path: "/mcqs" }
  ];

  useEffect(() => {
    if (itemRefs.current[active] && indicatorRef.current) {
      const { offsetWidth, offsetLeft } = itemRefs.current[active];
      indicatorRef.current.style.width = `${offsetWidth}px`;
      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [active]);

  return (
    <nav className={styles.nav}>

      {/* LEFT */}
      <div className={styles.left}>
        <div>
          <img src="/Logo.png" alt="logo" className={styles.logoImg} />
          <div>
            <h1 className={styles.brand}>
              Code<span className={styles.arena}>Arena</span>
            </h1>
          </div>
        </div>

        {/* HAMBURGER */}
        <div
          className={`${styles.hamburger} ${showMobile ? styles.activeHamburger : ""}`}
          onClick={() => setShowMobile(!showMobile)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* CENTER DESKTOP MENU */}
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <span
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() => {
              setActive(index);
              navigate(item.path);
            }}
          >
            {item.label}
          </span>
        ))}
        <div ref={indicatorRef} className={styles.indicator}></div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className={styles.actions}>
        <button className={styles.signup} onClick={() => navigate("/signup")}>
          Signup
        </button>
        <button className={styles.login} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      {/* MOBILE MENU */}
      {showMobile && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                setActive(index);
                setShowMobile(false);
                navigate(item.path);
              }}
            >
              {item.label}
            </span>
          ))}

          <div className={styles.mobileActions}>
            <button className={styles.signup} onClick={() => navigate("/signup")}>
              Signup
            </button>
            <button className={styles.login} onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
