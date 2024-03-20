import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import CardTV from "../../components/CardTV";
import { getMovies } from "../../utils/api";

const seriesURL = import.meta.env.VITE_API_TV
const apiKey = import.meta.env.VITE_API_KEY
const language = import.meta.env.VITE_LANGUAGE

function PageTv({description = "top_rated"}) {
  const [topSeries, setTopSeries] = useState([])

  useEffect(() =>{
    const topRatedUrl = `${seriesURL}/${description}?${language}&${apiKey}`

    async function result(){
      const data = await getMovies(topRatedUrl)

      setTopSeries(data.results)
    }

    result()
  },[topSeries])

  return (
    <>
      {topSeries.length === 0 && <p>Carregando...</p>}
      <section className={`${styles["content-videos"]}`}>
        {topSeries.map((tv) => {
          return(
            <CardTV key={tv.id} tvShow={tv}/>
          )
        })}
      </section>
    </>
  );
}

export default PageTv;
