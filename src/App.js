import { useState } from "react";

import content from "./Data.json";
import DisplayMovie from "./components/DisplayMovie";
import MovieList from "./components/MovieList";
import "./Style.css";

const App = () => {
  const [movies, setMovies] = useState(content.results);
  const [currentMovie, setCurrentMovie] = useState(movies[0]);
  //const filterByText = (t) => t.original_title;
  const filterValue = (t) => {
    return t.original_title.toLocaleLowerCase().indexOf(filterStr) >= 0;
  };
  //console.log(currentMovie);
  // Map your React Components in app.
  return (
    <div className="d">
      <div>
        <h3 className="lk">Movie App</h3>
        {/* <SearchBar value={filterStr} onCh={setFilterStr} /> */}
        <div className="d">
          <div>
            <MovieList
              movies={movies.filter(filterValue)}
              setCurrentMovie={setCurrentMovie}
              currentMovie={currentMovie}
            />
          </div>
          <div>
            <DisplayMovie value={currentMovie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
