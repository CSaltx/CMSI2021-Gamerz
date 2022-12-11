import React from "react";
import eldenRing from "../images/eldenRing.png";
import forbiddenWest from "../images/forbiddenWest.png";
import mw2 from "../images/mw2.png";
import overwatch2 from "../images/overwatch2.png";
import ragnarok from "../images/ragnarok.png";
import valorant from "../images/valorant.png";

const GameOfTheYear = () => {
  return (
    <div>
      <div className="gz bold">
        G<span className="red">Z</span>
      </div>
      <div className="gotys">
        Games of the <span className="red">Year</span>
      </div>
      <div className="games">
        <div className="images">
          <img src={overwatch2} className="image" alt="Overwatch2" />
          <img src={valorant} className="image" alt="Valorant" />
          <img src={mw2} className="image" alt="Modern Warfare 2" />
          <img src={ragnarok} className="image" alt="God of War: Ragnarok" />
          <img
            src={forbiddenWest}
            className="image"
            alt="Horizon: Forbidden West"
          />
          <img src={eldenRing} className="image" alt="Elden Ring" />
        </div>
      </div>
    </div>
  );
};

/* Code for using API to import game of the year:
{games?.results &&
          games.results.map((value, index) => (
            <div className="images" key={index}>
              {value.background_image && (
                <img
                  src={value.background_image}
                  className="image"
                  alt={value.name}
                />
              )}
            </div>
          ))}
          */
export default GameOfTheYear;
