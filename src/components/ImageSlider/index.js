"use client";

import React from "react";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import SLIDER_IMAGES from "../../constants/image-sliders";

export default function ImageSlider() {
  return (
    <div className="mt-[123px] sm:mt-[131px] lg:mt-[96px]">
      <Slider
        imageList={SLIDER_IMAGES}
        width={1920}
        height="auto"
        showDotControls={false}
      />
    </div>
  );
}
