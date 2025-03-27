"use client";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Dropdown = ({
  title,
  isOpen,
  onToggle,
  children,
  required = false,
  optional = false,
}) => {
  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className={`w-full bg-[#EA002A] text-white py-5 px-6 rounded-lg text-left flex justify-between items-center ${
          isOpen ? "rounded-b-none" : ""
        }`}
      >
        <span className="text-lg font-bold">
          {title}
          {required && " (Required)"}
          {optional && " (Optional)"}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`transform transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 max-h-[400px] overflow-y-auto"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="bg-[#F1F3F6] dark:bg-black rounded-b-lg p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
