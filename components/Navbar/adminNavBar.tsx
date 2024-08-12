"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, Bell, User } from "lucide-react";

type NavbarProps = {};

const AdminNavbar: React.FC<NavbarProps> = () => {
  const [isInterviewDropdownOpen, setIsInterviewDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleInterviewDropdown = () => {
    setIsInterviewDropdownOpen(!isInterviewDropdownOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { name: "Home", path: "/admin" },
    { name: "Problems", path: "/admin/problems" },
    { name: "Assignments", path: "/admin/assignment" },
    { name: "Project", path: "/project" },
    { name: "Guide", path: "/admin/guide" },
  ];
  const interviewDropdownItems = [
    { name: "Quiz", path: "/admin/interview/quiz" },
    { name: "Aptitude", path: "/admin/interview/aptitude" },
    { name: "Mock Test", path: "/admin/interview/mock-test" },
    { name: "Previous Questions", path: "/admin/interview/previous-questions" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="LeetClone"
                height={40}
                width={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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
                <div className="absolute z-10 mt-3 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/notifications"
              className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Notifications
            </Link>
            <Link
              href="/signin"
              className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-orange hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              Sign In
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleInterviewDropdown}
            className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Interview
          </button>
          {isInterviewDropdownOpen && (
            <div className="bg-gray-50 px-4 py-2">
              {interviewDropdownItems.map((option) => (
                <Link
                  key={option.name}
                  href={option.path}
                  className="text-gray-800 hover:bg-gray-100 block px-2 py-2 rounded-md text-sm font-medium"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/notifications"
            className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Notifications
          </Link>
          <Link
            href="/signin"
            className="mt-2 block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-orange hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
