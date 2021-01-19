import React from "react";
import styles from "./Cimicine.module.css";

import CimicinePic from "../asset/cimicine.svg";
import CimicineIcon from "../asset/cimicine_icon.svg";

import Badge from "../Badge";

const Cimicine = () => {
  return (
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
  );
};

export default Cimicine;
