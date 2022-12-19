import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthentication } from "../services/authService";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { db } from "../components/firebaseConfig";

const Article = () => {
  const params = useParams();
  const [info, setInfo] = useState({});
  const user = useAuthentication();

  const handleLike = async () => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      setDoc(
        userRef,
        { likedGames: arrayUnion(info.background_image) },
        { merge: true }
      )
        .then(console.log("Addition successful"))
        .catch((error) => console.error(error));
    } else {
      alert("Sign in to like a game!");
    }
  };

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
        setInfo(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetching(`games/${params.query}`);
  }, []);

  return (
    <>
      {info?.redirect === true ? (
        <div className="redirect">
          Cannot find the game, did you mean "{info.slug}"?
        </div>
      ) : info?.detail !== "Not found." ? (
        <>
          <div className="article-content">
            <div className="article-heading">
              <div className="flex">
                <h1 className="article-title">{info.name}</h1>
              </div>
            </div>
            <div>
            <div className="article-image">
              <img
                className="article-img"
                src={info.background_image}
                alt="article-image"
                aria-hidden="true"
              />
              <p className="article-release">Released: {info.released}</p>
            </div>
              <button onClick={handleLike} className="like-button">
                  <i className="fa-solid fa-heart fa-2x"></i>
              </button>
              <p className="add-to-library">Add to library</p>
            </div>
            
            <div className="article-description">
              <p className="description-article">{info.description_raw}</p>
              <p className="bold red">
                Genres:{" "}
                {info?.genres
                  ? info?.genres.map((obj, index) => (
                      <span key={index}>{obj.name} </span>
                    ))
                  : "Loading..."}
              </p>
              <p className="bold">Twitch Count: {info.twitch_count}</p>
              <p className="bold">
                Website: <a href={info.website}>Click Here</a>
              </p>
              <p className="bold">Metacritic Score: {info.metacritic}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="redirect">No results found.</div>
      )}
    </>
  );
};

export default Article;
