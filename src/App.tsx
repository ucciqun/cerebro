import React from "react";
import styles from "./app.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <img
        className={styles.githubBudge}
        alt="GitHub commit activity"
        src="https://img.shields.io/github/commit-activity/m/ucciqun/celebro"
      />
      <div className={styles.main}>
        <img
          src="https://pbs.twimg.com/profile_images/1344500423407718400/K-iA-fXR_400x400.jpg"
          alt="ロゴ"
          className={styles.logo}
        />
        <h1 className={styles.title}>Welcome to my pages!</h1>
      </div>
    </div>
  );
};

export default App;
