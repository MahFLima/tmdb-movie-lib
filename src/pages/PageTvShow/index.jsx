import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { formatarDataUSparaPT } from "../../utils";
import { useParams } from "react-router-dom";
import { getMovies } from "../../utils/api";

const tvShowURL = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_LANGUAGE;
const imageUrl = import.meta.env.VITE_IMG;

function PageTvShow() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const movieUrl = `${tvShowURL}/${id}?${language}&${apiKey}`;

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
            {movie.name} -
            <span>
              &nbsp;{movie.first_air_date && movie.first_air_date.substr(0,4)}
            </span>
          </strong>
          <div className={styles["details-film"]}>
            <p>
              {movie.first_air_date && formatarDataUSparaPT(movie.first_air_date)}
            </p>
            <div className={styles["bullet-point"]}></div>
            <ul className={styles["list-genre"]}>
              {movie.genres &&
                movie.genres.map((genre, index) => {
                  return <p key={index}>{genre.name}</p>;
                })}
            </ul>
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

export default PageTvShow;
