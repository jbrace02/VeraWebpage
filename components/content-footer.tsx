import type { NextPage } from "next";
import Image from "next/image";
import Button1 from "./button1";
import styles from "./content-footer.module.css";

export type ContentFooterType = {
  className?: string;
};

const ContentFooter: NextPage<ContentFooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.contentFooter, className].join(" ")}>
      <div className={styles.contentFooterParent}>
        <div className={styles.stakingImageParentParent}>
          <div className={styles.stakingImageParent}>
            <div className={styles.stakingIconParent}>
              <Image
                className={styles.stakingIcon}
                loading="lazy"
                width={822}
                height={947}
                alt=""
                src="/vector-1.svg"
              />
              <div className={styles.abstractGreenBackgroundLigh} />
            </div>
          </div>
          <div className={styles.stakingTitleParent}>
            <div className={styles.stakingTitle}>
              <h1 className={styles.theTruthIs}>The $Truth is Yours.</h1>
              <div className={styles.stakingDescription}>
                <div className={styles.truthchainVerified}>
                  TruthChain = Verified facts on-chain. No corruption, no
                  bias—just blockchain-backed truth.
                </div>
              </div>
            </div>
            <div className={styles.stakingBackgroundParent}>
              <div className={styles.backgroundShapeWrapper}>
                <div className={styles.backgroundShape} />
              </div>
            </div>
            <div className={styles.stakingTitle}>
              <h1 className={styles.stakingTruthSol}>Staking $TRUTH SOL</h1>
              <div className={styles.stakingDescription}>
                <div className={styles.truthchainVerified1}>
                  TruthChain = Verified facts on-chain. No corruption, no
                  bias—just blockchain-backed truth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.transparentShapeWrapper}>
          <div className={styles.backgroundShape} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.transparentImmutableUnstopParent}>
            <b
              className={styles.transparentImmutableUnstop}
            >{`transparent, immutable, unstoppable. `}</b>
            <div
              className={styles.aBlockchainPoweredForce}
            >{`A blockchain-powered force against misinformation—transparent, immutable, unstoppable. Misinformation won’t stand a chance. TruthChain’s TRUTH token `}</div>
            <Button1 property1="Default" buyTruth="Stake your SOL" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFooter;
