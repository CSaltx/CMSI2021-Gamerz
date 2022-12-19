import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import girl from "../images/userPage1.png";
import guy from "../images/userPage2.png";

function UserPage({ user, myGames }) {
  const [likedGames, setLikedGames] = useState();

  const findOnClick = () => {
    window.location = "/genres";
  };

  const getUserGames = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setLikedGames(docSnap.data().likedGames);
    } else {
      console.log("Must like a game to see game displayed!");
    }
  };

  getUserGames();

  return (
    <>
      <div className="user-page">
        <div className="profile">
          {/* add background imgs */}
          {/*
          <img src={girl} alt="tracer" />
          */}
          <div className="user-info">
            <img src={user.photoURL} alt="profile picture" />
            <h1 className="bold">{user.displayName} </h1>
          </div>
        </div>
        <div className="my-games">
          <h2 className="bold">MY GAMES</h2>
          {!likedGames ? (
            <div id="no-games-msg">
              <p className="no-games"> no liked games</p>
              <button onClick={findOnClick} className="find-game-button">
                find a game
              </button>
            </div>
          ) : (
            <div className="liked-games">
              <div className="cover-images">
                {likedGames.map((imgUrl) => (
                  <img src={imgUrl} alt="game-image" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserPage;
