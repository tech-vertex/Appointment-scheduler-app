// FilterOptions.js
import React from 'react';

const FilterOptions = ({ handleFilterChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label>Filter by:</label>
      <select onChange={handleFilterChange} style={{ marginLeft: '10px' }}>
        <option value="date">Date</option>
        <option value="time">Time</option>
        <option value="service">Service</option>
      </select>
    </div>
  );
};

export default FilterOptions;
