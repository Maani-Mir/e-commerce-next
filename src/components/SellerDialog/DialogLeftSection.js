"use client";

import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import DRINKS from '@/constants/drinks';
import ADD_ONS from '@/constants/add-ons';
import Dropdown from './Dropdown';

const DialogLeftSection = ({ 
  item, 
  activeDropdown, 
  toggleDropdown, 
  selectedKrunchDrink,
  setSelectedKrunchDrink,
  drinkQuantities,
  addOnQuantities,
  handleDrinkSelect,
  handleAddOnSelect,
  increaseDrinkQuantity,
  decreaseDrinkQuantity,
  increaseAddOnQuantity,
  decreaseAddOnQuantity
}) => {
  return (
    <div className="w-[450px] flex-shrink-0">
      {/* Choose an option / Fries Section */}
      <Dropdown
        title={item.name === 'Krunch Combo' ? 'Fries' : 'Choose an option'}
        isOpen={activeDropdown === 'option'}
        onToggle={() => toggleDropdown('option')}
        required={item.name === 'Krunch Combo'}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#EA002A]"></div>
            <span className="text-white text-lg">
              {item.name === 'Krunch Combo' ? 'Regular Fries' :
               item.name === 'Chicken & Chips' ? '2 Pcs' :
               item.name === 'Hot Wings Bucket' ? '10 Pcs' :
               item.name}
            </span>
          </div>
          <span className="text-white text-lg">+Rs {item.price}</span>
        </div>
      </Dropdown>

      {/* Drink Section - Hide for Hot Wings Bucket */}
      {item.name !== 'Hot Wings Bucket' && (
        <Dropdown
          title="Drink"
          isOpen={activeDropdown === 'drink'}
          onToggle={() => toggleDropdown('drink')}
          required={item.name === 'Krunch Combo'}
          optional={item.name !== 'Krunch Combo'}
        >
          {item.name === 'Krunch Combo' ? (
            // Radio button list for Krunch Combo
            <div className="space-y-4">
              {DRINKS.map((drink, index) => (
                <label key={index} className="flex items-center gap-4 cursor-pointer">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="drink-option"
                      value={drink.name}
                      checked={selectedKrunchDrink === drink.name}
                      onChange={(e) => setSelectedKrunchDrink(e.target.value)}
                      className="w-4 h-4 appearance-none rounded-full border-2 border-[#EA002A] checked:bg-[#EA002A] checked:border-transparent"
                    />
                  </div>
                  <span className="text-white text-lg">{drink.name}</span>
                </label>
              ))}
            </div>
          ) : (
            // Regular drink selection for other items
            DRINKS.map((drink, index) => (
              <div key={index} className="flex items-center justify-between mb-6 last:mb-0">
                <div className="flex items-center gap-4">
                  <Image src={drink.image} alt={drink.name} width={60} height={60} className="object-contain" />
                  <div>
                    <span className="text-white text-lg block">{drink.name}</span>
                    <span className="text-gray-400">(+Rs {drink.price})</span>
                  </div>
                </div>
                {drinkQuantities[drink.name] ? (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => decreaseDrinkQuantity(drink.name)}
                      className="text-white hover:text-red-500"
                    >
                      {drinkQuantities[drink.name] === 1 ? <Trash2 size={24} /> : <Minus size={24} />}
                    </button>
                    <span className="text-white text-xl w-8 text-center">{drinkQuantities[drink.name]}</span>
                    <button
                      onClick={() => increaseDrinkQuantity(drink.name)}
                      className="text-white hover:text-red-500"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDrinkSelect(drink)}
                    className="bg-[#EA002A] text-white px-6 py-2 rounded text-lg font-medium hover:bg-red-700"
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
        isOpen={activeDropdown === 'addons'}
        onToggle={() => toggleDropdown('addons')}
        optional
      >
        {ADD_ONS.map((addOn, index) => (
          <div key={index} className="flex items-center justify-between mb-6 last:mb-0">
            <div className="flex items-center gap-4">
              <Image src={addOn.image} alt={addOn.name} width={60} height={60} className="object-contain" />
              <div>
                <span className="text-white text-lg block">{addOn.name}</span>
                <span className="text-gray-400">(+Rs {addOn.price})</span>
              </div>
            </div>
            {addOnQuantities[addOn.name] ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseAddOnQuantity(addOn.name)}
                  className="text-white hover:text-red-500"
                >
                  {addOnQuantities[addOn.name] === 1 ? <Trash2 size={24} /> : <Minus size={24} />}
                </button>
                <span className="text-white text-xl w-8 text-center">{addOnQuantities[addOn.name]}</span>
                <button
                  onClick={() => increaseAddOnQuantity(addOn.name)}
                  className="text-white hover:text-red-500"
                >
                  <Plus size={24} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddOnSelect(addOn)}
                className="bg-[#EA002A] text-white px-6 py-2 rounded text-lg font-medium hover:bg-red-700"
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