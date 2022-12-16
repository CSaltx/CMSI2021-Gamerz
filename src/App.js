import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Article from "./components/Article";
import Genres from "./components/Genres";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import { auth } from "./components/firebaseConfig";
import { SignIn, SignOut, useAuthentication } from "./services/authService";

function App() {
  const [searching, setSearching] = useState(false);
  const user = useAuthentication();

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

  return (
    <Router>
      <div className="main-page">
        <div className="nav">
          <button className="expand-button" onClick={displayNav}>
            <i className="fa-solid fa-bars fa-inverse fa-2x"></i>
          </button>
          {<Nav />}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:query" element={<Article />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/about" element={<About />}></Route>
          {!user ? (
            <Route path="/" element={<HomePage />} />
          ) : (
            <Route
              path="/user"
              element={<UserPage user={auth.currentUser} myGames={null} />}
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
