import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons
import Logo from '../assets/Images/logo.png'
import LoginFooter from '../components/login-register/LoginFooter'
import Input from '../components/login-register/Input'
import Button from '../components/login-register/Button'
import CustomLink from '../components/login-register/CustomLink'
import { auth } from "../../firebaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name.trim()) return "Name is required.";
    if (!email.includes("@")) return "Please enter a valid email.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter.";
    if (!/[0-9]/.test(password)) return "Password must include at least one number.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return null;
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use": return "This email is already registered.";
      case "auth/invalid-email": return "Please enter a valid email.";
      case "auth/weak-password": return "Password should be at least 8 characters.";
      case "auth/operation-not-allowed": return "Email/password accounts are not enabled.";
      default: return "Something went wrong. Please try again.";
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    const validationError = validateForm();
    if (validationError) { setError(validationError); return; }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      setSuccess("Account created successfully");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) { setError(getErrorMessage(err.code)); }
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-mt-5 tw-bg-white-100" style={{ fontFamily: '"Amazon Ember", Arial, sans-serif' }}>
      <img src={Logo} alt="Amazon Logo" className="tw-w-32 tw-mb-6" />
      <div className="tw-w-[350px] tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-p-6">
        <h1 className="tw-text-2xl tw-font-medium tw-mb-4">Create Account</h1>

        <form onSubmit={handleRegister} className="tw-flex tw-flex-col tw-gap-4">
          <div>
            <label className="tw-text-sm tw-font-semibold">Your name</label>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="enter your name" />
          </div>

          <div>
            <label className="tw-text-sm tw-font-semibold">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" />
          </div>

          <div className="tw-relative">
            <label className="tw-text-sm tw-font-semibold">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="enter strong password(at least 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="tw-absolute tw-right-3 tw-top-[35px] tw-cursor-pointer tw-text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="tw-relative">
            <label className="tw-text-sm tw-font-semibold">Confirm Password</label>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="tw-absolute tw-right-3 tw-top-[35px] tw-cursor-pointer tw-text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <Button type="submit">Create Account</Button>
        </form>

        {error && (
          <div className="tw-bg-red-100 tw-border tw-border-red-400 tw-text-red-700 tw-p-3 tw-rounded-md tw-mt-4 tw-shadow-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="tw-bg-green-100 tw-border tw-border-green-400 tw-text-green-700 tw-p-3 tw-rounded-md tw-mt-4 tw-shadow-sm">
            {success}
          </div>
        )}

        <hr className="tw-border-t-1 tw-border-gray-300 tw-w-full tw-mx-auto tw-my-4" /> <h2 className="tw-text-sm tw-font-semibold">Buying for work?</h2> <a href="#" className="tw-text-sky-600 tw-text-sm hover:tw-text-yellow-500 hover:tw-underline "> Create a new business account </a> <hr className="tw-border-t-1 tw-border-gray-50 tw-w-full tw-mx-auto tw-my-4" />
        <hr className="tw-border-t-1 tw-border-gray-300 tw-w-full tw-mx-auto tw-my-4" />
        <p className="tw-text-xs tw-text-gray-800 "> Already have an account?{" "} <Link to="/login" className="tw-text-sky-600 hover:tw-text-yellow-500 hover:tw-underline">Sign in<span className=" hover:tw-text-yellow-500  tw-inline-block tw-w-0 tw-h-0 tw-border-l-4 tw-border-t-4 tw-border-b-4 tw-border-transparent tw-border-l-current tw-ml-1 tw-text-sky-600"></span></Link>

        </p> <p className="tw-text-xs tw-text-gray-800 tw-mt-5"> By creating account or logging in, you agree to Amazon's <CustomLink href="#">Conditions of Use</CustomLink> and <CustomLink href="#">Privacy Notice</CustomLink> </p>
      </div>
      <LoginFooter />
    </div>
  );
}

export default Register;
