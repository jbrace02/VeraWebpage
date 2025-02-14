import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./content-card.module.css";

export type ContentCardType = {
  className?: string;
  maskGroup: string;
  fullyTamperProofBlockchain?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  contentCardPadding?: CSSProperties["padding"];
  frameDivRight?: CSSProperties["right"];
  maskGroupIconWidth?: CSSProperties["width"];
  maskGroupIconHeight?: CSSProperties["height"];
  maskGroupIconRight?: CSSProperties["right"];
  maskGroupIconBottom?: CSSProperties["bottom"];
  maskGroupIconOverflow?: CSSProperties["overflow"];
  maskGroupIconMaxHeight?: CSSProperties["maxHeight"];
  contentCardBackgroundWidth?: CSSProperties["width"];
  contentCardBackgroundHeight?: CSSProperties["height"];
  contentCardBackgroundRight?: CSSProperties["right"];
  contentCardBackgroundBottom?: CSSProperties["bottom"];
  groupDivHeight?: CSSProperties["height"];
  factsShouldBeContainerDisplay?: CSSProperties["display"];
  factsShouldBeContainerAlignItems?: CSSProperties["alignItems"];
  frameDivWidth?: CSSProperties["width"];
  fullyTamperProofBlockchainMargin?: CSSProperties["margin"];
};

const ContentCard: NextPage<ContentCardType> = ({
  className = "",
  property1 = "Default",
  contentCardPadding,
  frameDivRight,
  maskGroup,
  maskGroupIconWidth,
  maskGroupIconHeight,
  maskGroupIconRight,
  maskGroupIconBottom,
  maskGroupIconOverflow,
  maskGroupIconMaxHeight,
  contentCardBackgroundWidth,
  contentCardBackgroundHeight,
  contentCardBackgroundRight,
  contentCardBackgroundBottom,
  groupDivHeight,
  fullyTamperProofBlockchain,
  factsShouldBeContainerDisplay,
  factsShouldBeContainerAlignItems,
  frameDivWidth,
  fullyTamperProofBlockchainMargin,
}) => {
  const contentCardStyle: CSSProperties = useMemo(() => {
    return {
      padding: contentCardPadding,
    };
  }, [contentCardPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      right: frameDivRight,
      width: frameDivWidth,
    };
  }, [frameDivRight, frameDivWidth]);

  const maskGroupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: maskGroupIconWidth,
      height: maskGroupIconHeight,
      right: maskGroupIconRight,
      bottom: maskGroupIconBottom,
      overflow: maskGroupIconOverflow,
      maxHeight: maskGroupIconMaxHeight,
    };
  }, [
    maskGroupIconWidth,
    maskGroupIconHeight,
    maskGroupIconRight,
    maskGroupIconBottom,
    maskGroupIconOverflow,
    maskGroupIconMaxHeight,
  ]);

  const contentCardBackgroundStyle: CSSProperties = useMemo(() => {
    return {
      width: contentCardBackgroundWidth,
      height: contentCardBackgroundHeight,
      right: contentCardBackgroundRight,
      bottom: contentCardBackgroundBottom,
    };
  }, [
    contentCardBackgroundWidth,
    contentCardBackgroundHeight,
    contentCardBackgroundRight,
    contentCardBackgroundBottom,
  ]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const factsShouldBeContainerStyle: CSSProperties = useMemo(() => {
    return {
      display: factsShouldBeContainerDisplay,
      alignItems: factsShouldBeContainerAlignItems,
    };
  }, [factsShouldBeContainerDisplay, factsShouldBeContainerAlignItems]);

  const fullyTamperProofBlockchainStyle: CSSProperties = useMemo(() => {
    return {
      margin: fullyTamperProofBlockchainMargin,
    };
  }, [fullyTamperProofBlockchainMargin]);

  return (
    <div
      className={[styles.contentCard, className].join(" ")}
      data-property1={property1}
      style={contentCardStyle}
    >
      <div className={styles.maskGroupParent} style={frameDivStyle}>
        <Image
          className={styles.maskGroupIcon}
          loading="lazy"
          width={419}
          height={505}
          alt=""
          src={maskGroup}
          style={maskGroupIconStyle}
        />
        <div
          className={styles.contentCardBackground}
          style={contentCardBackgroundStyle}
        />
      </div>
      <div
        className={styles.fullyTamperProofBlockchainParent}
        style={groupDivStyle}
      >
        <b
          className={styles.fullyTamperProofBlockchain}
          style={fullyTamperProofBlockchainStyle}
        >
          {fullyTamperProofBlockchain}
        </b>
        <div
          className={styles.factsShouldBeContainer1}
          style={factsShouldBeContainerStyle}
        >
          <span className={styles.factsShouldBeContainer}>
            <p className={styles.truthShouldEvolve}>
              Truth should evolve, not vanish.
            </p>
            <p className={styles.aLivingOpenSource}>
              A living, open-source knowledge base where every edit is tracked,
              every source is verifiable, and history stays honest.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
