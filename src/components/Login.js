import React from "react";
import { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-1/4 text-center rounded-lg  border-b2 p-10 border-4">
        <h1 className="text-4xl font-handwriting mb-8 text-b1 text-center">
          Login
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
      </div>
    </div>
  );
}

export default Login;
