import React from "react";
import styles from "../../styles/explore-item.module.css";
import Image from "next/image";

export default function ExploreItem({ title, image }) {
  console.log("the image in item", title);
  console.log("the title in item", image);
  return (
    <div className={styles.explore__item__container}>
      {/* <div className={styles.explore__item__card}>

      </div> */}
      <Image src={image} alt="explore-menu-image" />
      <h3>{title}</h3>
    </div>
  );
}
