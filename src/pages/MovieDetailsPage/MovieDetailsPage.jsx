import { fetchTrandMoviesById } from "../../movies-API";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setError(false);
        const movie = await fetchTrandMoviesById(movieId);
        setMovieDetails(movie);
      } catch (error) {
        setError(true);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  if (movie !== null) {
    const vote = Math.round(movie.vote_average * 100) / 10;
    return (
      <div>
        {error && <Error />}
        <Link to={backLink.current}>Back</Link>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          width="360"
          alt={`${movie.title}`}
        />
        <h2>{movie.title}</h2>
        <p>User score: {vote}%</p>
        <p>Overview {movie.overview}</p>
        {movie.genres !== null && (
          <ul>
            Genres
            {movie.genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
};

export default MovieDetailsPage;
