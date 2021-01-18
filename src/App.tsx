import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import styles from "./app.module.css";
import Icon from "./icon.svg";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.banner}></div>
      <img
        className={styles.githubBudge}
        alt="GitHub commit activity"
        src="https://img.shields.io/github/commit-activity/m/ucciqun/cerebro"
      />
      {/* <div className={styles.main}>
        <img
          src="https://pbs.twimg.com/profile_images/1344500423407718400/K-iA-fXR_400x400.jpg"
          alt="ロゴ"
          className={styles.logo}
        />
        <h1 className={styles.title}>Welcome to my pages!</h1>
      </div> */}
      <img src={Icon} alt="アイコン" className={styles.icon} />
      <div className={styles.glassMorphism}>
        <h1 className={styles.title}>
          REVEAL
          <br />
          YOUR CEREBRO
        </h1>
        <h3 className={styles.description}>
          Cerebroとは"脳"という意味の英単語です。そして「REVEAL YOUR
          CEREBRO」とは差し当たり「お前は何を考えているんだ？」という問題提起のつもりです。
          自分の脳を目の前に置いて詳細にデッサンする、そんなグロテスクな体験はできないけれど、このサイトではそれに似た感覚が味わえるでしょう。
        </h3>
      </div>

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
              <IconButton style={{ color: "skyblue" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton>
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
    </div>
  );
};

export default App;
