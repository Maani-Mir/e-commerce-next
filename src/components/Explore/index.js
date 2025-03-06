import React from "react";
import styles from "../../styles/explore-menu.module.css";
import EXPLORE_MENU from "@/constants/images-explore";
import ExploreItem from "./explore-item";

export default function Explore() {
  console.log("the image in explore", EXPLORE_MENU[0].imgURL);
  console.log("the title in explore", EXPLORE_MENU[0].title);
  return (
    <div>
      <div className={styles.explore__title}>Explore Menu</div>
      <div className={styles.explore__list__container}>
        {EXPLORE_MENU.map((_, index) => {
          console.log("the image in map func", EXPLORE_MENU[index].imgURL);
          console.log("the title in map func", EXPLORE_MENU[index].title);
          <ExploreItem
            key={index}
            title={EXPLORE_MENU.title}
            image={EXPLORE_MENU.imgURL}
          />;
        })}
      </div>
    </div>
  );
}
