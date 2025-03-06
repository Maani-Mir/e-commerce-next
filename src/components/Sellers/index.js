import React from "react";
import styles from "../../styles/seller.module.css";
import SELLER_MENU from "@/constants/images-seller";
import SellerItem from "./seller-item";

export default function Sellers() {
  return (
    <div>
      <div className={styles.seller__title}>
        <h2>Best Sellers</h2>
      </div>
      <div className={styles.seller__list__container}>
        {SELLER_MENU.map(({ title, imgURL }, index) => {
          return <SellerItem key={index} title={title} image={imgURL} />;
        })}
      </div>
    </div>
  );
}
