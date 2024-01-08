"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form>
      <label htmlFor="search">
        <input
          type="text"
          placeholder="Enter your address, city, state, or zip code here..."
          value={search}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default SearchBar;
