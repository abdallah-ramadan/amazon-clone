import Logo from '../assets/Images/logo.png'
import LoginFooter from './LoginFooter'
import Input from './Input'
import Button from './Button'
import CustomLink from './CustomLink'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mt-5 bg-white-100 " style={{ fontFamily: '"Amazon Ember", Arial, sans-serif' }}>
        <img src={Logo} alt="Amazon Logo" className="w-30 mb-6" />
        <div className="w-[350px] bg-white border border-gray-300 rounded-md p-6">
          <h1 className="text-2xl font-medium mb-4">Create Account</h1>
          <label className="text-sm font-semibold">Your name</label>
          <Input type="text" />
          <label className="text-sm font-semibold">Mobile numbers</label>
          <Input type="text" />
          <label className="text-sm font-semibold">Password</label>
          <Input type="password" />
          <Button type="submit">
            Verify mobile phone
          </Button>
          <hr className="border-t-1 border-gray-300 w-full mx-auto my-4" />
          <h2 className="text-sm font-semibold">Buying for work?</h2>
          <a
            href="#"
            className="text-sky-600 text-sm hover:text-yellow-500 hover:underline"
          >Create a new business account</a>
          <hr className="border-t-1 border-gray-300 w-full mx-auto my-4" />
          <p className="text-xs text-gray-800">Already hava an account? <Link to="/" className="text-sky-600 hover:text-yellow-500 hover:underline">
            Sign in
            <span className="inline-block w-0 h-0 border-l-4 border-t-4 border-b-4 border-transparent border-l-current ml-1"></span>
          </Link>

          </p>
          <p className="text-xs text-gray-800 mt-5">
            By creating account or loging in, you agree to Amazon’s{" "}
            <CustomLink href="#">Conditions of Use</CustomLink>{" "}
            and{" "}
            <CustomLink href="#">Privacy Notice</CustomLink>{" "}
          </p>
        </div>
        <LoginFooter />
      </div>

    </>
  )
}
export default Register