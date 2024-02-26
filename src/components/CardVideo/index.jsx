import React from "react";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG

function CardVideo({movie}) {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.card}>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <div className={styles.title}>
        <div className={styles.description}>
          <strong>
            {movie.title}
          </strong>
          <p>{movie.original_title}</p>
          <div className={styles.info}>
            <p>{movie.popularity}</p>
            <span></span>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardVideo;
