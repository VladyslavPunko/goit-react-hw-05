import { useParams } from "react-router-dom";
import { fetchByReviews } from "../../movies-API";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader.jsx";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movie, setMovieReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await fetchByReviews(movieId);
        setMovieReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  if (movie.length !== 0) {
    return (
      <ul className={css.review_list}>
        {movie.map((review) => (
          <li key={review.id} className={css.cast_item}>
            <p className={css.author}>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>Not found</div>;
  }
};

export default MovieReviews;
