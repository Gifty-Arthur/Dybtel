import map from "../../assets/map.png";
import React, { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Title from "../PageTitle";
const LoginScreen: React.FC = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Email is invalid");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    if (isValid) {
      const mockUserData = {
        name: "Kofi Johnson",
        profilePictureUrl: "/kofi-profile.jpg",
        balance: 53.0,
        currency: "GHC",
      };
      login(mockUserData);
      navigate("/dashboard");
    }
  };

  const LoginForm = (
    <form onSubmit={handleSubmit} className="space-y-6 ">
      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-500"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`block w-full rounded-xl border bg-white p-3 outline-none ${
            emailError
              ? "border-red-500 ring-1 ring-red-500"
              : "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
          }`}
        />
        {emailError && (
          <p className="mt-1 text-sm text-red-500">{emailError}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-500"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`block w-full rounded-xl border bg-white p-3 outline-none ${
            passwordError
              ? "border-red-500 ring-1 ring-red-500"
              : "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
          }`}
        />
        {passwordError && (
          <p className="mt-1 text-sm text-red-500">{passwordError}</p>
        )}
      </div>

      <Button type="submit">Login</Button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <a href="#" className="font-medium text-green-500 hover:underline">
          Signup
        </a>
      </p>
    </form>
  );

  return (
    <div>
      {/* Mobile*/}
      <div className="bg-[#eeeded] p-4 md:hidden min-h-screen flex flex-col justify-center">
        <div>
          <div className="h-64 w-full">
            <img
              src={map}
              alt="World map"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          <div className="relative -mt-24 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-[#eeeded] p-8 shadow-lg">
              <Title className="mb-6 mt-8">Login</Title>
              {LoginForm}
            </div>
          </div>
        </div>{" "}
      </div>

      {/* Desktop*/}
      <div
        className="hidden min-h-screen items-center justify-center bg-cover bg-center p-8 md:flex"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="w-full max-w-md rounded-2xl  p-10 shadow-lg bg-[#eeeded]">
          <h1 className="mb-6 text-2xl font-bold text-green-500">Login</h1>
          {LoginForm}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
