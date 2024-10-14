import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    onSelectedChange(option); // Update the selected state value
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selected ? selected : "Select State"}
      </div>
      {open && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg max-h-60 overflow-y-auto z-50">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
