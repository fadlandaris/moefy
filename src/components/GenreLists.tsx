import { useState } from "react"
import { genres } from "../data/data"
import MovieCard from "./MovieCard";

const GenreLists = () => {
  const [genresData] = useState(genres)

  return (
    <main>
      {genresData.slice(0, 10).map((item, i) => (
        <div key={i} className="mb-10 ">
          <h2 className="text-2xl mb-1">{item.genre}</h2>
          <p className="text-text mb-4 md:mb-6 text-[14px]" >{item.title}</p>
          <MovieCard genreId={item.id}/>
        </div>
      ))}
    </main>
  )
}

export default GenreLists