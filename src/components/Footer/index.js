import React from "react";
import styles from "../../styles/footer.module.css";
import Image from "next/image";
import logoImage from "../../../public/logo.webp";
import instaImage from "../../../public/instagram.png";
import fbImage from "../../../public/facebook.png";
import ytImage from "../../../public/youtube.png";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1816]">
      <div className=" mt-16">
        <div className="flex items-center justify-center pt-12 ">
          <Image
            src={logoImage}
            alt="kfc-logo"
            width={100}
            height="auto"
            placeholder="blur"
          />
          <div className="p-2 ml-4 rounded-full bg-white">
            <Link href="#">
              <Image
                src={ytImage}
                alt="youtube-logo"
                width={30}
                height="auto"
              />
            </Link>
          </div>
          <div className="p-2 ml-4 rounded-full bg-white">
            <Link href="#">
              <Image
                src={instaImage}
                alt="youtube-logo"
                width={30}
                height="auto"
              />
            </Link>
          </div>
          <div className="p-2 ml-4 rounded-full bg-white">
            <Link href="#">
              <Image
                src={fbImage}
                alt="youtube-logo"
                width={30}
                height="auto"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-12 pl-[300px] pr-[260px]">
          <div className="pl-8">
            <div className="mb-3">
              <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
                About Us
              </Link>
            </div>
            <div className="mb-3">
              <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
                Mitao Bhook
              </Link>{" "}
            </div>
            <div className="mb-3">
              <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
                Mitao Bhook - Scholarship
              </Link>{" "}
            </div>
            <div className="mb-3">
              <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
                Privacy Policy
              </Link>{" "}
            </div>
            <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
              Careers
            </Link>
          </div>
          <div className="pl-8">
            <div className="mb-3">
              <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
                Contact Us
              </Link>
            </div>
            <div className="mb-3">
              <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
                Store Locator
              </Link>
            </div>
            <div className="mb-3">
              <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
                Track Order
              </Link>
            </div>
          </div>
          <div className="pl-8">
            <Link href="#" className="text-xl pb-0.5 hover:text-[#EA002A] ">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="mt-16 font-semibold ml-[300px] pb-10">
          2025 KFC. All rights reserved
        </div>
      </div>
    </footer>
  );
}
