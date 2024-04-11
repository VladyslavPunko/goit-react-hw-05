import { fetchTrandMoviesById } from "../../movies-API";

import { useEffect, useRef } from "react";
import { useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  Routes,
  NavLink,
  Route,
  Outlet,
} from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const activeLink = ({ isActive }) => {
  return clsx(css.details_link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovieDetails] = useState(null);
  const location = useLocation();
  console.log("location12345: ", location);

  const backLink = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movie = await fetchTrandMoviesById(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.log(error);
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
        <p className={css.movie_overview}>Overview{movie.overview}</p>
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
        <ul className={css.details_list}>
          <li className={css.details_item}>
            <NavLink className={activeLink} to="cast">
              Cast
            </NavLink>
          </li>
          <li className={css.details_item}>
            <NavLink className={activeLink} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Routes>
        <Outlet />
      </div>
    );
  }
};

export default MovieDetailsPage;
