import React from "react";
import styles from "../../styles/footer.module.css";
import Image from "next/image";
import logoImage from "../../../public/logo.webp";
import instaImage from "../../../public/instagram.png";
import fbImage from "../../../public/facebook.png";
import ytImage from "../../../public/youtube.png";
import appStoreImage from "../../../public/app-store.png";
import googlePlayImage from "../../../public/google-play.png";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F1F3F6] dark:bg-[#1C1816]">
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
        <div className="grid grid-cols-1 md:grid-cols-4 pt-12 md:pr-[50px] lg:pl-[150px] lg:pr-[100px] xl:pl-[300px] xl:pr-[250px]">
          <div className="pl-8">
            <div className="mb-3">
              <Link
                href="#"
                className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
              >
                About Us
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="#"
                className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
              >
                Mitao Bhook
              </Link>{" "}
            </div>
            <div className="mb-3">
              <Link
                href="#"
                className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
              >
                Mitao Bhook - Scholarship
              </Link>{" "}
            </div>
            <div className="mb-3">
              <Link
                href="#"
                className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
              >
                Privacy Policy
              </Link>{" "}
            </div>
            <Link
              href="#"
              className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
            >
              Careers
            </Link>
          </div>
          <div className="pl-8">
            <div className="mb-3">
              <Link
                href="#"
                className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
              >
                Contact Us
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="#"
                className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
              >
                Store Locator
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="#"
                className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
              >
                Track Order
              </Link>
            </div>
          </div>
          <div className="pl-8 pb-5 md:pb-0">
            <Link
              href="#"
              className=" text-black dark:text-white text-xl pb-0.5 transition ease-in-out duration-300 hover:text-[#EA002A] "
            >
              Terms & Conditions
            </Link>
          </div>
          <div className="flex pl-5 md:pl-0">
            <div className="mr-5">
              <Link href="#">
                <Image
                  src={appStoreImage}
                  alt="Download on App Store"
                  width={200}
                  height="auto"
                  className=""
                />
              </Link>
            </div>
            <div className="mt-0.5">
              <Link href="#">
                <Image
                  src={googlePlayImage}
                  alt="Get it on Play Store"
                  width={200}
                  height="auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-black dark:text-white mt-16 font-semibold pl-4 md:ml-[300px] pb-10 inline-block">
          2025 KFC. All rights reserved
        </div>
      </div>
    </footer>
  );
}
