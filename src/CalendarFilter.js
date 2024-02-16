import React, { useState } from 'react';
import jsonData from './jsonData';

const CalendarFilter = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [dateSuggestions, setDateSuggestions] = useState([]);

  const handleDateClick = (value) => {
  
    setDateSuggestions(jsonData.map(item => item.date));
  };

  const handleSuggestionClick = (value) => {
    setSelectedDate(value); 
    onChange({ dateRange: value }); 
    setDateSuggestions([]); 
  };

  return (
    <div>
      <label htmlFor="start"> Date:</label>
      <input type="date" id="start" value={selectedDate || ''} onClick={handleDateClick} />
      <div>
        {dateSuggestions.map((suggestion, index) => (
          <div key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarFilter;



