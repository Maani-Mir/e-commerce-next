"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import sidebarImage from "../../../public/sidebar-icon.png";
import { Menu } from "lucide-react";

import Link from "next/link";

import ExploreIcon from "../../../public/explore-menu-icon.jpg";
import StoreIcon from "../../../public/store-locator-icon.jpg";
import TrackIcon from "../../../public/track-order-icon.jpg";
import ToggleTheme from "../ToggleTheme";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const setSidebarState = useRef(setShowSidebar);
  setShowSidebar.current = setShowSidebar;

  const handleClickOutside = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarState.current(false);
    }
  }, []);

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.documentElement.style.overflow = "";
    };
  }, [showSidebar, handleClickOutside]);

  return (
    <>
      <button onClick={() => setShowSidebar((prev) => !prev)}>
        <Menu className="dark:text-white text-black size-7" />
      </button>
      {showSidebar ? (
        <div className="flex fixed inset-0 bg-black/50 z-30">
          <div
            ref={sidebarRef}
            className="z-30 fixed top-0 left-0 bg-[#F1F3F6] dark:bg-[#1C1816] w-[298px] h-full pt-7 pl-4 ease-in-out duration-300 pr-4"
          >
            <Link
              href="#"
              className="bg-[#EA002A] p-2 rounded-sm font-bold px-2.5 text-sm text-white"
            >
              LOGIN
            </Link>
            <ToggleTheme />
            <ul className="pt-4 pb-3 mt-6 font-medium border-t border-[#6b6b6b]">
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0.5"
                >
                  <Image src={StoreIcon} alt="store-icon" width={28} />
                  <p className="ms-3 text-lg">Store Locator</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0.5"
                >
                  <Image src={TrackIcon} alt="store-icon" width={28} />

                  <p className="ms-3 text-lg">Track Order</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0.5"
                >
                  <Image src={ExploreIcon} alt="store-icon" width={28} />

                  <p className="ms-3 text-lg">Explore Menu</p>
                </Link>
              </li>
            </ul>
            <ul className="pt-4 mt-4 font-medium border-t border-[#6b6b6b]">
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 ease-in-out hover:pl-0 hover:bg-[#9E9E9E] text-black dark:text-white"
                >
                  <p className="ms-3 text-lg ">About Us</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 ease-in-out translate-x-0 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0"
                >
                  <p className="ms-3 text-lg">FeedBack</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0"
                >
                  <p className="ms-3 text-lg">Terms & Conditions</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0"
                >
                  <p className="ms-3 text-lg">Privacy Policy</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0"
                >
                  <p className="ms-3 text-lg">Contact Us</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0"
                >
                  <p className="ms-3 text-lg">Mitao Bhook</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0"
                >
                  <p className="ms-3 text-lg">Mitao Bhook - Scholarship</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex p-2.5 transition-all duration-200 hover:bg-[#9E9E9E] text-black dark:text-white hover:pl-0"
                >
                  <p className="ms-3 text-lg">Careers</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="fixed z-20 top-0 left-0 bg-black/50 w-[14vw] h-full p-10 ease-in-out duration-300 -translate-x-full"></div>
        </div>
      )}
    </>
  );
}
