import React from "react";
import GlassMorphism from "./GlassMorphism";
import styles from "./Organization.module.css";
import TraP from "./traP_logo.svg";

const Organization = () => {
  return (
    <GlassMorphism>
      <div className={styles.organization}>
        <img src={TraP} alt="traPロゴ" className={styles.trapLogo} />
        <div
          style={{
            borderLeft: "2px solid white",
            height: 60,
            margin: "0 24px",
          }}
        ></div>
        <h1>絶賛募集中!</h1>
      </div>
    </GlassMorphism>
  );
};

export default Organization;
