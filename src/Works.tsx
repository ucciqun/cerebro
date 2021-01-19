import { Divider } from "@material-ui/core";
import React from "react";
import GlassMorphism from "./GlassMorphism";

import styles from "./Works.module.css";

const Works: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>WORKS</h1>
      <Divider style={{ backgroundColor: "white" }} />
      <GlassMorphism></GlassMorphism>
    </div>
  );
};

export default Works;
