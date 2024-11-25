import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <main className="p-4">
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  )
}

export default App