
import React, { useState } from 'react';
import jsonData from './jsonData';

const CalendarFilter = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [dateSuggestions, setDateSuggestions] = useState([]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    onChange({ dateRange: selectedDate });
  };

  const handleDateClick = () => {

  };

  const handleSuggestionClick = (value) => {
    setSelectedDate(value);
    onChange({ dateRange: value });
    setDateSuggestions([]);
  };

  return (
    <div>
      <label htmlFor="start"> Date:</label>
      <input type="date" id="start" value={selectedDate || ''} onChange={handleDateChange} onClick={handleDateClick} />
      <p>Date: {selectedDate}</p>
    </div>
  );
};

export default CalendarFilter;
