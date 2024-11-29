import React, { useState } from "react";
import { login, signup } from "../firebase";
import { INTRO } from "../assets/assets";


const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      await signup(name, email, password);
    } else {
      await login(email, password);
    }
  };

  return (
    <div className="h-screen grid grid-cols-2 p-6 text-[12px]">
      <div className="bg-neutral-800 rounded-lg overflow-hidden w-full h-full">
        <video className="w-full h-full object-cover" src={INTRO} autoPlay loop muted playsInline></video>
      </div>
      <div className=" flex justify-center items-center">
      <div className="login-form">
        <h2 className={`text-4xl mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-white`}>{isSignup ? "Create an Account" : "Welcome Back"}</h2>
        <button onClick={() => setIsSignup(!isSignup)} className="mb-10 font-light opacity-70">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>
        <form onSubmit={handleSubmit} className="text-black">
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-style"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
          />
          <button type="submit" className="text-[12px] font-medium mt-4 w-full p-4 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 text-white hover:opacity-60 transition-all duration-500 cursor-pointer">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
