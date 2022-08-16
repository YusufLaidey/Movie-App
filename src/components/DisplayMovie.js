import React from "react";
import Image from "./Image";

const DisplayMovie = ({ value }) => {
  return (
    <div className="d">
      <Image url={value} />
      <div className="movie-details">
        <h3>Title: {value.original_title}</h3>
        <p>Overview: {value.overview}</p>
        <p>Language: {value.original_language}</p>
        <p>Release_Date: {value.release_date}</p>
        <p>Ratings: {value.vote_average}</p>
      </div>
    </div>
  );
};

export default DisplayMovie;
