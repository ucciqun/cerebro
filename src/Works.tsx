import { Divider } from "@material-ui/core";
import React from "react";
import GlassMorphism from "./GlassMorphism";

import styles from "./Works.module.css";
import Cimicine from "./works/Cimicine";

const Works: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>WORKS</h1>
      <Divider style={{ backgroundColor: "white" }} />
      <Cimicine />
      <Cimicine />

      <Cimicine />
    </div>
  );
};

export default Works;
