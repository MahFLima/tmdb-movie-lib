import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { useSearchParams } from "react-router-dom";
import CardVideo from "../../components/CardVideo";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
const language = import.meta.env.VITE_LANGUAGE

function Search() {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() =>{
    const searchWithQueryURL = `${searchURL}?${language}&${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryURL)
  },[movies])

  return (
    <>
      <strong>Resultados para: {query}</strong>
      <section className={`${styles["content-videos"]}`}>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.map((movie) => <CardVideo key={movie.id} movie={movie}/>)}
      </section>
    </>
  );
}

export default Search;
