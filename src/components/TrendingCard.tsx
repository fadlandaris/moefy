import React from 'react';
import { MovieTypes } from '../types/type';
import { Trophy } from 'phosphor-react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface DataProps {
  data: MovieTypes[];
}

const TrendingCard: React.FC<DataProps> = ({ data }) => {
  return (
    <>
      {data.slice(0, 1).map((item, i) => (
        <div key={i} className='relative w-full h-full'>
          <img src={IMAGE_BASE_URL + item.backdrop_path} alt={item.original_name} className='w-full h-full object-cover' />
          <div className='bg-neutral-950/70 backdrop-blur-md flex flex-col gap-y-8 items-start p-8 absolute top-1/2 left-8 rounded-3xl transform -translate-y-1/2'>
            <p className='font-medium uppercase text-yellow-300 flex items-center gap-x-2'><Trophy weight='fill'/> Top 1 Trending</p>
            <div className='text-4xl'>
              <h2>Read Movie</h2>
              <h2>Series Anywhere</h2>
              <h2>at Anytime</h2>
            </div>
            <p className='w-[70%] font-light'>Read your most liked movies or series completely Free</p>
            <button className='px-4 py-1 rounded-full bg-white text-primary font-medium text-[12px] hover:text-white hover:bg-primary transition-all duration-500 hover:animate-none'>Read Now</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendingCard;
