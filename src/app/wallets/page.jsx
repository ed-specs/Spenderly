"use client";
import { useState } from "react";
import Navigation from "@/app/ui/components/Navigation";
import MainContainer from "../ui/components/MainContainer";
import LayoutContainer from "../ui/components/LayoutContainer";
import WalletsComponent from "@/app/ui/components/wallet-components/WalletsComponent";
import { Wallet, HandCoins, BanknoteArrowDown } from "lucide-react";
import IncomeComponent from "../ui/components/wallet-components/IncomeComponent";
import ExpensesComponent from "../ui/components/wallet-components/ExpensesComponent";

export default function Wallets() {
  const [activeTab, setActiveTab] = useState("wallets");

  return (
    <LayoutContainer>
      <Navigation />
      <MainContainer>
        {/* Tab Selection Buttons */}
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("wallets")}
            className={`cursor-pointer rounded-lg flex items-center gap-3 px-4 py-2 border transition-colors duration-150 font-medium ${
              activeTab === "wallets"
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-700 border-gray-300 hover:text-green-700"
            }`}
          >
            <Wallet strokeWidth={1.5} className="size-5" />
            <span>Wallets</span>
          </button>

          <button
            onClick={() => setActiveTab("income")}
            className={`cursor-pointer rounded-lg flex items-center gap-3 px-4 py-2 border transition-colors duration-150 font-medium ${
              activeTab === "income"
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-700 border-gray-300 hover:text-green-700"
            }`}
          >
            <HandCoins strokeWidth={1.5} className="size-5" />
            <span>Income</span>
          </button>

          <button
            onClick={() => setActiveTab("expenses")}
            className={`cursor-pointer rounded-lg flex items-center gap-3 px-4 py-2 border transition-colors duration-150 font-medium ${
              activeTab === "expenses"
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-700 border-gray-300 hover:text-green-700"
            }`}
          >
            <BanknoteArrowDown strokeWidth={1.5} className="size-5" />
            <span>Expenses</span>
          </button>
        </div>

        {/* Conditional Component Rendering */}
        <div className="flex flex-col gap-6">
          {activeTab === "wallets" && <WalletsComponent />}

          {activeTab === "income" && <IncomeComponent />}

          {activeTab === "expenses" && <ExpensesComponent />}
        </div>
      </MainContainer>
    </LayoutContainer>
  );
}
