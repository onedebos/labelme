import Image from "next/image";
import { Fragment } from "react";
import Logo from "../../public/logos/logo2.svg";
import Bar from "../../public/bars.png";
import UserIcon from "../../public/user_icon.png";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import MobileMenuIcon from "../../public/icons/mobile-menu-icon.svg";
import ChevronDown from "../../public/icons/chevron-down.svg";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Menu = ({ isLoggedIn }) => {
  return (
    <Popover className={"w-full"}>
      {/* Desktop */}
      <ul className="grid grid-cols-3 justify-items-center items-center mt-2">
        <li className="col-span-1">
          <Image src={Logo} layout="intrinsic" priority={true} />
        </li>

        {/* Mobile Menu Icon */}
        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
            <span className="sr-only">Open menu</span>
            <Image
              layout="intrinsic"
              priority={true}
              src={MobileMenuIcon}
              alt="moni mobile menu icon"
            />
          </Popover.Button>
        </div>

        {/* Search Bar */}
        <li className="col-span-1 w-full mt-1 ml-10">
          <div className="flex items-start justify-between bg-white px-2 mx-5">
            <div className="relative mb-4 ml-3 max-w-xl flex-1">
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
        </li>
        {/* End of Search Bar */}

        {/* Start Creating Btn */}
        <li className="col-span-1 flex items-center gap-2">
          <button>Start Creating</button>

          {/* User profile and cart */}
          <Popover.Group as="nav" className="hidden space-x-1 lg:col-span-1">
            <Popover className="relative col-span-1">
              {({ open }) => (
                <>
                  {/* <Popover.Div
                    className={classNames(
                      "border b-1 rounded-full flex gap-2 py-2 px-2"
                    )}
                  > */}
                  <Popover.Button
                    className={classNames(
                      "group inline-flex items-center rounded-md text-base text-gray-900 hover:text-gray-900 focus:outline-none"
                    )}
                  >
                    hjhjhjhj
                    <span className={`mr-2 `}>lol</span>
                    <Image
                      priority={true}
                      layout="intrinsic"
                      src={ChevronDown}
                      alt="moni dropdown icon"
                    />
                    {/* <Image
                      src={Bar}
                      layout="intrinsic"
                      height={100}
                      width={23}
                      priority={true}
                    />
                    <Image
                      src={UserIcon}
                      height={2}
                      width={25}
                      layout="intrinsic"
                      priority={true}
                    /> */}
                  </Popover.Button>
                </>
              )}

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="lg:-translate-x-1/5 absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 lg:ml-0">
                  <div className="overflow-hidden rounded-r-lg rounded-bl-lg">
                    <div className="relative bg-white">
                      <div className="bg-moni-orange-lightest col-span-2 flex flex-col justify-center">
                        <Link href="">
                          <a
                            className={`text-md pl-4 pb-3 transition-all duration-200 ease-in-out hover:text-moni-orange
                                  }`}
                          >
                            bikell
                          </a>
                        </Link>

                        <Link href="">
                          <a
                            className={`text-md pl-4 pb-3 transition-all duration-200 ease-in-out hover:text-moni-orange  text-moni-orange" : ""
                                  }`}
                          >
                            posss
                          </a>
                        </Link>

                        <Link href="">
                          <a
                            className={`text-md pl-4 pb-3 transition-all duration-200 ease-in-out hover:text-moni-orange
                                  }`}
                          >
                            landd
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>{" "}
          </Popover.Group>
        </li>

        {/* END Start Creating Btn */}
      </ul>
      {/* End of Desktop */}

      {/* MOBILE */}

      <Popover className={"border bg-white"}>
        <div className="mx-auto bg-white px-4 sm:px-6 md:mx-10 2xl:mx-40">
          <div className="flex items-center justify-between py-2 md:justify-between md:space-x-10">
            <div className="flex w-28 justify-start lg:w-0 lg:flex-1">
              <span className="sr-only cursor-pointer">Icon</span>
              <Link href={""}>
                <Image
                  priority={true}
                  src={Logo}
                  alt="LabelMe logo"
                  layout="intrinsic"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <span className="sr-only">Open menu</span>
                <Image
                  layout="intrinsic"
                  priority={true}
                  src={MobileMenuIcon}
                  alt="moni mobile menu icon"
                />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
              <Link href={""}>sssd</Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        "group inline-flex items-center rounded-md text-base text-gray-900 hover:text-gray-900 focus:outline-none"
                      )}
                    >
                      <span className={`mr-2 `}>lol</span>
                      <Image
                        priority={true}
                        layout="intrinsic"
                        src={ChevronDown}
                        alt="moni dropdown icon"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="lg:-translate-x-1/5 absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 lg:ml-0">
                        <div className="overflow-hidden rounded-r-lg rounded-bl-lg">
                          <div className="relative bg-white">
                            <div className="bg-moni-orange-lightest col-span-2 flex flex-col justify-center">
                              <Link href="">bikell</Link>

                              <Link href="">posss</Link>

                              <Link href="">
                                {/* <a
                                  className={`text-md pl-4 pb-3 transition-all duration-200 ease-in-out hover:text-moni-orange
                                  }`}
                                > */}
                                landd
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        "group inline-flex items-center rounded-md text-base text-gray-900 hover:text-gray-900 focus:outline-none"
                      )}
                    >
                      <span
                        className={`mr-2 
                        }`}
                      >
                        commmss
                      </span>
                      <Image
                        priority={true}
                        layout="intrinsic"
                        src={ChevronDown}
                        alt="moni dropdown icon"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="lg:-translate-x-1/5 absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 lg:ml-0">
                        <div className="overflow-hidden rounded-r-lg rounded-bl-lg">
                          <div className="relative bg-white">
                            <div className="bg-moni-orange-lightest col-span-2 flex flex-col justify-center">
                              <Link href="">
                                <a
                                  className={`text-md pl-4 pb-3 transition-all duration-200 ease-in-out hover:text-moni-orange
                                  }`}
                                >
                                  posBal
                                </a>
                              </Link>

                              <Link href="">
                                <a
                                  className={`text-md pl-4 pb-3 transition-all duration-200 ease-in-out hover:text-moni-orange
                                  }`}
                                >
                                  This iss
                                </a>
                              </Link>
                              <Link href="">
                                <a
                                  className={`text-md pl-4 pb-3 transition-all duration-200 ease-in-out hover:text-moni-orange text-moni-orange" : ""
                                  }`}
                                >
                                  salesss
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        "group inline-flex items-center rounded-md text-base text-gray-900 hover:text-gray-900 focus:outline-none"
                      )}
                    >
                      <div className="flex items-center justify-center">
                        <p className="text-moni-orange text-opacity-60">
                          userName
                        </p>
                      </div>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-max -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-r-lg rounded-bl-lg">
                          <div className="justify-center bg-white px-2 py-2 sm:gap-4 sm:pb-3">
                            <Link href="" locale="en">
                              <a
                                className={`transition-all duration-200 ease-in-out hover:text-moni-orange
                                }`}
                              >
                                enflish
                              </a>
                            </Link>
                          </div>

                          <div className="justify-center bg-white p-1 px-2 py-1 sm:gap-4">
                            <Link href="" locale="fr">
                              <a
                                className={`transition-all duration-200 ease-in-out hover:text-moni-orange
                                }`}
                              >
                                french
                              </a>
                            </Link>
                          </div>

                          <div className="justify-center bg-white px-2 py-2 sm:gap-4 sm:pb-3">
                            <Link href="">
                              <a
                                className={`transition-all duration-200 ease-in-out hover:text-moni-orange
                                }`}
                              >
                                settings
                              </a>
                            </Link>
                          </div>

                          <div className="justify-center bg-white px-2 py-2 sm:gap-4 sm:p-1">
                            <button
                              className="transition-all duration-200 ease-in-out hover:text-moni-orange"
                              onClick={() => console.log("out")}
                            >
                              <span className="flex items-center text-gray-400">
                                <span className="ml-1">Logout</span>
                                <svg
                                  class="ml-2 -mr-1 h-5 w-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* Mobile Menu */}
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-2 pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      priority={true}
                      src={Logo}
                      alt="LabelMe Logo"
                      width="120"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-3 px-4 pb-5">
                  <nav>
                    <div className="mt-4 flex flex-col gap-y-2">
                      <Link href="">
                        <a
                          className={`mr-2 text-base text-gray-900 hover:text-gray-900"
                          }`}
                        >
                          sdd
                        </a>
                      </Link>

                      <div className="flex text-sm">
                        <span>Language: </span>
                        <Link href="" locale="en">
                          <a
                            className={`ml-2 transition-all duration-200 ease-in-out hover:text-moni-orange 
                            }`}
                          >
                            English
                          </a>
                        </Link>
                        <Link href="" locale="fr">
                          <a
                            className={`ml-2 cursor-pointer transition-all duration-200 ease-in-out hover:text-moni-orange text-moni-orange
                            }`}
                          >
                            French
                          </a>
                        </Link>
                      </div>

                      <div className="flex text-sm">
                        <Link href="">
                          <a
                            className={`ml-2 transition-all duration-200 ease-in-out hover:text-moni-orange 
                            }`}
                          >
                            hyhy
                          </a>
                        </Link>
                      </div>

                      <div className="mt-4 bg-white">
                        <button
                          className="transition-all duration-200 ease-in-out hover:text-moni-orange"
                          onClick={() => console.log("sign out")}
                        >
                          <span className="flex items-center text-moni-orange-2">
                            <span>Logout</span>
                            <svg
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className={`space-y-6 py-6 px-10`}>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="">
                    <a
                      className={`text-md transition-all duration-200 ease-in-out hover:text-moni-orange 
                      }`}
                    >
                      ss
                    </a>
                  </Link>
                  <Link href="">
                    <a
                      className={`text-md transition-all duration-200 ease-in-out hover:text-moni-orange 
                      }`}
                    >
                      sc
                    </a>
                  </Link>
                  <Link href="">
                    <a
                      className={`text-md transition-all duration-200 ease-in-out hover:text-moni-orange`}
                    >
                      sed
                    </a>
                  </Link>
                  <Link href="">
                    <a className="">sef</a>
                  </Link>

                  <Link href="">
                    <a className="">seg</a>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover>
  );
};

export default Menu;
