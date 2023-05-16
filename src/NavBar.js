import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Me", href: "/aboutme", current: true },
  { name: "Projects", href: "/projects", current: false },
  {
    name: "Resume",
    href: "https://github.com/katherineyuneman/portfolio/blob/3936d26205c18e462741bba9519bd8386693cbbd/public/Katherine%20Yuneman%20-%20Technical%20Resume%202023-04-28.pdf",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-white drop-shadow-lg fixed w-full rounded-3xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <h1 className="block lg:hidden text-white font-display text-5xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pt-4 box-border h-20 w-auto text-center align-text-top">
                   K
                </h1>
                <h1 className="hidden lg:block text-white font-display text-5xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pt-4 box-border h-20 w-auto text-center align-text-top">
                   K
                </h1> */}
                  <a href="/aboutme" className="-m-1.5 p-1.5">
                    <img
                      className="block h-20 w-auto rounded-full sm:hidden"
                      src="https://github.com/katherineyuneman/portfolio/blob/master/public/K.png?raw=true"
                      alt="Katherine Yuneman"
                    />
                    <img
                      className="hidden h-20 w-auto rounded-full sm:block"
                      src="https://github.com/katherineyuneman/portfolio/blob/master/public/K.png?raw=true"
                      alt="Katherine Yuneman"
                    />
                  </a>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden flex space-x-4 flex items-center pr-2 sm:block">
                    {navigation.map((item) => (
                      <Link
                        className={classNames(
                          item.current
                            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Email Me</span>
                  <Link to="/contact">
                    <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default NavBar;
