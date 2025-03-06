import React from "react";
import styles from "../../styles/seller-item.module.css";
import Image from "next/image";

export default function SellerItem({ title, image }) {
  console.log("the image in item", title);
  console.log("the title in item", image);
  return (
    <div className={styles.seller__item__card}>
      <Image
        className={styles.seller__item__image}
        src={image}
        alt="seller-menu-image"
        width={100}
        height="auto"
      />
      <p className={styles.seller__item__title}>{title}</p>
    </div>
  );
}
