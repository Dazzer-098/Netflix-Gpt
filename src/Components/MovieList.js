import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title, data }) => {
  const NowPlayingMovies = useSelector(function (store) {
    return store.LatestMovies[data];
  });
  if (NowPlayingMovies == null) {
    return;
  }
  // console.log(movies[0].poster_path);
  return (
    <div className="overflow-hidden -mt-56 mb-56 relative z-10 pl-10">
      <h1 className="font-bold text-lg">{title}</h1>
      <div className="flex flex-col ml-3 overflow-scroll noScrollbar">
        <div className="flex gap-4">
          {NowPlayingMovies.map(function (movies) {
            return (
              <div>
                <MovieCard key={movies?.id} data={movies} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
