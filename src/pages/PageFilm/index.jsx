import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { getMovies } from "../../utils/api";
import { convertToHoursMinutes, formatarDataUSparaPT } from "../../utils";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_LANGUAGE;
const imageUrl = import.meta.env.VITE_IMG;

function PageFilm() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const movieUrl = `${moviesURL}/${id}?${language}&${apiKey}`;

    async function result() {
      const data = await getMovies(movieUrl);

      setMovie(data);
      console.log(data);
    }

    result();
  }, []);

  return (
    <>
      <img
        className={styles.backdrop}
        src={imageUrl + movie.backdrop_path}
        alt=""
      />
      <div className={styles.container}>
        {movie.length === 0 && <p>Carregando...</p>}
        <img src={imageUrl + movie.poster_path} alt="" />
        <div className={styles["content-description-movie-page"]}>
          <strong className={styles.title}>
            {movie.title} -
            <span>
              &nbsp;{movie.release_date && movie.release_date.substr(0, 4)}
            </span>
          </strong>
          <div className={styles["details-film"]}>
            <p>
              {movie.release_date && formatarDataUSparaPT(movie.release_date)}
            </p>
            <div className={styles["bullet-point"]}></div>
            <ul className={styles["list-genre"]}>
              {movie.genres &&
                movie.genres.map((genre, index) => {
                  return <p key={index}>{genre.name}</p>;
                })}
            </ul>
            <div className={styles["bullet-point"]}></div>
            <p>{convertToHoursMinutes(movie.runtime)}m</p>
          </div>

          <div></div>

          <p></p>
          <strong className={styles["sinopse"]}>Sinopse</strong>
          <p className={styles["sinopse-text"]}>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default PageFilm;
