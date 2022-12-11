import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Article from "./components/Article";
import Genres from "./components/Genres";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [searching, setSearching] = useState(false);
  const [article, setArticle] = useState(null);
  const [info, setInfo] = useState({});
  const [games, setGames] = useState({});

  const fetching = (urlExtension, setData) => {
    const API_KEY = "ed4d749789a64b878e8ab911afbb925c"; // add to env here
    const url = `https://rawg-video-games-database.p.rapidapi.com/${urlExtension}?key=${API_KEY}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1a9825ff6emshff21bdc09edce87p1c3972jsn07abe3462b5f",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  };

  // window.onload = function () {
  //   if (localStorage.getItem("hasCodeRunBefore") === null) {
  //     fetching("games", setGames);
  //     localStorage.setItem("hasCodeRunBefore", true);
  //   }
  // };

  return (
    <Router>
      <div className="main-page">
        <div className="nav">
          <Nav setSearching={setSearching} info={info} fetching={fetching} />
        </div>
        {!searching ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/genres" element={<Genres />} />
          </Routes>
        ) : !article ? (
          <div className="results">
            <h1>Hello YOU MADE IT</h1>
          </div>
        ) : (
          <div className="result-article">
            <Article data={article} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
