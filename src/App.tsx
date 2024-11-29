import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Login from "./pages/Login";
import { ReactNode, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <SearchBar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('Logged In')
        navigate('/home')
      } else {
        console.log('Logout')
        navigate('/login')
      }
    })
  }, [])

  return (
    <>
      <main className={isLoginPage ? "" : "p-10 md:p-0 md:pr-10 md:pt-16 md:pl-32"}>
        <ToastContainer theme="dark"/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Layout>
                <MovieDetails />
              </Layout>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
