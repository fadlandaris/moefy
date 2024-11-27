import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../service/Api";
import { AxiosResponse } from "axios";
import { MovieTypes } from "../types/type";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { HourglassSimple, Coins, Heart } from "phosphor-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const movieId = id?.split('-')[0];
  const [movieDataById, setMovieDataById] = useState<MovieTypes | null>(null);

  const getMovieById = async (movieId: string): Promise<void> => {
    try {
      const resp: AxiosResponse = await Api.getMovieDetailsById(parseInt(movieId));
      setMovieDataById(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieById(movieId);
    }
  }, [movieId]);

  if (!movieDataById) {
    return (
      <div className=" items-center h-screen gap-x-4">
        <div className="mx-auto border-t-4 border-neutral-600 border-solid w-16 h-16 rounded-full animate-spin"></div>
        <p className="mt-10 animate-pulse text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white ">
          Load The Movie Data, Please Kindly Wait, MOEFY
        </p>
      </div>
    );
  }

  const MovieDetailsChildren = ({ movieData }: { movieData: MovieTypes }) => (
    <div className="relative h-full w-full rounded-xl overflow-hidden  ">
      <img src={`${IMAGE_BASE_URL}${movieData.backdrop_path}`} alt={movieData.original_name || movieData.original_title} className="absolute inset-0 h-full w-full object-cover "/>
      <div className="absolute bg-black bg-opacity-50 inset-0 hover:opacity-0 transition-all duration-500 group cursor-pointer ">
        <div className=" h-full p-10 bg-gradient-to-r from-black flex items-end group-hover:opacity-0 transition-all duration-500">
          <div className="card-container">
            <h2 className=" mb-4 sm:w-[80%] md:w-[70%] text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-white">{movieData.original_title || movieData.original_name}</h2>
            <div className="mb-4  grid grid-cols-1 sm:flex gap-y-2 gap-x-6  ">
              <div className="flex items-center gap-x-2 ">
                <div className="p-2 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-950 text-blue-500 text-[12px]">
                  <HourglassSimple weight="fill"/>
                </div>
                <p>
                  {Math.floor(movieData.runtime / 60)}h {movieData.runtime % 60}m
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <div className="p-2 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-950 text-red-400 text-[12px]">
                  <Heart weight="fill"/>
                </div>
                <p >{movieData.vote_average.toFixed(1)}</p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <div className="p-2 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-950 text-yellow-300 text-[12px]">
                  <Coins weight="fill"/>
                </div>
                <p >
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(movieData.budget)}
                </p>
              </div>
            </div>
            <p className="text-[10px] sm:text-[14px] md:w-[70%] lg:w-[50%]">{movieData.overview.endsWith('.') ? movieData.overview.slice(0, -1) : movieData.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <main className="">
      <ContainerScroll
        children={<MovieDetailsChildren movieData={movieDataById} />}
      />
    </main>
  );
};

export default MovieDetails;
