import type { NextPage } from "next";
import Image from "next/image";
import ContentCard from "./content-card";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.vectorParent, className].join(" ")}>
      <Image
        className={styles.vectorIcon}
        loading="lazy"
        width={822}
        height={947}
        alt=""
        src="/vector-12.svg"
      />
      <div className={styles.abstractGreenBackgroundLigh} />
      <div className={styles.tamperProofWrapper}>
        <div className={styles.tamperProof}>
          <ContentCard
            property1="Default"
            contentCardPadding="80px 40px 167px 43px"
            frameDivRight="unset"
            maskGroup="/mask-group.svg"
            maskGroupIconWidth="419px"
            maskGroupIconHeight="505px"
            maskGroupIconRight="unset"
            maskGroupIconBottom="unset"
            maskGroupIconOverflow="unset"
            maskGroupIconMaxHeight="unset"
            contentCardBackgroundWidth="421px"
            contentCardBackgroundHeight="507px"
            contentCardBackgroundRight="unset"
            contentCardBackgroundBottom="unset"
            groupDivHeight="258px"
            factsShouldBeContainerDisplay="inline-block"
            factsShouldBeContainerAlignItems="unset"
            frameDivWidth="327px"
            fullyTamperProofBlockchainMargin="0"
          />
          <ContentCard
            property1="Default"
            contentCardPadding="80px 40px 167px 43px"
            frameDivRight="0px"
            maskGroup="pending_I32:397;1:2240"
            maskGroupIconWidth="calc(100% - 3px)"
            maskGroupIconHeight="100%"
            maskGroupIconRight="3px"
            maskGroupIconBottom="0px"
            maskGroupIconOverflow="hidden"
            maskGroupIconMaxHeight="100%"
            contentCardBackgroundWidth="calc(100% - 1px)"
            contentCardBackgroundHeight="calc(100% + 2px)"
            contentCardBackgroundRight="-2px"
            contentCardBackgroundBottom="-2px"
            groupDivHeight="258px"
            fullyTamperProofBlockchain="A Knowledge Revolution"
            factsShouldBeContainerDisplay="flex"
            factsShouldBeContainerAlignItems="center"
            frameDivWidth="100%"
            fullyTamperProofBlockchainMargin="0"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
