export default function LayoutContainer({ children }) {
  return (
    <div className="min-h-dvh relative flex flex-col gap-5 bg-gray-50 p-5 xl:flex-row xl:items-stretch">
      {children}
    </div>
  );
}
