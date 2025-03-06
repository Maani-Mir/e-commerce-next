import React from "react";
import styles from "../../styles/explore.module.css";
import EXPLORE_MENU from "@/constants/images-explore";
import ExploreItem from "./explore-item";

export default function Explore() {
  return (
    <div>
      <div className={styles.explore__title}>
        <h2>Explore Menu</h2>
      </div>
      <div>{/* <button></button> */}</div>
      <div className={styles.explore__list__container}>
        {EXPLORE_MENU.map(({ title, imgURL }, index) => {
          return <ExploreItem key={index} title={title} image={imgURL} />;
        })}
      </div>
    </div>
  );
}
