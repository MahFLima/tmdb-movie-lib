import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import CardVideo from "../../components/CardVideo";
import image from "../../assets/image.png";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const language = import.meta.env.VITE_LANGUAGE

function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() =>{
    const topRatedUrl = `${moviesURL}/top_rated?${language}&${apiKey}`

    getTopRatedMovies(topRatedUrl)
  },[])

  return (
    <>
      <section className={`${styles["content-videos"]}`}>
        {topMovies.map((m) => {
          return(
            <CardVideo key={m.id} movie={m}/>
          )
        })}
      </section>
    </>
  );
}

export default Home;
