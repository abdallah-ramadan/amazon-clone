function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 rounded-md text-xs text-gray-700 mt-3"
    >
      {children}
    </button>
  )
}

export default Button
