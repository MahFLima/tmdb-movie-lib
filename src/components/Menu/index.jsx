import React, { useState } from "react";

import styles from "./styles.module.css";
import {
  ArrowDown,
  Clock,
  ClockCounterClockwise,
  Compass,
  House,
  List,
  MagnifyingGlass,
  MonitorPlay,
  PlayCircle,
  Queue,
  Swap,
  ThumbsUp,
} from "@phosphor-icons/react";
import TagPersonMenu from "../TagPersonMenu";
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
      <div className={styles.line}></div>
      <ul className={styles.navigation}>
        <li>
          <a>
            <Queue size={24} />
            Library
          </a>
        </li>
        <li>
          <a>
            <ClockCounterClockwise size={24} />
            History
          </a>
        </li>
        <li>
          <a>
            <PlayCircle size={24} />
            Your videos
          </a>
        </li>
        <li>
          <a>
            <Clock size={24} />
            Watch later
          </a>
        </li>
        <li>
          <a>
            <ThumbsUp size={24} />
            Liked videos
          </a>
        </li>
        <li>
          <a>
            <ArrowDown size={24} />
            Show more
          </a>
        </li>
      </ul>
    </nav>
    <div className={props.activeMenu} onClick={props.click}></div>
    </>
  );
}

export default Menu;
