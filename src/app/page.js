import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Explore from "@/components/Explore";
import Link from "next/link";
import Sellers from "@/components/Sellers";
import Deals from "@/components/Deals";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <ImageSlider />
        <div className="flex items-center justify-center mt-4">
          <Link
            href="#"
            className="bg-[#EA002A] p-1 rounded-md font-semibold px-96 text-base"
          >
            REORDER
          </Link>
        </div>
        <div className="pl-[300px] pr-[250px]">
          <Explore />
          <Sellers />
          <Deals />
          <Hero />
        </div>
      </main>
      <Footer />
    </div>
  );
}
