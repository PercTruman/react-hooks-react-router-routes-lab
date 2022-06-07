import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) => (
    
    <div key={movie.title}>
     <h3>Name: {movie.title}</h3>
      <h4>Time: {movie.time}</h4>
      <h4>Genres:</h4>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
