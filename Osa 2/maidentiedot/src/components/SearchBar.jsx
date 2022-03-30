import React from "react";

const SearchBar = ({ handleSearchChange, searched }) => {
  return (
    <div>
      Search Countries: <input onChange={handleSearchChange} value={searched} />
    </div>
  );
};

export default SearchBar;
