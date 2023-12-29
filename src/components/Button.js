// Button.js
import React from "react";

const Button = ({ children, onClick, customClass }) => {
  return (
    <button
      className={`bg-b1 text-white rounded-lg py-2 px-4 hover:bg-orange transition duration-300 ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
