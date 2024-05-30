import React from "react"

function Search({search, setSearch}) {

  return (
    <div className="searchbar">
      <label>Search Students:</label>
      <input
        type="text"
        id="search"
        placeholder="Type name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search
