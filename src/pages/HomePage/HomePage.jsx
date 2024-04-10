import { useEffect, useState } from "react";
import { fetchTrandMovies } from "../../movies-API";

import MovieList from "../../Components/MovieList/MovieList";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchTrandMovies();
        console.log("response: ", response);
        setFilms(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList films={films} />
    </div>
  );
};

export default HomePage;
