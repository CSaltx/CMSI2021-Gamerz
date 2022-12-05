import React from "react";

const GameOfTheYear = ({ fetch }) => {
  const games = fetch("games");
  return (
    <div>
      <div className="gz bold">
        G<span className="red">Z</span>
      </div>
      <div className="gotys">
        Games of the <span className="red">Year</span>
      </div>
      <div className="games">
        {/* {games.results.map((value, index) => (
          <div className="image">
            <img src="#" />
            <p></p>
            {/* get value.image when calling fetchGames with correct url extension
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default GameOfTheYear;
