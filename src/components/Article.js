import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../services/authService";

const LikeOnClick = () => {
  const user = useAuthentication();
  // add game to db
};

const Article = () => {
  const params = useParams();
  const [info, setInfo] = useState({});

  const fetching = (urlExtension) => {
    const API_KEY = "1fc9d744ff1c4500a96bcd1495506802"; // add to env here
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
        setInfo(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetching(`games/${params.query}`);
  }, []);

  useEffect(() => {
    console.log(info);
  });

  return (
    <>
      {info?.redirect === true ? (
        <div className="redirect">
          Cannot find the game, did you mean "{info.slug}"?
        </div>
      ) : (
        <>
          <div className="article-content">
            <div className="article-heading">
              <h1 className="bold red">{info.name}</h1>
              <p>Released: {info.released}</p>
            </div>
            <div className="article-image">
              <img
                className="article-img"
                src={info.background_image}
                alt="article-image"
                aria-hidden="true"
              />
            </div>
            <div>
              <p>{info.description_raw}</p>
              {/* <p className="bold red">
                Genres:{" "}
                {info.genres.map((obj, index) => (
                  <span key={index}>{obj.name} </span>
                ))}
              </p> */}
              <p>Twitch Count: {info.twitch_count}</p>
              <p>
                Website: <a href={info.website}>Click Here</a>
              </p>
              <p>Metacritic Score: {info.metacritic}</p>
            </div>
            <button onClick={LikeOnClick} className="like-button">
              <i className="fa-solid fa-heart fa-2x"></i>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Article;
