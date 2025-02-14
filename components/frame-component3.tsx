import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
  maskGroup: string;
  againstMisinformation?: string;
  misinformationThrivesInThe?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  frameDivPadding,
  maskGroup,
  againstMisinformation,
  misinformationThrivesInThe,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.maskGroupParent}>
        <Image
          className={styles.maskGroupIcon}
          loading="lazy"
          width={419}
          height={505}
          alt=""
          src={maskGroup}
        />
        <div className={styles.frameChild} />
      </div>
      <h2 className={styles.againstMisinformation}>{againstMisinformation}</h2>
      <div className={styles.misinformationThrivesIn}>
        {misinformationThrivesInThe}
      </div>
    </div>
  );
};

export default FrameComponent3;