import React from "react";
import styles from "./Progress.module.css";
interface ProgressProps {
  icon: string;
  title: string;
  progress: number;
  color?: string;
}
const Progress: React.FC<ProgressProps> = ({
  icon,
  title,
  progress,
  color = "white",
}) => {
  return (
    <div className={styles.progress}>
      <img src={icon} alt={title} className={styles.icon} />
      {/* <h2>{title}</h2> */}
      <div
        style={{
          marginLeft: 8,
          width: `calc((100% - 40px) * ${progress} / 100 )`,
          height: 32,
          backgroundColor: color,
          borderRadius: 5,
        }}
      ></div>
    </div>
  );
};

export default Progress;
