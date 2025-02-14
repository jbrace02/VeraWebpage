import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
  tokenomics?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  buttonHeight?: CSSProperties["height"];
};

const Button: NextPage<ButtonType> = ({
  className = "",
  property1 = "Default",
  tokenomics,
  buttonHeight,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonHeight,
    };
  }, [buttonHeight]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
      style={buttonStyle}
    >
      <a className={styles.tokenomics}>{tokenomics}</a>
    </div>
  );
};

export default Button;
