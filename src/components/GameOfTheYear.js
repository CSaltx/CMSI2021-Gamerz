import React from "react";

const GameOfTheYear = ({ fetch }) => {
  return (
    <div>
      <div className="gotys">
        Games of the <span className="red">Year</span>
      </div>
      <div className="games">
        {/* {fetch("games").map((value) => (
          <div className="image">
            <img src="#" />
            <p></p>
            {/*get value.image when calling fetchGames with correct url extension
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default GameOfTheYear;
