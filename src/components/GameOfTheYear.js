import React from "react";

const GameOfTheYear = ({ games }) => {
  return (
    <div>
      <div className="gz bold">
        G<span className="red">Z</span>
      </div>
      <div className="gotys">
        Games of the <span className="red">Year</span>
      </div>
      <div className="games">
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
      </div>
    </div>
  );
};

export default GameOfTheYear;
