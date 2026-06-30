import { TrendingUp } from "lucide-react";

export default function MoneyCards({
  title,
  balance,
  trend,
  type,
  icon: Icon,
  trendUp,
  currency = "₱",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer col-span-4 md:col-span-1 relative bg-white p-5 rounded-2xl flex flex-col gap-2 items-start border border-gray-300 hover:shadow-md transition-shadow duration-200"
    >
      <div className="absolute top-3 md:top-2.5 xl:top-3 right-3 md:right-2.5 xl:right-3 flex items-center justify-center p-2.5 rounded-full border border-gray-300">
        <Icon strokeWidth={1.5} className="size-5 md:size-4 xl:size-5" />
      </div>
      {/* title */}
      <div className="flex flex-col items-start">
        <h2 className="text-sm font-semibold text-gray-500">{title}</h2>
        <span className="text-gray-500 text-[12px]">{type}</span>
      </div>

      {/* balance */}
      <div className="flex flex-col items-start">
        <h1 className="text-lg font-bold">
          {currency}
          {balance.toLocaleString()}
        </h1>
        <div
          className={`flex  gap-1 ${trendUp ? "text-green-500" : "text-red-500"}`}
        >
          <TrendingUp
            strokeWidth={1.5}
            className={`size-3 ${trendUp ? "" : "rotate-180"}`}
          />
          <span className="text-[10px] xl:text-[11px]">
            {" "}
            {trendUp ? "+" : "-"}
            {Math.abs(trend)}% from yesterday
          </span>
        </div>
      </div>
    </button>
  );
}
