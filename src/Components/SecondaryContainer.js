import React from "react";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  return (
    <div className="bg-black text-white">
      <MovieList title="Now Playing" data="nowPlaying" />
      <MovieList title="Popular" data="popular" />
      <MovieList title="Now Playing" data="nowPlaying" />
      <MovieList title="Now Playing" data="nowPlaying" />
      <MovieList title="Now Playing" data="nowPlaying" />
    </div>
  );
};

export default SecondaryContainer;
