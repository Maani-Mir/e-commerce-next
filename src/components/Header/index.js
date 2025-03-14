import React from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import logoImage from "../../../public/logo.webp";
import deliveryImage from "../../../public/delivery.png";
import pickupImage from "../../../public/pickup.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="fixed z-10 top-0 bg-[#0A0A0A]">
        <div className="flex flex-row">
          {/* <nav> */}
          <div className={styles.header__logo}>
            <Image
              src={logoImage}
              alt="kfc-logo"
              width={100}
              height="auto"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-row">
            <div className="pl-5 pt-11">
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
            <div className="pl-4 pt-11">
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
          <div className="ml-[800px] justify-end pt-11 pr-80">
            <Link
              href="#"
              className="bg-[#EA002A] p-2.5 rounded-lg font-bold px-3.5 text-sm"
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
