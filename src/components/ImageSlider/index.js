"use client";

import React from "react";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import SLIDER_IMAGES from "../../constants/image-sliders";

export default function ImageSlider() {
  return (
    <div className="mt-24">
      <Slider
        imageList={SLIDER_IMAGES}
        width={1915}
        height={719}
        showDotControls={false}
      />
    </div>
  );
}
