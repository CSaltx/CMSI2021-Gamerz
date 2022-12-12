import React from "react";
import eldenRing from "../images/eldenRing.png";
import forbiddenWest from "../images/forbiddenWest.png";
import mw2 from "../images/mw2.png";
import overwatch2 from "../images/overwatch2.png";
import ragnarok from "../images/ragnarok.png";
import valorant from "../images/valorant.png";

function UserPage({ userName, myGames }) {
  return (
    <>
      <div className="user-page">
        <h1 className="bold">{userName} </h1>
        <div className="my-games">
          <span className="bold">MY GAMES</span>
          <div className="games">
            <div className="images">
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
        </div>
      </div>
    </>
  );
}

export default UserPage;
