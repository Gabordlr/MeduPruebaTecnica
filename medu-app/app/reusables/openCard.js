import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Animation


function OpenCard(props) { // Open card component
  const url = props.data.images["Poster Art"].url; // get image url

  // Animation
  const zoomInVariants = {
    hidden: { scale: 0.1, opacity: 0 }, // Initial state
    visible: { scale: 1, opacity: 1 },  // Final state
    transition: { // Transition
        type: "spring",
        damping: 30, // Slow down the animation
        delay: 0.5,
        duration: 1,
    },
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={props.onClick}
    >
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={zoomInVariants}
        className="flex md:flex-row xs:flex-col items-center lg:top-[20%] lg:right-[20%] md:h-[500px] md:w-[900px] xs:w-52 xs:h-96   bg-gradient-radial from-teal-600 to-neutral-950 rounded-md">
        <div className="md:w-1/3 h-5/6 bg-slate-300 m-5 rounded-xl relative xs:w-2/3">
            {/* Default Image*/}
            <Image
            className="z-1 absolute backface-hidden h-full w-full rounded-md opacity-40 group-hover:opacity-80 group-hover:border-white group-hover:border"
            width={props.data.images["Poster Art"].width}
            height={props.data.images["Poster Art"].height}
            src="https://www.altavod.com/assets/images/poster-placeholder.png"
            alt="Photo de peliculas" // Handle image load error
            />
            {/* Movie Image*/}
          <Image
            className="absolute rounded-lg backface-hidden h-full w-full "
            width={props.data.images["Poster Art"].width}
            height={props.data.images["Poster Art"].height}
            src={url}
            alt={props.data.title}
          />
        </div>
        <div className="flex w-[55%] flex-col self-start md:mt-8 xs:m-8">
          <h2 className="lg:text-5xl font-extrabold sm:text-xl">{props.data.title}</h2>
          <h5 className="lg:text-base font-thin sm:text-xs">{props.data.releaseYear}</h5>
          <h5 className="lg:text-base font-thin sm:text-xs">{props.data.programType}</h5>
          <h4 className="lg:text-2xl pt-16 font-light md:text-xs xs:hidden md:block">Description</h4>
          <p className="lg:text-base font-normal sm:text-xs xs:hidden md:block">
            {props.data.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default OpenCard;