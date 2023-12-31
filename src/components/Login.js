import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

const Login = ({ onSignupClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center rounded-lg border-b2 p-10 border-4 h-1/2 w-full">
        <h1 className="text-4xl font-handwriting mb-8 text-b1 text-center">
          Login to Create Quiz
        </h1>
        <TextField
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} customClass="mt-3">
          Login
        </Button>
        <Button
          onClick={onSignupClick}
          customClass="mt-3 bg-orange hover:bg-b2"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
