import type { NextPage } from "next";
import styles from "./video-card-small.module.css";

export type VideoCardSmallType = {
  className?: string;
};

const VideoCardSmall: NextPage<VideoCardSmallType> = ({ className = "" }) => {
  return (
    <div className={[styles.videoCardSmall, className].join(" ")}>
      <section className={styles.rectangular} />
    </div>
  );
};

export default VideoCardSmall;
