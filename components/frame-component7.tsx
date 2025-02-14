import type { NextPage } from "next";
import Button1 from "./button1";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homeL1440x1080Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.truthchainVerifiedFactsOnWrapper}>
          <div className={styles.truthchainVerified}>
            TruthChain = Verified facts on-chain. No corruption, no bias—just
            blockchain-backed truth.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.transparentImmutableUnstopParent}>
              <h2
                className={styles.transparentImmutableUnstop}
              >{`transparent, immutable, unstoppable. `}</h2>
              <div
                className={styles.aBlockchainPoweredForce}
              >{`A blockchain-powered force against misinformation—transparent, immutable, unstoppable. Misinformation won’t stand a chance. TruthChain’s TRUTH token `}</div>
              <Button1
                property1="Default"
                buttonWidth="304px"
                buttonHeight="56px"
                buttonPosition="unset"
                buttonTop="unset"
                buttonLeft="unset"
                buyTruth="Stake your SOL"
                buyTruthColor="#00fff2"
                buyTruthTextDecoration="unset"
                buyTruthBackground="unset"
                buyTruthWebkitBackgroundClip="unset"
                buyTruthWebkitTextFillColor="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
