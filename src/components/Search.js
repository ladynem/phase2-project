import React from "react";

function Search({search, setSearch}) {

  return (
    <div className="searchbar">
      <label>Search Students:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name or ID to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
