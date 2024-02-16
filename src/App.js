


import React, { useState, useEffect } from 'react';
import CalendarFilter from './CalendarFilter';
import NameFilter from './NameFilter';
import AmountRangeFilter from './AmountRangeFilter';
import jsonData from './jsonData';

const App = () => {
  const [filters, setFilters] = useState({
    dateRange: jsonData.date,
    name: jsonData.name,
    amountRange: '',
  });
  const [filteredData, setFilteredData] = useState([]);
  const [amount, setAmount] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    setIsTyping(true);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
    setIsTyping(true);
  };

  const handleSuggestionClick = (value) => {
    console.log('Suggestion clicked:', value);
    setIsTyping(false);
  };

  useEffect(() => {
    if (isTyping) {
      setIsTyping(false);
    }
  }, [filters, amount]);

  const applyFilters = () => {
    let updatedData = jsonData;

    if (filters.name) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.date) {
      updatedData = updatedData.filter((item) =>
        item.date.includes(filters.date)
      );
    }

    setFilteredData(updatedData);
  };

  const isButtonDisabled = !filters.name && !filters.date && !amount;

  return (
    <div>
      <h1>Filter Data</h1>
      <CalendarFilter onChange={handleFilterChange} />
      <NameFilter onChange={handleFilterChange} />
      <AmountRangeFilter onChange={handleFilterChange} sendDataToParent={handleAmountChange} onSuggestionClick={handleSuggestionClick} />
      <button onClick={applyFilters} disabled={isButtonDisabled}>Apply Filters</button>
      <div>
    
        {filteredData.map((item, index) => (
          <div key={index}>
            <p>Date: {item.date}</p>
            <p>Name: {item.name}</p>
            <p>Amount : {amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
