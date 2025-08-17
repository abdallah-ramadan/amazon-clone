function LoginFooter() {
  return (
    <>
      <div className="w-full border-t border-gray-300 mt-10">
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="#"
            className="text-xs text-sky-600 underline hover:text-yellow-500"
          >
            Conditions of Use
          </a>
          <a
            href="#"
            className="text-xs text-sky-600 underline hover:text-yellow-500"
          >
            Privacy Notice
          </a>
          <a
            href="#"
            className="text-xs text-sky-600 underline hover:text-yellow-500"
          >
            Help
          </a>
        </div>
        <div className="flex justify-center mt-3 mb-6">
          <p className="text-xs text-gray-500">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginFooter;
