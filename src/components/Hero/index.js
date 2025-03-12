import React from "react";
import Image from "next/image";
import Hero1 from "../../../public/online-order.png";
import Hero2 from "../../../public/online-order-2.png";
import Hero3 from "../../../public/online-app.jpg";
import Hero4 from "../../../public/kfc-basket.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-row pl-[300px] mt-20">
        <div>
          <Image
            className=" rounded-2xl"
            src={Hero1}
            alt="hero-menu-image"
            width={662}
            height="auto"
          />
        </div>
        <div className="ml-5">
          <Image
            className="rounded-2xl"
            src={Hero2}
            alt="hero-menu-image"
            width={662}
            height="auto"
          />
        </div>
      </div>
      <div className="flex flex-row pl-[300px] mt-8">
        <div>
          <Image
            className=" rounded-2xl"
            src={Hero3}
            alt="hero-menu-image"
            width={662}
            height="auto"
          />
        </div>
        <div className="ml-5 bg-[#1C1816] rounded-2xl ">
          <Image
            className="ml-48 mt-4"
            src={Hero4}
            alt="hero-menu-image"
            width={260}
            height="auto"
          />
          <p className="pl-6 pt-5 text-xl pr-6 font-bold tracking-wide">
            Adding 11 herbs and spices, Explore our menu and add items
          </p>
          <p className="text-xl text-center font-bold tracking-wide">
            to your cart.
          </p>
          <div className="text-center pt-7 ">
            <Link
              href="#"
              className="bg-[#EA002A] p-3 rounded-lg font-bold px-10 text-xl"
            >
              EXPLORE MENU
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
