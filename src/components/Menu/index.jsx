import React, { useState } from "react";

import styles from "./styles.module.css";

import {
  Compass,
  House,
  List,
  MagnifyingGlass,
  MonitorPlay,
} from "@phosphor-icons/react";

import { Link, useNavigate } from "react-router-dom";

function Menu(props) {

  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate()

  function handleSubmit() {

    if(!inputSearch) return;

    navigate(`/search?q=${inputSearch}`);
    setInputSearch("");
    props.click()
  }

  return (
    <>
    <nav className={styles["menu-navigation"]}>
      <div className={`${styles["content-logo"]}`}>
        <button>
          <List
            size={20}
            onClick={props.click}
          />
        </button>
        <Link to="/">TMDB Movie-Lib</Link>
      </div>
      <div className={styles["search-area"]}>
        <input 
          type="text" 
          placeholder="Buscar" 
          onChange={(e) => {setInputSearch(e.target.value);}}
        />
        <button onClick={() => {handleSubmit()}}>
          <MagnifyingGlass size={16} />
        </button>
      </div>
      <ul className={`${styles.navigation} ${styles.nav01}`}>
        <li>
          <Link to='/' onClick={props.click}>
            <House size={24} />
            Home
          </Link>
        </li>
        <li>
          <Link to='popular' onClick={props.click}>
            <Compass size={24} />
            Explores
          </Link>
        </li>
        <li>
          <Link to="tv-show" onClick={props.click}>
            <MonitorPlay size={24} />
            TV Show
          </Link>
        </li>
      </ul>
    </nav>
    <div className={props.activeMenu} onClick={props.click}></div>
    </>
  );
}

export default Menu;
