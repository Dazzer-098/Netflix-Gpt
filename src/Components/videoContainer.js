import React from "react";

import useTrailerFetch from "../hooks/useTrailerFetch";
import { useSelector } from "react-redux";

const BackgroundVideo = ({ movieId }) => {
  const trailer = useSelector(function (store) {
    return store?.LatestMovies?.nowPlayingTrailer;
  });

  useTrailerFetch(movieId);

  return (
    <div className="">
      <iframe
        className=" w-full aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?si=ljbInNTamjWuWXXU&autoplay=1&mute=1&controls=0&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
