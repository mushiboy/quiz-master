import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

const Signup = ({ onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signing up with:", username, password, email);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center rounded-lg border-b2 p-10 border-4 h-1/2 w-full">
        <h1 className="text-4xl font-handwriting mb-3 text-b1 text-center">
          Signup
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
        <TextField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleSignup} customClass="">
          Signup
        </Button>
        <Button onClick={onLoginClick} customClass="mt-2 bg-orange hover:bg-b2">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Signup;
