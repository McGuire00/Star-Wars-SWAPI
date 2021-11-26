import React, { useState, useEffect } from "react";

import "./App.css";
import MovieResults from "../MovieResults/MovieResults";

function App(props) {
  const [movie, setMovie] = useState([]);

  const images = {
    1: "/Star-Wars-Phantom-Menace.jpeg",
    2: "/Star-Wars-Attack-Clones.jpeg",
    3: "/Star-Wars-Revenge-Sith.jpeg",
    4: "/Star-Wars-New-Hope.jpeg",
    5: "/Star-Wars-The-Empire-Strikes-Back.jpeg",
    6: "/Star-Wars-Return-of-The-Jedi.jpeg",
  };

  useEffect(() => {
    const apiUrl = "https://swapi.dev/api/films/";

    fetch(apiUrl)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setMovie(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const testInfo = {
  //   starWars: [
  //     {
  //       id: "1",
  //       title: "A New Hope",
  //       director: "George Lucas",
  //       producer: "Gary Kurtz",
  //       "release date": "1977-05-25",
  //       characters: ["John", "Joe", "Jo", "Joo"],
  //       image: "/Star-Wars-New-Hope.jpeg",
  //     },
  //     {
  //       id: "2",
  //       title: "The Empire Strikes Back",
  //       director: "Irvin Kershner",
  //       producer: "Gary Kurtz",
  //       "release date": "1980-05-17",
  //       characters: ["John", "Joe", "Jo", "Joo"],
  //       image: "Star-Wars-Return-of-The-Jedi.jpeg",
  //     },
  //     {
  //       id: "3",
  //       title: "Return of the Jedi",
  //       director: "Richard Marquand",
  //       producer: "George Lucas",
  //       "release date": "1983-05-25",
  //       characters: ["John", "Joe", "Jo", "Joo"],
  //       image: "Star-Wars-The-Empire-Strikes-Back.jpeg",
  //     },
  //   ],
  // };

  return (
    <div>
      <h1>Star Wars</h1>
      <div className="App">
        <div className="App-playlist">
          <MovieResults
            // movieResults={testInfo.starWars}
            movieResults={movie}
            imageResults={images}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
