"use client";

import React, { useState } from "react";
import styles from "../../styles/seller-item.module.css";
import Image from "next/image";
import SellerDialogItem from "../SellerDialog/SellerDialogItem";

const itemDescriptions = {
  'Krunch Burger': 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
  'Krunch Combo': '1 Krunch burger + 1 Regular fries + 1 Regular drink',
  'Chicken & Chips': '2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce',
  'Hot Wings Bucket': '10 Pcs of our Signature Hot & Crispy Wings',
  'Mighty Zinger': 'Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun',
};

export default function SellerItem({ title, image, price }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const item = {
    name: title,
    price: parseInt(price.replace('Rs', '')),
    description: itemDescriptions[title] || `${title} - A delicious treat from our menu`,
    image: image
  };

  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 basis-auto bg-white dark:bg-[#1c1816] mr-5 box-border text-left pt-2.5 px-2.5 pb-0 rounded-md h-[400px]">
        <div className="text-center -m-1.5">
          <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
          <span className="bg-[#EA002A] px-2 py-1.5 mr-1.5"></span>
          <span className="bg-[#EA002A] px-2 py-1.5"></span>
        </div>
        <button onClick={openDialog} className="w-full">
          <p className="text-2xl pt-[30px] tracking-tighter text-black dark:text-white font-bold text-left">
            {title}
          </p>
          <div className="text-end -m-2.5 pt-2.5 pb-1.5">
            {/* <div className="w-0 h-0 border-l-4 border-[#EA002A]"></div> */}
            <span className="bg-[#EA002A] px-5 py-1.5 text-white font-extrabold ">
              {price}
            </span>
          </div>

          <Image
            className=""
            src={image}
            alt="seller-menu-image"
            width={280}
            height="auto"
          />
        </button>
      </div>

      <SellerDialogItem
        isOpen={isDialogOpen}
        onClose={closeDialog}
        item={item}
      />
    </>
  );
}
