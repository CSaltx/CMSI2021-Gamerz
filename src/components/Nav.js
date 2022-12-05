import React from "react";
import Input from "./Input.js";

const Nav = ({ setSearching, fetching }) => {
  return (
    <div className="nav">
      <div className="search-bar">
        <Input setSearching={setSearching} fetching={fetching} />
      </div>
      <div className="links">
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
      <div className="signIn"></div>
    </div>
  );
};

export default Nav;
