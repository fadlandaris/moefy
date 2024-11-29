import React from 'react';
import { MovieTypes } from '../types/type';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/Slugify';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface DataProps {
  data: MovieTypes[];
  variant?: 'search' | 'trending'
}

const TrendingList: React.FC<DataProps> = ({ data, variant = 'search' }) => {
  // console.log(data)
  return (
    <>
      {data.slice(1, 11).map((item, i) => (
        <Link key={i} to={`/movie/${item.id}-${slugify(item.original_title || item.original_name)}`}>
          <div className="rounded-lg p-4 group hover:bg-neutral-800 transition-all duration-500 cursor-pointer">
            <div  className='flex items-center gap-x-4'>
            <div className={`text-[12px]`}>
              <div className='px-2 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-full text-[12px]'>
                {variant === 'search' ? i + 1 : '🔥' }
              </div>
            </div>
              <div className='flex justify-between w-full'>
                <div className={`flex ${variant === 'search' ? 'gap-x-4' : 'gap-x-2'} `}>
                  <div className='w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden'>
                    <img src={IMAGE_BASE_URL + item.poster_path} alt="" />
                  </div>
                  <div>
                    <p className={`font-medium ${variant === 'search' ? 'text-[12px]' : ''}`}>{item.original_title || item.original_name}</p>
                    <p className='text-[12px] font-light text-text '> {item.vote_average.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${variant === 'search' ? 'hidden' : 'flex'} h-[1px] group-hover:opacity-0 group-hover:mt-0 transition-all duration-500 bg-neutral-950/70 rounded-3xl mt-6`}/>
          </div>
        </Link>
      ))}
   </>
  )
}

export default TrendingList