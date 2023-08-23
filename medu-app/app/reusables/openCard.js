import React from "react";
import Image from "next/image";

function OpenCard(props) {
  const url = props.data.images["Poster Art"].url;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={props.onClick}
    >
      <div className="flex items-center lg:top-[20%] lg:right-[20%] md:h-[500px] md:w-[900px] xs:w-52 xs:h-60 bg-gradient-radial from-teal-600 to-neutral-950 rounded-md">
        <div className="w-1/3 h-5/6 bg-slate-300 m-5 rounded-xl relative">
            <Image
            className="z-1 absolute backface-hidden h-full w-full rounded-md opacity-40 group-hover:opacity-80 group-hover:border-white group-hover:border"
            width={props.data.images["Poster Art"].width}
            height={props.data.images["Poster Art"].height}
            src="https://www.altavod.com/assets/images/poster-placeholder.png"
            alt="Photo de peliculas" // Handle image load error
            />
          <Image
            className="absolute rounded-lg backface-hidden h-full w-full"
            width={props.data.images["Poster Art"].width}
            height={props.data.images["Poster Art"].height}
            src={url}
            alt={props.data.title}
          />
        </div>
        <div className="flex w-[55%] flex-col self-start mt-8">
          <h2 className="text-4xl font-extrabold md:text-xl">{props.data.title}</h2>
          <h5 className="text-base font-thin md:text-xs">{props.data.releaseYear}</h5>
          <h5 className="text-base font-thin md:text-xs">{props.data.programType}</h5>
          <h4 className="text-2xl pt-16 font-light md:text-sm">Description</h4>
          <p className="text-base font-normal md:text-xs">
            {props.data.description}
          </p>
        </div>
        <button
          onClick={props.onClick}
          className="self-start m-5 hover:text-teal-400"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default OpenCard;
