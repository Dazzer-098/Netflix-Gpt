import React from "react";

import BrowseHeader from "./BrowseHeader";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MainContainer from "./MainContainer";
import MovieList from "./MovieList";
import useMovieFetch from "../hooks/useMovieFetch";

const Browse = () => {
  const userdata = useSelector(function (store) {
    return store.userInfo;
  });
  useMovieFetch();

  return (
    <div className=" text-sm ">
      <BrowseHeader />
      <div>
        <MainContainer />
        <MovieList />
      </div>
    </div>
  );
};

export default Browse;
