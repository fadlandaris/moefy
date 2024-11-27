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
    <main >
      <Swiper modules={[Navigation, Pagination]} breakpoints={{ 425: {slidesPerView: 1,}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 3,}, 1700: {slidesPerView: 4,}}} spaceBetween={30}  >
        {movieDataByGenres.slice(0, 7).map((item, i) => (
          <SwiperSlide key={i} >
             <Link to={`/movie/${item.id}-${slugify(item.original_title || item.original_name)}`}>
              <div className="relative group transition-all duration-500 cursor-pointer overflow-hidden ">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className="w-full h-full object-cover " />
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute inset-0 flex justify-center items-center bg-neutral-950 bg-opacity-80">
                  Read Now
                </div>
                </div>
                <div className="flex justify-start gap-x-4 items-start">
                  <div className=" ">
                    <div className="w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full">
                      <img src={IMAGE_BASE_URL + item.poster_path} alt="" className="w-full h-ful object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className='font-semibold  opacity-100'>{item.title}</p>
                    <p className="text-text text-[12px] ">{item.overview.split(' ').slice(0, 6).join('  ')}</p>
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
