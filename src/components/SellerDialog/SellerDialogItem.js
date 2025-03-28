"use client";
import React, { useState, useEffect } from "react";
import { X, Plus, Minus, ChevronRight } from "lucide-react";
import Image from "next/image";
import DialogLeftSection from "./DialogLeftSection";
import DialogRightSection from "./DialogRightSection";
import DRINKS from "@/constants/drinks";
import ADD_ONS from "@/constants/add-ons";

const SellerDialogItem = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [drinkQuantities, setDrinkQuantities] = useState({});
  const [addOnQuantities, setAddOnQuantities] = useState({});

  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;

      // Prevent background scrolling while maintaining position
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;

      return () => {
        // Restore scroll position when dialog closes
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDrinkSelect = (drink) => {
    if (!drinkQuantities[drink.name]) {
      setDrinkQuantities({
        ...drinkQuantities,
        [drink.name]: 1,
      });
    }
  };

  const handleAddOnSelect = (addOn) => {
    if (!addOnQuantities[addOn.name]) {
      setAddOnQuantities({
        ...addOnQuantities,
        [addOn.name]: 1,
      });
    }
  };

  const increaseDrinkQuantity = (drinkName) => {
    setDrinkQuantities({
      ...drinkQuantities,
      [drinkName]: (drinkQuantities[drinkName] || 0) + 1,
    });
  };

  const decreaseDrinkQuantity = (drinkName) => {
    if (drinkQuantities[drinkName] <= 1) {
      const newQuantities = { ...drinkQuantities };
      delete newQuantities[drinkName];
      setDrinkQuantities(newQuantities);
    } else {
      setDrinkQuantities({
        ...drinkQuantities,
        [drinkName]: drinkQuantities[drinkName] - 1,
      });
    }
  };

  const increaseAddOnQuantity = (addOnName) => {
    setAddOnQuantities({
      ...addOnQuantities,
      [addOnName]: (addOnQuantities[addOnName] || 0) + 1,
    });
  };

  const decreaseAddOnQuantity = (addOnName) => {
    if (addOnQuantities[addOnName] <= 1) {
      const newQuantities = { ...addOnQuantities };
      delete newQuantities[addOnName];
      setAddOnQuantities(newQuantities);
    } else {
      setAddOnQuantities({
        ...addOnQuantities,
        [addOnName]: addOnQuantities[addOnName] - 1,
      });
    }
  };

  const calculateTotal = () => {
    let total = item.price * quantity;

    // Add drinks total (except for Krunch Combo)
    if (item.name !== "Krunch Combo") {
      Object.entries(drinkQuantities).forEach(([drinkName, qty]) => {
        const drink = DRINKS.find((d) => d.name === drinkName);
        if (drink) {
          total += drink.price * qty;
        }
      });
    }

    // Add add-ons total
    Object.entries(addOnQuantities).forEach(([addOnName, qty]) => {
      const addOn = ADD_ONS.find((a) => a.name === addOnName);
      if (addOn) {
        total += addOn.price * qty;
      }
    });

    return total;
  };

  return (
    <div
      className="fixed inset-0 bg-black dark:bg-white bg-opacity-50 dark:bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Mobile Layout (default) */}
      <div className="flex flex-col h-full w-full bg-white dark:bg-[#1C1816] md:rounded-3xl md:my-4 md:mx-auto md:max-h-[95vh] md:w-[650px] lg:w-[900px] lg:p-8 lg:pt-0">
        {/* Header with stripes and close button */}
        <div className="relative  flex justify-center mb-6">
          <div className="flex gap-1.5">
            <span className="bg-[#EA002A] px-2 py-2.5 mr-1.5"></span>
            <span className="bg-[#EA002A] px-2 py-2.5 mr-1.5"></span>
            <span className="bg-[#EA002A] px-2 py-2.5 mr-1.5"></span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-5 lg:right-0 -bottom-9 lg:-bottom-8 text-black bg-[#EA002A] px-3 py-1 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile/Tablet Content */}
        <div className="lg:hidden h-full flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="relative w-60 h-60 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              {item.name}
            </h2>
            <p className="text-black dark:text-white text-center text-base mb-6">
              {item.description}
            </p>

            <div className="flex items-center gap-6 mb-4">
              <button
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className={`text-black dark:text-white p-3 rounded-lg ${
                  quantity === 1
                    ? "bg-white dark:bg-[#1C1816] border-2 border-[#EA002A]"
                    : "bg-white dark:bg-[#1C1816] border-2 border-[#EA002A] hover:bg-[#FEFAFA] dark:hover:bg-[#231917]"
                }`}
              >
                <Minus size={20} />
              </button>
              <span className="text-black dark:text-white text-xl w-8 text-center">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="bg-white dark:bg-[#1C1816] text-black dark:text-white p-3 rounded-lg border-2 border-[#EA002A] hover:bg-[#FEFAFA] dark:hover:bg-[#231917]"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 min-h-0">
            <DialogLeftSection
              item={item}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              drinkQuantities={drinkQuantities}
              addOnQuantities={addOnQuantities}
              handleDrinkSelect={handleDrinkSelect}
              handleAddOnSelect={handleAddOnSelect}
              increaseDrinkQuantity={increaseDrinkQuantity}
              decreaseDrinkQuantity={decreaseDrinkQuantity}
              increaseAddOnQuantity={increaseAddOnQuantity}
              decreaseAddOnQuantity={decreaseAddOnQuantity}
            />
            <div className="h-12" /> {/* Spacer for fixed button */}
          </div>
          {/* Footer Section */}
          <div className="sticky bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#1C1816] mt-auto">
            <button className="bg-gradient-to-r from-[#EA002A] via-[#FF2B51] to-[#EA002A] text-white py-4 px-6 rounded-lg w-full flex items-center justify-between text-lg font-bold">
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

        {/* Desktop Content */}
        <div className="hidden lg:flex lg:gap-8 lg:overflow-y-auto">
          <DialogLeftSection
            item={item}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            drinkQuantities={drinkQuantities}
            addOnQuantities={addOnQuantities}
            handleDrinkSelect={handleDrinkSelect}
            handleAddOnSelect={handleAddOnSelect}
            increaseDrinkQuantity={increaseDrinkQuantity}
            decreaseDrinkQuantity={decreaseDrinkQuantity}
            increaseAddOnQuantity={increaseAddOnQuantity}
            decreaseAddOnQuantity={decreaseAddOnQuantity}
          />

          <DialogRightSection
            item={item}
            quantity={quantity}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            calculateTotal={calculateTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerDialogItem;
