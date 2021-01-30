import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  title: string;
  color: string;
}
const Badge: React.FC<BadgeProps> = ({ title, color }) => {
  return (
    <div className={styles.badge} style={{ backgroundColor: color }}>
      <h3>{title}</h3>
    </div>
  );
};

export default Badge;
