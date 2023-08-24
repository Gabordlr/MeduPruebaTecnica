import Card from '../reusables/card'
import OpenCard from './openCard'
import entries from '../content/sample.json'
import { useState} from 'react'

function ContentVal(props) {
    const arr =  entries.entries

    const [isFilm, setIsFilm] = useState(false);
    const [chosenFilm, setChosenFilm] = useState(entries.entries[0]);


    const chooseFilm = (film) => {
      console.log("Chosen Film:", film);
      setIsFilm(true);
      setChosenFilm(film);
    }

    const unChooseFilm = () => {
      setIsFilm(false);
    }
    console.log(chosenFilm)
  return (
    <div className='grid lg:grid-cols-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-10 w-full p-5'>
            {arr.filter((entry) => ((entry.programType === props.category || props.category === "both") && entry.releaseYear >= props.year && entry.title.includes(props.searchQuery))).map((entry) => (
                <Card 
                    key={entry.id}
                    data={entry}
                    onClick={() => chooseFilm(entry)}
                />
            ))}
      {isFilm ? <OpenCard 
                data={chosenFilm} 
                onClick={unChooseFilm}
                /> : <></>}
    </div>
  )
}

export default ContentVal