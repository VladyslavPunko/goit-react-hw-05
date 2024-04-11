import { useParams } from "react-router-dom";
import { fetchByCredits } from "../../movies-API";
import { useState, useEffect } from "react";
import css from "./MovieCast.module.css";
import noFoto from "../../../public/havNotFoto.jpg";
import Loader from "../Loader/Loader.jsx";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    async function fetchCasts() {
      try {
        const casts = await fetchByCredits(movieId);
        setCasts(casts.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCasts();
  }, [movieId]);

  if (casts !== 0) {
    return (
      <>
        {!casts ? (
          <>
            <Loader />
          </>
        ) : (
          <ul className={css.cast_list}>
            {casts.map((cast) => {
              return (
                <li key={cast.id} className={css.cast_item}>
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                        : noFoto
                    }
                    alt={cast.name}
                    width="200"
                    height="300"
                  />
                  <p className={css.cast_name}>{cast.name}</p>
                  <p className={css.cast_charecter}>
                    Character {cast.character}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
};

export default MovieCast;
