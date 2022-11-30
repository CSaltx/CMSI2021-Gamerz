import React from "react";

const GameOfTheYear = ({ fetchGames }) => {
  return (
    <div>
      <div className="gotys">
        Games of the <span className="red">Year</span>
      </div>
      <div className="games">
        {fetchGames().map((key, value) => (
          <div className="image" key={key}>
            <img src="#"></img>
            {/* get value.image when calling fetchGames with correct url extension */}
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameOfTheYear;
