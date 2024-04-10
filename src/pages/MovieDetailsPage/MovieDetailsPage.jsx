import { fetchTrandMoviesById } from "../../movies-API";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

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
      <div className={css.details_wrapper}>
        <Link to={backLink.current} className={css.go_back}>
          Back
        </Link>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          width="360"
          alt={`${movie.title}`}
        />
        <h2 className={css.movie_title}>{movie.title}</h2>
        <p>User score: {vote}%</p>
        <p className={css.movie_overview}>
          <h4 className={css.reve}>Overview</h4> {movie.overview}
        </p>
        {movie.genres !== null && (
          <ul className={css.genres_list}>
            <h2>Genres :</h2>
            {movie.genres.map((genre) => {
              return (
                <li className={css.gga} key={genre.id}>
                  <p className={css.ggaa}>{genre.name}</p>
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
