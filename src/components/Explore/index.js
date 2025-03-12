"use client";
import React from "react";
import styles from "../../styles/explore.module.css";
import EXPLORE_MENU from "@/constants/images-explore";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExploreItem from "./explore-item";

export default function Explore() {
  const scrollRef = useRef(null);

  const scroll = (isLeft) => {
    if (scrollRef.current) {
      const scrollAmount = 290;
      scrollRef.current.scrollBy({
        left: isLeft ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-12">
      <div className="pl-[300px]">
        <h2 className="text-3xl -tracking-widest font-sans">EXPLORE MENU</h2>
        <div className="border-[#EA002A] border-b-4 w-20 ml-0.5 pt-0.5"></div>
      </div>

      <div className="relative mt-20 pl-[300px] pr-[260px]">
        <button
          className="absolute left-60 top-1/2 -translate-y-1/2 bg-red-700 p-q rounded-full"
          onClick={() => scroll(true)}
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
          className="absolute right-52 top-1/2 -translate-y-1/2 bg-red-700 p-q rounded-full"
          onClick={() => scroll(false)}
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
    </div>
  );
}
