import React from "react";
import styles from "../../styles/seller-item.module.css";
import Image from "next/image";

export default function SellerItem({ title, image }) {
  // console.log("the image in item", title);
  // console.log("the title in item", image);
  return (
    <div className={styles.seller__item__card}>
      <div className="text-center -m-1.5">
        <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
        <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
        <span className="bg-[#EA002A] px-2 py-1.5"></span>
      </div>
      <p className={styles.seller__item__title}>{title}</p>
      <Image
        className={styles.seller__item__image}
        src={image}
        alt="seller-menu-image"
        width={280}
        height="auto"
      />
    </div>
  );
}
