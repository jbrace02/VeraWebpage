import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./group-component2.module.css";

export type GroupComponent2Type = {
  className?: string;
  maskGroup: string;
  theBeginning?: string;
  truthLaunchedJanuarythWith?: string;

  /** Style props */
  groupDivPadding?: CSSProperties["padding"];
  groupDivGap?: CSSProperties["gap"];
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  className = "",
  groupDivPadding,
  groupDivGap,
  maskGroup,
  theBeginning,
  truthLaunchedJanuarythWith,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: groupDivPadding,
      gap: groupDivGap,
    };
  }, [groupDivPadding, groupDivGap]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={groupDiv1Style}
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
      <h2 className={styles.theBeginning}>{theBeginning}</h2>
      <div className={styles.truthLaunchedJanuary}>
        {truthLaunchedJanuarythWith}
      </div>
    </div>
  );
};

export default GroupComponent2;
