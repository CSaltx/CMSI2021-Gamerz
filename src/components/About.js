import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h4 className="bold red">YOUR NEW FAVORITE TEAM</h4>
      <div id="content">
        <h1 className="white bold team">
          We are a team of <span className="red">GAMERZ</span> here for you
        </h1>
        <p className="white bold">
          We know the feeling of having no game to play...a desire that you
          don't know how to quench!
        </p>
      </div>
      <div className="about-page">
        <div>
          <i class="fa-solid fa-earth-americas white"></i>
          <p className="red bold">Background</p>
          <p className="white">
            We all come from a variety of backgrounds,
            <br /> here to support you
          </p>
        </div>
        <div className="style">
          <i class="fa-regular fa-face-smile-beam"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
