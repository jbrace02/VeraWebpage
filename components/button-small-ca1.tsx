import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./button-small-ca1.module.css";

export type ButtonSmallCa1Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  buttonSmallCaPosition?: CSSProperties["position"];
  buttonSmallCaTop?: CSSProperties["top"];
  buttonSmallCaLeft?: CSSProperties["left"];
  copyCaHeight?: CSSProperties["height"];
  copyCaDisplay?: CSSProperties["display"];
  copyCaAlignItems?: CSSProperties["alignItems"];
};

const ButtonSmallCa1: NextPage<ButtonSmallCa1Type> = ({
  className = "",
  property1 = "Default",
  buttonSmallCaPosition,
  buttonSmallCaTop,
  buttonSmallCaLeft,
  copyCaHeight,
  copyCaDisplay,
  copyCaAlignItems,
}) => {
  const buttonSmallCaStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonSmallCaPosition,
      top: buttonSmallCaTop,
      left: buttonSmallCaLeft,
    };
  }, [buttonSmallCaPosition, buttonSmallCaTop, buttonSmallCaLeft]);

  const copyCaStyle: CSSProperties = useMemo(() => {
    return {
      height: copyCaHeight,
      display: copyCaDisplay,
      alignItems: copyCaAlignItems,
    };
  }, [copyCaHeight, copyCaDisplay, copyCaAlignItems]);

  return (
    <div
      className={[styles.buttonSmallCa, className].join(" ")}
      data-property1={property1}
      style={buttonSmallCaStyle}
    >
      <div className={styles.copyContent}>
        <a className={styles.copyCa} style={copyCaStyle}>
          copy ca
        </a>
        <Image
          className={styles.contentCopy24dpUndefinedFiIcon}
          width={24}
          height={24}
          alt=""
          src="/content-copy-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
    </div>
  );
};

export default ButtonSmallCa1;
