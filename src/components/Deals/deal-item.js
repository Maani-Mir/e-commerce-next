import React from "react";
import styles from "../../styles/deal-item.module.css";
import Image from "next/image";
import Link from "next/link";

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
      <Image
        className={styles.deal__item__image}
        src={image}
        alt="deal-menu-image"
        width={300}
        height="auto"
      />
      <p className={styles.deal__item__title}>{title}</p>
      <p className="text-sm font-bold pt-2 truncate">{desc}</p>
      <p className="text-base font-bold pt-4 tracking-tighter">{price}</p>
      <div className="text-center z-10 pt-5">
        <Link
          href="#"
          className="bg-[#EA002A] p-2.5 rounded-lg font-bold px-2 tracking-tighter text-sm"
        >
          + ADD TO BUCKET
        </Link>
      </div>
    </div>
  );
}
