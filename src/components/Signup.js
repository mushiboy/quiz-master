import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Adding email state for signup

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signing up with:", username, password, email);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-1/4 text-center rounded-lg border-b-2 p-10 border-4">
        <h1 className="text-4xl font-handwriting mb-8 text-b1 text-center">
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
        <Button onClick={handleSignup} customClass="mt-3">
          Signup
        </Button>
      </div>
    </div>
  );
}

export default Signup;
