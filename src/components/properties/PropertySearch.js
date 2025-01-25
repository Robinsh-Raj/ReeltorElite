import React from 'react';
import { FaSearch } from 'react-icons/fa';

const PropertySearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="property-search">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search properties..."
        />
      </div>
    </div>
  );
};

export default PropertySearch;
