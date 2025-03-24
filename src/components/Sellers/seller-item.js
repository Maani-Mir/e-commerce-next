import React from "react";
import styles from "../../styles/seller-item.module.css";
import Image from "next/image";

export default function SellerItem({ title, image, price }) {
  // console.log("the image in item", title);
  // console.log("the title in item", image);
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-auto bg-white dark:bg-[#1c1816] mr-5 box-border text-left pt-2.5 px-2.5 pb-0 rounded-md h-[400px]">
      <div className="text-center -m-1.5">
        <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
        <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
        <span className="bg-[#EA002A] px-2 py-1.5"></span>
      </div>
      <p className="text-2xl pt-[30px] tracking-tighter text-black dark:text-white font-bold">
        {title}
      </p>
      <div className="text-end -m-2.5 pt-2.5 pb-1.5">
        {/* <div className="w-0 h-0 border-l-4 border-[#EA002A]"></div> */}
        <span className="bg-[#EA002A] px-5 py-1.5 text-white font-extrabold ">
          {price}
        </span>
      </div>

      <Image
        className=""
        src={image}
        alt="seller-menu-image"
        width={280}
        height="auto"
      />
    </div>
  );
}
