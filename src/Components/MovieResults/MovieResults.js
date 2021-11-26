import React from "react";

import "./MovieResults.css";
import MovieList from "../MovieList/MovieList";

function MovieResults(props) {
  return (
    <div className="SearchResults">
      <MovieList
        movieList={props.movieResults}
        imageList={props.imageResults}
      />
    </div>
  );
}

export default MovieResults;
