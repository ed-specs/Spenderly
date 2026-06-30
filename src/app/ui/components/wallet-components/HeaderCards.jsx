import { TrendingUp } from "lucide-react";

export default function HeaderCards({
  title,
  balance,
  trend,
  icon: Icon,
  trendUp,
  currency = "₱",
}) {
  return (
    <div className="col-span-3 md:col-span-1 relative bg-white p-5 rounded-2xl flex flex-col gap-2 border border-gray-300 hover:shadow-md transition-shadow duration-200">
      <div className="absolute top-3 md:top-2.5 xl:top-3 right-3 md:right-2.5 xl:right-3 flex items-center justify-center p-2.5 rounded-full border border-gray-300">
        <Icon strokeWidth={1.5} className="size-5 md:size-4 xl:size-5" />
      </div>
      {/* title */}
      <div className="flex flex-col">
        <h2 className="text-sm md:text-sm font-semibold text-gray-500">
          {title}
        </h2>
      </div>

      {/* balance */}
      <div className="flex flex-col ">
        <h1 className="text-lg font-bold">
          {currency}
          {balance.toLocaleString()}
        </h1>
        <div
          className={`flex items-center gap-1 ${trendUp ? "text-green-500" : "text-red-500"}`}
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
    </div>
  );
}
