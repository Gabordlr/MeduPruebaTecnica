import Image from "next/image";

function Card(props) {
  const shortDescription = props.data.description
    ? props.data.description.substring(0, 32) + "..."
    : "";

  const shortTitle =
    props.data.title.length >= 15
      ? props.data.title.substring(0, 15) + "..."
      : props.data.title;

  const handleButtonClick = () => {
    props.onClick(props.data);
  };

  return (
    <div
      onClick={handleButtonClick}
      className="flex flex-col h-52 w-40 rounded-md relative group"
    >
      <Image
        className="z-1 absolute backface-hidden h-full w-full rounded-md opacity-20 group-hover:opacity-80 group-hover:border-white group-hover:border"
        width={props.data.images["Poster Art"].width}
        height={props.data.images["Poster Art"].height}
        src="https://www.altavod.com/assets/images/poster-placeholder.png"
        alt="Photo de peliculas" // Handle image load error
      />
      <Image
        className="z-5 absolute backface-hidden h-full w-full rounded-md opacity-50 group-hover:opacity-80 group-hover:border-white group-hover:border"
        width={props.data.images["Poster Art"].width}
        height={props.data.images["Poster Art"].height}
        src={props.data.images["Poster Art"].url}
        alt={props.data.title}
      />
      <h1 className="font-thin text-2xl z-5 m-5 group-hover:hidden">{shortTitle}</h1>
      <div className="font-medium text-sm m-3 group-hover:hidden">{shortDescription}</div>
    </div>
  );
}

export default Card;