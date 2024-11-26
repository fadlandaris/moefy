import React, { useEffect, useState } from "react";
import Api from "../service/Api";
import { AxiosResponse } from "axios";
import { MovieTypes } from "../types/type";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import { slugify } from "../utils/Slugify";
import { Heart } from "phosphor-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface dataProps {
  genreId: number;
}

const MovieCard: React.FC<dataProps> = ({ genreId }) => {
  const [movieDataByGenres, setMovieDataByGenres] = useState<MovieTypes[]>([]);

  const getMovieByGenreId = async (genreId: number): Promise<void> => {
    try {
      const resp: AxiosResponse = await Api.getMovieByGenreId(genreId);
      const movieData = resp.data.results;
      setMovieDataByGenres(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieByGenreId(genreId);
  }, [genreId]);

  // console.log(movieDataByGenres)
  
  return (
    <main className="">
      <Swiper modules={[Navigation, Pagination]} slidesPerView={3} className="h-full">
        {movieDataByGenres.slice(0, 7).map((item, i) => (
          <SwiperSlide key={i}>
             <Link to={`/movie/${item.id}-${slugify(item.original_title || item.original_name)}`}>
              <div className="rounded-3xl p-4 hover:p-0 transition-all duration-500 cursor-pointer overflow-hidden ">
                <div className="mb-4 overflow-hidden rounded-3xl">
                  <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="flex justify-start gap-x-4 items-start py-2 ">
                  <div className=" ">
                    <div className="w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full">
                      <img src={IMAGE_BASE_URL + item.poster_path} alt="" className="w-full h-ful object-cover" />
                    </div>
                  </div>
                  <div>
                  <div className=" flex items-center gap-x-2 mb-2 ">
                    <div className="p-1 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-950 text-red-400 text-[12px]"><Heart weight="fill"/></div>
                    <p className="opacity-70 text-[12px]">{item.vote_average.toFixed(1)}</p>
                  </div>
                    <p className='font-semibold mb-2'>{item.original_title}</p>
                    <p className="text-text text-[12px] mb-2">{item.overview.split(' ').slice(0, 9).join(' ')}</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default MovieCard;
