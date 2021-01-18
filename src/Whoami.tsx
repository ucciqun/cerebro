import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import styles from "./Whoami.module.css";

const Whoami = () => {
  return (
    <>
      <div className={styles.profileContainer} style={{ position: "relative" }}>
        <h1
          style={{
            position: "absolute",
            top: 0,
            left: 40,
            fontFamily: "Knockout",
            fontSize: 200,
            color: "skyblue",
          }}
        >
          WHO AM I
        </h1>

        <div className={styles.glassMorphism}>
          <div className={styles.profile}>
            <img
              src="https://pbs.twimg.com/profile_images/1344500423407718400/K-iA-fXR_400x400.jpg"
              alt=""
              style={{
                width: 150,
                borderRadius: 30,
                boxShadow: "10",
              }}
            />
            <div className={styles.snsIconContainer}>
              <IconButton
                style={{ color: "skyblue" }}
                href="https://twitter.com/xxUCQxx"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://github.com/ucciqun" target="_blank">
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={styles.glassMorphism} style={{ flexGrow: 1 }}>
          <h2 className={styles.whoami_title}>WHO AM I</h2>
          <p className={styles.whoami_p}>
            東京工業大学 情報理工学院
            数理計算科学系でComputerScienceを学んでいる学生です。
            <br />
            web技術、デザイン、人間拡張(Human
            Augmentation)にも興味を持っています。
          </p>
        </div>
      </div>
      <div className={styles.works}>
        <div className={styles.glassMorphism}>
          <h1>WORKS</h1>
        </div>
      </div>
    </>
  );
};

export default Whoami;
