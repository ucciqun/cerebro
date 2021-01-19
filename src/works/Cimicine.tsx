import React from "react";
import styles from "./Cimicine.module.css";

import CimicinePic from "../asset/cimicine.svg";
import CimicineIcon from "../asset/cimicine_icon.svg";
import CimicineRoadmap from "../asset/cimicine_roadmap.png";
import CimicineTop from "../asset/cimicine_top.png";
import CimicineCreate from "../asset/cimicine_create.png";

import Badge from "../Badge";
import GlassMorphism from "../GlassMorphism";
import { Divider } from "@material-ui/core";

const Cimicine = () => {
  return (
    <>
      <img
        src={CimicinePic}
        alt=""
        style={{
          position: "absolute",
          width: 300,
          right: 10,
          // filter: "blur(4px)",
        }}
      />
      <GlassMorphism>
        <div className={styles.cimicine}>
          <img src={CimicineIcon} alt="" className={styles.cimicineIcon} />
          {/* <a
          href="https://cimicine-flow.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.work_title}>Cimicine</h2>
        </a> */}
          <div className={styles.cimicine_detail}>
            <h2 className={styles.cimicine_title}>
              Cimicine{" "}
              <span style={{ fontSize: 12, color: "gray", opacity: 0.54 }}>
                createdAt 2020.12
              </span>
            </h2>
            <div className={styles.cimicine_badgeContainer}>
              {["TypeScript", "React", "Figma", "AdobeXD", "Firebase"].map(
                (d, i) => (
                  <Badge title={d} color="orange" key={i} />
                )
              )}
            </div>
            <p className={styles.cimicine_description}>
              学習ロードマップを簡単に作成し、共有できるwebアプリです。
              デザインとフロントエンドを担当し、データベースはBaaSであるfirebaseを使用しました。
            </p>
          </div>
        </div>
        <Divider />
        <div className={styles.images}>
          <img
            src={CimicineTop}
            alt="cimicine toppage"
            className={styles.image}
          />
          <img
            src={CimicineRoadmap}
            alt="cimicine roadmap page"
            className={styles.image}
          />
          <img
            src={CimicineCreate}
            alt="cimicine roadmap create"
            className={styles.image}
          />
        </div>
      </GlassMorphism>
    </>
  );
};

export default Cimicine;
