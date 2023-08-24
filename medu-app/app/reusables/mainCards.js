function MainCards(props) {
  
  // Handle button click
  const handleButtonClick = () => {
      props.onClick(); // Call parent function recieved as props
    };
  return (
      <div className="col-span-1 flex items-center w-full h-60" style={{ zIndex: 2 }}>
        {/* Card 1 */}
      <button onClick={handleButtonClick} className="perspective flex justify-center items-center h-full w-40 m-8 cursor-pointer group">
        <div className="flex justify-center items-end relative backface-hidden h-full w-full preserve-3d group-hover:my-rotate-y-180 duration-1000">
          <div className="absolute text-3xl z-50 font-bold pb-5">Peliculas</div>
          <img
            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioUPyn34M7Hc/v0/-1x-1.jpg"
            alt="Spanish"
            className="absolute backface-hidden h-full w-full opacity-60"
          />
          <div className="my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-bl from-neutral-300 to-neutral-700 flex flex-col justify-start">
            <p className="text-lg font-sans font-thin text-white mx-auto px-5 pt-5">¿Estas listo para vivir una experiencia única?</p>
            <svg fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"></path>
            </svg>
          </div>
        </div>
      </button>
      {/* Card 2 */}
      <button onClick={handleButtonClick} className="perspective flex justify-center h-full w-40 m-5 cursor-pointer group flex-col">
          <div
          className="flex justify-center items-end relative backface-hidden h-full w-full preserve-3d group-hover:my-rotate-y-180 duration-1000" > 
          <div className="absolute text-3xl z-50 font-bold pb-5"> Series </div>
              <img src="https://i.pinimg.com/1200x/df/b9/cb/dfb9cbff37218eaf4c6959de8803e838.jpg" 
              alt="English"
              className="absolute backface-hidden h-full w-full opacity-60" />
              <div onClick={handleButtonClick}  className="my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-bl from-neutral-300 to-neutral-700 flex flex-col justify-start">
              <p className="text-lg font-sans font-thin text-white mx-auto px-5 pt-5">¿Buscas comenzar una nueva aventura?</p>
              <svg fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"></path>
              </svg>
              </div>
          </div>
      </button>
  </div>
  )
}

export default MainCards