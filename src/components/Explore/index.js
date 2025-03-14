"use client";
import React from "react";
import styles from "../../styles/explore.module.css";
import EXPLORE_MENU from "@/constants/images-explore";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExploreItem from "./explore-item";

export default function Explore() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (isLeft) => {
    if (scrollRef.current) {
      const scrollAmount = 290;
      scrollRef.current.scrollBy({
        left: isLeft ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  });

  return (
    <div className="mt-12">
      <div className="">
        <h2 className="text-3xl -tracking-widest font-sans">EXPLORE MENU</h2>
        <div className="border-[#EA002A] border-b-4 w-20 ml-0.5 pt-0.5"></div>
      </div>

      <div className="relative mt-12">
        <button
          className={`absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-red-700 rounded-full transition ${
            canScrollLeft ? "bg-[#AF001F] hover:bg-red-600" : "bg-[#3B000B]"
          }`}
          onClick={() => scroll(true)}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="text-black" />
        </button>
        <div
          ref={scrollRef}
          className="flex space-x-9 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {EXPLORE_MENU.map(({ title, imgURL }, index) => {
            return <ExploreItem key={index} title={title} image={imgURL} />;
          })}
        </div>
        <button
          className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full transition ${
            canScrollRight ? "bg-[#AF001F] hover:bg-red-600" : "bg-[#3B000B]"
          }`}
          onClick={() => scroll(false)}
          disabled={!canScrollRight}
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
    </div>
  );
}
