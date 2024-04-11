import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.movies_list}>
      {films.map((film) => {
        const filmID = film.id;
        return (
          <li className={css.movie_item} key={filmID}>
            <Link
              state={location}
              className={css.movie_link}
              to={`/movies/${filmID}`}
            >
              {film.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
