import { useState, useContext } from "react";
import { getImageUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { movieContext } from "../context";
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieData, setMovieData } = useContext(movieContext);

  // handle add to cart
  function handleAddToCart(event, movie) {
    event.stopPropagation();
    const found = movieData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setMovieData([...movieData, movie]);
    } else {
      console.log("This movie has been added already");
    }
  }

  // modal close function
  function handleCloseModla() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  // movie selected show modal
  function hadleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModla} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => hadleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} className="text-yellow-400" />
            </div>

            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span> ${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
