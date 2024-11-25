import { useState } from "react"
import { genres } from "../data/data"
// import Api from "../service/Api";
// import { AxiosResponse } from "axios";
import MovieCard from "./MovieCard";

const GenreLists = () => {
  const [genresData] = useState(genres)

  return (
    <main>
      {genresData.slice(0, 10).map((item, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-2xl">{item.genre}</h2>
          <p className="text-text mb-6 " >{item.title}</p>
          <MovieCard genreId={item.id}/>
        </div>
      ))}
    </main>
  )
}

export default GenreLists