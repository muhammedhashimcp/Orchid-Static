import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";


const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Overview", href: "/overview", current: false },
  { name: "Master Plan", href: "/master-plan", current: false },
  { name: "Location", href: "/location", current: false },
  { name: "Price", href: "/price", current: false },
  { name: "Amenities", href: "/amenities", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-zinc-50 sticky top-0 z-50">
      {({ open }) => ( 
        <section >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-display">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center text-white text-2xl font-semibold">
                  {/* Logo */}
                  {/* <img src="" alt="Logo" className="w-40 h-20"/> */}
                  <h1 className="text-2xl font-display text-slate-900">ORCHID NIRVANA 3.0</h1>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? " text-cyan-800 font-semibold hover:bg-black hover:bg-opacity-5 hover:text-sky-900"
                          : "text-cyan-800 hover:bg-black hover:bg-opacity-5 hover:text-sky-900 font-semibold",
                        "px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-cyan-800 font-semibold hover:bg-black hover:bg-opacity-5 hover:text-sky-900"
                      : "text-cyan-800 font-semibold hover:bg-black hover:bg-opacity-5 hover:text-sky-900",
                    "block px-3 py-2 rounded-md text-base font-semibold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
};

export default Navbar;