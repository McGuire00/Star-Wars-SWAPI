import React from "react";

import "./MovieList.css";
import Movie from "../Movie/Movies";


function MovieList(props) {
  return (
    <div className="MovieList">
      {props.movieList.map((movie) => {
        return (
          <Movie
            movieList={movie}
            key={movie["episode_id"]}
            image={props.imageList}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
