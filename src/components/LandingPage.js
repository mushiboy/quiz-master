import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import EnterRoom from "./EnterRoom";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col md:flex-row mx-auto max-w-screen-md md:items-center">
        {showLogin ? (
          <Login onSignupClick={handleSignupClick} />
        ) : (
          <Signup onLoginClick={handleLoginClick} />
        )}
        <div className="md:border-r-5 md:border-b-2 md:mr-4 hidden md:block"></div>
        <EnterRoom />
      </div>
    </div>
  );
};

export default LandingPage;
