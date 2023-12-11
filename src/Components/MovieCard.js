import React from "react";
import { MoviesPosterPath } from "../utility/constant";

const MovieCard = ({ data }) => {
  const value = data.poster_path;
  //   console.log(value);
  return (
    <div className="MovieCard">
      <img src={MoviesPosterPath + value} alt="moviesCard" />
    </div>
  );
};

export default MovieCard;
