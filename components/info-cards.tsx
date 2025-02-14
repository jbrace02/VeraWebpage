import type { NextPage } from "next";
import Image from "next/image";
import styles from "./info-cards.module.css";

export type InfoCardsType = {
  className?: string;
};

const InfoCards: NextPage<InfoCardsType> = ({ className = "" }) => {
  return (
    <div className={[styles.infoCards, className].join(" ")}>
      <Image
        className={styles.infoCardsChild}
        width={1241}
        height={505}
        alt=""
        src="/group-4310111@2x.png"
      />
    </div>
  );
};

export default InfoCards;
