export default function ButtonComponent({
  children,
  type = "button",
  onClick,
  className,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex w-full items-center justify-center rounded-xl py-3 px-5 bg-green-700 text-white hover:bg-green-800 transition-colors duration-150 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
