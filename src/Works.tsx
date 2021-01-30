import { Divider } from "@material-ui/core";
import React from "react";
import GlassMorphism from "./atoms/GlassMorphism";

import styles from "./Works.module.css";
import Work from "./works/Work";
import Cimicine from "./works/Work";

import CimicinePic from "./asset/cimicine_pic.svg";
import CimicineIcon from "./asset/cimicine_icon.svg";
import CimicineRoadmap from "./asset/cimicine_roadmap.png";
import CimicineTop from "./asset/cimicine_top.png";
import CimicineCreate from "./asset/cimicine_create.png";

import NASTrendIcon from "./asset/NASTrend/nastrend_icon.svg";
import NASTrendTrend from "./asset/NASTrend/nastrend_trend.png";
import NASTrendSignup from "./asset/NASTrend/nastrend_signup.png";
import NASTrendTalk from "./asset/NASTrend/nastrend_talk.png";

const workContainer = [
  {
    icon: CimicineIcon,
    title: "Cimicine",
    badge: ["TypeScript", "React", "Figma", "AdobeXD", "Firebase"],
    description:
      "学習ロードマップを簡単に作成し、共有できるwebアプリです。デザインとフロントエンドを担当し、データベースはBaaSであるfirebaseを使用しました。",
    // picture: CimicinePic,
    image: [CimicineTop, CimicineRoadmap, CimicineCreate],
    createdAt: "2020.12",
    color: "#007C40",
  },
  {
    icon: NASTrendIcon,
    title: "NASTrend",
    badge: ["TypeScript", "React", "Figma", "AdobeXD", "Golang"],
    description:
      "気軽にスレッドを立て、今起きていることをみんなで共有するリアルタイムコミュニケーションサービスです。誰でも匿名で利用できるので、閉鎖的になりやすいZoom授業の意見を気軽に書き込めます。",
    image: [NASTrendTrend, NASTrendSignup, NASTrendTalk],
    createdAt: "2020.07",
    color: "#FFA34E",
  },
];
const Works: React.FC = () => {
  return (
    <div className={styles.works}>
      <h1 className={styles.title}>WORKS</h1>
      <p>趣味やサークルで開発した子たち。WORKSというには大仰かも。</p>
      {/* <Divider style={{ backgroundColor: "white" }} /> */}
      {workContainer.map((d, i) => (
        <Work
          icon={d.icon}
          title={d.title}
          badge={d.badge}
          description={d.description}
          // picture={d.picture}
          image={d.image}
          createdAt={d.createdAt}
          color={d.color}
          key={i}
        />
      ))}
    </div>
  );
};

export default Works;
