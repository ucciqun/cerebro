import React from "react";
import styles from "./Work.module.css";

import Badge from "../Badge";
import GlassMorphism from "../GlassMorphism";
import { Divider } from "@material-ui/core";

interface WorkProps {
  icon: string;
  title: string;
  badge: string[];
  description: string;
  picture?: string;
  image: string[];
  createdAt: string;
  color: string;
}
const Work: React.FC<WorkProps> = ({
  icon,
  title,
  badge,
  description,
  picture,
  image,
  createdAt,
  color,
}) => {
  return (
    <>
      <img
        src={picture}
        alt=""
        style={{
          position: "absolute",
          width: 300,
          right: 10,
          // filter: "blur(4px)",
        }}
      />
      <GlassMorphism>
        <div className={styles.main}>
          <img src={icon} alt="" className={styles.icon} />
          {/* <a
          href="https://cimicine-flow.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.work_title}>Cimicine</h2>
        </a> */}
          <div className={styles.detail}>
            <h2 className={styles.title} style={{ color: color }}>
              {title}{" "}
              <span style={{ fontSize: 12, color: "gray", opacity: 0.54 }}>
                createdAt {createdAt}
              </span>
            </h2>
            <div className={styles.badgeContainer}>
              {badge.map((d, i) => (
                <Badge title={d} color="orange" key={i} />
              ))}
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <Divider />
        <div className={styles.images}>
          {image.map((d, i) => (
            <img src={d} alt="" className={styles.image} key={i} />
          ))}
        </div>
      </GlassMorphism>
    </>
  );
};

export default Work;
