"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import DialogLeftSection from "./DialogLeftSection";
import DialogRightSection from "./DialogRightSection";
import DRINKS from "@/constants/drinks";
import ADD_ONS from "@/constants/add-ons";

const SellerDialogItem = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [drinkQuantities, setDrinkQuantities] = useState({});
  const [addOnQuantities, setAddOnQuantities] = useState({});
  const [selectedKrunchDrink, setSelectedKrunchDrink] = useState(
    DRINKS[0].name
  );

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
      <div className="my-4 bg-white dark:bg-[#1C1816] p-8 rounded-3xl w-[900px] relative max-h-[95vh] flex flex-col">
        {/* Three red stripes */}
        <div className="absolute top-[1px] left-1/2 transform -translate-x-1/2 text-center">
          <span className="bg-[#EA002A] px-2 py-1 mr-1.5"></span>
          <span className="bg-[#EA002A] px-2 py-1 mr-1.5"></span>
          <span className="bg-[#EA002A] px-2 py-1"></span>
        </div>

        <button
          onClick={onClose}
          className="absolute right-6 top-6 bg-[#EA002A] text-black px-3 py-1 rounded-lg"
        >
          <X size={24} />
        </button>

        <div className="mt-8 flex gap-8 overflow-y-auto">
          <DialogLeftSection
            item={item}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            selectedKrunchDrink={selectedKrunchDrink}
            setSelectedKrunchDrink={setSelectedKrunchDrink}
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
