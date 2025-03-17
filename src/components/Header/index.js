import React from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import logoImage from "../../../public/logo.webp";
import deliveryImage from "../../../public/delivery.png";
import pickupImage from "../../../public/pickup.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <nav className="fixed z-10 top-0 bg-[#0A0A0A] mx-auto items-center justify-between">
        <div className="flex flex-row">
          {/* <nav> */}
          <div className="">
            <Image
              src={logoImage}
              alt="kfc-logo"
              width={100}
              height="auto"
              placeholder="blur"
              className="mt-10 ml-8 md:ml-24 lg:ml-48 mb-7"
            />
          </div>
          <div className="flex flex-row ml-40 mt-16 lg:mt-11">
            <div className="">
              <Link
                href="#"
                className="bg-[#1C1816] p-2.5 px-8 rounded-lg font-bold tracking-wide text-sm border-2 border-[#EA002A]"
              >
                {/* <Image
              src={deliveryImage}
              width={30}
              height="auto"
              alt="delivery-image"
            /> */}
                DELIVERY
              </Link>
            </div>
            <div className="">
              <Link
                href="#"
                className="bg-[#1C1816] ml-5 p-2.5 px-8 rounded-lg font-bold tracking-wide text-sm"
              >
                {/* <Image
              src={pickupImage}
              width={30}
              height="auto"
              alt="delivery-image"
            /> */}
                PICKUP
              </Link>
            </div>
          </div>
          <div className="sm:ml-[100px] sm:mr-6 md:ml-[155px] md:mr-40 lg:ml-[250px] xl:ml-[720px] mt-11 2xl:mr-96">
            <Link
              href="#"
              className="bg-[#EA002A] p-2.5 rounded-lg font-bold px-3.5 text-sm "
            >
              LOGIN
            </Link>
          </div>
          {/* </nav> */}
        </div>
      </nav>
    </header>
  );
}
