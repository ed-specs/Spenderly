"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  LayoutDashboard,
  WalletCards,
  Send,
  Goal,
  ArrowLeftRight,
  Settings,
  X,
  CircleUserRound,
  LogOut,
} from "lucide-react";

const NAVIGATION_LINKS = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Wallets", href: "/wallets", icon: WalletCards },
  { title: "Transfers", href: "/transfers", icon: Send },
  { title: "Budget Planning", href: "/budget-planning", icon: Goal },
  { title: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { title: "Profile", href: "/profile", icon: CircleUserRound },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function Header() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header className="xl:bg-white flex xl:flex-col gap-3 xl:gap-6 items-center xl:items-start text-sm md:text-base xl:border xl:border-gray-100 xl:rounded-2xl xl:p-6 xl:w-96 xl:self-stretch xl:fixed xl:top-5 xl:left-5 xl:h-[calc(100vh-2.5rem)] xl:border xl:border-gray-300">
        <button
          onClick={openSidebar}
          className="hover:bg-gray-100 rounded-md transition-colors xl:hidden"
          aria-label="Open menu"
        >
          <Menu strokeWidth={1.5} className="size-6" />
        </button>

        <div className="flex flex-col gap-6 w-full h-full">
          <div className="flex items-center gap-4">
            {/* logo here */}
            <div className="hidden xl:flex size-12 bg-green-700 rounded-full"></div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-green-700">Spenderly</h1>
              <p className="hidden xl:flex text-gray-500 font-semibold text-base">
                Save.Track.Manage
              </p>
            </div>
          </div>

          <div className=" relative hidden xl:flex xl:flex-col gap-1 hidden h-full">
            <p className="text-gray-500 font-semibold text-sm">Menu</p>

            {/* Navigation */}
            <nav className="flex flex-col flex-1">
              {NAVIGATION_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={closeSidebar}
                    className={`flex items-center gap-4 px-4 py-2.5 ${isActive ? "bg-green-700 text-white hover:bg-green-800" : "text-gray-700 hover:text-green-700 hover:bg-gray-100"} rounded-lg transition-colors duration-150 `}
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="size-5 group-hover:text-green-700"
                    />
                    <span className="font-medium">{link.title}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex">
              <button className="cursor-pointer bottom-0 left-0 w-full flex items-center gap-4 px-4 py-2.5 text-gray-700 hover:text-green-700 hover:bg-gray-100 rounded-lg transition-colors duration-150">
                <LogOut strokeWidth={1.5} className="size-5 text-red-500" />
                <span className="font-medium text-red-500">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay (smaller screens only*/}
      <div
        className={`
          fixed inset-0 z-50 bg-black/20 backdrop-blur-sm
          transition-opacity duration-300
          ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeSidebar}
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-72 lg:w-96 h-full bg-white shadow-xl px-7 py-6 transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking sidebar
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-md transition-colors"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <X strokeWidth={1.5} className="size-6" />
          </button>

          {/* Brand */}
          <div className="flex flex-col mb-6">
            <h1 className="text-2xl font-bold text-green-700">Spenderly</h1>
            <p className="text-gray-500 font-semibold text-sm">
              Save.Track.Manage
            </p>
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <p className="text-gray-500 font-semibold text-sm">Menu</p>

            {/* Navigation */}
            <nav className="flex flex-col flex-1">
              {NAVIGATION_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={closeSidebar}
                    className={`flex items-center gap-4 px-4 py-2.5 ${isActive ? "bg-green-700 text-white hover:bg-green-800" : "text-gray-700 hover:text-green-700 hover:bg-gray-100"} rounded-lg transition-colors duration-150`}
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="size-5 group-hover:text-green-700"
                    />
                    <span className="font-medium">{link.title}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto pt-4">
              <button className="cursor-pointer w-full flex items-center gap-4 px-4 py-2.5 text-gray-700 hover:text-green-700 hover:bg-gray-100 rounded-lg transition-colors duration-150">
                <LogOut strokeWidth={1.5} className="size-5 text-red-500" />
                <span className="font-medium text-red-500">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
