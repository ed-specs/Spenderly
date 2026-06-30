"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, CircleUserRound, Settings, LogOut } from "lucide-react";

const PAGE_NAME = {
  "/dashboard": "Dashboard",
  "/wallets": "Wallets",
  "/tranfers": "Transfers",
  "/budget-planning": "Budget Planning",
  "/transactions": "Transactions",
  "/profile": "Profile",
  "/settings": "Settings",
};

export default function MainContainer({ children }) {
  const pathname = usePathname();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationOpen &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }

      if (
        profileOpen &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationOpen, profileOpen]);

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const pageName =
    PAGE_NAME[pathname] ||
    pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);
  return (
    <main className="xl:ml-100 w-full flex flex-col gap-6">
      <div className="hidden xl:flex items-center justify-between w-full">
        <div className="flex flex-1 ">
          <h1 className="text-green-700 font-semibold text-2xl  ">
            {pageName}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* notification */}
          <div ref={notificationRef} className="hidden xl:flex relative">
            <button
              onClick={toggleNotification}
              className="relative flex items-center justify-center p-2 rounded-full border border-gray-300 bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-150"
            >
              <Bell strokeWidth={1.5} className="size-5" />
              {/* display where there's an unread notificaiton */}
              <div className="absolute size-2.5 rounded-full bg-red-500 top-0 right-0"></div>
            </button>
            {notificationOpen && (
              <div className="absolute top-12 right-0 p-4 rounded-xl bg-white border border-gray-300 shadow-lg w-72 sm:w-96 max-h-96 overflow-y-auto z-50">
                <p className="text-sm text-gray-700">
                  this is where the notificaiton will show/display
                </p>
              </div>
            )}
          </div>
          {/* profile */}
          <div ref={profileRef} className="relative hidden xl:flex">
            <button
              onClick={toggleProfile}
              className="relative flex items-center gap-2 cursor-pointer"
            >
              {/* profile */}
              <div className="flex">
                <div className="size-9 rounded-full bg-green-500"></div>
              </div>

              {/* name and email */}
              <div className="flex flex-col text-start">
                <h4 className="font-semibold text-sm">Edward Gatbonton</h4>
                <span className="text-gray-500 text-xs">
                  edwardcastillogatbonton@gmail.com
                </span>
              </div>
            </button>

            {profileOpen && (
              <div className="absolute top-12 left-0  rounded-xl bg-white border border-gray-300 shadow-lg w-54 max-h-96 overflow-y-auto z-50">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-4 text-sm py-2.5 text-gray-700 hover:text-green-700 hover:bg-gray-100 transition-colors duration-150"
                >
                  <CircleUserRound
                    strokeWidth={1.5}
                    className="size-5 group-hover:text-green-700"
                  />
                  <span className="font-medium">Profile</span>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-4 text-sm py-2.5 text-gray-700 hover:text-green-700 hover:bg-gray-100 transition-colors duration-150"
                >
                  <Settings
                    strokeWidth={1.5}
                    className="size-5 group-hover:text-green-700"
                  />
                  <span className="font-medium">Settings</span>
                </Link>
                <hr className="text-gray-300" />
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-4 text-sm py-2.5  text-red-500 hover:bg-gray-100 transition-colors duration-150"
                >
                  <LogOut
                    strokeWidth={1.5}
                    className="size-5 group-hover:text-green-700"
                  />
                  <span className="font-medium">Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}
