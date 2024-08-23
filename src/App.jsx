import MoviesList from "./Cine/MoviesList";
import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import SideBar from "./Components/SideBar";

const App = () => {
  return (
    <>
      <Headers />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MoviesList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
