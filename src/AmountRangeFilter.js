
import React, { useState } from 'react';
import jsonData from './jsonData';

const AmountRangeFilter = ({ onChange }) => {
  const [amount, setAmount] = useState('');
  const [amountSuggestions, setAmountSuggestions] = useState([]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    onChange({ amount: value });
  };

  const handleAmountClick = () => {
    
    const filteredSuggestions = jsonData.filter(item => item.amount >= 100 && item.amount <= 200);
    setAmountSuggestions(filteredSuggestions.map(item => item.amount));
  };

  const handleSuggestionClick = (value) => {
    setAmount(value); 
    onChange({ amount: value });
    setAmountSuggestions([]); 
  };

  return (
    <div>
      <label htmlFor="amount">Amount:--   </label>
      <select id="amount" value={amount} onChange={handleAmountChange} onClick={handleAmountClick}>
        <option value="">Select an amount</option>
        {amountSuggestions.map((suggestion, index) => (
          <option key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</option>
        ))}
      </select>
      <li>{amount}</li>
    </div>
  );
};

export default AmountRangeFilter;


