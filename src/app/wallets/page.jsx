"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Navigation from "@/app/ui/components/Navigation";
import MainContainer from "../ui/components/MainContainer";
import LayoutContainer from "../ui/components/LayoutContainer";
import HeaderCards from "../ui/components/wallet-components/HeaderCards";
import MoneyCards from "../ui/components/wallet-components/MoneyCards";
import MoneyCardModal from "../ui/components/wallet-components/MoneyCardModal"; // ← Import the modal
import NewWalletModal from "../ui/components/wallet-components/NewWalletModal";
import {
  HandCoins,
  Wallet,
  PiggyBank,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  ListFilterPlus,
} from "lucide-react";

const mockData = [
  {
    id: 1,
    title: "Cash on Hand",
    balance: 100000,
    trend: 50,
    icon: HandCoins,
    trendUp: true,
  },
  {
    id: 2,
    title: "E-Wallets",
    balance: 25000,
    trend: 15,
    icon: Wallet,
    trendUp: true,
  },
  {
    id: 3,
    title: "Savings",
    balance: 150000,
    trend: 8,
    icon: PiggyBank,
    trendUp: false,
  },
];

const moneyCards = [
  {
    id: 1,
    title: "Cash on Hand",
    balance: 100000,
    trend: 50,
    type: "Cash",
    icon: HandCoins,
    trendUp: true,
  },
  {
    id: 2,
    title: "Gcash",
    balance: 25000,
    trend: 15,
    type: "E-wallet",
    icon: Wallet,
    trendUp: true,
  },
  {
    id: 3,
    title: "Maribank",
    balance: 150000,
    trend: 8,
    type: "Savings",
    icon: PiggyBank,
    trendUp: false,
  },
];

export default function Wallets() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // ← Track selected card
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewWalletModalOpen, setIsNewWalletModalOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const openModal = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const openNewWalletModal = () => {
    setIsNewWalletModalOpen(true);
  };

  const closeNewWalletModal = () => {
    setIsNewWalletModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const nextCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % mockData.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + mockData.length) % mockData.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToCard = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextCard();
      } else {
        prevCard();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <LayoutContainer>
      <Navigation />
      <MainContainer>
        {/* Header Cards - Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center gap-4">
          {mockData.map((data) => (
            <HeaderCards
              key={data.id}
              title={data.title}
              balance={data.balance}
              trend={data.trend}
              icon={data.icon}
              trendUp={data.trendUp}
            />
          ))}
        </div>

        {/* Header Cards - Mobile Carousel */}
        <div className="md:hidden">
          {/* Card Container */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {mockData.map((data) => (
                <div key={data.id} className="w-full shrink-0">
                  <HeaderCards
                    title={data.title}
                    balance={data.balance}
                    trend={data.trend}
                    icon={data.icon}
                    trendUp={data.trendUp}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Below Cards */}
          <div className="flex items-center justify-center gap-4 mt-2 ">
            {/* Previous Button */}
            <button
              onClick={prevCard}
              className="flex items-center justify-center gap-2 size-8 bg-white hover:bg-gray-50 rounded-full border border-gray-200 transition-all duration-200 shadow-sm"
              aria-label="Previous card"
            >
              <ChevronLeft
                strokeWidth={1.5}
                className="size-4.5 text-gray-700"
              />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1">
              {mockData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`
                    transition-all duration-200 rounded-full
                    ${
                      currentIndex === index
                        ? "w-6 h-2 bg-green-700"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextCard}
              className="flex items-center justify-center gap-2 size-8 bg-white hover:bg-gray-50 rounded-full border border-gray-200 transition-all duration-200 shadow-sm"
              aria-label="Next card"
            >
              <ChevronRight
                strokeWidth={1.5}
                className="size-4.5 text-gray-700"
              />
            </button>
          </div>
        </div>

        {/* list of wallets */}
        <div className="flex flex-col gap-4">
          {/* title | search | filters */}
          <div className="flex flex-col gap-2">
            <div className="flex">
              <h3 className="font-semibold">List of all wallets</h3>
            </div>

            <div className="flex items-center">
              {/* left */}
              <div className="flex items-center gap-2 w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search wallets here..."
                  className="rounded-lg outline-none border border-gray-300 focus:border-green-700 px-4 py-2 text-sm xl:text-base w-full md:w-72 lg:w-96 bg-white transition-colors duration-150"
                />

                <div className="flex">
                  <button
                    onClick={toggleFilter}
                    className="cursor-pointer hover:text-green-700 transition-colors duration-150 size-9.5 md:size-auto md:px-4 md:py-2 bg-white rounded-lg flex items-center gap-2 justify-center border border-gray-300"
                  >
                    <ListFilterPlus
                      strokeWidth={1.5}
                      className="size-5 md:size-4"
                    />
                    <span className="hidden md:flex text-sm xl:text-base">
                      Filter by
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* toggle filter */}
            {filterOpen && (
              <div className="p-4 lg:p-6 rounded-2xl border border-gray-300 bg-white flex flex-col gap-4">
                {/* balance (ascending | descending) */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-gray-500"
                  >
                    Balance
                  </label>
                  <select
                    name=""
                    id=""
                    className="cursor-pointer rounded-lg outline-none border border-gray-300 focus:border-green-700 px-4 py-2 text-sm xl:text-base w-full md:w-72 lg:w-96 bg-white transition-colors duration-150"
                  >
                    <option value="default">Default</option>
                    <option value="" className="">
                      Ascending
                    </option>
                    <option value="" className="">
                      Descending
                    </option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* cards */}
          <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <button
              onClick={openNewWalletModal}
              className="cursor-pointer col-span-4 md:col-span-1 relative p-5 rounded-2xl flex flex-col items-center justify-center gap-1 text-gray-400 border-2 border-dashed border-gray-400 hover:border-green-700 hover:text-green-700 transition-colors duration-150"
            >
              <CirclePlus strokeWidth={1.5} className="size-14 " />
              <span className="text-sm font-medium ">New wallet</span>
            </button>
            {moneyCards.map((data) => (
              <MoneyCards
                key={data.id}
                onClick={() => openModal(data)} // ← Pass the card data to modal
                title={data.title}
                type={data.type}
                balance={data.balance}
                trend={data.trend}
                icon={data.icon}
                trendUp={data.trendUp}
              />
            ))}
          </div>
        </div>

        {/* recent transactions */}
        <div className="flex col-gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex">
              <h3 className="font-semibold">Recent transactions</h3>
            </div>

            <div className="flex">
              <Link
                href="/transactions"
                className="flex items-center gap-2 text-gray-500 hover:text-green-700 transition  duration-150"
              >
                <span className="text-sm ">View all transactions</span>
                <ChevronRight strokeWidth={1.5} className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>

      {/* Money Card Modal */}
      <MoneyCardModal
        isOpen={isModalOpen}
        onClose={closeModal}
        cardData={selectedCard}
      />

      <NewWalletModal
        isOpen={isNewWalletModalOpen}
        onClose={closeNewWalletModal}
      />
    </LayoutContainer>
  );
}
