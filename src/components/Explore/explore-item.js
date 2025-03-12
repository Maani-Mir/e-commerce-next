import React from "react";
import styles from "../../styles/explore-item.module.css";
import Image from "next/image";

export default function ExploreItem({ title, image }) {
  // console.log("the image in item", title);
  // console.log("the title in item", image);
  return (
    // <div className="flex">
    <div className="flex-grow-0 flex-shrink-0 basis-auto bg-[#1c1816] p-2 pb-7 box-border text-center rounded-l-full rounded-tr-full rounded-br-3xl w-60 transition duration-300 ease-in-out hover:-translate-y-4 ">
      <Image
        src={image}
        alt="explore-menu-image"
        width={200}
        height="auto"
        className="text-center"
      />
      <div>
        <p className="font-medium text-nowrap text-base tracking-tight ">
          {title}
        </p>
      </div>
    </div>
  );
}
