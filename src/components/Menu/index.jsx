import React from "react";

import logo from "../../assets/youtube-logo.svg";
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
import { Link } from "react-router-dom";

function Menu(props) {
  return (
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
        <input type="text" placeholder="Buscar" />
        <button>
          <MagnifyingGlass size={16} />
        </button>
      </div>
      <ul className={`${styles.navigation} ${styles.nav01}`}>
        <li>
          <Link to='/'>
            <House size={24} />
            Home
          </Link>
        </li>
        <li>
          <a>
            <Compass size={24} />
            Explores
          </a>
        </li>
        <li>
          <a>
            <Swap size={24} />
            Shorts
          </a>
        </li>
        <li>
          <a>
            <MonitorPlay size={24} />
            Subscriptions
          </a>
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
  );
}

export default Menu;
