import type { NextPage } from "next";
import Image from "next/image";
import styles from "./desktop-x-l1920x.module.css";

const DesktopXL1920x: NextPage = () => {
  return (
    <div className={styles.desktopXl1920x1080}>
      <div className={styles.navigation}>
        <Image
          className={styles.bookmarkBorderIcon}
          loading="lazy"
          width={16}
          height={16}
          alt=""
        />
      </div>
      <section className={styles.background} />
    </div>
  );
};

export default DesktopXL1920x;
