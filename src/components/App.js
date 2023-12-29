import React from "react";
import Login from "./Login";
import Navbar from "./NavBar";
import Room from "./Room";
import Signup from "./Signup";
import AddQuiz from "./AddQuiz";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <div className="h-screen/10">
        <Navbar />
      </div>

      <div className="flex items-center justify-center h-screen/10*9 overflow-hidden">
        {/* <Login />
        <Room></Room>
        <Signup></Signup> */}
        <AddQuiz></AddQuiz>
      </div>
    </div>
  );
}

export default App;
