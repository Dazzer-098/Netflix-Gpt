import React from "react";
import { API_options } from "../utility/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utility/LatestMoviesSlice";

const useTrailerFetch = (value) => {
  const dispatch = useDispatch();
  const GetTrailer = async function () {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + value + "/videos?language=en-US",
      API_options
    );
    const json = await data.json();

    const Trailer = json.results.filter(function (i) {
      if (i.type === "Trailer") return i;
    });
    const filterTrailer = Trailer.length ? Trailer[0] : json.results[0];

    dispatch(addTrailer(filterTrailer));
  };
  useEffect(function () {
    GetTrailer();
  }, []);
};

export default useTrailerFetch;
