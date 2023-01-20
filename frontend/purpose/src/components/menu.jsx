import React from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="flex justify-start items-center h-16 bg-gradiente-to-r from bg-fuchsia-500 to-violet-400">
      <div className="flex w-full justify-between m-4">
        <span className="sr-only">Open main menu</span>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button>
                {open ? (
                  <XMarkIcon className="w-10 h-10 text-white"></XMarkIcon>
                ) : (
                  <Bars3Icon className="w-10 h-10 text-white"></Bars3Icon>
                )}
              </Popover.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute z-10 text-white">
                  <div className="flex flex-col pl-8 pr-8 pb-10 pt-10 bg-gradiente-to-r from bg-fuchsia-500 to-violet-400 divide-y">
                    <Link className="mb-2 " to={"/"}>
                      Home
                    </Link>
                    <Link className="mb-2 " to={"/contact"}>
                      Contact
                    </Link>
                    <Link className="mb-2 " to={"/login"}>
                      Login
                    </Link>
                    <Link className="mb-2" to={"/Register"}>
                      Register
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <p className="text-2xl text-white">Purpose</p>
        <div className="flex justify-start items-center">
          <BellIcon className="w-8 h-8 text-white"></BellIcon>
          <div className="flex justify-center rounded-full w-10 h-10 bg-white">
            <p className="text-2xl text-gray-200 mt-1">U</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;