function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="tw-w-full tw-bg-yellow-300 hover:tw-bg-yellow-400 tw-font-medium tw-py-2 tw-rounded-md tw-text-xs tw-text-gray-700 tw-mt-3"
    >
      {children}
    </button>
  )
}

export default Button