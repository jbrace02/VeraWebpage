import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./microphone-icon.module.css";

export type MicrophoneIconType = {
  className?: string;
  vector197: string;

  /** Variant props */
  class1?: 0;

  /** Style props */
  microphoneIconPosition?: CSSProperties["position"];
  microphoneIconTop?: CSSProperties["top"];
  microphoneIconLeft?: CSSProperties["left"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor1?: CSSProperties["backgroundColor"];
  rectangleDivBorder?: CSSProperties["border"];
};

const MicrophoneIcon: NextPage<MicrophoneIconType> = ({
  className = "",
  class1 = 0,
  microphoneIconPosition,
  microphoneIconTop,
  microphoneIconLeft,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  vector197,
  rectangleDivBorder,
}) => {
  const microphoneIconStyle: CSSProperties = useMemo(() => {
    return {
      position: microphoneIconPosition,
      top: microphoneIconTop,
      left: microphoneIconLeft,
    };
  }, [microphoneIconPosition, microphoneIconTop, microphoneIconLeft]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [rectangleDivBackgroundColor1]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  return (
    <div
      className={[styles.microphoneIcon, className].join(" ")}
      data-class={class1}
      style={microphoneIconStyle}
    >
      <div className={styles.microphoneIconChild} style={rectangleDivStyle} />
      <div className={styles.microphoneIconItem} style={rectangleDiv1Style} />
      <Image
        className={styles.microphoneIconInner}
        width={9}
        height={6}
        alt=""
        src={vector197}
      />
      <div className={styles.rectangleDiv} style={rectangleDiv2Style} />
    </div>
  );
};

export default MicrophoneIcon;
