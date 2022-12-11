import React from "react";
import wraith from "../images/wraith.png";

const aboutOnClick = () => {
  window.location = "/about";
};

const startedOnClick = () => {
  window.location = "/genres";
};

const Home = () => {
  return (
    <>
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
            <button onClick={aboutOnClick} className="about-button">
              About Us
            </button>
            <button onClick={startedOnClick} className="started-button">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={wraith} alt="" />
      </div>
    </>
  );
};

export default Home;
