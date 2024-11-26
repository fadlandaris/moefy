import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar"
import MovieDetails from "./pages/MovieDetails"
const App = () => {
  return (
    <main className="pr-10">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </main>
  )
}

export default App