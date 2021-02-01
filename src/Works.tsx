import React from "react";

import styles from "./Works.module.css";
import Work from "./works/Work";

import CimicineIcon from "./asset/cimicine_icon.svg";
import CimicineRoadmap from "./asset/cimicine_roadmap.png";
import CimicineTop from "./asset/cimicine_top.png";
import CimicineCreate from "./asset/cimicine_create.png";

import NASTrendIcon from "./asset/NASTrend/nastrend_icon.svg";
import NASTrendTrend from "./asset/NASTrend/nastrend_trend.png";
import NASTrendSignup from "./asset/NASTrend/nastrend_signup.png";
import NASTrendTalk from "./asset/NASTrend/nastrend_talk.png";

import OioiIcon from "./asset/OIOI_icon.svg";
import OioiPic1 from "./asset/OIOI_pic1.png";
import OioiPic2 from "./asset/OIOI_pic2.png";

const workContainer = [
  {
    icon: OioiIcon,
    title: "Oioi Font",
    badge: ["Figma"],
    description:
      "このサイトのロゴを作る際に思いつきで作ったオリジナルフォントで、『マルイフォント』と呼びます。名前の通り真円だけをパーツに用いた丸みが特徴です。ゆくゆくは著作権フリーで公開するつもりです。",
    image: [OioiPic1, OioiPic2],
    createdAt: "2021.1",
    color: "black",
  },
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
      <p style={{ color: "gray" }}>
        サークルで開発したwebアプリとか、個人的に作ってみたもの。
      </p>
      {/* <div>
        {workContainer.map((d, i) => (
          <a href={`#${d.title}`} key={i} className={styles.link}>
            <img src={d.icon} alt={d.title} className={styles.thumbnail} />
            <div className={styles.detail}>
              <h2>{d.title}</h2>
              <p>{d.createdAt}</p>
            </div>
          </a>
        ))}
      </div> */}
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
