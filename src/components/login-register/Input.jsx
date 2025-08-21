function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="tw-w-full tw-p-2 tw-border tw-border-gray-400 tw-rounded-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-sky-300
                tw-h-8 focus:tw-bg-sky-50"
    />
  );
}

export default Input;