import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";

import styles from "./App.module.css"

function App() {
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuClick() {
    menuActive ? setMenuActive(false) : setMenuActive(true);
  }

  return (
    <>
      {menuActive ? (
        <Menu
          click={() => {
            handleMenuClick();
          }}
          activeMenu={menuActive ? styles.cloth : styles.none}
        />
      ) : (
        <></>
      )}
      <Header
        click={() => {
          handleMenuClick();
        }}
      />

      <main
        className={`${styles.container} ${
          menuActive ? styles["content-videos-active"] : styles.null
        }`}
      >
        <Outlet/>
      </main>
    </>
  );
}

export default App;
