import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const GenreDisplay = () => {
  const params = useParams();
  const genre = params.query;
  const [genres, setGenres] = useState();

  const fetching = (urlExtension) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://rawg-video-games-database.p.rapidapi.com/${urlExtension}?key=${API_KEY}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f775d4cdacmshde98a298a5737b2p10f444jsn13cdff795cc0",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        setGenres(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetching(`genres`);
  }, []);

  useEffect(() => {
    console.log(genres);
  });

  return (
    <div className="article-content">
      {genres?.results ? (
        <ul className="game-list">
          {genres.results[genre].games.map((obj, index) => (
            <div key={index} className="card">
              <div id="image"></div>
              <div id="info">
                <h3 className="black">{obj.name}</h3>
                <Link to={`/game/${obj.slug}`}>
                  <button id="genre-btn">View</button>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default GenreDisplay;
