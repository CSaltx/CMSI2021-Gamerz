import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function UserPage({ user }) {
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
          {/* add background imgs, fix nav bar responsiveness, change find game button color, remove & go to article page buttons */}
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
                  <div className="game-info">
                    <img src={imgUrl} alt="game-image" />
                  </div>
                ))}
                <div className="button">
                  <a href="#"> about </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserPage;
