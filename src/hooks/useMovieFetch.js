import React from "react";
import { useEffect } from "react";
import { API_options } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../utility/LatestMoviesSlice";

const useMovieFetch = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    async function fetchMovieData() {
      const movieData = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_options
      );
      const json = await movieData.json();
      dispatch(addMovies(json.results));
    }
    fetchMovieData();
  }, []);
};

export default useMovieFetch;
