import type { NextPage } from "next";
import Frame43049Variant from "../components/frame43049-variant";
import styles from "./intro.module.css";

const Intro: NextPage = () => {
  return (
    <div className={styles.intro}>
      <section className={styles.veraTease2} />
      <Frame43049Variant />
    </div>
  );
};

export default Intro;
