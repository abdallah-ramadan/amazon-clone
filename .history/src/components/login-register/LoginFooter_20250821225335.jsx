function LoginFooter() {
  return (
    <>
      <div className="tw-w-full tw-border-t tw-border-gray-300 tw-mt-10">
        <div className="tw-flex tw-justify-center tw-space-x-6 tw-mt-6">
          <a
            href="#"
            className="tw-text-xs tw-text-sky-600 tw-underline hover:tw-text-yellow-500"
          >
            Conditions of Use
          </a>
          <a
            href="#"
            className="tw-text-xs tw-text-sky-600 tw-underline hover:tw-text-yellow-500"
          >
            Privacy Notice
          </a>
          <a
            href="#"
            className="tw-text-xs tw-text-sky-600 tw-underline hover:tw-text-yellow-500"
          >
            Help
          </a>
        </div>
        <div className="flex tw-justify-center tw-mt-3 tw-mb-6">
          <p className="tw-text-xs tw-text-gray-500">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginFooter;