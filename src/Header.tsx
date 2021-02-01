import React, { useState } from "react";
import styles from "./Header.module.css";

import Logo from "./asset/RYOOUCHI_logo.gif";
import LeftLogo from "./asset/RYOOUCHI_left.svg";
import RightLogo from "./asset/RYOOUCHI_right.svg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [img, setImg] = useState(Logo);

  return (
    <div className={styles.header}>
      <button
        className={styles.button}
        onClick={() => history.push("/cerebro")}
        onMouseOver={() => setImg(LeftLogo)}
        onMouseOut={() => setImg(Logo)}
      >
        WORKS
      </button>
      <img
        src={img}
        alt="ロゴ"
        className={styles.logo}
        onClick={() => history.push("/cerebro")}
      />
      <button
        className={styles.button}
        onClick={() => history.push("/about")}
        onMouseOver={() => setImg(RightLogo)}
        onMouseOut={() => setImg(Logo)}
      >
        ABOUT
      </button>
    </div>
  );
};

export default Header;
