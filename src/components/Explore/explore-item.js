import React from "react";
import styles from "../../styles/explore-item.module.css";
import Image from "next/image";

export default function ExploreItem({ title, image }) {
  // console.log("the image in item", title);
  // console.log("the title in item", image);
  return (
    <div className=" flex flex-col items-center justify-center flex-grow-0 flex-shrink-0 basis-auto bg-white dark:bg-[#1c1816] p-2 mt-5 box-border text-center rounded-l-full rounded-tr-full rounded-br-3xl w-60 h-56 transition duration-300 ease-in-out hover:-translate-y-4 ">
      <Image
        src={image}
        alt="explore-menu-image"
        width={200}
        height="auto"
        // className="m-auto"
      />
      <div className="font-semibold text-nowrap text-base tracking-tight text-black dark:text-white">
        {title}
        <div className="m-auto border-[#EA002A] border-b-4 w-20 mt-1 rounded-sm"></div>
        {/* <span className="rounded-full bg-black "></span> */}
      </div>
    </div>
  );
}
