"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  console.log(search);

  return (
    <form>
      <label htmlFor="search">
        <input
          type="text"
          placeholder="Enter your address, city, state, or zip code here..."
          // name="search"
          value={search}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
