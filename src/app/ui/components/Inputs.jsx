export default function InputComponent({
  type = "text",
  placeholder,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-xl py-3 px-4 outline-none focus:border-green-700"
      {...props}
    />
  );
}
