import type { NextPage } from "next";
import Image from "next/image";
import ContentCard from "./content-card";
import styles from "./info-carsds-slider.module.css";

export type InfoCarsdsSliderType = {
  className?: string;
};

const InfoCarsdsSlider: NextPage<InfoCarsdsSliderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.infoCarsdsSlider, className].join(" ")}>
      <section className={styles.main}>
        <div className={styles.arrowBackIos24dpUndefinedWrapper}>
          <Image
            className={styles.arrowBackIos24dpUndefinedIcon}
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/arrow-back-ios-24dp-undefined-fill0-wght400-grad0-opsz241.svg"
          />
        </div>
        <div className={styles.cardContent}>
          <ContentCard
            property1="Default"
            contentCardPadding="80px 40px 167px 43px"
            frameDivRight="0px"
            maskGroup="/mask-group.svg"
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
            fullyTamperProofBlockchain="Fully Tamper-Proof Blockchain"
            factsShouldBeContainerDisplay="flex"
            factsShouldBeContainerAlignItems="center"
            frameDivWidth="100%"
            fullyTamperProofBlockchainMargin="0"
          />
          <ContentCard
            property1="Default"
            contentCardPadding="80px 40px 115px 43px"
            frameDivRight="0px"
            maskGroup="/mask-group.svg"
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
            groupDivHeight="310px"
            fullyTamperProofBlockchain="Against Misinformation"
            factsShouldBeContainerDisplay="inline-block"
            factsShouldBeContainerAlignItems="unset"
            frameDivWidth="100%"
            fullyTamperProofBlockchainMargin="0"
          />
          <ContentCard
            property1="Default"
            contentCardPadding="80px 40px 167px 43px"
            frameDivRight="0px"
            maskGroup="/mask-group.svg"
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
            factsShouldBeContainerDisplay="inline-block"
            factsShouldBeContainerAlignItems="unset"
            frameDivWidth="100%"
            fullyTamperProofBlockchainMargin="0"
          />
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
            fullyTamperProofBlockchain="A Knowledge Revolution"
            factsShouldBeContainerDisplay="flex"
            factsShouldBeContainerAlignItems="center"
            frameDivWidth="419px"
            fullyTamperProofBlockchainMargin="0"
          />
        </div>
      </section>
      <div className={styles.infoCarsdsSliderInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
        </div>
      </div>
    </div>
  );
};

export default InfoCarsdsSlider;
