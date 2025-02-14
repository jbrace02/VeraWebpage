import type { NextPage } from "next";
import Image from "next/image";
import Button from "./button";
import ButtonSmallCa1 from "./button-small-ca1";
import Button1 from "./button1";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.buttonParent}>
            <Button
              property1="on klick"
              tokenomics="Tokenomics"
              buttonHeight="unset"
            />
            <Button
              property1="Default"
              tokenomics="Mission"
              buttonHeight="52px"
            />
            <Button
              property1="Default"
              tokenomics="Roadmap"
              buttonHeight="52px"
            />
          </div>
        </div>
        <div className={styles.buttonSmallCaParent}>
          <ButtonSmallCa1
            property1="Default"
            buttonSmallCaPosition="unset"
            buttonSmallCaTop="unset"
            buttonSmallCaLeft="unset"
            copyCaHeight="24px"
            copyCaDisplay="flex"
            copyCaAlignItems="center"
          />
          <Button1
            property1="Default"
            buttonWidth="242px"
            buttonHeight="unset"
            buttonPosition="unset"
            buttonTop="unset"
            buttonLeft="unset"
            buyTruth="Buy $Truth"
            buyTruthColor="unset"
            buyTruthTextDecoration="none"
            buyTruthBackground="linear-gradient(90deg, #00fff2, #fff)"
            buyTruthWebkitBackgroundClip="unset"
            buyTruthWebkitTextFillColor="unset"
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.truthTokenomicsParent}>
          <h1 className={styles.truthTokenomics}>$TRUTH TOKENOMICS</h1>
          <div className={styles.frameDiv}>
            <div className={styles.truthchainVerifiedFactsOnParent}>
              <h3 className={styles.truthchainVerified}>
                TruthChain = Verified facts on-chain. No corruption, no
                bias—just blockchain-backed truth.
              </h3>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.headerBg4Parent}>
                    <Image
                      className={styles.headerBg4Icon}
                      width={1920}
                      height={1080}
                      alt=""
                      src="/header-bg-1@2x.png"
                    />
                    <div className={styles.bg}>
                      <div className={styles.abstractGreenBackgroundLigh} />
                      <Image
                        className={styles.bgChild}
                        width={1918}
                        height={1076}
                        alt=""
                        src="/rectangle-67.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        A Fair and Transparent Launch
                      </div>
                      <div className={styles.atTruthchainOur}>
                        At TruthChain, our tokenomics is designed with
                        simplicity, fairness, and community empowerment at its
                        core. We believe in creating a transparent ecosystem
                        where every participant has an equal stake in the future
                        of truth. Here’s how we make it happen:
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        Fair Launch, Always.
                      </div>
                      <div className={styles.noPreSalesNo}>
                        No pre-sales. No hidden allocations. Every $TRUTH token
                        was minted at launch with a maximum supply of
                        1,000,000,000 tokens—ensuring that every participant
                        starts on an equal footing.
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        Community-First Distribution.
                      </div>
                      <div className={styles.atTruthchainOur}>
                        From day one, the entire supply was available to the
                        community. There are no team holdings or special
                        allocations reserved exclusively for insiders. Our
                        journey is powered solely by community trust and
                        contribution.
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        Locked Liquidity for Security.
                      </div>
                      <div className={styles.atTruthchainOur}>
                        <p className={styles.toBuildLongTerm}>
                          To build long-term confidence and guard against
                          volatility, the initial community supply of 7M was
                          locked for 90 days. This move underscores our
                          commitment to stability and our belief in a
                          sustainable ecosystem
                        </p>
                        <p className={styles.toBuildLongTerm}>&nbsp;</p>
                        <p
                          className={styles.toBuildLongTerm}
                        >{`Robust Token Utility & Ecosystem Incentives`}</p>
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        Locked Liquidity for Security.
                      </div>
                      <div className={styles.atTruthchainOur}>
                        <p className={styles.toBuildLongTerm}>
                          To build long-term confidence and guard against
                          volatility, the initial community supply of 7M was
                          locked for 90 days. This move underscores our
                          commitment to stability and our belief in a
                          sustainable ecosystem
                        </p>
                        <p className={styles.toBuildLongTerm}>&nbsp;</p>
                        <p
                          className={styles.toBuildLongTerm}
                        >{`Robust Token Utility & Ecosystem Incentives`}</p>
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        Transaction Fees that Power the Ecosystem.
                      </div>
                      <div className={styles.atTruthchainOur}>
                        Every transaction on the TruthChain platform incurs a
                        small fee in $TRUTH. These fees are funneled back into
                        the ecosystem, ensuring ongoing platform development and
                        sustainability.
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        Empowered Governance.
                      </div>
                      <div className={styles.atTruthchainOur}>
                        Holding $TRUTH means having a voice. Token holders can
                        participate in decentralized governance, propose
                        updates, and vote on key decisions. This democratic
                        process ensures that the platform evolves with the
                        collective wisdom of its community
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div
                        className={styles.aFairAnd}
                      >{`Staking & Network Security.`}</div>
                      <div className={styles.atTruthchainOur}>
                        Users can stake $TRUTH to secure the network and earn
                        passive rewards. (~7.2% APY) Staking aligns incentives
                        and strengthens the network’s resilience against
                        potential threats.
                      </div>
                    </div>
                    <div className={styles.aFairAndTransparentLaunchParent}>
                      <div className={styles.aFairAnd}>
                        Community Validator: TruthNode
                      </div>
                      <div className={styles.atTruthchainOur}>
                        A standout feature of our ecosystem is our community
                        validator, TruthNode. Here’s why it’s a cornerstone of
                        our tokenomics:system it supports.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.groupDiv}>
          <Image
            className={styles.frameChild}
            loading="lazy"
            width={1241}
            height={505}
            alt=""
            src="/group-431012@2x.png"
          />
          <div className={styles.frameWrapper3}>
            <div className={styles.fairLaunchAlwaysGroup}>
              <h1 className={styles.fairLaunchAlways1}>Fair Launch, Always.</h1>
              <div className={styles.noPreSalesNo1}>
                No pre-sales. No hidden allocations. Every $TRUTH token was
                minted at launch with a maximum supply of 1,000,000,000
                tokens—ensuring that every participant starts on an equal
                footing.
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.parent}>
                <div className={styles.div}>20%</div>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.div1}>10%</div>
                </div>
              </div>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameParent4}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.ellipseDiv} />
                    <div className={styles.ellipseParent1}>
                      <div className={styles.frameChild1} />
                      <div className={styles.div2}>{`35% `}</div>
                    </div>
                  </div>
                  <div className={styles.div3}>30%</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent2}>
              <div className={styles.frameChild2} />
              <div className={styles.div4}>9%</div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.sectionTemplateWrapper}>
                  <div className={styles.sectionTemplate} />
                </div>
                <h3 className={styles.headline}>Headline</h3>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.sectionTemplateWrapper}>
                  <div className={styles.sectionTemplate1} />
                </div>
                <h3 className={styles.headline}>Headline</h3>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.sectionTemplateWrapper}>
                  <div className={styles.sectionTemplate2} />
                </div>
                <h3 className={styles.headline}>Headline</h3>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.sectionTemplateWrapper}>
                  <div className={styles.sectionTemplate3} />
                </div>
                <h3 className={styles.headline}>Headline</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;