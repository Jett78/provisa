"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isOurServicesDropdownVisible, setOurServicesDropdownVisible] = useState(false);
  const [isAbroadStudyDropdownVisible, setAbroadStudyDropdownVisible] = useState(false);
  const [isTestPreparationDropdownVisible, setTestPreparationDropdownVisible] = useState(false);

  const menuItems = [
    { id: 0, label: "Who we Are" },
    { id: 1, label: "Message from M.D" },
    { id: 2, label: "Our Team" },
    { id: 3, label: "Universities" },
    { id: 4, label: "Testimonials" },
    { id: 5, label: "Company Profile" },
  ];
  const Services = [
    { id: 0, label: "Pre Departure Briefing" },
    { id: 1, label: "Visa Guidance" },
    { id: 2, label: "Finance and Scholarship" },
    { id: 3, label: "Career Counselling" },
    { id: 4, label: "Interview Preparation and Guidance" },
  ];
  const AbroadStudy = [
    { id: 0, label: "Study in Australia" },
    { id: 1, label: "Study in Canada" },
    { id: 2, label: "Study in Denmark" },
    { id: 3, label: "Study in U.K" },
    { id: 4, label: "Study in America" },
  ];
  const Test = [
    { id: 0, label: "IELTS" },
    { id: 1, label: "Japanese Language" },
    { id: 2, label: "PTE" },
  ];

  return (
    <main>
      <div className="w-[1000px] mx-auto">
        <nav>
          <ul className="flex justify-between items-center gap-2">
            <li className="cursor-pointer hover:text-[#F4310A] duration-300">Home</li>
            <li className="relative inline-block text-left" onMouseEnter={() => setDropdownVisible(true)}onMouseLeave={() => setDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               About Us
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownVisible && (
                <div
                  className="absolute z-10  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
            <li className="relative inline-block text-left" onMouseEnter={() => setOurServicesDropdownVisible(true)}onMouseLeave={() => setOurServicesDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               Our services
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isOurServicesDropdownVisible && (
                <div
                  className="absolute z-10  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {Services.map((menuItem) => (
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
            <li className="relative inline-block text-left" onMouseEnter={() => setAbroadStudyDropdownVisible(true)} onMouseLeave={() => setAbroadStudyDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               Abroad Study
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isAbroadStudyDropdownVisible && (
                <div
                  className="absolute z-10  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {AbroadStudy.map((menuItem) => (
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
            <li className="relative inline-block text-left" onMouseEnter={() => setTestPreparationDropdownVisible(true)}onMouseLeave={() => setTestPreparationDropdownVisible(false)}>
              <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 hover:text-[#F4310A] duration-300" id="menu-button" aria-expanded="true" aria-haspopup="true" >
               Test Preparation
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isTestPreparationDropdownVisible && (
                <div
                  className="absolute z-10  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {Test.map((menuItem) => (
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
            <li className="cursor-pointer hover:text-[#F4310A] duration-300">Blogs</li>
            <li className="cursor-pointer hover:text-[#F4310A] duration-300">FAQ'S</li>
            <li className="cursor-pointer hover:text-[#F4310A] duration-300">Contact Us</li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
