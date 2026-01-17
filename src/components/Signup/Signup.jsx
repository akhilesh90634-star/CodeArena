// import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// function Signup() {
//   return (
//     <div>
//         <div>

//         <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//         <h1>Create an account</h1>
//         <span>its easy! just take a minute and provide the details</span>
//         <br />
//       <TextField id="outlined-basic" label="Email or Phone" variant="outlined" />
//       <br />
//       <TextField id="outlined-basic" label="Full Name" variant="outlined" />
//       <br />
//       <TextField id="outlined-basic" label="Create Password" variant="outlined" />
//       <br />
//       <TextField id="outlined-basic" label="Confrim Password" variant="outlined" />
//       <br />
//       <button>Sign Up</button>
//     </Box>
//         </div>
//         <div>
//             <img src="\BG.png" alt="" />
//             <img src="\Hero.png" alt="" />
//         </div>
//     </div>
//   )
// }

// export default Signup

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Signup/SignupPage.module.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className={styles.signupWrapper}>
      
      {/* LEFT */}
      <div className={styles.leftBox}>
        <h1 className={styles.title}>Create an account</h1>
        <span className={styles.subtitle}>
          its easy! just take a minute and provide the details
        </span>

        <Box className={styles.formBox} noValidate autoComplete="off">
          <div className={styles.fieldWrap}>
            <TextField label="Email or Phone" variant="outlined" fullWidth />
          </div>

          <div className={styles.fieldWrap}>
            <TextField label="Full Name" variant="outlined" fullWidth />
          </div>

          <div className={styles.fieldWrap}>
            <TextField label="Create Password" variant="outlined" type="password" fullWidth />
          </div>

          <div className={styles.fieldWrap}>
            <TextField label="Confirm Password" variant="outlined" type="password" fullWidth />
          </div>

          <button className={styles.signupBtn}>Signup</button>

          <div className={styles.loginLink}>
            Already Have An Account?
            <span onClick={() => navigate("/login")}> Login</span>
          </div>
        </Box>
      </div>

      {/* RIGHT */}
      <div className={styles.rightBox}>
        <img className={styles.bgShape} src="/BG.png" alt="shape" />
        <img className={styles.heroImg} src="/Hero.png" alt="hero" />
      </div>
    </div>
  );
}

export default Signup;
