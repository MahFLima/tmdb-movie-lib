import React from "react";

import styles from "./styles.module.css";
import logo from "../../assets/youtube-logo.svg";
import { Bell, DotsThreeOutline, List, MagnifyingGlass, VideoCamera } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Header(props) {
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
        <input type="text" placeholder="Buscar" />
        <button>
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
