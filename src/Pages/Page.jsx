import MoviesList from "../Cine/MoviesList";
import Footer from "../Components/Footer";
import Headers from "../Components/Headers";
import SideBar from "../Components/SideBar";
import { useContext } from "react";
import { themeContext } from "../context";
const Page = () => {
  const { darkMode, setDarkMode } = useContext(themeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Headers />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MoviesList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
