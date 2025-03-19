import React from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import logoImage from "../../../public/logo.webp";
import sidebarImage from "../../../public/sidebar-icon.png";
import deliveryImage from "../../../public/delivery.png";
import pickupImage from "../../../public/pickup.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" fixed z-10 top-0 w-full bg-[#0A0A0A] ">
      <nav className="xl:mx-32 2xl:mx-64">
        <div className="mt-4 mx-4 sm:mx-12 sm:mt-8 sm:flex sm:justify-between lg:mt-12 lg:flex-none">
          <div className="lg:flex">
            <div className="flex justify-between lg:flex-none">
              <button>
                <Image
                  src={sidebarImage}
                  alt="sidebar-icon"
                  width={30}
                  height="auto"
                  className="sm:mr-5"
                />
              </button>
              <Image
                src={logoImage}
                alt="kfc-logo"
                placeholder="blur"
                className="w-20 h-7"
              />
            </div>
            <div className="hidden lg:block lg:ml-12">
              <Link
                href="#"
                className="bg-[#1C1816] p-2.5 px-5 lg:px-12 rounded-lg font-bold tracking-wide text-sm border-2 border-[#EA002A]"
              >
                DELIVERY
              </Link>
              <Link
                href="#"
                className="bg-[#1C1816] ml-5 p-2.5 px-5 lg:px-12 rounded-lg font-bold tracking-wide text-sm"
              >
                PICKUP
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <Link
              href="#"
              className="bg-[#EA002A] p-2.5 rounded-lg font-bold px-3.5 text-sm "
            >
              LOGIN
            </Link>
          </div>
        </div>
        <div className="">
          <div className="flex justify-evenly mx-10 mt-6 mb-2 sm:justify-center sm:mx-0 sm:mt-4 lg:hidden">
            <Link
              href="#"
              className="bg-[#1C1816] p-2.5 px-5 sm:px-9 rounded-lg font-bold tracking-wide text-sm border-2 border-[#EA002A]"
            >
              DELIVERY
            </Link>
            <Link
              href="#"
              className="bg-[#1C1816] ml-5 p-2.5 px-5 sm:px-9 rounded-lg font-bold tracking-wide text-sm"
            >
              PICKUP
            </Link>
          </div>
          <div className="hidden ">
            <Link
              href="#"
              className="bg-[#EA002A] p-2.5 rounded-lg font-bold px-3.5 text-sm "
            >
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
