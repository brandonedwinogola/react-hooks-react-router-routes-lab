import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
  <div>
    title: "Doctor Strange",
    time: 115,
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Fantasy</li>
    </ul>
  </div>
  <div>
    title: "Trolls",
    time: 92,
    <ul>
      <li>Animation</li>
      <li>Adventure</li>
      <li>Comedy</li>
      <li>Family</li>
      <li>Fantasy</li>
    </ul>
  </div>
  <div>
    title: "Jack Reacher: Never Go Back",
    time: 118,
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Crime</li>
      <li>Mystery</li>
      <li>Thriller</li>
    </ul>
  </div>
  </div>;
}

export default Movies;
