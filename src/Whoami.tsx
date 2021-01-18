import { Divider, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import styles from "./Whoami.module.css";

const Whoami = () => {
  return (
    <div className={styles.whoami}>
      <h2 className={styles.title}>
        WHO AM <span style={{ color: "" }}>I</span>
      </h2>
      <Divider style={{ backgroundColor: "white" }} />

      <p className={styles.description}>
        私は東京工業大学 情報理工学院
        数理計算科学系でComputerScienceを学んでいる学生です。
        <br />
        web技術、デザイン、人間拡張(Human Augmentation)にも興味を持っています。
        <br />
        将来的にはデザイナーとプログラマーの架け橋としてtranscompileできる人間を目指しています。
      </p>
    </div>
  );
};

export default Whoami;
