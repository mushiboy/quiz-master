import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterRoom from "./EnterRoom";
import LandingPage from "./LandingPage";
import Navbar from "./NavBar";

function App() {
  return (
    <div>
      <LandingPage></LandingPage>;
    </div>
  );
}

export default App;
