import React, { useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, resetSearch }) => {
  const [searchExecuted, setSearchExecuted] = useState(false); 

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
      setSearchExecuted(true);  
    }
  };

  const handleIconClick = () => {
    if (searchExecuted) {
      resetSearch();  
      setSearchExecuted(false);  
    } else {
      handleSearch();  
      setSearchExecuted(true);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <div className="search-icon" onClick={handleIconClick}>
        {searchExecuted ? <FaTimes /> : <FaArrowRight />}
      </div>
    </div>
  );
};

export default SearchBar;
