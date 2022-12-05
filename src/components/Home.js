import React from "react";

const Home = () => {
  return (
    <div>
      <div className="content">
        <p className="red-subtext">EVOLVE YOUR PLAYSTYLE</p>
        <h1 className="bold-title">
          Find Games <br />
          for <span className="bold">you</span>
        </h1>
        <p className="subtext">
          At Gamerz, we will help you find your next
          <br /> game, your new playstyle, the new{" "}
          <span className="bold">YOU</span>.
        </p>
        <div className="buttons">
          <button className="about-button">About Us</button>
          <button className="started-button">Get Started</button>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default Home;
