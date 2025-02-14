import type { NextPage } from "next";
import Image from "next/image";
import styles from "./arrow-back-ios24dp-u-n-d-e-f-i-n-e-d.module.css";

export type ArrowBackIos24dpUNDEFINEDType = {
  className?: string;
};

const ArrowBackIos24dpUNDEFINED: NextPage<ArrowBackIos24dpUNDEFINEDType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.arrowBackIos24dpUndefined, className].join(" ")}>
      <Image
        className={styles.vectorIcon}
        loading="lazy"
        width={12}
        height={20}
        alt=""
        src="/vector-11.svg"
      />
    </div>
  );
};

export default ArrowBackIos24dpUNDEFINED;
