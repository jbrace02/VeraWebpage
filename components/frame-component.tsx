import type { NextPage } from "next";
import Image from "next/image";
import ContentCard from "./content-card";
import MisinformationCardParent from "./misinformation-card-parent";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeXl1920x1080Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rulesTitleParentWrapper}>
          <div className={styles.rulesTitleParent}>
            <h1 className={styles.rewritingTheRulesContainer}>
              <p
                className={styles.rewritingTheRules}
              >{`Rewriting the rules `}</p>
              <p className={styles.rewritingTheRules}>of trust</p>
            </h1>
            <div className={styles.rulesDescriptionParent}>
              <div className={styles.truthchainVerified}>
                TruthChain = Verified facts on-chain. No corruption, no
                bias—just blockchain-backed truth.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardsParentParent}>
          <div className={styles.cardsParent}>
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
              fullyTamperProofBlockchainMargin="unset"
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
              fullyTamperProofBlockchainMargin="unset"
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
              fullyTamperProofBlockchainMargin="unset"
            />
          </div>
          <div className={styles.misinformationCards}>
            <MisinformationCardParent
              maskGroup="pending_1:1874"
              againstMisinformation="Against Misinformation"
              misinformationThrivesInThe="Misinformation thrives in the dark. We bring it to light. Truth Terminal records AI insights on-chain, making history tamper-proof and censorship-resistant. No more silent revisions—only verifiable truth."
            />
            <div className={styles.misinformationCardParent}>
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
              <b className={styles.theFutureOfContainer}>
                <span className={styles.theFutureOfContainer1}>
                  <p className={styles.rewritingTheRules}>&nbsp;</p>
                  <p className={styles.rewritingTheRules}>
                    The Future of Trust
                  </p>
                </span>
              </b>
              <div className={styles.trustIsBuilt}>
                Trust is built on proof, not promises. Every claim,
                contradiction, and AI response is stored forever. A
                decentralized record that can’t be altered—only examined.
              </div>
            </div>
            <MisinformationCardParent
              misinformationCardParentPadding="80px 20px 167px 48px"
              maskGroup="pending_1:1890"
              againstMisinformation="Fully Tamper-Proof Blockchain"
              misinformationThrivesInThe="Facts should be permanent. Now, they are. Truth Terminal anchors data to Solana, and beyond, ensuring truth can’t be erased, rewritten, or controlled."
            />
          </div>
          <Image
            className={styles.arrowBackIos24dpUndefinedIcon}
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/arrow-back-ios-24dp-undefined-fill0-wght400-grad0-opsz24.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.frameInner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
