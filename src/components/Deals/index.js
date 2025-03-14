import React from "react";
import styles from "../../styles/deal.module.css";
import DEAL_MENU from "@/constants/images-deal";
import DealItem from "./deal-item";

export default function Deals() {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-3xl font-sans -tracking-widest">TOP DEALS</h2>
        <div className="border-[#EA002A] border-b-4 w-20 ml-0.5 pt-0.5"></div>
      </div>
      <div className="flex flex-nowrap mt-10 overflow-x-scroll scrollbar">
        {DEAL_MENU.map(({ title, desc, price, imgURL }, index) => {
          return (
            <DealItem
              key={index}
              title={title}
              desc={desc}
              price={price}
              image={imgURL}
            />
          );
        })}
      </div>
    </div>
  );
}
