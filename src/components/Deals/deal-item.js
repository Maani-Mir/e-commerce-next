import React from "react";
import styles from "../../styles/deal-item.module.css";
import Image from "next/image";
import Link from "next/link";
import heartIcon from "../../../public/like.png";

export default function DealItem({ title, desc, price, image }) {
  //   console.log("the image in item", title);
  //   console.log("the title in item", image);
  return (
    <div className={styles.deal__item__card}>
      <div className="text-center -m-1.5">
        <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
        <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
        <span className="bg-[#EA002A] px-2 py-1.5"></span>
      </div>
      <div className="flex justify-end pr-2.5 -mt-3">
        <Image src={heartIcon} alt="heart-icon" width={30} height="auto" />
      </div>
      <Image
        className={styles.deal__item__image}
        src={image}
        alt="deal-menu-image"
        width={300}
        height="auto"
      />
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm font-bold pt-2 truncate ">{desc}</p>
      <p className="text-base font-bold pt-4 tracking-tighter">{price}</p>
      <div className=" z-10 mt-4 -mb-2 ml-20 inline-flex hover:-translate-y-1 transition ease-in-out hover:scale-105 duration-300 ">
        <Link
          href="#"
          className="bg-[#EA002A] p-2.5  rounded-lg font-bold px-2.5 tracking-tighter text-sm  hover:bg-white hover:text-[#EA002A]"
        >
          + ADD TO BUCKET
        </Link>
      </div>
    </div>
  );
}
