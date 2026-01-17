import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginStyle/Login.module.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.loginWrapper}>
      
      {/* LEFT FORM */}
      <div className={styles.leftBox}>
        <h1>Login to your account</h1>

        <span className={styles.subtitle}>
          its easy! just take a minute and provide the details
        </span>

        <Box className={styles.formBox} noValidate autoComplete="off">
          
          <div className={styles.fieldWrap}>
            <TextField label="Email or Phone" variant="outlined" fullWidth />
          </div>

          <div className={styles.fieldWrap}>
            <TextField label="Password" type="password" variant="outlined" fullWidth />
          </div>

          <button className={styles.loginBtn}>Login</button>

          <div className={styles.switchLink}>
            Didn’t Have An Account?{" "}
            <span onClick={() => navigate("/signup")}>Signup</span>
          </div>
        </Box>
      </div>

      {/* RIGHT HERO */}
      <div className={styles.rightBox}>
        <img className={styles.bgShape} src="/BG.png" alt="bg-shape" />
        <img className={styles.heroImg} src="/Hero.png" alt="hero" />
      </div>
    </div>
  );
}

export default Login;
