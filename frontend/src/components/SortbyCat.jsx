import React from 'react';

const SortByCat = ({ categories, onSelectCategory }) => {
  return (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default SortByCat;
