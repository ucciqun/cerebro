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
        className={styles.mediaPC}
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
            <div className={styles.titleAndCreatedAt}>
              <h2 className={styles.title} style={{ color: color }}>
                {title}
              </h2>
              <p className={styles.createdAt}>{`createdAt ${createdAt}`}</p>
            </div>
            <div className={styles.badgeContainer}>
              {badge.map((d, i) => (
                <Badge title={d} color="orange" key={i} />
              ))}
            </div>
            <p className={`${styles.description} ${styles.mediaPC}`}>
              {description}
            </p>
          </div>
        </div>
        <p className={`${styles.description} ${styles.mediaSP}`}>
          {description}
        </p>
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
