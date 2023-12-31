import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterRoom from "./EnterRoom";
import LandingPage from "./LandingPage";
import Navbar from "./NavBar";
import QuizMasterLandingPage from "./QuizMasterLandingPage";

function App() {
  return (
    <div>
      <LandingPage></LandingPage>;{/* <Navbar></Navbar> */}
      {/* <QuizMasterLandingPage></QuizMasterLandingPage> */}
    </div>
  );
}

export default App;
