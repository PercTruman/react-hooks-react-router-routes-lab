import React from "react";
import { movies } from "../data";

function Movies() {
  // const allGenres = movies.map((movie)=>movie.genres)
  // const individualGenres = allGenres.map(group=><ul>{group}</ul>)
  // const  genres   =individualGenres.map(genre=><li>{genre}</li>)

  const movieList = movies.map((movie) => (
    <div>
      <h3>Name: {movie.title}</h3>
      <h4>Time: {movie.time}</h4>
       <h4>Genres:</h4>
      <ul>{movie.genres.map(genre=><li>{genre}</li>)}</ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{movieList}</div>
    </div>
  );
}

export default Movies;
