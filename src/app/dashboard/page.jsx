"use client";
import Header from "@/app/ui/components/Header";

export default function Dashboard() {
  return (
    <div className="min-h-dvh relative flex flex-col gap-5 bg-gray-50 p-5 xl:flex-row xl:items-stretch">
      <Header />
      <main className="flex-1 rounded-2xl bg-white p-6 border border-gray-300 h-[1000px] xl:ml-[25rem]" />
    </div>
  );
}
