import { useState } from "react"
import { genres } from "../data/data"
import MovieCard from "./MovieCard";

const GenreLists = () => {
  const [genresData] = useState(genres)

  return (
    <main>
      {genresData.slice(0, 10).map((item, i) => (
        <div key={i} className="mb-6 md:mb-0">
          <h2 className="text-2xl mb-2">{item.genre}</h2>
          <p className="text-text md:mb-6 text-[14px]" >{item.title}</p>
          <div className='h-[2px] group-hover:opacity-0 group-hover:mt-0 transition-all duration-500 bg-gradient-to-r from-black to-neutral-950 rounded-full my-4 md:my-6'/>
          <MovieCard genreId={item.id}/>
        </div>
      ))}
    </main>
  )
}

export default GenreLists