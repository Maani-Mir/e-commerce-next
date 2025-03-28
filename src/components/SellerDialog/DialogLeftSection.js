"use client";

import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import DRINKS from "@/constants/drinks";
import ADD_ONS from "@/constants/add-ons";
import Dropdown from "./Dropdown";

const DialogLeftSection = ({
  item,
  activeDropdown,
  toggleDropdown,
  drinkQuantities,
  addOnQuantities,
  handleDrinkSelect,
  handleAddOnSelect,
  increaseDrinkQuantity,
  decreaseDrinkQuantity,
  increaseAddOnQuantity,
  decreaseAddOnQuantity,
}) => {
  return (
    <div className="w-full lg:w-[450px] lg:flex-shrink-0">
      {/* Choose an option / Fries Section */}
      <Dropdown
        title={item.name === "Krunch Combo" ? "Fries" : "Choose an option"}
        isOpen={activeDropdown === "option"}
        onToggle={() => toggleDropdown("option")}
        required={item.name === "Krunch Combo"}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#EA002A]"></div>
            <span className="text-black dark:text-white text-lg">
              {item.name === "Krunch Combo"
                ? "Regular Fries"
                : item.name === "Chicken & Chips"
                ? "2 Pcs"
                : item.name === "Hot Wings Bucket"
                ? "10 Pcs"
                : item.name}
            </span>
          </div>
          <span className="text-black dark:text-white text-lg">
            +Rs {item.price}
          </span>
        </div>
      </Dropdown>

      {/* Drink Section - Hide for Hot Wings Bucket */}
      {item.name !== "Hot Wings Bucket" && (
        <Dropdown
          title="Drink"
          isOpen={activeDropdown === "drink"}
          onToggle={() => toggleDropdown("drink")}
          required={item.name === "Krunch Combo"}
          optional={item.name !== "Krunch Combo"}
        >
          {item.name === "Krunch Combo" ? (
            // Radio button list for Krunch Combo
            <div className="space-y-3 lg:space-y-4">
              {DRINKS.map((drink, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 lg:gap-4 cursor-pointer"
                >
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="drink-option"
                      value={drink.name}
                      className="w-4 h-4 appearance-none rounded-full border-2 border-[#EA002A] checked:bg-[#EA002A] checked:border-transparent"
                    />
                  </div>
                  <span className="text-black dark:text-white text-base lg:text-lg block">
                    {drink.name}
                  </span>
                </label>
              ))}
            </div>
          ) : (
            // Regular drink selection for other items
            DRINKS.map((drink, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4 last:mb-0"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    width={40}
                    height={40}
                    className="object-contain lg:w-[60px] lg:h-[60px]"
                  />
                  <div>
                    <span className="text-black dark:text-white text-sm md:text-base lg:text-lg block">
                      {drink.name}
                    </span>
                    <span className="text-black dark:text-white text-xs lg:text-sm">
                      (+Rs {drink.price})
                    </span>
                  </div>
                </div>
                {drinkQuantities[drink.name] ? (
                  <div className="flex items-center gap-2 lg:gap-4">
                    <button
                      onClick={() => decreaseDrinkQuantity(drink.name)}
                      className="text-[#D32F2F] hover:bg-[#f0ecef] dark:hover:bg-[#080202] md:p-2.5"
                    >
                      {drinkQuantities[drink.name] === 1 ? (
                        <Trash2 size={20} className="lg:w-6 lg:h-6" />
                      ) : (
                        <Minus size={20} className="lg:w-6 lg:h-6" />
                      )}
                    </button>
                    <span className="text-black dark:text-white text-base lg:text-lg w-6 lg:w-8 text-center">
                      {drinkQuantities[drink.name]}
                    </span>
                    <button
                      onClick={() => increaseDrinkQuantity(drink.name)}
                      className="text-[#D32F2F] hover:bg-[#f0ecef] dark:hover:bg-[#080202] md:p-2.5"
                    >
                      <Plus size={20} className="lg:w-6 lg:h-6" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDrinkSelect(drink)}
                    className="bg-[#EA002A] text-white px-3 py-1.5 lg:px-6 lg:py-2 rounded text-sm lg:text-base font-medium hover:bg-red-700"
                  >
                    ADD
                  </button>
                )}
              </div>
            ))
          )}
        </Dropdown>
      )}

      {/* Add Ons Section */}
      <Dropdown
        title="Add Ons"
        isOpen={activeDropdown === "addons"}
        onToggle={() => toggleDropdown("addons")}
        optional
      >
        {ADD_ONS.map((addOn, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4 last:mb-0"
          >
            <div className="flex items-center gap-3">
              <Image
                src={addOn.image}
                alt={addOn.name}
                width={40}
                height={40}
                className="object-contain lg:w-[60px] lg:h-[60px]"
              />
              <div>
                <span className="text-black dark:text-white text-sm md:text-base lg:text-lg block">
                  {addOn.name}
                </span>
                <span className="text-black dark:text-white text-xs lg:text-sm">
                  (+Rs {addOn.price})
                </span>
              </div>
            </div>
            {addOnQuantities[addOn.name] ? (
              <div className="flex items-center gap-2 lg:gap-4">
                <button
                  onClick={() => decreaseAddOnQuantity(addOn.name)}
                  className="text-[#D32F2F] hover:bg-[#f0ecef] dark:hover:bg-[#080202] md:p-2.5"
                >
                  {addOnQuantities[addOn.name] === 1 ? (
                    <Trash2 size={20} className="lg:w-6 lg:h-6" />
                  ) : (
                    <Minus size={20} className="lg:w-6 lg:h-6" />
                  )}
                </button>
                <span className="text-black dark:text-white text-base lg:text-lg w-6 lg:w-8 text-center">
                  {addOnQuantities[addOn.name]}
                </span>
                <button
                  onClick={() => increaseAddOnQuantity(addOn.name)}
                  className="text-[#D32F2F] hover:bg-[#f0ecef] dark:hover:bg-[#080202] md:p-2.5"
                >
                  <Plus size={20} className="lg:w-6 lg:h-6" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddOnSelect(addOn)}
                className="bg-[#EA002A] text-white px-3 py-1.5 lg:px-6 lg:py-2 rounded text-sm lg:text-base font-medium hover:bg-red-700"
              >
                ADD
              </button>
            )}
          </div>
        ))}
      </Dropdown>
    </div>
  );
};

export default DialogLeftSection;
