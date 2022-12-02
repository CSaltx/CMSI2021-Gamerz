import React from "react";

const GameOfTheYear = ({ fetch }) => {
  return (
    <div>
      <div className="gotys">
        Games of the <span className="red">Year</span>
      </div>
      <div className="games">
        {/* {fetch("games").map((key, value) => (
          <div className="image" key={key}>
            <img src="#"></img>
            get value.image when calling fetchGames with correct url extension
        )) */}
      </div>
    </div>
  );
};

export default GameOfTheYear;
