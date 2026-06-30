// components/wallet-components/MoneyCardModal.jsx
"use client";

import { useRef, useEffect } from "react";
import { X } from "lucide-react";

export default function MoneyCardModal({ isOpen, onClose, cardData }) {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Close modal on ESC key
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
          aria-label="Close modal"
        >
          <X strokeWidth={1.5} className="size-5 text-gray-500" />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {cardData?.title || "Wallet Details"}
          </h2>

          {/* Add your modal content here */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-500">
                Balance
              </label>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-700">
                  ₱{cardData?.balance?.toLocaleString() || "0"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-500">Type</label>
              <span className="text-gray-700">
                {cardData?.type || "Wallet"}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-500">Trend</label>
              <span
                className={`${cardData?.trendUp ? "text-green-500" : "text-red-500"}`}
              >
                {cardData?.trendUp ? "+" : "-"}
                {Math.abs(cardData?.trend || 0)}% from yesterday
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-gray-200">
              <button className="w-full px-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-150">
                Add Balance
              </button>
              <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-150">
                Edit Card
              </button>
              <button className="w-full px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-150">
                Delete Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
