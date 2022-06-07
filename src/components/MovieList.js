import React from "react";
import { Fragment } from "react";

import "../Style.css";
const MovieList = ({ movies, setCurrentMovie, currentMovie }) => {
  //   const displayHandler = (display) => {};
  return (
    <Fragment>
      {movies.map((movie) => {
        return (
          <div className="dc btn" key={movie.id}>
            <button
              className={currentMovie.id === movie.id ? "content-color" : ""}
            >
              <div
                className="App btn-1"
                onClick={(event) => {
                  setCurrentMovie(movie);
                }}
              >
                {movie.original_title}{" "}
              </div>
            </button>
          </div>
        );
        //   displayHandler(movie);
      })}
    </Fragment>
  );
};

export default MovieList;
