import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  );
};

const Article = () => {
  const params = useParams();
  const [info, setInfo] = useState({});

  const fetching = (urlExtension) => {
    const API_KEY = "1fc9d744ff1c4500a96bcd1495506802"; // add to env here
    const url = `https://rawg-video-games-database.p.rapidapi.com/${urlExtension}?key=${API_KEY}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f775d4cdacmshde98a298a5737b2p10f444jsn13cdff795cc0",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        setInfo(result);
      })
      .catch((err) => console.error(err));
  };

  // window.onload = function () {
  //   if (localStorage.getItem("hasCodeRunBefore") === null) {
  //     fetching(`games/${params.query}`);
  //     localStorage.setItem("hasCodeRunBefore", true);
  //   }
  // };

  useEffect(() => {
    fetching(`games/${params.query}`);
  }, []);

  return (
    <>
      {info ? (
        <>
          <div>
            <div className="content">
              <h1 className="bold red">{info.id}</h1>
              {/* <button onClick={LikeOnClick} className="like-button">
      {/* insert heart icon for like button
    </button> */}
            </div>
            {/* <div className="article-image">
              <img src={wraith} alt="" />
            </div> */}
          </div>
          <div>
            <p className="subtext">
              Insert Description of game:
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </>
      ) : (
        <div>"Cannot find the game"</div>
      )}
    </>
  );
};

export default Article;
