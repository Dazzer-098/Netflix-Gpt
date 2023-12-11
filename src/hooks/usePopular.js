import React from "react";
import { useEffect } from "react";
import { API_options } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addPopular } from "../utility/LatestMoviesSlice";

const usePopular = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    async function fetchMovieData() {
      const movieData = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_options
      );
      const json = await movieData.json();
      dispatch(addPopular(json.results));
    }
    fetchMovieData();
  }, []);
};

export default usePopular;
