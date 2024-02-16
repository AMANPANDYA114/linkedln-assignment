

import React, { useState, useEffect, useRef } from 'react';
import jsonData from './jsonData'; 

const AmountRangeFilter = ({ onChange, sendDataToParent }) => {
  const [amount, setAmount] = useState('');
  const [amountSuggestions, setAmountSuggestions] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false); 
  const inputRef = useRef(null); 

  useEffect(() => {

    setAmountSuggestions([]);
  }, []);

  useEffect(() => {
 
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setAmountSuggestions([]); 
      }
    };

   
    document.addEventListener('click', handleOutsideClick);

   
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value); 
    onChange({ amountRange: { min: value, max: value } });
    sendDataToParent(value);


    const filteredSuggestions = jsonData
      .filter(item => item.amount.toString().startsWith(value))
      .map(item => item.amount);
    const uniqueAmounts = [...new Set(filteredSuggestions)];
    setAmountSuggestions(uniqueAmounts);
  };

  const handleSuggestionClick = (value) => {
    setAmount(value); 
    onChange({ amountRange: { min: value, max: value } });
    sendDataToParent(value);
    setAmountSuggestions([]); 
  };

  return (
    <div>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
        onFocus={() => setIsInputFocused(true)} 
        onBlur={() => setIsInputFocused(false)} 
        ref={inputRef} 
      />
      <div>
   
        {amountSuggestions.length > 0 && amountSuggestions.map((suggestion, index) => (
          <div key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmountRangeFilter;
