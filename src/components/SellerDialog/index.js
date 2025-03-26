"use client";
import React, { useState } from 'react';
import FoodModal from './FoodModal';

const SellerDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const krunchBurger = {
    name: 'Krunch Burger',
    price: 310,
    description: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
    image: '/krunch-burger.png'
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-[#EA002A] text-white px-4 py-2 rounded-lg"
      >
        Open Krunch Burger Modal
      </button>

      <FoodModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={krunchBurger}
      />
    </div>
  );
};

export default SellerDialog; 