/* eslint-disable @typescript-eslint/no-explicit-any */
export interface typesData {
  id: number;
  title?: string;
  icon?: any;
  video?: string;
  image?: string;
  genre?: string;
}

export interface MovieTypes {
  adult: boolean;
  backdrop_path: string;
  first_air_date?: string; 
  genre_ids: number[];
  id: number;
  media_type: string;
  name?: string; 
  origin_country?: string[]; 
  original_title?: string;
  original_language: string;
  original_name?: string; 
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}