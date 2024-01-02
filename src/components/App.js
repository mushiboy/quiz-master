import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterRoom from "./EnterRoom";
import LandingPage from "./LandingPage";
import Navbar from "./NavBar";
import QuizMasterLandingPage from "./QuizMasterLandingPage";
import AddQuiz from "./AddQuiz";
import QuestionPanelPage from "./QuestionPanelPage";

function App() {
  return (
    <div className="">
      {/* <LandingPage></LandingPage>;<Navbar></Navbar> */}
      <QuizMasterLandingPage></QuizMasterLandingPage>
      {/* <AddQuiz></AddQuiz> */}
      {/* <QuestionPanelPage></QuestionPanelPage> */}
    </div>
  );
}

export default App;
