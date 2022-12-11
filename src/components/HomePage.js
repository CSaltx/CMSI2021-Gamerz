import React from "react";
import Home from "./Home";
import GameOfTheYear from "./GameOfTheYear";
import Descriptor from "./Descriptor";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home">
        <Home />
      </div>
      <div className="goty">
        <GameOfTheYear />
      </div>
      <div className="descriptor">
        <Descriptor />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
