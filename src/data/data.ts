import { marvelLogo, marvelVideo, dcLogo, dcVideo, starLogo, starVideo, natgeoLogo, natgeoVideo } from "../assets/assets"
import { Popcorn, Cat, GithubLogo, InstagramLogo } from "phosphor-react"
import { typesData } from "../types/type"


export const navLinks:typesData[] = [
  {
    id: 1,
    title: 'watch',
    icon: Popcorn,
    link: '/home'
  },
]

export const studio:typesData[] = [
  {
    id: 1,
    image: marvelLogo,
    video: marvelVideo,
  },
  {
    id: 2,
    image: dcLogo,
    video: dcVideo,
  },
  {
    id: 3,
    image: starLogo,
    video: starVideo
  },
  {
    id: 4,
    image: natgeoLogo,
    video: natgeoVideo,
  },
]

export const footer:typesData[] = [
  {
    id: 1,
    title: 'Github',
    link: 'https://github.com/fadlandaris',
    icon: GithubLogo,
  },
  {
    id: 2,
    title: 'Instagram',
    link: 'https://instagram.com/fadlandaris',
    icon: InstagramLogo,
  },
]

export const genres: typesData[] = [
  {
    id: 28,
    genre: "Action",
    title: "Fast-paced, high-energy scenes with intense stunts and fights"
  },
  {
    id: 12,
    genre: "Adventure",
    title: "Exciting journeys filled with exploration and discovery"
  },
  {
    id: 16,
    genre: "Animation",
    title: "Stories brought to life with creative animated visuals"
  },
  {
    id: 35,
    genre: "Comedy",
    title: "Humorous plots designed to entertain and amuse audiences"
  },
  {
    id: 80,
    genre: "Crime",
    title: "Focused on criminal acts, investigations, and their aftermath"
  },
  {
    id: 99,
    genre: "Documentary",
    title: "Non-fictional films that explore real-life events or topics"
  },
  {
    id: 18,
    genre: "Drama",
    title: "Serious narratives with emotional and character-driven stories"
  },
  {
    id: 10751,
    genre: "Family",
    title: "Wholesome entertainment suitable for all age groups"
  },
  {
    id: 14,
    genre: "Fantasy",
    title: "Imaginative worlds filled with magical elements and creatures"
  },
  {
    id: 36,
    genre: "History",
    title: "Dramatic retellings of historical events and figures"
  },
  {
    id: 27,
    genre: "Horror",
    title: "Designed to scare and thrill with suspenseful and eerie themes"
  },
  {
    id: 10402,
    genre: "Music",
    title: "Explores stories or performances centered around music"
  },
  {
    id: 9648,
    genre: "Mystery",
    title: "Suspenseful tales involving puzzles or unexplained events"
  },
  {
    id: 10749,
    genre: "Romance",
    title: "Heartfelt stories focusing on love and relationships"
  },
  {
    id: 878,
    genre: "Science Fiction",
    title: "Explores futuristic themes, technology, and alternate realities"
  },
  {
    id: 10770,
    genre: "TV Movie",
    title: "Movies made exclusively for television audiences"
  },
  {
    id: 53,
    genre: "Thriller",
    title: "Tense and exciting plots full of twists and suspense"
  },
  {
    id: 10752,
    genre: "War",
    title: "Stories centered on battles, soldiers, and wartime experiences"
  },
  {
    id: 37,
    genre: "Western",
    title: "Set in the American frontier with cowboys and outlaws"
  }
];
