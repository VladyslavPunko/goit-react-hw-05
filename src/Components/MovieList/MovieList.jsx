import { Link } from "react-router-dom";

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map((film) => {
        const filmID = film.id;
        return (
          <li key={filmID}>
            <Link to={`/movies/${filmID}`}>{film.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
