import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent2 from "./group-component2";
import styles from "./frame-component11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.vectorWrapper}>
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={822}
          height={947}
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className={styles.frameGroup}>
        <GroupComponent2
          maskGroup="pending_1:2348"
          theBeginning="01 - The Beginning"
          truthLaunchedJanuarythWith="Truth launched January 28th with a vision: track AI outputs, store them on-chain, and ensure transparency. The foundation is set, the community is growing, and the mission is unstoppable."
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
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
            <h2 className={styles.poweringTheNetwork}>
              02 - Powering the Network
            </h2>
            <div className={styles.over35mStakedContainer}>
              <span className={styles.over35mStakedContainer1}>
                <p className={styles.over35mStaked}>
                  Over $3.5M staked in TruthNode, strengthening the treasury and
                  rewarding holders. Every validator supports decentralization,
                  transparency, and long-term sustainability.
                </p>
              </span>
            </div>
          </div>
        </div>
        <GroupComponent2
          groupDivPadding="100px 20px 182px 48px"
          groupDivGap="24px"
          maskGroup="pending_1:2356"
          theBeginning="03 - Truth Terminal"
          truthLaunchedJanuarythWith="A tool to ping multiple AI models, detect bias, and store findings on-chain. The MVP is built—soon, anyone will be able to test, verify, and expose AI narratives in real-time."
        />
      </div>
    </section>
  );
};

export default FrameComponent11;
