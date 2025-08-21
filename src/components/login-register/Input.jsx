
function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="tw-w-full tw-p-2 tw-border tw-border-gray-400 tw-rounded-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-sky-300
                tw-h-8 focus:tw-bg-sky-50 tw-text-xs"
    />
  );
}
<<<<<<< HEAD
export default Input;

=======
>>>>>>> 94e58f0c1742a8fc8c2242625cc09b49577e2526
