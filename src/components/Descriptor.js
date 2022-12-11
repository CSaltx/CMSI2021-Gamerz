import React from "react";

const Descriptor = () => {
  return (
    <div className="descriptor-page">
      <div className="descriptor-content">
        <p className="bold red gamerz">Gamerz</p>
        <h3 className="analytics-title">
          Analytics for your favorite games
          <br /> Anytime, Anywhere.
        </h3>
        <h5 className="analytics-subtitle">
          We offer end users with opportunities beyond gaming to help you
          improve and expand your gaming experience.
        </h5>
        <div className="list-items">
          <div className="list-item">
            <h3>New Games</h3>
            <p>
              Extraordinary games from your favorite genres,
              <br />
              made for you
            </p>
          </div>
          <div className="list-item">
            <h3>Highest Rated Games</h3>
            <p>
              Game of the year, new games every year based
              <br />
              off of gathered statistics
            </p>
          </div>
          <div className="list-item">
            <h3>Modern Imagination</h3>
            <p>
              Modern usage of API to provide up-to-date
              <br />
              information with real-time updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptor;
