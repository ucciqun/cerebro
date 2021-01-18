import { Divider } from "@material-ui/core";
import Icon from "./asset/mypic.png";
import TypeScript from "./asset/ts-logo-128.svg";
import C from "./asset/c-programming.svg";
import React from "react";
import styles from "./Whoami.module.css";
import GlassMorphism from "./GlassMorphism";
import Progress from "./Progress";

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
      <div className={styles.progress}>
        <img src={Icon} alt="my pic" className={styles.mypic} />
        <div style={{ flexGrow: 1 }}>
          <GlassMorphism>
            <Progress
              icon={TypeScript}
              title="TypeScript"
              progress={80}
              color="#3178C6"
            />
            <Progress icon={C} title="c" progress={60} color="#283593" />
          </GlassMorphism>
        </div>
      </div>
    </div>
  );
};

export default Whoami;
