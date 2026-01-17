// import React from 'react'
// import Nav from './components/Nav/Nav'

// function App() {
//   return (
//     <div>
//       <Nav/>
//     </div>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Logins/Login";
import Signup from "./components/Signup/Signup";
import Coding from "./components/Coding/Codingpage";
import Mcqs from "./components/Mcqs/Mcqs";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/mcqs" element={<Mcqs />} />
      </Routes>
    </Router>
  );
}

export default App;
