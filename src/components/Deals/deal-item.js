import React from "react";
import styles from "../../styles/deal-item.module.css";
import Image from "next/image";

export default function DealItem({ title, image }) {
  //   console.log("the image in item", title);
  //   console.log("the title in item", image);
  return (
    <div className={styles.deal__item__card}>
      <Image
        className={styles.deal__item__image}
        src={image}
        alt="deal-menu-image"
        width={100}
        height="auto"
      />
      <p className={styles.deal__item__title}>{title}</p>
    </div>
  );
}
