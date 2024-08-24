import { useState } from "react";
import MoviesList from "./Cine/MoviesList";
import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import SideBar from "./Components/SideBar";
import { movieContext } from "./context";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  return (
    <>
      <movieContext.Provider value={{ movieData, setMovieData }}>
        <Headers />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MoviesList />
          </div>
        </main>
        <Footer />
      </movieContext.Provider>
    </>
  );
};

export default App;
