import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent2 from "./group-component2";
import styles from "./frame-component12.module.css";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.visionContentWrapper, className].join(" ")}>
      <div className={styles.visionContent}>
        <div className={styles.frameParent}>
          <GroupComponent2
            groupDivPadding="100px 20px 182px 48px"
            groupDivGap="24px"
            maskGroup="pending_1:2372"
            theBeginning="04 - The Next Phase"
            truthLaunchedJanuarythWith={`Website Launch & TruthSOL are next. Stake SOL, receive TruthSOL, and keep liquidity while supporting the mission. Then comes on-chain storage & retrieval—truth, forever immutable.`}
          />
          <div className={styles.longTermVision}>
            <div className={styles.wantToBeContainer}>Long-Term Vision</div>
            <div className={styles.weAreBuilding}>
              We are building something bigger than a project—we are creating a
              decentralized AI verification layer for the future. More
              groundbreaking developments are underway, but for now, we stay
              focused: expanding our reach, refining our technology, and
              fortifying truth.
            </div>
            <div className={styles.wantToBeContainer}>
              <p className={styles.wantToBe}>Want to Be Part of the Future?</p>
              <p
                className={styles.wantToBe}
              >{` • Stake & Support: Stake with TruthNode`}</p>
              <p className={styles.wantToBe}> • Join the Community: Telegram</p>
              <p className={styles.wantToBe}>
                 • Follow the Evolution: VerafyTruth
              </p>
            </div>
            <div className={styles.truthIsBeing}>
              Truth is being rewritten. Together, we ensure it stays real.
            </div>
          </div>
        </div>
        <div className={styles.vectorWrapper}>
          <Image
            className={styles.vectorIcon}
            loading="lazy"
            width={822}
            height={947}
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
