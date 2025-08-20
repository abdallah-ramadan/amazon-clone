import Logo from '../assets/Images/logo.png'
import LoginFooter from '../components/login-register/LoginFooter'
import Input from '../components/login-register/Input'
import Button from '../components/login-register/Button'
import CustomLink from '../components/login-register/CustomLink'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-mt-5 tw-bg-white-100" style={{ fontFamily: '"Amazon Ember", Arial, sans-serif' }}>
        <img src={Logo} alt="Amazon Logo" className="tw-w-32 tw-mb-6" />
        <div className="tw-w-[350px] tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-p-6">
          <h1 className="tw-text-2xl tw-font-medium tw-mb-4">Create Account</h1>
          <label className="tw-text-sm tw-font-semibold">Your name</label>
          <Input type="text" />
          <label className="tw-text-sm tw-font-semibold">Mobile numbers</label>
          <Input type="text" />
          <label className="tw-text-sm tw-font-semibold">Password</label>
          <Input type="password" />
          <Button type="submit">
            Verify mobile phone
          </Button>
          <hr className="tw-border-t-1 tw-border-gray-300 tw-w-full tw-mx-auto tw-my-4" />
          <h2 className="tw-text-sm tw-font-semibold">Buying for work?</h2>
          <a
            href="#"
            className="tw-text-sky-600 tw-text-sm hover:tw-text-yellow-500 hover:tw-underline"
          >Create a new business account</a>
          <hr className="tw-border-t-1 tw-border-gray-300 tw-w-full tw-mx-auto tw-my-4" />
          <p className="tw-text-xs tw-text-gray-800">Already hava an account? <Link to="/" className="tw-text-sky-600 hover:tw-text-yellow-500 hover:tw-underline">
            Sign in
            <span className="tw-inline-block tw-w-0 tw-h-0 tw-border-l-4 tw-border-t-4 tw-border-b-4 tw-border-transparent tw-border-l-current tw-ml-1"></span>
          </Link>

          </p>
          <p className="tw-text-xs tw-text-gray-800 tw-mt-5">
            By creating account or loging in, you agree to Amazon's{" "}
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