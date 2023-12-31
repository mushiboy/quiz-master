import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterRoom from "./EnterRoom";
import LandingPage from "./LandingPage";
import Navbar from "./NavBar";
import QuizMasterLandingPage from "./QuizMasterLandingPage";
import AddQuiz from "./AddQuiz";

function App() {
  return (
    <div className="">
      {/* <LandingPage></LandingPage>;<Navbar></Navbar> */}
      <QuizMasterLandingPage></QuizMasterLandingPage>
      {/* <AddQuiz></AddQuiz> */}
    </div>
  );
}

export default App;
