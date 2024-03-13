import React, { useState } from "react";

import styles from "./styles.module.css";
import {  List, MagnifyingGlass } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

function Header(props) {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate()

  function handleSubmit() {

    if(!inputSearch) return;

    navigate(`/search?q=${inputSearch}`);
    setInputSearch("");
  }

  return (
    <header className={`${window.scrollY > 0 ? styles.rolagem : styles.null}`}>
      <div className={`${styles["content-logo"]} `}>
        <button>
          <List
            size={20}
            onClick={props.click}
          />
        </button>
        <Link to="/">TMDB Movie-Lib</Link>
      </div>
      <div className={styles["search-area"]}>
        <input type="text" placeholder="Buscar" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
        <button onClick={() => handleSubmit()}>
          <MagnifyingGlass size={24} />
        </button>
      </div>
      <ul className={styles.widgets}>
        {/* <li>
          <a href="#">
            <VideoCamera size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <DotsThreeOutline size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <Bell size={24} />
          </a>
        </li> */}
        <img src="https://github.com/mahflima.png" alt="" />
      </ul>
    </header>
  );
}

export default Header;
