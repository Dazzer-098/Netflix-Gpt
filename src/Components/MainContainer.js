import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import playButton from "../images/play.png";
import BackgroundVideo from "./videoContainer";

const MainContainer = () => {
  const [display, setDisplay] = useState();

  useEffect(function () {
    setTimeout(function () {
      setDisplay("hidden");
    }, 2000);
  }, []);

  const movieList = useSelector(function (store) {
    return store.LatestMovies.nowPlaying;
  });
  const randomNumber = useSelector(function (store) {
    return store.LatestMovies.randomMovies;
  });
  //
  if (!movieList) {
    return;
  }
  // const randomNumber = ;
  const { title, overview, id } = movieList[randomNumber];
  //

  return (
    <div className=" ">
      <div className="absolute z-0 w-full aspect-video   bg-gradient-to-r from-black pt-[35%]">
        <p className=" pl-12 text-7xl text-white font-bold ">{title}</p>
        <p className={"pl-12 w-[50%] mt-4 text-white font-semibold text-base"}>
          {overview}
        </p>
        <div className=" pl-12 mt-6  flex gap-4 ">
          <button className="flex items-center justify-center test-black font-semibold flex w-[15%] rounded-md text-xl  bg-gray-700 ">
            <img src={playButton} className="w-5 m-2" alt="playIcon" />
            play
          </button>
          <button className=" test-black font-semibold rounded-md p-4 w-[20%] bg-gray-700">
            More Info
          </button>
        </div>
      </div>
      <div className="">
        <BackgroundVideo movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
