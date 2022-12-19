import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h4 className="bold white team">YOUR NEW FAVORITE TEAM</h4>
      <div id="content">
        <h1 className="white bold">
          We are a team of <span className="red">GAMERZ</span> here for you
        </h1>
        <p className="white bold">
          We know the feeling of having no game to play...a desire that you
          don't know how to quench!
        </p>
      </div>
      <div className="about-info">
        <div>
          <i className="fa-solid fa-earth-americas fa-6x white"></i>
          <p className="white bold">Background</p>
          <p className="white">
            We all come from a variety of backgrounds,
            <br /> here to support you
          </p>
        </div>
        <div>
          <i className="fa-regular fa-6x fa-face-smile-beam white"></i>
          <p className="white bold">Unique Tastes</p>
          <p className="white">
            We all grew up on different genres
            <br /> so why shouldn't you
          </p>
        </div>
        <div>
          <i className="fa-regular fa-lightbulb fa-6x white"></i>
          <p className="white bold">Creativity</p>
          <p className="white">
            As students, we thrive and imbue creativity
            <br /> in every product
          </p>
        </div>
      </div>
      <h2 className="white bold">
        As a gamer, we know the feeling <br /> so we{" "}
        <span className="red">FIXED IT</span>
      </h2>
    </div>
  );
};

export default About;
