import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "425f27f959682e98e52348ef5569509f";

// trending Movies
const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/all/day?api_key=${API_TOKEN}`);
};

// oleh id shawbe
const getMovieByGenreId = (id: number) => {
  return axios.get(`${BASE_URL}/discover/movie?api_key=${API_TOKEN}&with_genres=${id}`);
};

// search function
const getSearchMovies = (query: string) => {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_TOKEN,
      query: query,
      language: 'en-US'
    }
  });
};

// buat pages movie details
const getMovieDetailsById = (id: number) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_TOKEN}`);
};

export default {
  getTrendingMovies,
  getMovieByGenreId,
  getSearchMovies,
  getMovieDetailsById, 
};