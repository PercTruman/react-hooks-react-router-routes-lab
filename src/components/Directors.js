import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director)=>(
    <div>
      <h3>Name: {director.name}</h3>
      <h4>Movies:</h4>
      <ul>{director.movies.map(movie=><li key={movie}>{movie}</li>)}</ul>
    </div>
  ))

    return (
        <div>
            <h1>Directors Page</h1>
            {directorsList}
        </div>
        )
}

export default Directors;
