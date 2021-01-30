import React from "react";
import styles from "./Header.module.css";

import Logo from "./asset/RYOOUCHI_logo.gif";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <div className={styles.header}>
        <button className={styles.button}>WORKS</button>
        <img src={Logo} alt="ロゴ" className={styles.logo} />
        <button className={styles.button}>ABOUT</button>
      </div>
    </>
  );
};

export default Header;
