import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Article from "./components/Article";
import Genres from "./components/Genres";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import { auth } from "./components/firebaseConfig";
import { SignIn, SignOut, useAuthentication } from "./services/authService";

function App() {
  const [searching, setSearching] = useState(false);
  const [article, setArticle] = useState(null);
  const [info, setInfo] = useState({});
  const [games, setGames] = useState({});
  const user = useAuthentication();

  const fetching = (urlExtension, setData) => {
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
        setData(result);
      })
      .catch((err) => console.error(err));
  };

  const displayNav = () => {
    const nav = document.querySelector("div.nav.navArea");
    const navArea = document.querySelector("div.nav");
    if (nav.style.display === "none") {
      nav.style.display = "grid";
      nav.style.gridTemplateColumn = "repeat(3, 1vh)";
      nav.style.justifyItems = "center";
      nav.style.textAlign = "center";
      navArea.style.height = "60vh";
    } else {
      nav.style.display = "none";
      navArea.style.height = "14.2vh";
    }
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
          <button className="expand-button" onClick={displayNav}>
            <i className="fa-solid fa-bars fa-inverse fa-2x"></i>
          </button>
          {<Nav setSearching={setSearching} info={info} fetching={fetching} />}
        </div>
        {!searching ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/genres" element={<Genres />} />
            {!user ? (
              <Route path="/" element={<HomePage />} />
            ) : (
              <Route
                path="/user"
                element={<UserPage userName={auth.currentUser.displayName} />}
              />
            )}
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
