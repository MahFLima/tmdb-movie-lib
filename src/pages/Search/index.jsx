import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { useSearchParams } from "react-router-dom";
import CardVideo from "../../components/CardVideo";
import { getMovies } from "../../utils/api";

const searchURL = import.meta.env.VITE_SEARCH_MOVIE
const searchURLTV = import.meta.env.VITE_SEARCH_TV
const apiKey = import.meta.env.VITE_API_KEY
const language = import.meta.env.VITE_LANGUAGE

function Search() {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([{'id': 999, 'title': "teste", 'poster_path': "teste", 'description': "teste"}])
  const query = searchParams.get("q")

  useEffect(() =>{
    const searchWithQueryURL = `${searchURL}?${language}&${apiKey}&query=${query}`
    const searchWithQueryURLTV = `${searchURLTV}?${language}&${apiKey}&query=${query}`

    async function result(){
      const data = await getMovies(searchWithQueryURL)
      const dataTV = await getMovies(searchWithQueryURLTV)

      setMovies(dataTV.results)
      // setMovies({...movies, teste:dataTV.results})
    }

    result()
  },[movies])

  return (
    <>
      <strong className={styles.title}>Resultados para: {query}</strong>
      <section className={`${styles["content-videos"]}`}>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.map((movie) => <CardVideo key={movie.id} movie={movie}/>)}
      </section>
    </>
  );
}

export default Search;