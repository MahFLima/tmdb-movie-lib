import React from "react";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

import image from "../../assets/image.jpg"

const imageUrl = import.meta.env.VITE_IMG

function CardVideo({movie}) {
  return (
    <Link 
      to={`/movie/${movie.id}`} 
      className={styles.card}
    >
      <img src={movie.poster_path ? imageUrl + movie.poster_path : image } alt={movie.title} />
      <div className={styles.title}>
        <div className={styles.description}>
          <strong>
            {movie.title ? movie.title : movie.name}
          </strong>
          <p>{movie.original_title ? movie.original_title : movie.original_name}</p>
          <div className={styles.info}>
            <p>{movie.popularity}</p>
            <span></span>
            <p>{movie.release_date ? movie.release_date : movie.first_air_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardVideo;
