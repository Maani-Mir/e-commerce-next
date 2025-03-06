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

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* <div className="main-slider"> */}
        <Slider
          imageList={SLIDER_IMAGES}
          width={1915}
          height={719}
          showDotControls={false}
        />
        <div className={styles.reorder__button}>
          <Link href="#" className={styles.reorder__link}>
            Reorder
          </Link>
        </div>
        <Explore />
        <Sellers />
        <Deals />
      </main>
      <Footer />
    </div>
  );
}
