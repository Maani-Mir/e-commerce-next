"use client";
import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ChevronDown, ChevronUp, Trash2, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const DRINKS = [
  { name: 'Pepsi Regular', price: 180, image: '/drinks/pepsi.png' },
  { name: '7UP Regular', price: 180, image: '/drinks/7up.png' },
  { name: 'Mountain Dew Regular', price: 180, image: '/drinks/mountain-dew.png' },
  { name: 'Pepsi Zero Sugar', price: 180, image: '/drinks/pepsi-zero.png' },
];

const ADD_ONS = [
  { name: 'Coleslaw', price: 150, image: '/add-ons/coleslaw.png' },
  { name: 'Dinner Roll', price: 50, image: '/add-ons/dinner-roll.png' },
  { name: 'Large Fries', price: 410, image: '/add-ons/large-fries.png' },
  { name: 'Boneless Strips', price: 440, image: '/add-ons/boneless-strips.png' },
  { name: 'Masala Fries Sprinkle', price: 20, image: '/add-ons/masala-sprinkle.png' },
  { name: 'Pepsi Regular', price: 180, image: '/drinks/pepsi.png' },
  { name: 'One Pc Chicken', price: 320, image: '/add-ons/one-pc-chicken.png' },
  { name: 'Mayo Dip', price: 50, image: '/add-ons/mayo-dip.png' },
  { name: 'Vietnamese Dip', price: 50, image: '/add-ons/vietnamese-dip.png' },
  { name: 'Regular Fries', price: 340, image: '/add-ons/regular-fries.png' },
  { name: 'Fries Bucket', price: 450, image: '/add-ons/fries-bucket.png' },
  { name: 'Pepsi Zero Sugar', price: 180, image: '/drinks/pepsi.png' },
  { name: 'Cheese', price: 100, image: '/add-ons/cheese.png' },

];

const SellerDialogItem = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'drink' or 'addons' or null
  const [drinkQuantities, setDrinkQuantities] = useState({});
  const [addOnQuantities, setAddOnQuantities] = useState({});

  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Prevent background scrolling while maintaining position
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      return () => {
        // Restore scroll position when dialog closes
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
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
        [drink.name]: 1
      });
    }
  };

  const handleAddOnSelect = (addOn) => {
    if (!addOnQuantities[addOn.name]) {
      setAddOnQuantities({
        ...addOnQuantities,
        [addOn.name]: 1
      });
    }
  };

  const increaseDrinkQuantity = (drinkName) => {
    setDrinkQuantities({
      ...drinkQuantities,
      [drinkName]: (drinkQuantities[drinkName] || 0) + 1
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
        [drinkName]: drinkQuantities[drinkName] - 1
      });
    }
  };

  const removeDrink = (drinkName) => {
    const newQuantities = { ...drinkQuantities };
    delete newQuantities[drinkName];
    setDrinkQuantities(newQuantities);
  };

  const increaseAddOnQuantity = (addOnName) => {
    setAddOnQuantities({
      ...addOnQuantities,
      [addOnName]: (addOnQuantities[addOnName] || 0) + 1
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
        [addOnName]: addOnQuantities[addOnName] - 1
      });
    }
  };

  const removeAddOn = (addOnName) => {
    const newQuantities = { ...addOnQuantities };
    delete newQuantities[addOnName];
    setAddOnQuantities(newQuantities);
  };

  const calculateTotal = () => {
    let total = item.price * quantity;
    
    // Add drinks total
    Object.entries(drinkQuantities).forEach(([drinkName, qty]) => {
      const drink = DRINKS.find(d => d.name === drinkName);
      if (drink) {
        total += drink.price * qty;
      }
    });

    // Add add-ons total
    Object.entries(addOnQuantities).forEach(([addOnName, qty]) => {
      const addOn = ADD_ONS.find(a => a.name === addOnName);
      if (addOn) {
        total += addOn.price * qty;
      }
    });

    return total;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="my-4 bg-[#1C1816] p-8 rounded-3xl w-[900px] relative max-h-[95vh] flex flex-col">
        {/* Three red stripes */}
        <div className="absolute top-[1px] left-1/2 transform -translate-x-1/2 text-center">
          <span className="bg-[#EA002A] px-2 py-1 mr-1.5"></span>
          <span className="bg-[#EA002A] px-2 py-1 mr-1.5"></span>
          <span className="bg-[#EA002A] px-2 py-1"></span>
        </div>

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white hover:text-red-500"
        >
          <X size={24} />
        </button>

        <div className="mt-8 flex gap-6 overflow-y-auto">
          {/* Left Section */}
          <div className="w-[450px] flex-shrink-0">
            <div className="mb-6">
              <button 
                onClick={() => toggleDropdown('option')}
                className={`w-full bg-[#EA002A] text-white py-5 px-6 rounded-lg text-left flex justify-between items-center ${
                  activeDropdown === 'option' ? 'rounded-b-none' : ''
                }`}
              >
                <span className="text-lg font-bold">Choose an option</span>
                {activeDropdown === 'option' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div 
                className={`transform transition-all duration-300 ease-in-out origin-top ${
                  activeDropdown === 'option' 
                    ? 'opacity-100 max-h-[400px] overflow-y-auto' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <div className="bg-black rounded-b-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#EA002A]"></div>
                      <span className="text-white text-lg">{item.name}</span>
                    </div>
                    <span className="text-white text-lg">+Rs {item.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drink Section */}
            <div className="mb-6">
              <button 
                onClick={() => toggleDropdown('drink')}
                className={`w-full bg-[#EA002A] text-white py-5 px-6 rounded-lg text-left flex justify-between items-center ${
                  activeDropdown === 'drink' ? 'rounded-b-none' : ''
                }`}
              >
                <span className="text-lg font-bold">Drink (Optional)</span>
                {activeDropdown === 'drink' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div 
                className={`transform transition-all duration-300 ease-in-out origin-top ${
                  activeDropdown === 'drink' 
                    ? 'opacity-100 max-h-[400px] overflow-y-auto' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <div className="bg-black rounded-b-lg p-6">
                  {DRINKS.map((drink, index) => (
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
                  ))}
                </div>
              </div>
            </div>

            {/* Add Ons Section */}
            <div className="mb-6">
              <button 
                onClick={() => toggleDropdown('addons')}
                className={`w-full bg-[#EA002A] text-white py-5 px-6 rounded-lg text-left flex justify-between items-center ${
                  activeDropdown === 'addons' ? 'rounded-b-none' : ''
                }`}
              >
                <span className="text-lg font-bold">Add Ons (Optional)</span>
                {activeDropdown === 'addons' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div 
                className={`transform transition-all duration-300 ease-in-out origin-top ${
                  activeDropdown === 'addons' 
                    ? 'opacity-100 max-h-[400px] overflow-y-auto' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <div className="bg-black rounded-b-lg p-6">
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
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
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
              <h2 className="text-3xl font-bold text-white mb-3">{item.name}</h2>
              <p className="text-gray-400 text-center text-lg mb-8 max-w-md">
                {item.description}
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  className={`text-white p-3 rounded-lg ${
                    quantity === 1 
                      ? 'bg-[#1A1A1A] border-2 border-[#EA002A]' 
                      : 'bg-[#2A2A2A] border-2 border-[#EA002A]'
                  }`}
                >
                  <Minus size={24} />
                </button>
                <span className="text-white text-2xl w-8 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="bg-[#2A2A2A] text-white p-3 rounded-lg hover:bg-[#EA002A] border-2 border-[#EA002A]"
                >
                  <Plus size={24} />
                </button>
              </div>

              <button
                className="bg-gradient-to-r from-[#EA002A] via-[#FF2B51] to-[#EA002A] text-white py-4 px-8 rounded-lg w-full flex items-center justify-between text-lg font-bold"
              >
                <span>RS {calculateTotal()}</span>
                <span className="flex items-center gap-2">
                  ADD TO BUCKET
                  <ChevronRight size={24} className="rounded-full bg-white text-black  p-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDialogItem; 