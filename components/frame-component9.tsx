import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./frame-component9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonSecondaryContainerClick = useCallback(() => {
    router.push("/home-x-l1920x");
  }, [router]);

  return (
    <section
      className={[styles.tokenomicsXl1920x1080Inner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.truthnodeIsntJustAValidatParent}>
                <div className={styles.truthnodeIsntJust}>
                  TruthNode isn’t just a validator—it’s a community-operated
                  node that actively supports development, funds buybacks, and
                  drives operational excellence. It stands as a testament to our
                  decentralized vision.
                </div>
                <div className={styles.validatorMetricsSnapshotContainer}>
                  <span>
                    <p className={styles.validatorMetricsSnapshot}>
                      Validator Metrics (Snapshot): 2-5-2025
                    </p>
                    <p className={styles.validatorMetricsSnapshot}>&nbsp;</p>
                    <p className={styles.validatorMetricsSnapshot}>
                      SOL Balance: 0.6312 SOL (~$133.37)
                    </p>
                    <p className={styles.validatorMetricsSnapshot}>&nbsp;</p>
                    <p className={styles.validatorMetricsSnapshot}>
                      Delegated Stake: 15,563.11 SOL (~$3.29M)
                    </p>
                    <p className={styles.validatorMetricsSnapshot}>&nbsp;</p>
                    <p className={styles.validatorMetricsSnapshot}>
                      Commission: A modest 5% to sustain network operations
                    </p>
                    <p className={styles.validatorMetricsSnapshot}>&nbsp;</p>
                    <p className={styles.validatorMetricsSnapshot}>
                      Validator Identity: TruthNode
                    </p>
                  </span>
                </div>
                <div className={styles.voteAccountTruthueykd2usmaqParent}>
                  <div className={styles.voteAccountTruthueykd2usmaq}>
                    Vote Account: TrutHUEykD2UsmAq7W3hA4r3XiQxGLqhENAwo9522xa
                  </div>
                  <div className={styles.truthnodeEarnsFees}>
                    TruthNode earns fees through its participation in the
                    network, ensuring it can continually support both
                    development efforts and strategic buybacks of $TRUTH. This
                    approach not only stabilizes the ecosystem but also aligns
                    the interests of the community with the long-term success of
                    the platform.
                  </div>
                </div>
                <div className={styles.voteAccountTruthueykd2usmaqParent}>
                  <div className={styles.voteAccountTruthueykd2usmaq}>
                    Designed for a Future of Truth
                  </div>
                  <div className={styles.truthnodeEarnsFees}>
                    At Truth, every element of our tokenomics is thoughtfully
                    engineered to inspire trust and foster innovation. Our model
                    is simple, transparent, and built for the long haul—just as
                    Steve would insist: focus on what matters, and remove the
                    unnecessary.
                  </div>
                </div>
                <div className={styles.voteAccountTruthueykd2usmaqParent}>
                  <div className={styles.voteAccountTruthueykd2usmaq}>
                    No Hidden Agendas:
                  </div>
                  <div className={styles.everyTokenAnd}>
                    Every token and every transaction is out in the open for the
                    community to see.
                  </div>
                </div>
                <div className={styles.voteAccountTruthueykd2usmaqParent}>
                  <div
                    className={styles.voteAccountTruthueykd2usmaq}
                  >{`Community-Centric: `}</div>
                  <div className={styles.everyTokenAnd}>
                    The power to govern and shape our future lies with you—the
                    believers and builders of truth.
                  </div>
                </div>
                <div className={styles.sustainableGrowthParent}>
                  <div className={styles.voteAccountTruthueykd2usmaq}>
                    Sustainable Growth:
                  </div>
                  <div className={styles.withBuiltInIncentives}>
                    With built-in incentives for validators and a dynamic
                    utility model, $TRUTH is designed to evolve and flourish
                    alongside the ecosystem it supports.
                  </div>
                </div>
              </div>
              <div className={styles.buttonSmallCaWrapper}>
                <div className={styles.buttonSmallCa}>
                  <div
                    className={styles.buttonSecondary}
                    onClick={onButtonSecondaryContainerClick}
                  >
                    <div className={styles.vectorWrapper}>
                      <Image
                        className={styles.vectorIcon}
                        width={12}
                        height={20}
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                    <div className={styles.goBack}>Go back</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className={styles.vectorIcon1}
            loading="lazy"
            width={822}
            height={947}
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;