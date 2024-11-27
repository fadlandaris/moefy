import React from 'react';
import { MovieTypes } from '../types/type';
// import { Trophy } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/Slugify';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface DataProps {
  data: MovieTypes[];
}

const TrendingCard: React.FC<DataProps> = ({ data }) => {
  return (
    <>
      {data.slice(0, 1).map((item, i) => (
        <div key={i} className='relative w-full h-[22rem] sm:h-[30rem] rounded-2xl overflow-hidden '>
          <img src={IMAGE_BASE_URL + item.backdrop_path} alt={item.original_name} className='w-full h-full object-cover' />
          <div className=' bg-neutral-950/60 backdrop-blur-md p-6 sm:p-12 w-full h-full flex flex-col gap-y-6 items-start absolute top-0  '>
            <p className='font-semibold uppercase text-orange-500 flex items-center gap-x-2'>🔥 Top 1 Trending</p>
            <div className='text-2xl sm:text-4xl'>
              <h2>Discover Movies</h2>
              <h2>Explore Series</h2>
              <h2>Anytime, Anywhere</h2>
            </div>
            <p className='sm:w-[50%] font-light'>Read your most liked movies or series completely Free</p>
            <Link to={`/movie/${item.id}-${slugify(item.original_title || item.original_name)}`}>
              <button className='px-6 py-4 rounded-full bg-gradient-to-b from-neutral-900 to-black hover:opacity-70 font-medium text-[12px] hover:text-white  transition-all duration-300 hover:animate-none'>{item.original_name || item.original_title}</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendingCard;
