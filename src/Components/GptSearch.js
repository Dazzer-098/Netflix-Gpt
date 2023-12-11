import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { language } from "../utility/constant";

const GptSearch = () => {
  const languageChange = useSelector(function (store) {
    return store.GptSearchToggle.toggleLanguage;
  });

  // const data = language.filter(function (i) {
  //   return i.value == languageChange;
  // });
  // console.log(data[0].placeholderLang);

  return (
    <div className="flex  h-full">
      <img
        className="absolute h-screen w-screen -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="netflixbg-Img"
      />
      <div className=" pt-[20%] flex justify-center w-full">
        <form className="flex gap-1 w-[50%] h-20 bg-black p-2 bg-opacity-70 grid grid-cols-12">
          <input
            type="text"
            className="col-span-8 p-2 text-xl "
            placeholder={language[languageChange].placeholderLang}
          />
          <button className="bg-slate-800 text-white text-xl hover:bg-black col-span-4">
            {language[languageChange].SearchButtonLang}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
