import React from "react";
import styles from "../../styles/seller.module.css";
import SELLER_MENU from "@/constants/images-seller";
import SellerItem from "./seller-item";

export default function Sellers() {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-3xl font-sans tracking-tighter text-black dark:text-white font-bold">
          BEST SELLERS
        </h2>
        <div className="border-[#EA002A] border-b-4 w-20 ml-0.5 pt-0.5"></div>
      </div>
      <div className="flex flex-nowrap mt-10 overflow-x-scroll scrollbar">
        {SELLER_MENU.map(({ title, imgURL, price }, index) => {
          return (
            <SellerItem
              key={index}
              title={title}
              image={imgURL}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
}
