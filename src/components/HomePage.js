import React, { useRef } from "react";
import Home from "./Home";
import GameOfTheYear from "./GameOfTheYear";
import Descriptor from "./Descriptor";
import Footer from "./Footer";
import useScrollSnap from "react-use-scroll-snap";

const HomePage = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20, delay: 0 });

  return (
    <div className="home-page" ref={scrollRef}>
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
