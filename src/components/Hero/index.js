import React from "react";
import Image from "next/image";
import Hero1 from "../../../public/online-order.png";
import Hero2 from "../../../public/online-order-2.png";
import Hero3 from "../../../public/online-app.jpg";
import Hero4 from "../../../public/kfc-basket.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" grid mt-20 grid-cols-1 md:grid-cols-2 gap-4 ">
      {/* <div className=""> */}
      <div className="">
        <Image
          className=" rounded-2xl"
          src={Hero1}
          alt="hero-menu-image"
          width={650}
          // height="auto"
        />
      </div>
      <div className="">
        <Image
          className="  rounded-2xl"
          src={Hero2}
          alt="hero-menu-image"
          width={650}
          height="auto"
        />
      </div>
      <div className="">
        <Image
          className="  rounded-2xl"
          src={Hero3}
          alt="hero-menu-image"
          width={650}
          height="auto"
        />
      </div>
      <div className="flex flex-col items-center bg-[#1C1816] rounded-2xl  ">
        <Image
          className="shrink"
          src={Hero4}
          alt="hero-menu-image"
          width={260}
          height="auto"
        />
        <p className="pl-6 pt-5 text-xl pr-6 font-bold tracking-wide text-center">
          Adding 11 herbs and spices, Explore our menu and add items to your
          cart.
        </p>
        {/* <p className="text-xl text-center font-bold tracking-wide">
            
          </p> */}
        <div className="shrink text-center pt-7 ">
          <Link
            href="#"
            className="bg-[#EA002A] p-3 rounded-lg font-bold px-10 text-xl"
          >
            EXPLORE MENU
          </Link>
        </div>
      </div>
    </div>
  );
}
