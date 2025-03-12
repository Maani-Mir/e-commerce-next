"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SLIDER_IMAGES from "../constants/image-sliders";
import Slider from "@madzadev/image-slider";
import Explore from "@/components/Explore";
import "@madzadev/image-slider/dist/index.css";
import Link from "next/link";
import Sellers from "@/components/Sellers";
import Deals from "@/components/Deals";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Slider
          imageList={SLIDER_IMAGES}
          width={1915}
          height={719}
          showDotControls={false}
        />
        <div className="flex items-center justify-center mt-4">
          <Link
            href="#"
            className="bg-[#EA002A] p-1 rounded-md font-semibold px-96 text-base"
          >
            REORDER
          </Link>
        </div>
        <Explore />
        <Sellers />
        <Deals />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
