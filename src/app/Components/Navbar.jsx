"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const menuItems = [
    { id: 0, label: "Edit" },
    { id: 1, label: "Duplicate" },
    { id: 2, label: "Archive" },
    { id: 3, label: "Move" },
    { id: 4, label: "Share" },
    { id: 5, label: "Add to favorites" },
    { id: 6, label: "Delete" }
  ];

  return (
    <main>
      <div className="w-[1000px] mx-auto">
        <nav>
          <ul className="flex justify-between items-center gap-2">
            <li>Home</li>
            <li className="relative inline-block text-left" onMouseEnter={() => setDropdownVisible(true)}onMouseLeave={() => setDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               About Us
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownVisible && (
                <div
                  className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {menuItems.map((menuItem) => (
                    <a
                      key={menuItem.id}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-900 hover:text-white duration-300"
                      role="menuitem"
                    >
                      {menuItem.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li className="relative inline-block text-left" onMouseEnter={() => setDropdownVisible(true)}onMouseLeave={() => setDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               Our services
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownVisible && (
                <div
                  className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {menuItems.map((menuItem) => (
                    <a
                      key={menuItem.id}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-900 hover:text-white duration-300"
                      role="menuitem"
                    >
                      {menuItem.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li className="relative inline-block text-left" onMouseEnter={() => setDropdownVisible(true)}onMouseLeave={() => setDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               Abroad Study
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownVisible && (
                <div
                  className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {menuItems.map((menuItem) => (
                    <a
                      key={menuItem.id}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-900 hover:text-white duration-300"
                      role="menuitem"
                    >
                      {menuItem.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li className="relative inline-block text-left" onMouseEnter={() => setDropdownVisible(true)}onMouseLeave={() => setDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               Test Preparation
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownVisible && (
                <div
                  className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {menuItems.map((menuItem) => (
                    <a
                      key={menuItem.id}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-900 hover:text-white duration-300"
                      role="menuitem"
                    >
                      {menuItem.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li>Blogs</li>
            <li>FAQ'S</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
