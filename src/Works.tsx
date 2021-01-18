import { Divider } from "@material-ui/core";
import React from "react";
import GlassMorphism from "./GlassMorphism";
import styles from "./Works.module.css";

const Works: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>WORKS</h1>
      <Divider style={{ backgroundColor: "white" }} />
      <GlassMorphism>
        <a
          href="https://cimicine-flow.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.work_title}>Cimicine</h2>
        </a>
      </GlassMorphism>
    </div>
  );
};

export default Works;
