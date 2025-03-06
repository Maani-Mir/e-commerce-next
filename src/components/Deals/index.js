import React from "react";
import styles from "../../styles/deal.module.css";
import DEAL_MENU from "@/constants/images-deal";
import DealItem from "./deal-item";

export default function Deals() {
  return (
    <div>
      <div className={styles.deal__title}>
        <h2>Top Deals</h2>
      </div>
      <div className={styles.deal__list__container}>
        {DEAL_MENU.map(({ title, imgURL }, index) => {
          return <DealItem key={index} title={title} image={imgURL} />;
        })}
      </div>
    </div>
  );
}
