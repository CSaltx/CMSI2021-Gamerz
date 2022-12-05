import { Routes, Route } from "react-router-dom";
import React from "react";
import { SignIn, SignOut } from "./authService";
import Home from "./Home.js";
import Genres from "../Genres.js";
import About from "./About.js";
import Input from "./Input.js";

const Nav = ({ setSearching, fetching }) => {
  return (
    <div className="nav">
      <div className="search-bar">
        <Input setSearching={setSearching} fetching={fetching} />
      </div>
      <div className="links">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="genres" element={<Genres />} />
          <Route path="about" element={<About />} />
        </Routes> */}
        <a href="./" className="link">
          Home
        </a>
        <a href="#" className="link">
          Genres
        </a>
        <a href="#" className="link">
          About
        </a>
      </div>
      <div className="signIn">
        <SignIn />
      </div>
    </div>
  );
};

export default Nav;
