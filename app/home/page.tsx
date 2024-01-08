import React from "react";

import SearchBar from "./components/SearchBar";

const Home = () => {
  return (
    <div>
      <section>
        <h1>Seek Sanctuary</h1>
        <p>A personalized experience for finding your next church home.</p>
        <h2>Start searching for your new church home now!</h2>
        <SearchBar />
      </section>
      <section>
        <h3>Step 1</h3>
        <p>Search for churches in your area.</p>
        <img src="https://picsum.photos/640/360" alt="" />
      </section>
      <section>
        <h3>Step 2</h3>
        <p>Find the church that best fits your needs.</p>
        <img src="https://picsum.photos/640/360" alt="" />
      </section>
      <section>
        <h3>Step 3</h3>
        <p>Personalize your upcoming visit.</p>
        <img src="https://picsum.photos/640/360" alt="" />
      </section>
      <section>
        <h3>Step 4</h3>
        <p>Start living out your faith in community.</p>
        <img src="https://picsum.photos/640/360" alt="" />
      </section>
    </div>
  );
};

export default Home;
