import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import GameOfTheYear from "./components/GameOfTheYear";
import Descriptor from "./components/Descriptor";
import Footer from "./components/Footer";

function App() {
  const [searching, setSearching] = useState(false);
  const [article, setArticle] = useState(null);

  const fetching = (urlExtension) => {
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
        console.log(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="main-page">
      <div className="nav">
        <Nav setSearching={setSearching} fetching={fetching} />
      </div>
      {!searching ? (
        <div className="home-page">
          <div className="home">
            <Home />
          </div>
          <div className="goty">
            <GameOfTheYear fetch={fetching} />
          </div>
          <div className="descriptor">
            <Descriptor />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : !article ? (
        <div className="results">
          <h1>Hello YOU MADE IT</h1>
        </div>
      ) : (
        <div className="result-article"></div>
      )}
    </div>
  );
}

export default App;
