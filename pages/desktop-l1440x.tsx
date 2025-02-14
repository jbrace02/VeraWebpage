import type { NextPage } from "next";
import Image from "next/image";
import styles from "./desktop-l1440x.module.css";

const DesktopL1440x: NextPage = () => {
  return (
    <div className={styles.desktopL1440x1080}>
      <div className={styles.bookmarkBorderWrapper}>
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

export default DesktopL1440x;
