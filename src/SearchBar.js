import React from 'react';
import './SearchBar.css'

function SearchBar({ onSearch }) {
  function handleSearch(e) {
    onSearch(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search transactions by description"
      onChange={handleSearch} />
  );
}

export default SearchBar;

