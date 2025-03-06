import React from "react";
import styles from "../../styles/explore-item.module.css";
import Image from "next/image";

export default function ExploreItem({ title, image }) {
  console.log("the image in item", title);
  console.log("the title in item", image);
  return (
    <div className={styles.explore__item__card}>
      <Image
        className={styles.explore__item__image}
        src={image}
        alt="explore-menu-image"
        width={100}
        height="auto"
      />
      <p className={styles.explore__item__title}>{title}</p>
    </div>
  );
}
