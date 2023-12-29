// Navbar.js
import React from "react";
import Logo from "./Logo";

const Navbar = ({ currentPage }) => {
  return (
    <nav className="bg-b1 p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <Logo />

        {/* Navigation links on the right */}
        <div className="flex space-x-1">
          {/* Always present link */}
          Create Quiz
          {/* Conditionally render "Join a Room" link */}
          {currentPage !== "join-room" && <h1>Join a Room</h1>}
          {/* Conditionally render "Login" link */}
          {currentPage !== "login" && <h1>Login</h1>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
