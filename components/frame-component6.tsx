import type { NextPage } from "next";
import Image from "next/image";
import Button1 from "./button1";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.tokenomicsContentParent, className].join(" ")}>
      <div className={styles.tokenomicsContent}>
        <div className={styles.tokenomicsHeader}>
          <h1 className={styles.truthTokenomics}>$TRUTH TOKENOMICS</h1>
          <div className={styles.description}>
            <div className={styles.truthchainVerified}>
              TruthChain = Verified facts on-chain. No corruption, no bias—just
              blockchain-backed truth.
            </div>
          </div>
        </div>
        <div className={styles.tokenomicsContentInner}>
          <div className={styles.frameParent}>
            <Image
              className={styles.frameChild}
              loading="lazy"
              width={1241}
              height={505}
              alt=""
              src="/group-431011@2x.png"
            />
            <div className={styles.fairLaunch}>
              <div className={styles.fairLaunchAlwaysParent}>
                <h2 className={styles.fairLaunchAlways}>
                  Fair Launch, Always.
                </h2>
                <div className={styles.noPreSalesNo}>
                  No pre-sales. No hidden allocations. Every $TRUTH token was
                  minted at launch with a maximum supply of 1,000,000,000
                  tokens—ensuring that every participant starts on an equal
                  footing.
                </div>
              </div>
            </div>
            <div className={styles.allocations}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameItem} />
                <div className={styles.parent}>
                  <div className={styles.div}>20%</div>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.div1}>10%</div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameGroup}>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.frameDiv}>
                        <div className={styles.frameChild1} />
                        <div className={styles.div2}>{`35% `}</div>
                      </div>
                    </div>
                    <div className={styles.div3}>30%</div>
                  </div>
                </div>
              </div>
              <div className={styles.ellipseParent1}>
                <div className={styles.frameChild2} />
                <div className={styles.div4}>9%</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.sectionTemplateWrapper}>
                    <div className={styles.sectionTemplate} />
                  </div>
                  <div className={styles.headline}>Headline</div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sectionTemplateWrapper}>
                    <div className={styles.sectionTemplate1} />
                  </div>
                  <div className={styles.headline}>Headline</div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sectionTemplateWrapper}>
                    <div className={styles.sectionTemplate2} />
                  </div>
                  <div className={styles.headline}>Headline</div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sectionTemplateWrapper}>
                    <div className={styles.sectionTemplate3} />
                  </div>
                  <div className={styles.headline}>Headline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buyButtonContainer}>
          <Button1
            property1="Default"
            buttonWidth="304px"
            buttonHeight="56px"
            buttonPosition="unset"
            buttonTop="unset"
            buttonLeft="unset"
            buyTruth="More about staking"
            buyTruthColor="#00fff2"
            buyTruthTextDecoration="unset"
            buyTruthBackground="unset"
            buyTruthWebkitBackgroundClip="unset"
            buyTruthWebkitTextFillColor="unset"
          />
        </div>
      </div>
      <h1 className={styles.truthFaq}>$TRUTH FAQ</h1>
    </div>
  );
};

export default FrameComponent6;
