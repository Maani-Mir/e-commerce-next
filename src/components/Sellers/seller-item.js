import React from "react";
import styles from "../../styles/seller-item.module.css";
import Image from "next/image";

export default function SellerItem({ title, image, price }) {
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
      <div className="text-end -m-2.5 pt-2.5 pb-1.5">
        {/* <div className="w-0 h-0 border-l-4 border-[#EA002A]"></div> */}
        <span className="bg-[#EA002A] px-5 py-1.5  ">{price}</span>
      </div>

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
