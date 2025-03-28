"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, ChevronRight } from "lucide-react";

const DialogRightSection = ({
  item,
  quantity,
  decreaseQuantity,
  increaseQuantity,
  calculateTotal,
}) => {
  return (
    <div className="flex-1 pt-12">
      <div className="flex flex-col items-center">
        <div className="relative w-72 h-72 mb-6">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-black dark:text-white mb-3">
          {item.name}
        </h2>
        <p className="text-black dark:text-white text-center text-lg mb-8 max-w-md">
          {item.description}
        </p>

        <div className="flex items-center gap-6 mb-8">
          <button
            onClick={decreaseQuantity}
            disabled={quantity === 1}
            className={`text-black dark:text-white p-3 rounded-lg ${
              quantity === 1
                ? "bg-white dark:bg-[#1C1816] border-2 border-[#EA002A]"
                : "bg-white dark:bg-[#1C1816] border-2 border-[#EA002A] hover:bg-[#FEFAFA] dark:hover:bg-[#231917]"
            }`}
          >
            <Minus size={24} />
          </button>
          <span className="text-black dark:text-white text-2xl w-8 text-center">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="bg-white dark:bg-[#1C1816] text-black dark:text-white p-3 rounded-lg hover:bg-[#FEFAFA] dark:hover:bg-[#231917] border-2 border-[#EA002A]"
          >
            <Plus size={24} />
          </button>
        </div>

        <button className="bg-gradient-to-r from-[#EA002A] via-[#FF2B51] to-[#EA002A] text-white py-4 px-8 rounded-lg w-full flex items-center justify-between text-lg font-bold">
          <span>RS {calculateTotal()}</span>
          <span className="flex items-center gap-2">
            ADD TO BUCKET
            <ChevronRight
              size={24}
              className="rounded-full bg-white text-black p-1"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DialogRightSection;
