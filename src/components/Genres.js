import fps from "../images/fps.png";
import sandbox from "../images/sandbox.png";
import moba from "../images/moba.png";
import rpg from "../images/rpg.png";
import sports from "../images/sports.png";
import puzzle from "../images/puzzle.png";
import React from "react";
import { Link } from "react-router-dom";

export function Genres() {
  return (
    <>
      <div className="genre-list">
        <h1 className="">Genres</h1>
        <div className="genre-img">
          <Link to="/genre/5">
            <div className="fps">
              <img className="genreImg" src={fps} alt="FPS games" />
              <h4 className="centered-text">FPS</h4>
            </div>
          </Link>
          <Link to="/genre/10">
            <div className="sandbox">
              <img className="genreImg" src={sandbox} alt="Sandbox games" />
              <h4 className="centered-text">Adventure</h4>
            </div>
          </Link>
          <Link to="/genre/0">
            <div className="moba">
              <img className="genreImg" src={moba} alt="MOBA games" />
              <h4 className="centered-text">MOBA</h4>
            </div>
          </Link>
          <Link to="/genre/3">
            <div className="RPG">
              <img className="genreImg" src={rpg} alt="RPG games" />
              <h4 className="centered-text">RPG</h4>
            </div>
          </Link>
          <Link to="/genre/13">
            <div className="Sports">
              <img className="genreImg" src={sports} alt="Sports games" />
              <h4 className="centered-text">Sports</h4>
            </div>
          </Link>
          <Link to="/genre/8">
            <div className="Puzzle">
              <img className="genreImg" src={puzzle} alt="Puzzle games" />
              <h4 className="centered-text">Puzzle</h4>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Genres;
