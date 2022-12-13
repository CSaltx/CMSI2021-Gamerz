import React from "react";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { Link } from "react-router-dom";
import { auth } from "./firebaseConfig";
import wraith from "../images/wraith.png";

const LikeOnClick = () => {

  const user = useAuthentication();
  
  !user ? (
    <SignIn />
  ) : (
    <div>
      <Link to="/user" className="link">
        {auth.currentUser.displayName}
      </Link>
      <SignOut />
    </div>
  )
};

const Article = ({ article }) => {
  return (
    <>
      <div>
        <div className="content">
            <h1 className="bold-title">
              Insert Name of Game
            </h1>
            <button onClick={LikeOnClick} className="like-button">
              {/* insert heart icon for like button*/}
            </button>
        </div>
        <div className="article-image">
          <img src={wraith} alt="" />
        </div>
      </div>
      <div>
        <p className="subtext">
            Insert Description of game:
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default Article;
