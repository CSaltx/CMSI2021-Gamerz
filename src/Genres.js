function Genres(){
    const API_KEY = "ed4d749789a64b878e8ab911afbb925c";
    const url = `https://rawg-video-games-database.p.rapidapi.com/genres?key=${API_KEY}`;
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
      return (
        <>
          <div className="id">
            <Nav />
          </div>
        </>
      );
}