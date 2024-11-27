import { MagnifyingGlass, GithubLogo } from "phosphor-react";
import { PROFILE } from "../assets/assets";
import { Link } from "react-router-dom";
import { SetStateAction, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import Api from "../service/Api";
import TrendingList from "./TrendingList";


const SearchBar = () => {
  const [querySearch, setQuerySearch] = useState('');
  const [resultsData, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      const searchResults = async () => {
        if (querySearch.trim() === '') {
          setResults([]);
          return;
        }

        setLoading(true);
        setError(null);

        try {
          const resp: AxiosResponse = await Api.getSearchMovies(querySearch);
          const searchResults = resp.data.results
          // console.log(searchResults)
          setResults(searchResults);
        } catch (error) {
          // console.log(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      searchResults();
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [querySearch]);

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setQuerySearch(e.target.value);
  };

  return (
    <nav className="mb-10 rounded-full flex justify-between">
      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="ring-1 ring-neutral-800 w-[25rem] text-[14px] rounded-full py-[16px] pl-10 pr-24 bg-black"
          value={querySearch}
          onChange={handleInputChange}
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-4 py-2 px-4 rounded-full bg-gradient-to-b from-neutral-950 to-black text-[12px] opacity-70 hover:opacity-100 transition-all duration-500">
          Search
        </button>
        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-neutral-700">
          <MagnifyingGlass />
        </div>
      </div>

      <div className="flex justify-start items-center gap-x-8">
        <a href="" className="hover:opacity-50 transition-all duration-500 bg-purple-950 bg-opacity-60 p-4 pl-14 relative rounded-full flex items-center text-[12px]">
          <p>Stars This Repo</p>
          <div className="absolute flex items-center p-2 left-3 rounded-full bg-purple-800 text-white text-xl">
            <GithubLogo weight="fill" />
          </div>
        </a>

        <Link to={{ pathname: 'profile' }}>
          <div className="flex gap-x-4 items-center group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-500">
              <img src={PROFILE} alt="Profile" className="z-0" />
              <div className="absolute inset-0 border-t-[3px] border-transparent rounded-full border-green-500 animate-spinSlow z-10"></div>
            </div>
            <div>
              <h2>Moefaris</h2>
              <p className="text-[12px] text-green-400">Online</p>
            </div>
          </div>
        </Link>
      </div>

      {/* {loading && <p>Loading...</p>} */}
      {error && <p>{error}</p>}
      {resultsData.length > 0 && (
        <div className="absolute z-50 bg-gradient-to-b p-8  from-neutral-950 to-black top-36 rounded-3xl flex flex-col w-[25rem] h-[30rem] overflow-hidden">
          <p className="mb-6 text-[12px]">Results : {querySearch}</p>
          <div className="overflow-hidden overflow-y-auto no-scrollbar ">
            <TrendingList data={resultsData} variant={`search`}/>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SearchBar;
