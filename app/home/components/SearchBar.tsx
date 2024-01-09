"use client";
import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const getCoordinates = async (search: string) => {
    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
      );
      console.log(res);
      return res.data.results[0].geometry.location;
    } catch (err) {
      throw new Error("Error fetching coordinates");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const coordinates = await getCoordinates(search);
      console.log("Coordinates:", coordinates);
    } catch (err) {
      console.error("Error fetching location:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          type="text"
          placeholder="Enter your address, city, state, or zip code here..."
          value={search}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
