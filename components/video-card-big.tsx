import type { NextPage } from "next";
import styles from "./video-card-big.module.css";

export type VideoCardBigType = {
  className?: string;
};

const VideoCardBig: NextPage<VideoCardBigType> = ({ className = "" }) => {
  return (
    <div className={[styles.videoCardBig, className].join(" ")}>
      <section className={styles.rectangularShape} />
    </div>
  );
};

export default VideoCardBig;
