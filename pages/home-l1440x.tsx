import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import GroupComponent1 from "../components/group-component1";
import ButtonSmallCa1 from "../components/button-small-ca1";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import styles from "./home-l1440x.module.css";

const HomeL1440x: NextPage = () => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <div className={styles.homeL1440x1080}>
      <div className={styles.vectorParent}>
        <Image
          className={styles.vectorIcon}
          width={822}
          height={947}
          alt=""
          src="/vector-1.svg"
        />
        <div className={styles.abstractGreenBackgroundLigh} />
      </div>
      <GroupComponent1 />
      <div className={styles.vectorGroup}>
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={822}
          height={947}
          alt=""
          src="/vector-1.svg"
        />
        <div className={styles.abstractGreenBackgroundLigh} />
        <h1 className={styles.theTruthIs}>The $Truth is Yours.</h1>
      </div>
      <ButtonSmallCa1
        property1="Default"
        buttonSmallCaPosition="absolute"
        buttonSmallCaTop="64px"
        buttonSmallCaLeft="920px"
        copyCaHeight="unset"
        copyCaDisplay="unset"
        copyCaAlignItems="unset"
      />
      <FrameComponent4 />
      <section className={styles.homeL1440x1080Inner}>
        <div className={styles.frameParent}>
          <div className={styles.truthchainVerifiedFactsOnWrapper}>
            <div className={styles.truthchainVerified}>
              TruthChain = Verified facts on-chain. No corruption, no bias—just
              blockchain-backed truth.
            </div>
          </div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
      </section>
      <header className={styles.stakingTruthSol}>Staking $TRUTH SOL</header>
      <FrameComponent7 />
      <div className={styles.logoVerafy} />
      <section className={styles.frameGroup}>
        <FrameComponent5 />
        <FrameComponent6 />
        <div className={styles.descriptionContainer}>
          <div className={styles.truthchainVerified}>
            TruthChain = Verified facts on-chain. No corruption, no bias—just
            blockchain-backed truth.
          </div>
        </div>
        <div className={styles.sectionTemplateParent} data-acc-group>
          <div
            className={styles.sectionTemplate}
            data-acc-item
            data-acc-open
            data-acc-original
            data-acc-default-open
          >
            <div className={styles.helpItemParent}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>How can i help?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionContentaccordionDef}
                data-acc-content
              >
                <div className={styles.container}>
                  <div className={styles.answerItem}>
                    <div className={styles.truthNeedsDefenders}>
                      Truth needs defenders. Here’s how you can join the
                      mission.
                    </div>
                    <div className={styles.joinTheCommunityContainer}>
                      <span className={styles.joinTheCommunityContainer1}>
                        <p className={styles.joinTheCommunity}>
                          - Join the Community: Be part of the conversation in
                          our Telegram group. Connect, discuss, and help shape
                          the future of AI accountability.  
                        </p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Join Telegram](https://t.me/truth_chain)
                        </p>
                        <p
                          className={styles.joinTheCommunity}
                        >{`- Stake & Support: Delegate SOL to TruthNode to strengthen the network and earn passive rewards.`}</p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Stake SOL Here](https://stakewiz.com)
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTemplateClose} data-acc-item>
            <div className={styles.helpItemParent}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>How can i help?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container}>
                  <div className={styles.truthNeedsDefendersHeresParent}>
                    <div className={styles.truthNeedsDefenders}>
                      Truth needs defenders. Here’s how you can join the
                      mission.
                    </div>
                    <div className={styles.joinTheCommunityContainer}>
                      <span className={styles.joinTheCommunityContainer1}>
                        <p className={styles.joinTheCommunity}>
                          - Join the Community: Be part of the conversation in
                          our Telegram group. Connect, discuss, and help shape
                          the future of AI accountability.  
                        </p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Join Telegram](https://t.me/truth_chain)
                        </p>
                        <p
                          className={styles.joinTheCommunity}
                        >{`- Stake & Support: Delegate SOL to TruthNode to strengthen the network and earn passive rewards.`}</p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Stake SOL Here](https://stakewiz.com)
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordionContent1} />
            <div className={styles.div} />
          </div>
          <div
            className={styles.sectionTemplate1}
            data-acc-item
            data-acc-open
            data-acc-original
            data-acc-default-open
          >
            <div className={styles.groupDiv}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>Why does TruthChain exist?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionContentaccordionDef}
                data-acc-content
              >
                <div className={styles.container}>
                  <div className={styles.aiIsEvolvingFastButWhosParent}>
                    <div
                      className={styles.truthNeedsDefenders}
                    >{`AI is evolving fast. But who’s keeping it honest? `}</div>
                    <div className={styles.llmsHaveDemonstrated}>
                      LLMs have demonstrated manipulative and deceptive
                      behavior. As they become more powerful, the risks of
                      misinformation grow. TruthChain tracks AI outputs, stores
                      them on-chain, and analyzes patterns over time**—creating
                      an immutable, censorship-resistant record to keep AI
                      **transparent and accountable.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTemplateClose} data-acc-item>
            <div className={styles.helpItemParent}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>Why does TruthChain exist?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container}>
                  <div className={styles.truthNeedsDefendersHeresParent}>
                    <div className={styles.truthNeedsDefenders}>
                      Truth needs defenders. Here’s how you can join the
                      mission.
                    </div>
                    <div className={styles.joinTheCommunityContainer}>
                      <span className={styles.joinTheCommunityContainer1}>
                        <p className={styles.joinTheCommunity}>
                          - Join the Community: Be part of the conversation in
                          our Telegram group. Connect, discuss, and help shape
                          the future of AI accountability.  
                        </p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Join Telegram](https://t.me/truth_chain)
                        </p>
                        <p
                          className={styles.joinTheCommunity}
                        >{`- Stake & Support: Delegate SOL to TruthNode to strengthen the network and earn passive rewards.`}</p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Stake SOL Here](https://stakewiz.com)
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordionContent1} />
            <div className={styles.div} />
          </div>
          <div
            className={styles.sectionTemplate2}
            data-acc-item
            data-acc-open
            data-acc-original
            data-acc-default-open
          >
            <div className={styles.frameParent2}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>How does staking work?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionContentaccordionDef}
                data-acc-content
              >
                <div className={styles.container}>
                  <div className={styles.supportTruthchainAndEarnReParent}>
                    <div className={styles.truthNeedsDefenders}>
                      Support TruthChain and earn rewards while securing the
                      network
                    </div>
                    <div className={styles.byStakingSolContainer}>
                      <span className={styles.joinTheCommunityContainer1}>
                        <p className={styles.joinTheCommunity}>
                          By staking SOL with TruthNode, you contribute to
                          network security while earning passive yield. A
                          portion of validator rewards supports **buybacks,
                          treasury growth, and development**—fueling the
                          TruthChain ecosystem.
                        </p>
                        <p className={styles.joinTheCommunity}>&nbsp;</p>
                        <p className={styles.joinTheCommunity}>
                          TruthNode Stats:  
                        </p>
                        <p className={styles.joinTheCommunity}>
                          - Skip Rate: 0%  
                        </p>
                        <p className={styles.joinTheCommunity}>
                          - Voting Rate: 98.2%  
                        </p>
                        <p className={styles.joinTheCommunity}>
                          - Score: 61.44%  
                        </p>
                        <p className={styles.joinTheCommunity}>
                          - Uptime: 100% (Last 30 Days)  
                        </p>
                        <p className={styles.joinTheCommunity}>
                          - Delegated Stake: 15,552.34 SOL (~$3.75M)  
                        </p>
                        <p className={styles.joinTheCommunity}>&nbsp;</p>
                        <p className={styles.joinTheCommunity}>
                          How to Stake:  
                        </p>
                        <p className={styles.joinTheCommunity}>
                          1. Go to Stakewiz → [Stake Here](https://stakewiz.com)
                           
                        </p>
                        <p className={styles.joinTheCommunity}>
                          2. Connect your wallet (Phantom, Solflare, etc.)  
                        </p>
                        <p className={styles.joinTheCommunity}>
                          3. Delegate your SOL to TruthNode  
                        </p>
                        <p
                          className={styles.joinTheCommunity}
                        >{`4. Earn rewards while supporting AI transparency & buybacks  `}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTemplateClose} data-acc-item>
            <div className={styles.helpItemParent}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>How does staking work?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container}>
                  <div className={styles.truthNeedsDefendersHeresParent}>
                    <div className={styles.truthNeedsDefenders}>
                      Truth needs defenders. Here’s how you can join the
                      mission.
                    </div>
                    <div className={styles.joinTheCommunityContainer}>
                      <span className={styles.joinTheCommunityContainer1}>
                        <p className={styles.joinTheCommunity}>
                          - Join the Community: Be part of the conversation in
                          our Telegram group. Connect, discuss, and help shape
                          the future of AI accountability.  
                        </p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Join Telegram](https://t.me/truth_chain)
                        </p>
                        <p
                          className={styles.joinTheCommunity}
                        >{`- Stake & Support: Delegate SOL to TruthNode to strengthen the network and earn passive rewards.`}</p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Stake SOL Here](https://stakewiz.com)
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordionContent1} />
            <div className={styles.div} />
          </div>
          <div
            className={styles.sectionTemplate3}
            data-acc-item
            data-acc-open
            data-acc-original
            data-acc-default-open
          >
            <div className={styles.frameParent4}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>Who is leading TruthChain?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div
                className={styles.accordionContentaccordionDef}
                data-acc-content
              >
                <div className={styles.container}>
                  <div className={styles.answerItem}>
                    <div className={styles.truthNeedsDefenders}>
                      Backed by visionaries committed to AI accountability
                    </div>
                    <div className={styles.rexstjohnIntelNvidiaContainer}>
                      <span className={styles.joinTheCommunityContainer1}>
                        <p className={styles.joinTheCommunity}>
                          @rexstjohn (Intel, NVIDIA, Anza) is at the helm,
                          ensuring AI remains decentralized, open, and free from
                          centralized control.
                        </p>
                        <p className={styles.joinTheCommunity}>
                          TruthChain is not just a project—it’s a movement.
                          Stake today. Stay true.  
                        </p>
                        <p className={styles.joinTheCommunity}>&nbsp;</p>
                        <p className={styles.joinTheCommunity}>
                          https://stakewiz.com/
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTemplateClose} data-acc-item>
            <div className={styles.helpItemParent}>
              <div
                className={styles.helpItem}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <b className={styles.howCanI}>Who is leading TruthChain?</b>
                <div className={styles.separatorList}>
                  <Image
                    className={styles.remove24dpUndefinedFill0WgIcon}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/remove-24dp-undefined-fill0-wght400-grad0-opsz24-1.svg"
                  />
                </div>
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container}>
                  <div className={styles.truthNeedsDefendersHeresParent}>
                    <div className={styles.truthNeedsDefenders}>
                      Truth needs defenders. Here’s how you can join the
                      mission.
                    </div>
                    <div className={styles.joinTheCommunityContainer}>
                      <span className={styles.joinTheCommunityContainer1}>
                        <p className={styles.joinTheCommunity}>
                          - Join the Community: Be part of the conversation in
                          our Telegram group. Connect, discuss, and help shape
                          the future of AI accountability.  
                        </p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Join Telegram](https://t.me/truth_chain)
                        </p>
                        <p
                          className={styles.joinTheCommunity}
                        >{`- Stake & Support: Delegate SOL to TruthNode to strengthen the network and earn passive rewards.`}</p>
                        <p className={styles.joinTheCommunity}>
                            👉 [Stake SOL Here](https://stakewiz.com)
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.accordionContent1} />
            <div className={styles.div} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeL1440x;
