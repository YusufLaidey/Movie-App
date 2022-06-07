import React from "react";

function Image({ url }) {
  return (
    <div className="d">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w300/${url.poster_path}`}
          width="200"
          height="250"
        />
      </div>
    </div>
  );
}

export default Image;
