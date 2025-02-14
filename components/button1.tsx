import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./button1.module.css";

export type Button1Type = {
  className?: string;
  buyTruth?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  buttonWidth?: CSSProperties["width"];
  buttonHeight?: CSSProperties["height"];
  buttonPosition?: CSSProperties["position"];
  buttonTop?: CSSProperties["top"];
  buttonLeft?: CSSProperties["left"];
  buyTruthColor?: CSSProperties["color"];
  buyTruthTextDecoration?: CSSProperties["textDecoration"];
  buyTruthBackground?: CSSProperties["background"];
  buyTruthWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  buyTruthWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
};

const Button1: NextPage<Button1Type> = ({
  className = "",
  property1 = "Default",
  buttonWidth,
  buttonHeight,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buyTruth,
  buyTruthColor,
  buyTruthTextDecoration,
  buyTruthBackground,
  buyTruthWebkitBackgroundClip,
  buyTruthWebkitTextFillColor,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      height: buttonHeight,
      position: buttonPosition,
      top: buttonTop,
      left: buttonLeft,
    };
  }, [buttonWidth, buttonHeight, buttonPosition, buttonTop, buttonLeft]);

  const buyTruthStyle: CSSProperties = useMemo(() => {
    return {
      color: buyTruthColor,
      textDecoration: buyTruthTextDecoration,
      background: buyTruthBackground,
      webkitBackgroundClip: buyTruthWebkitBackgroundClip,
      webkitTextFillColor: buyTruthWebkitTextFillColor,
    };
  }, [
    buyTruthColor,
    buyTruthTextDecoration,
    buyTruthBackground,
    buyTruthWebkitBackgroundClip,
    buyTruthWebkitTextFillColor,
  ]);

  return (
    <div
      className={[styles.button, className].join(" ")}
      data-property1={property1}
      style={button1Style}
    >
      <div className={styles.buyTruth} style={buyTruthStyle}>
        {buyTruth}
      </div>
    </div>
  );
};

export default Button1;
