import React from "react";
import styles from "./Organization.module.css";
import TraP from "./traP_logo.svg";

const Organization = () => {
  return (
    <div className={styles.organization}>
      <img src={TraP} alt="traPロゴ" className={styles.trapLogo} />
    </div>
  );
};

export default Organization;
