import { useEffect, useState } from "react";
import Api from "../service/Api";
import { AxiosResponse } from "axios";
import { MovieTypes } from "../types/type";
import { studio } from "../data/data";
import Studio from "../components/Studio";
import GenreLists from "../components/GenreLists";
import TrendingCard from "../components/TrendingCard";
import TrendingList from "../components/TrendingList";

const Home = () => {
  const [topTrendingData, setTopTrendingData] = useState<MovieTypes[]>([])
  const [studioData] = useState(studio)

  const getTrendingMovies = async(): Promise<void> => {
    try {
      const resp: AxiosResponse = await Api.getTrendingMovies()
      const topTrending = resp.data.results;
      setTopTrendingData(topTrending);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTrendingMovies()
  }, []);

  return (
    <main className="rounded-3xl">
      <div className="h-[30rem] grid grid-cols-3 gap-x-6">
        <div className="col-span-2 rounded-2xl overflow-hidden">
          <TrendingCard data={topTrendingData} />
        </div>

        <div className="p-8 bg-gradient-to-b from-secondary to-neutral-950 rounded-3xl overflow-y-auto no-scrollbar">
          <div className="flex flex-col gap-y-6">
            <p className='font-semibold text-2xl'>Top Trending</p>
            <TrendingList data={topTrendingData} />
          </div>
        </div>
      </div>

      <div className="mt-6 ">
        <div className="flex justify-between gap-x-6 ">
          <Studio data={studioData}/>
        </div>
        <div className='h-[1px] group-hover:opacity-0 group-hover:mt-0 transition-all duration-500 bg-text/10 rounded-3xl mt-10'/>
      </div>
      

      <div className="mt-10 rounded-3xl ">
        <GenreLists/>
      </div>
    </main>
  );
};

export default Home;
