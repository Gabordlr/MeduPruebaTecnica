import Card from '../reusables/card'
import OpenCard from './openCard'
import entries from '../content/sample.json'
import { useState} from 'react'

function ContentVal(props) {
    const arr =  entries.entries // convert object to array to be able to map it

    const [isFilm, setIsFilm] = useState(false); // Bolean to check if a film is chosen
    const [chosenFilm, setChosenFilm] = useState(entries.entries[0]); // Film that is chosen

    const [numResu, setNumResu] = useState(0); // Number of results

    // Function to choose a film
    const chooseFilm = (film) => {
      setIsFilm(true); // Set isFilm to true
      setChosenFilm(film); // Set chosenFilm to the film that was clicked
    }

    const unChooseFilm = () => {
      setIsFilm(false); // Set isFilm to false to close the film
    }

    const handleButtonClickRight = () => {
      if (numResu < filArr.length-20)
      setNumResu(numResu+20); // change offset to show next 20 results
    };

    const handleButtonClickLeft = () => {
      if (numResu > 0)
        setNumResu(numResu-20); //  change offset to show previous 20 results
    };


    // Filter the array to only include the entries that match the filters
    const filArr = arr.filter((entry) => ((entry.programType === props.category || props.category === "both") && entry.releaseYear >= props.year && entry.title.includes(props.searchQuery)))

    // Sort the array alphabetically
    filArr.sort((a, b) => a.title.localeCompare(b.title));
    
    
  return (
    <div className='flex flex-col items-center bg-green'>
    <div className='grid lg:grid-cols-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-10 w-full p-5'>
            {/* this functions display all the elements in cunks of 20 elements*/}
            {filArr.slice(numResu, numResu+20).map((entry) => (
                <Card 
                    key={entry.id}
                    data={entry}
                    onClick={() => chooseFilm(entry)}
                />
                
            ))}
      </div>
      <div className='self-start px-10'>
        <button onClick={handleButtonClickLeft} className='w-10'>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        </button>
        <button onClick={handleButtonClickRight} className='w-10'>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      {isFilm ? <OpenCard 
                data={chosenFilm} 
                onClick={unChooseFilm}
                /> : <></>}
    </div>
  )
}

export default ContentVal