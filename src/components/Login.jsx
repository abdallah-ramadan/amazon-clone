import LoginFooter from "./LoginFooter"
import Logo from '../assets/Images/logo.png'
import React from "react"
import Button from "./Button"
import Input from "./Input"
import CustomLink from "./CustomLink"
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mt-5 bg-white-100 " style={{ fontFamily: '"Amazon Ember", Arial, sans-serif' }}>
        <img src={Logo} alt="Amazon Logo" className="w-30 mb-6" />
        <div className="w-[350px] bg-white border border-gray-300 rounded-md p-6">
          <h1 className="text-2xl font-medium mb-4">Sign in</h1>
          <form className="flex flex-col space-y-4">
            <div>
              <label className="text-sm font-semibold">Email or mobile phone number</label>
              <Input
                type="text"
              />
            </div>
            <Button type="submit">
              Continue
            </Button>
            <p className="text-xs text-gray-800">
              By continuing, you agree to Amazon’s{" "}
              <CustomLink href="#">Conditions of Use</CustomLink>{" "}
              and{" "}
              <CustomLink href="#">Privacy Notice</CustomLink>{" "}
              and{" "}
            </p>

            <a href="#" className="text-sky-600 text-sm hover:underline hover:text-yellow-500"><span className="inline-block w-0 h-0 border-l-4 border-t-4 border-b-4 border-transparent border-l-black ml-1"></span>Need help?</a>
          </form>

          <hr className="my-4" />
          <h2 className="text-sm font-semibold">Buying for work?</h2>
          <a
            href="#"
            className="text-sky-600 text-sm hover:underline hover:text-yellow-500"
          >
            Shop on Amazon Business
          </a>

        </div>
        <div className="w-[350px] mt-4">
          <div className="flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-gray-600 text-sm">New to Amazon?</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <button
            className="w-full mt-3 border border-gray-300 rounded-sm py-1 bg-gray-50 hover:bg-gray-100"
          >
            <Link to="/register">
              Create your Amazon account
            </Link>
          </button>
        </div>
        < LoginFooter />
      </div >
    </>
  )
}

export default Login