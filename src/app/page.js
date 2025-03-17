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
import ExploreMobile from "@/components/Explore/ExploreMobile";

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

        <div className="pl-[40px] pr-[25px] md:pl-[100px] md:pr-[50px] lg:pl-[150px] lg:pr-[100px] xl:pl-[300px] xl:pr-[240px]">
          <div className="md:hidden">
            <ExploreMobile />
          </div>

          <div className="hidden md:block">
            <Explore />
          </div>
          <Sellers />
          <Deals />
          <Hero />
        </div>
      </main>
      <Footer />
    </div>
  );
}
