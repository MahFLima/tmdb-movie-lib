import React from "react";
import styles from "./styles.module.css";

import CardVideo from "../../components/CardVideo";

function Home() {
  return (
    <>
      <section className={`${styles["content-videos"]}`}>
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
      </section>
      <section className={`${styles["content-videos"]}`}>
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
      </section>
      <section className={`${styles["content-videos"]}`}>
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
      </section>
    </>
  );
}

export default Home;
