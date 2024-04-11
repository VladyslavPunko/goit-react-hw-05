import { useParams } from "react-router-dom";
import { fetchByReviews } from "../../movies-API";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movie, setMovieReviews] = useState(null);

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

  if (movie !== 0) {
    return (
      <>
        {!movie ? (
          <div>There are no reviews</div>
        ) : (
          <ul className={css.review_list}>
            {movie.map((review) => {
              return (
                <li key={review.id} className={css.cast_item}>
                  <p className={css.author}>Author: {review.author}</p>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
};

export default MovieReviews;
