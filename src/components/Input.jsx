
function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-sky-300
                h-8 focus:bg-sky-50"
    />
  );
}

export default Input;
