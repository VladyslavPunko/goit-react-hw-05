import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchByInputSearch } from "../../movies-API";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputSearch = searchParams.get("query");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inputSearch) return;
    async function fetchMoviesByQuery() {
      try {
        setLoading(true);
        const movies = await fetchByInputSearch(inputSearch);
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesByQuery();
  }, [inputSearch]);

  const onSubmit = (inputSearch) => {
    setSearchParams({ query: inputSearch });
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loading && <Loader />}
      {movies.length > 0 && <MovieList films={movies} />}
    </>
  );
};

export default MoviesPage;
