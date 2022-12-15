import React from "react";
import eldenRing from "../images/eldenRing.png";
import forbiddenWest from "../images/forbiddenWest.png";
import mw2 from "../images/mw2.png";
import overwatch2 from "../images/overwatch2.png";
import ragnarok from "../images/ragnarok.png";
import valorant from "../images/valorant.png";

const findOnClick = () => {
  window.location = "/genres";
};

function UserPage({ user, myGames }) {
  return (
    <>
      <div className="user-page">
        <div className="profile">
          <img src={user.photoURL} alt="profile photo" />
          <h1 className="bold">{user.displayName} </h1>
        </div>
        <div className="my-games">
          {/* add background imgs */}
          {/* fetch data from database */}
          <h1 className="bold">MY GAMES</h1>
          {!myGames ? (
            <div>
              <h2 className="no-games"> liked games will show up here</h2>
              {/*<h2 className="no-games"> you have not liked any games</h2>*/}
              <button onClick={findOnClick} className="find-games-button">
                Find a Game
              </button>
            </div>
          ) : (
            <div className="liked-games">
              <div className="cover-images">
                <img src={overwatch2} className="image" alt="Overwatch2" />
                <img src={valorant} className="image" alt="Valorant" />
                <img src={mw2} className="image" alt="Modern Warfare 2" />
                <img
                  src={ragnarok}
                  className="image"
                  alt="God of War: Ragnarok"
                />
                <img
                  src={forbiddenWest}
                  className="image"
                  alt="Horizon: Forbidden West"
                />
                <img src={eldenRing} className="image" alt="Elden Ring" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserPage;
