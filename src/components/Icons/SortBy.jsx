import React, { useState } from 'react';
import '../Icons/style/IconStyle.css';

const SortBy = ({ onSortChange }) => {  

  const [selectedOption, setSelectedOption] = useState('Featured');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Best Sellers'
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);  // Close dropdown after selecting
    onSortChange(option);    // Notify parent about the selected option
  };

  return (
    <div className="sort-by-container">
      <button 
        className="sort-by-button"
        onClick={() => setDropdownOpen(!dropdownOpen)}  // Toggle dropdown
      >
        Sort by: <span className="sort-by-selected">{selectedOption}</span>
        <i className="arrow-down"></i>
      </button>
      
      {dropdownOpen && (
        <ul className="sort-by-dropdown">
          {options.map((option, index) => (
            <li 
              key={index} 
              className={`sort-by-option ${selectedOption === option ? 'selected' : ''}`} 
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

export default SortBy;
