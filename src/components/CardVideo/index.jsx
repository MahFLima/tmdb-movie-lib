import React from "react";

import styles from "./styles.module.css";
import image from "../../assets/image.png";

function CardVideo() {
  return (
    <section className={styles.card}>
      <img src={image} alt="" />
      <div className={styles.title}>
        <img src="https://github.com/mahflima.png" alt="" />

        <div className={styles.description}>
          <strong>
            Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita
          </strong>
          <p>Coke Studio Bangla</p>
          <div className={styles.info}>
            <p>1.5 M views</p>
            <span></span>
            <p>2 days ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardVideo;
