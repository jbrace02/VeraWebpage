import type { NextPage } from "next";
import Image from "next/image";
import styles from "./button-small-ca.module.css";

export type ButtonSmallCaType = {
  className?: string;
};

const ButtonSmallCa: NextPage<ButtonSmallCaType> = ({ className = "" }) => {
  return (
    <div className={[styles.buttonSmallCa, className].join(" ")}>
      <div className={styles.vectorWrapper}>
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={12}
          height={20}
          alt=""
          src="/vector-11.svg"
        />
      </div>
      <a className={styles.goBack}>Go back</a>
    </div>
  );
};

export default ButtonSmallCa;
