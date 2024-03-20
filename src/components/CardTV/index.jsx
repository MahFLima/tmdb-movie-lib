import React from "react";

import styles from "./styles.module.css";
import image from "../../assets/image.jpg"

import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG

function CardTV({tvShow}) {
  return (
    <Link 
      to={`/tv-show/${tvShow.id}`} 
      className={styles.card}
    >
      <img src={tvShow.poster_path ? imageUrl + tvShow.poster_path : image } alt={tvShow.title} />
      <div className={styles.title}>
        <div className={styles.description}>
          <strong>
            {tvShow.title ? tvShow.title : tvShow.name}
          </strong>
          <p>{tvShow.original_title ? tvShow.original_title : tvShow.original_name}</p>
          <div className={styles.info}>
            <p>{tvShow.popularity}</p>
            <span></span>
            <p>{tvShow.release_date ? tvShow.release_date : tvShow.first_air_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardTV;
