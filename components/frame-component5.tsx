import type { NextPage } from "next";
import Image from "next/image";
import ContentCard from "./content-card";
import FrameComponent3 from "./frame-component3";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.arrowBackIos24dpUndefinedWrapper}>
              <Image
                className={styles.arrowBackIos24dpUndefinedIcon}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/arrow-back-ios-24dp-undefined-fill0-wght400-grad0-opsz24.svg"
              />
            </div>
            <div className={styles.duplicateCard}>
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
            </div>
          </div>
          <div className={styles.frameDiv}>
            <FrameComponent3
              maskGroup="pending_32:399"
              againstMisinformation="Against Misinformation"
              misinformationThrivesInThe="Misinformation thrives in the dark. We bring it to light. Truth Terminal records AI insights on-chain, making history tamper-proof and censorship-resistant. No more silent revisions—only verifiable truth."
            />
            <div className={styles.frameParent1}>
              <div className={styles.maskGroupParent}>
                <Image
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  width={419}
                  height={505}
                  alt=""
                />
                <div className={styles.frameChild} />
              </div>
              <h2 className={styles.theFutureOfContainer}>
                <span className={styles.theFutureOfContainer1}>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.blankLine}>The Future of Trust</p>
                </span>
              </h2>
              <div className={styles.trustIsBuilt}>
                Trust is built on proof, not promises. Every claim,
                contradiction, and AI response is stored forever. A
                decentralized record that can’t be altered—only examined.
              </div>
            </div>
            <FrameComponent3
              frameDivPadding="80px 20px 167px 48px"
              maskGroup="pending_32:415"
              againstMisinformation="Fully Tamper-Proof Blockchain"
              misinformationThrivesInThe="Facts should be permanent. Now, they are. Truth Terminal anchors data to Solana, and beyond, ensuring truth can’t be erased, rewritten, or controlled."
            />
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.frameInner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
