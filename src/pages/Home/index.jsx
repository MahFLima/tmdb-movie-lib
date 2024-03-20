import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import CardFilm from "../../components/CardFilm";
import { getMovies } from "../../utils/api";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const language = import.meta.env.VITE_LANGUAGE

function Home({description = "top_rated"}) {
  const [topMovies, setTopMovies] = useState([])

  useEffect(() =>{
    const topRatedUrl = `${moviesURL}/${description}?${language}&${apiKey}`

    async function result(){
      const data = await getMovies(topRatedUrl)

      setTopMovies(data.results)
    }

    result()
  },[topMovies])

  return (
    <>
      {topMovies.length === 0 && <p>Carregando...</p>}
      <section className={`${styles["content-videos"]}`}>
        {topMovies.map((m) => {
          return(
            <CardFilm key={m.id} movie={m}/>
          )
        })}
      </section>
    </>
  );
}

export default Home;
