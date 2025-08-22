import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import LoginFooter from "../components/login-register/LoginFooter";
import Logo from "../assets/Images/Logo.png";
import Button from "../components/login-register/Button";
import Input from "../components/login-register/Input";
import CustomLink from "../components/login-register/CustomLink";
import { addToCart, loginUser } from "../services/userServices";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const errorMessages = {
    "auth/invalid-email": "Please enter a valid email.",
    "auth/user-disabled": "This account has been disabled. Contact support.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/missing-password": "Password is required.",
    "auth/too-many-requests":
      "Too many failed attempts. Please try again later.",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      userCredential.user = {
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      };
      console.log("userCredential", userCredential.user);

       loginUser({ user: userCredential.user });
       const userAfterAddToCart= {...userCredential.user, cart: [
        


       ]};
       addToCart({ user: userCredential.user });


      navigate("/");
    } catch (err) {
      const message =
        errorMessages[err.code] || "Login failed. Please try again.";
      setError(message);
    }
  };

  return (
    <div
      className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-mt-5 tw-bg-white-100"
      style={{ fontFamily: '"Amazon Ember", Arial, sans-serif' }}
    >
      <img src={Logo} alt="Amazon Logo" className="tw-w-32 tw-mb-6" />

      <div className="tw-w-[350px] tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-p-6">
        <h1 className="tw-text-2xl tw-font-medium tw-mb-4">Sign in</h1>

        <form
          className="tw-flex tw-flex-col tw-space-y-4"
          onSubmit={handleLogin}
        >
          <div>
            <label className="tw-text-sm tw-font-semibold">
              Email or mobile phone number
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="enter your email"
            />
          </div>

          <div className="tw-relative">
            <label className="tw-text-sm tw-font-semibold">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="enter your password"
            />
            <span
              className="tw-absolute tw-right-3 tw-top-[35px] tw-cursor-pointer tw-text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && (
            <div className="tw-bg-red-100 tw-border tw-border-red-400 tw-text-red-700 tw-p-3 tw-rounded-md tw-mt-4 tw-shadow-sm">
              {error}
            </div>
          )}

          <Button type="submit">Continue</Button>

          <p className="tw-text-xs tw-text-gray-800">
            By continuing, you agree to Amazon's{" "}
            <CustomLink href="#">Conditions of Use</CustomLink> and{" "}
            <CustomLink href="#">Privacy Notice</CustomLink>
          </p>

          <a
            href="#"
            className="tw-text-sky-600 tw-text-sm hover:tw-underline hover:tw-text-yellow-500"
          >
            <span className="tw-inline-block tw-w-0 tw-h-0 tw-border-l-4 tw-border-t-4 tw-border-b-4 tw-border-transparent tw-border-l-current tw-ml-1"></span>
            Need help?
          </a>
        </form>

        <hr className="tw-border-t-1 tw-border-gray-300 tw-w-full tw-mx-auto tw-my-4" />

        <h2 className="tw-text-sm tw-font-semibold">Buying for work?</h2>
        <a
          href="#"
          className="tw-text-sky-600 tw-text-sm hover:tw-underline hover:tw-text-yellow-500"
        >
          Shop on Amazon Business
        </a>
      </div>

      <div className="tw-w-[350px] tw-mt-4">
        <div className="tw-flex tw-items-center">
          <div className="tw-flex-grow tw-h-px tw-bg-gray-300"></div>
          <span className="tw-px-2 tw-text-gray-600 tw-text-sm">
            New to Amazon?
          </span>
          <div className="tw-flex-grow tw-h-px tw-bg-gray-300"></div>
        </div>

        <button className="tw-w-full tw-mt-3 tw-border tw-border-gray-300 tw-rounded-sm tw-py-1 tw-bg-gray-50 hover:tw-bg-gray-100">
          <Link to="/register">Create your Amazon account</Link>
        </button>
      </div>

      <LoginFooter />
    </div>
  );
}

export default Login;
