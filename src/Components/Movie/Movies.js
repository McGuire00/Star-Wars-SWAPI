import React from "react";

import "./Movie.css";

function Movie(props) {
  const imagePath = props.image[props.movieList["episode_id"]]
  return (
    <div className="Movie">
      <div className="Movie-Information">
        <div className="Movie-Item-1">
          <img
            src={imagePath}
            alt="#"
          />
        </div>
        <div className="Movie-Item-2">
          <h3>Star Wars: {props.movieList.title}</h3>
          <p>{props.movieList["release_date"]}</p>
          <p>Directed by: {props.movieList.director}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
