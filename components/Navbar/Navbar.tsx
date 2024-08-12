"use client";
import Image from "next/image";
import Link from "next/link";
import AuthModal from "@/components/Modals/AuthModal";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import React, { useState } from "react";
import Logout from "../Buttons/Logout";

const Navbar = () => {
  const user = false;
  const [isInterviewDropdownOpen, setIsInterviewDropdownOpen] = useState(false);
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  const toggleInterviewDropdown = () => {
    setIsInterviewDropdownOpen(!isInterviewDropdownOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Problems", path: "/user/problems" },
    { name: "Assignments", path: "/user/assignment" },
    { name: "Project", path: "/user/project" },
    { name: "Guide", path: "/user/guide" },
  ];

  const interviewDropdownItems = [
    { name: "Quiz", path: "/interview/quiz" },
    { name: "Aptitude", path: "/interview/aptitude" },
    { name: "Mock Test", path: "/interview/mock-test" },
    { name: "Previous Questions", path: "/interview/previous-questions" },
  ];

  return (
    <nav className={`bg-white shadow-md `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="LeetClone"
                height={40}
                width={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-orange text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={toggleInterviewDropdown}
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-orange text-sm font-medium"
                >
                  Interview
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isInterviewDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="interview-menu"
                    >
                      {interviewDropdownItems.map((option) => (
                        <Link
                          key={option.name}
                          href={option.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/notifications"
              className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Notifications
            </Link>

            <div className="flex items-center"></div>
            {!user && (
              <Link
                href="/"
                onClick={() =>
                  setAuthModalState((prev) => ({
                    ...prev,
                    isOpen: true,
                    type: "login",
                  }))
                }
              >
                <button
                  className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
              hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
              transition duration-300 ease-in-out
              "
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </Link>
            )}
            {user && (
              <div className="cursor-pointer group relative">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div
                  className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
                >
                  <p className="text-sm">hello</p>
                </div>
              </div>
            )}
            {user && <Logout />}
            {/* <Link
              href="/signin"
              className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-orange hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              Sign In
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
