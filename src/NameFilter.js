import React, { useState } from 'react';
import jsonData from './jsonData';

const NameFilter = ({ onChange }) => {
  const [name, setName] = useState('');
  const [nameSuggestions, setNameSuggestions] = useState([]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    onChange({ name: value });
  };

  const handleNameClick = () => {
  
    setNameSuggestions(jsonData.map(item => item.name));
  };

  const handleSuggestionClick = (value) => {
    setName(value); 
    onChange({ name: value });
    setNameSuggestions([]); 
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name || ''} onChange={handleNameChange} onClick={handleNameClick} />
      <div>
        {nameSuggestions.map((suggestion, index) => (
          <div key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</div>
        ))}
      </div>
    </div>
  );
};

export default NameFilter;
