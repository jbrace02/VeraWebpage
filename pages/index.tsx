import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent10 from "../components/frame-component10";
import styles from "./index.module.css";

const TokenomicsXL1920x: NextPage = () => {
  const router = useRouter();

  const onLogoVerafyClick = useCallback(() => {
    router.push("/home-x-l1920x");
  }, [router]);

  return (
    <div className={styles.tokenomicsXl1920x1080}>
      <div className={styles.b034ab39da047c7Ac04A544718} />
      <div className={styles.noise} />
      <div className={styles.abstractGreenBackgroundLigh} />
      <div className={styles.abstractGreenBackgroundLigh1} />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.logoVerafyParent}>
            <div className={styles.logoVerafy} onClick={onLogoVerafyClick} />
            <Image
              className={styles.logoVerafy4Icon}
              loading="lazy"
              width={120}
              height={120}
              alt=""
              src="/logo-verafy-4@2x.png"
            />
          </div>
          <div className={styles.vectorWrapper}>
            <Image
              className={styles.vectorIcon}
              loading="lazy"
              width={822}
              height={947}
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <FrameComponent8 />
        </div>
      </section>
      <FrameComponent9 />
      <FrameComponent10 />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
      </div>
    </div>
  );
};

export default TokenomicsXL1920x;