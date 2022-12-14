import React from "react";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { Link } from "react-router-dom";
import Input from "./Input.js";
import { auth } from "./firebaseConfig";

const Nav = ({ setSearching, fetching, info }) => {
  const user = useAuthentication();

  return (
    <div className="nav navArea">
      <div className="search-bar">
        <Input setSearching={setSearching} fetching={fetching} info={info} />
      </div>
      <div className="links">
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
      <div className="signIn">
        {!user ? (
          <SignIn />
        ) : (
          <div>
            <Link to="/user" className="link">
              {auth.currentUser.displayName}
            </Link>
            <SignOut />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
