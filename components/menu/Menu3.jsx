import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logos/logo2.svg";
import { FaBars } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";

const Menu = ({ signedIn = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignedInDropdown, setShowSignedInDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowSignedInDropdown(!showSignedInDropdown);
  };

  const showSignedInDropdownMenu = () => {
    setShowSignedInDropdown(!showSignedInDropdown);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={""}>
              <Image
                priority={true}
                src={Logo}
                alt="LabelMe logo"
                layout="intrinsic"
                width={"180"}
                height={"20%"}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="relative mb-4 flex-1 max-w-lg mt-2">
              <input
                type="text"
                id="search"
                className="w-full max-w-lg items-center rounded-full border border-gray-300 shadow-md bg-gray-50 p-2 pl-3 text-sm text-gray-900 focus:border-moni-orange focus:ring-moni-orange py-3"
                placeholder="What do you want to launch today?"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#5A0912" />
                  <path
                    d="M24.5 22H23.71L23.43 21.73C24.0549 21.004 24.5117 20.1488 24.7675 19.2256C25.0234 18.3025 25.072 17.3342 24.91 16.39C24.44 13.61 22.12 11.39 19.32 11.05C18.3356 10.9255 17.3358 11.0278 16.397 11.3491C15.4582 11.6704 14.6054 12.2022 13.9038 12.9038C13.2022 13.6054 12.6704 14.4583 12.3491 15.397C12.0277 16.3358 11.9254 17.3356 12.05 18.32C12.39 21.12 14.61 23.44 17.39 23.91C18.3341 24.0721 19.3024 24.0234 20.2256 23.7676C21.1487 23.5117 22.0039 23.055 22.73 22.43L23 22.71V23.5L27.25 27.75C27.66 28.16 28.33 28.16 28.74 27.75C29.15 27.34 29.15 26.67 28.74 26.26L24.5 22ZM18.5 22C16.01 22 14 19.99 14 17.5C14 15.01 16.01 13 18.5 13C20.99 13 23 15.01 23 17.5C23 19.99 20.99 22 18.5 22Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* NOT SIGNED IN STATE */}
          {!signedIn && (
            <div className="hidden md:block">
              <div className="ml-10 flex justify-end items-baseline space-x-4">
                <Link
                  className="text-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Start Creating
                </Link>
                <Link
                  className="text-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Sign Up
                </Link>
                <Link
                  className="text-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  href="/contact"
                >
                  Sign in
                </Link>
              </div>
            </div>
          )}

          {/* SIGNED IN STATE */}
          {signedIn && (
            <div className="hidden md:block relative">
              <div className="ml-10 flex justify-end items-center space-x-8">
                <Link
                  className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Start Creating
                </Link>
                <div
                  onClick={showSignedInDropdownMenu}
                  className="ml-10 flex justify-end items-baseline space-x-4 cursor-pointer relative"
                >
                  <div className="border border-1 border-gray-300 px-3 py-2 rounded-full flex justify-between space-x-2 ">
                    <FaBars className="text-labelme-wine mt-1" size={"1.2em"} />
                    <HiUserCircle
                      className="text-labelme-wine"
                      size={"1.5em"}
                    />
                  </div>
                </div>
              </div>

              {/* DROPDOWN WHEN USER IS SIGNED IN - DESKTOP */}
              {showSignedInDropdown && (
                <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg flex flex-col w-full -mr-10">
                  <Link
                    className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Orders
                  </Link>
                  <Link
                    className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Settings
                  </Link>
                  <Link
                    className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Cart
                  </Link>

                  <div className="border-t border-1 mt-4 py-3">
                    <Link
                      className="text-gray-900 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
                      href="/"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MOBILE MENU */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-labelme-wine hover:text-labelme-wine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

      {/* NOT SIGNED IN STATE MOBILE */}
      {!signedIn && (
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-1 border flex flex-col">
            <Link
              className="text-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Start Creating
            </Link>
            <Link
              className="text-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Sign Up
            </Link>
            <Link
              className="text-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              href="/contact"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}

      {/* SIGNED IN MOBILE */}
      {signedIn && (
        <div
          className={`${showSignedInDropdown ? "block" : "hidden"} md:hidden`}
        >
          <div className="pt-2 pb-3 space-y-1 sm:px-3 border-1 border flex flex-col">
            <Link
              className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Orders
            </Link>
            <Link
              className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Settings
            </Link>
            <Link
              className="text-gray-800 hover:text-labelme-wine px-3 py-2 rounded-md text-sm font-medium pb-8"
              href="/"
            >
              Cart
            </Link>

            <div className="border-t w-full border-1 border-gray-300 px-3 py-2 pb-3">
              <Link
                className="text-gray-900 hover:text-labelme-wine px-0 py-2 pb-4 rounded-md text-sm font-medium mt-2"
                href="/"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
