import React from "react";
import styles from "./app.module.css";
import Icon from "./icon.svg";
import Whoami from "./Whoami";

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
      <Whoami />
    </div>
  );
};

export default App;
