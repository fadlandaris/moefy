import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar"
import MovieDetails from "./pages/MovieDetails"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"

const App = () => {
  return (
    <main className="p-10 md:p-0 md:pr-10">
      <SearchBar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App