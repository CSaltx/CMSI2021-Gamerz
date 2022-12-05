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
      <div className="bottom-portion"></div>
    </div>
  );
};

export default Footer;
