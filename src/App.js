import "./App.css";
import { useEffect } from "react";
import Home from "../components/Home";

function App() {
  const API_KEY = "ed4d749789a64b878e8ab911afbb925c"; // add security here
  const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=${API_KEY}`;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1a9825ff6emshff21bdc09edce87p1c3972jsn07abe3462b5f",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <div className="nav">
        <Nav />
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="goty">
        <GameOfTheYear />
      </div>
      <div className="descriptor">
        <Descriptor />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

/* 
  


 */