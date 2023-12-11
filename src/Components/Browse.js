import React from "react";

import BrowseHeader from "./BrowseHeader";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MainContainer from "./MainContainer";

import useMovieFetch from "../hooks/useMovieFetch";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import GptSearch from "./GptSearch";

const Browse = () => {
  const Toggledata = useSelector(function (store) {
    return store.GptSearchToggle.toggle;
  });
  useMovieFetch();
  usePopular();

  return (
    <div className=" text-sm ">
      <BrowseHeader />
      {Toggledata ? (
        <GptSearch />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
