import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import image from "../../assets/image.png";
import { useParams } from "react-router-dom";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_LANGUAGE;
const imageUrl = import.meta.env.VITE_IMG;

function PageFilm() {
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const getVideo = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setVideo(data.results[1])
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}/${id}?${language}&${apiKey}`;
    const videoUrl = `${moviesURL}/${id}/videos?${language}&${apiKey}`;

    getMovie(movieUrl);
    getVideo(videoUrl)
  }, []);

  return (
    <div className={styles.container}>
      <img src={imageUrl + movie.backdrop_path} alt="" />
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
      {/* <iframe
          className={styles["video-film"]}
          height="315"
          src={`https://www.youtube.com/embed/${movie.key}`}
        ></iframe> */}
    </div>
  );
}

export default PageFilm;
