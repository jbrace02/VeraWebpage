import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./misinformation-card-parent.module.css";

export type MisinformationCardParentType = {
  className?: string;
  maskGroup: string;
  againstMisinformation?: string;
  misinformationThrivesInThe?: string;

  /** Style props */
  misinformationCardParentPadding?: CSSProperties["padding"];
};

const MisinformationCardParent: NextPage<MisinformationCardParentType> = ({
  className = "",
  misinformationCardParentPadding,
  maskGroup,
  againstMisinformation,
  misinformationThrivesInThe,
}) => {
  const misinformationCardParentStyle: CSSProperties = useMemo(() => {
    return {
      padding: misinformationCardParentPadding,
    };
  }, [misinformationCardParentPadding]);

  return (
    <div
      className={[styles.misinformationCardParent, className].join(" ")}
      style={misinformationCardParentStyle}
    >
      <div className={styles.misinformationMaskParent}>
        <Image
          className={styles.maskGroupIcon}
          loading="lazy"
          width={419}
          height={505}
          alt=""
          src={maskGroup}
        />
        <div className={styles.misinformationBackground} />
      </div>
      <b className={styles.againstMisinformation}>{againstMisinformation}</b>
      <div className={styles.misinformationThrivesIn}>
        {misinformationThrivesInThe}
      </div>
    </div>
  );
};

export default MisinformationCardParent;
