import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import image from "../../assets/photo.jpg"
import { getMovies } from "../../utils/api";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_LANGUAGE;
const imageUrl = import.meta.env.VITE_IMG;

function PageFilm() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const movieUrl = `${moviesURL}/${id}?${language}&${apiKey}`;

    async function result(){
      const data = await getMovies(movieUrl)

      setMovie(data)
    }

    result()
  }, [movie]);

  return (
    <div className={styles.container}>
      {movie.length === 0 && <p>Carregando...</p>}
      <img src={movie.backdrop_path ? imageUrl + movie.backdrop_path : image} alt="" />
      <div className={styles["content-movie-page"]}>
        <img src={imageUrl + movie.poster_path} alt="" />
        <div className={styles["content-description-movie-page"]}>
          <strong>{movie.title}</strong>
          <p>{movie.tagline}</p>
          <p>{movie.release_date}</p>
          <strong>Sinopse</strong>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default PageFilm;
