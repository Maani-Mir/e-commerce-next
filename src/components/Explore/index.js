"use client";
import React from "react";
import styles from "../../styles/explore.module.css";
import EXPLORE_MENU from "@/constants/images-explore";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExploreItem from "./explore-item";

export default function Explore() {
  console.log("Explore component rendered");

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    console.log("Setting up Intersection Observers");
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Create intersection observers for left and right edges
    const leftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Left edge visibility changed:", entry.isIntersecting);
          setCanScrollLeft(!entry.isIntersecting);
        });
      },
      { threshold: 1.0 }
    );

    const rightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Right edge visibility changed:", entry.isIntersecting);
          setCanScrollRight(!entry.isIntersecting);
        });
      },
      { threshold: 1.0 }
    );

    // Create sentinel elements for left and right edges
    const leftSentinel = document.createElement("div");
    const rightSentinel = document.createElement("div");
    leftSentinel.style.width = "1px";
    rightSentinel.style.width = "1px";
    scrollContainer.insertBefore(leftSentinel, scrollContainer.firstChild);
    scrollContainer.appendChild(rightSentinel);

    // Observe the sentinel elements
    leftObserver.observe(leftSentinel);
    rightObserver.observe(rightSentinel);

    // Cleanup function
    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
      scrollContainer.removeChild(leftSentinel);
      scrollContainer.removeChild(rightSentinel);
    };
  }, []);

  const scroll = (isLeft) => {
    console.log("Scroll button clicked");
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
      <div className="">
        <h2 className="text-3xl tracking-tighter font-bold font-sans text-black dark:text-white">
          EXPLORE MENU
        </h2>
        <div className="border-[#EA002A] border-b-4 w-20 ml-0.5 pt-0.5"></div>
      </div>

      <div className="relative mt-12">
        <button
          className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition ${
            canScrollLeft
              ? "bg-[#EB3D5D] dark:bg-[#AF001F] hover:bg-red-600 dark:hover:bg-red-600"
              : "bg-[#F0B6C3] dark:bg-[#3B000B]"
          }`}
          onClick={() => scroll(true)}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="text-white dark:text-black" />
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
            canScrollRight
              ? "bg-[#EB3D5D] dark:bg-[#AF001F] hover:bg-red-600 dark:hover:bg-red-600"
              : "bg-[#F0B6C3] dark:bg-[#3B000B]"
          }`}
          onClick={() => scroll(false)}
          disabled={!canScrollRight}
        >
          <ChevronRight className="text-white dark:text-black" />
        </button>
      </div>
    </div>
  );
}
