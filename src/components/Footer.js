import React from "react";

const Footer = () => {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-footer">
      <div className="top-portion">
        <h2>READY TO START A NEW GAME?</h2>
        <button onClick={top}>Take the First Step</button>
      </div>
      <div className="bottom-portion">
        <div className="info-section">
          <div className="gz white bold">
            G<span className="red">Z</span>
            <br />
            Gamerz
          </div>
          <div className="white">
            <h5 className="red bold">Who We Are?</h5>
            <h5 className="white bold">Jump to top</h5>
            <h5 className="white bold">About</h5>
          </div>
          <div className="white">
            <h5 className="red bold">Start the search</h5>
            <h5 className="white bold">Search</h5>
            <h5 className="white bold">Genres</h5>
          </div>
        </div>
        <div className="new-you">
          <h2 className="grey">Find the new you</h2>
          <h2 className="red bold">Enter a new generation!</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
