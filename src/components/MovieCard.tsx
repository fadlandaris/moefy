import React, { useEffect, useState } from "react";
import Api from "../service/Api";
import { AxiosResponse } from "axios";
import { MovieTypes } from "../types/type";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

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
      <Swiper modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={3} navigation className="h-full">
        {movieDataByGenres.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-lg p-4 hover:bg-gradient-to-b hover:from-secondary hover:to-neutral-950 transition-all cursor-pointer duration-500 overflow-hidden ">
              <div className="mb-4">
                <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className="w-full h-full object-cover rounded-lg " />
              </div>
              <div className="flex justify-start gap-x-4 items-start">
                <div className="col-span-1 ">
                  <div className="w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full">
                    <img src={IMAGE_BASE_URL + item.poster_path} alt="" className="w-full h-ful object-cover" />
                  </div>
                </div>

                <div>
                  <p className='font-medium mb-1'>{item.original_title}</p>
                  <p className='text-[12px] font-light text-text'>⭐ {item.popularity} . 📅 {item.release_date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default MovieCard;
