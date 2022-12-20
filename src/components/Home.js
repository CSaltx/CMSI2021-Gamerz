import React from "react";
import wraith from "../images/wraith.png";
import { Link } from "react-router-dom";

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
            <Link to="/about" className="link-btn">
              <button className="about-button">About Us</button>
            </Link>
            <Link to="/genres" className="link-btn">
              <button className="started-button">Get Started</button>
            </Link>
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
