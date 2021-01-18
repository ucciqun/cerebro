import React from "react";
import styles from "./GlassMorphism.module.css";

const GlassMorphism: React.FC = ({ children }) => {
  return <div className={styles.glassMorphism}>{children}</div>;
};

export default GlassMorphism;
