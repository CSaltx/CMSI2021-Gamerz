import React, { useState } from "react";
import { SignIn, SignOut } from "../services/authService";
import { Link } from "react-router-dom";
import Input from "./Input.js";

const Nav = ({ setSearching, fetching, info }) => {
  const [user, setUser] = useState(null);

  return (
    <div className="nav">
      <div className="search-bar">
        <Input setSearching={setSearching} fetching={fetching} info={info} />
      </div>
      <div className="links">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="genres" element={<Genres />} />
          <Route path="about" element={<About />} />
        </Routes> */}
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/genres" className="link">
          Genres
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
      <div className="signIn">{!user ? <SignIn /> : <SignOut />}</div>
    </div>
  );
};

export default Nav;
