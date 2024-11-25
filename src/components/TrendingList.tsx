import React from 'react';
import { MovieTypes } from '../types/type';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface DataProps {
  data: MovieTypes[];
}

const TrendingList: React.FC<DataProps> = ({ data }) => {
  // console.log(data)
  return (
    <>
      {data.slice(1, 20).map((item, i) => (
        <div key={i} className='rounded-3xl p-4 group hover:bg-neutral-800 transition-all duration-500 cursor-pointer'>
          <div  className='flex items-center gap-x-4'>
          <div className={`text-xl  ${i === 0 ? 'text-yellow-500' : 'text-text'}`}>
            {/* <Trophy weight='fill'/> */}
            🔥
          </div>
            <div className='flex justify-between w-full'>
              <div className='flex gap-x-2'>
                <div className='w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden'>
                  <img src={IMAGE_BASE_URL + item.poster_path} alt="" />
                </div>
                <div>
                  <p className='font-medium'>{item.original_title || item.original_name}</p>
                  <p className='text-[12px] font-light text-text'>{item.popularity}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[1px] group-hover:opacity-0 group-hover:mt-0 transition-all duration-500 bg-text/10 rounded-3xl mt-6'/>
        </div>
       
      ))}
   </>
  )
}

export default TrendingList