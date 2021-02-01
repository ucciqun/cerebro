import React from "react";
import styles from "./app.module.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Works from "./Works";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        {/* <img
          className={styles.githubBudge}
          alt="GitHub commit activity"
          src="https://img.shields.io/github/commit-activity/m/ucciqun/cerebro"
        /> */}
        <Header />
        <Switch>
          <Route path="/cerebro">
            <Works />
          </Route>
          <Route path="/about"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
