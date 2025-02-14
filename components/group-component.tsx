import type { NextPage } from "next";
import Image from "next/image";
import ContentCard from "./content-card";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <Image
        className={styles.vectorIcon}
        loading="lazy"
        width={822}
        height={947}
        alt=""
        src="/vector.svg"
      />
      <div className={styles.abstractGreenBackgroundLigh} />
      <div className={styles.contentCardParent}>
        <ContentCard
          property1="Default"
          maskGroup="/mask-group.svg"
          fullyTamperProofBlockchain="A Knowledge Revolution"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
