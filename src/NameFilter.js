


import React, { useState } from 'react';
import jsonData from './jsonData';

const NameFilter = ({ onChange}) => {
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
      <label htmlFor="name" className='n'>Name:--</label>
      <select id="name" value={name} onChange={handleNameChange} onClick={handleNameClick}>
      <option value="">Select Name</option>
        {nameSuggestions.map((suggestion, index) => (
        
          <option key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</option>
        ))}
      </select>
     <li>{name}</li> 
    </div>
  );
};

export default NameFilter;
