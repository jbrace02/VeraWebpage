import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import Button1 from "./button1";
import styles from "./footer-parent.module.css";

export type FooterParentType = {
  className?: string;
};

const FooterParent: NextPage<FooterParentType> = ({ className = "" }) => {
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
    <section className={[styles.footerParent, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.abstractGreenBackgroundLighParent}>
          <div className={styles.abstractGreenBackgroundLigh} />
          <div className={styles.leftIcon}>
            <Image
              className={styles.vectorIcon}
              width={822}
              height={947}
              alt=""
              src="/vector-1.svg"
            />
            <div className={styles.vectorParent}>
              <Image
                className={styles.vectorIcon1}
                loading="lazy"
                width={822}
                height={947}
                alt=""
                src="/vector-1.svg"
              />
              <div className={styles.abstractGreenBackgroundLigh1} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.fairLaunchContentWrapper}>
          <div className={styles.fairLaunchContent}>
            <div className={styles.frameGroup}>
              <Image
                className={styles.frameChild}
                loading="lazy"
                width={1241}
                height={505}
                alt=""
                src="/group-43101@2x.png"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.fairLaunchAlwaysParent}>
                  <b className={styles.fairLaunchAlways}>
                    Fair Launch, Always.
                  </b>
                  <div className={styles.noPreSalesNo}>
                    No pre-sales. No hidden allocations. Every $TRUTH token was
                    minted at launch with a maximum supply of 1,000,000,000
                    tokens—ensuring that every participant starts on an equal
                    footing.
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.parent}>
                    <div className={styles.div}>20%</div>
                    <div className={styles.ellipseGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.div1}>10%</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.ellipseContainer}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.ellipseParent1}>
                          <div className={styles.frameChild1} />
                          <div className={styles.div}>{`35% `}</div>
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
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.sectionTemplateWrapper}>
                      <div className={styles.sectionTemplate} />
                    </div>
                    <div className={styles.headline}>Headline</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.sectionTemplateWrapper}>
                      <div className={styles.sectionTemplate1} />
                    </div>
                    <div className={styles.headline}>Headline</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.sectionTemplateWrapper}>
                      <div className={styles.sectionTemplate2} />
                    </div>
                    <div className={styles.headline}>Headline</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.sectionTemplateWrapper}>
                      <div className={styles.sectionTemplate3} />
                    </div>
                    <div className={styles.headline}>Headline</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buyTruthButtonContainer}>
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
        </div>
        <div className={styles.fAQ}>
          <div className={styles.fAQContent}>
            <div className={styles.fAQTitle}>
              <h1 className={styles.truthFaq}>$TRUTH FAQ</h1>
              <div className={styles.fAQDescription}>
                <div className={styles.truthchainVerified}>
                  TruthChain = Verified facts on-chain. No corruption, no
                  bias—just blockchain-backed truth.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTemplateParent} data-acc-group>
            <div
              className={styles.sectionTemplate4}
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              <div className={styles.helpQuestionsParent}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>How can i help?</b>
                  <div className={styles.divider}>
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
                    <div className={styles.helpAnswers}>
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
              <div className={styles.helpQuestionsParent}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>How can i help?</b>
                  <div className={styles.divider}>
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
              <div className={styles.div5} />
            </div>
            <div
              className={styles.sectionTemplate5}
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              <div className={styles.frameParent7}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>Why does TruthChain exist?</b>
                  <div className={styles.divider}>
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
                        misinformation grow. TruthChain tracks AI outputs,
                        stores them on-chain, and analyzes patterns over
                        time**—creating an immutable, censorship-resistant
                        record to keep AI **transparent and accountable.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionTemplateClose} data-acc-item>
              <div className={styles.helpQuestionsParent}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>Why does TruthChain exist?</b>
                  <div className={styles.divider}>
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
              <div className={styles.div5} />
            </div>
            <div
              className={styles.sectionTemplate6}
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              <div className={styles.frameParent9}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>How does staking work?</b>
                  <div className={styles.divider}>
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
                            1. Go to Stakewiz → [Stake
                            Here](https://stakewiz.com)  
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
              <div className={styles.helpQuestionsParent}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>How does staking work?</b>
                  <div className={styles.divider}>
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
              <div className={styles.div5} />
            </div>
            <div
              className={styles.sectionTemplate7}
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              <div className={styles.frameParent11}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>Who is leading TruthChain?</b>
                  <div className={styles.divider}>
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
                    <div className={styles.helpAnswers}>
                      <div className={styles.truthNeedsDefenders}>
                        Backed by visionaries committed to AI accountability
                      </div>
                      <div className={styles.rexstjohnIntelNvidiaContainer}>
                        <span className={styles.joinTheCommunityContainer1}>
                          <p className={styles.joinTheCommunity}>
                            @rexstjohn (Intel, NVIDIA, Anza) is at the helm,
                            ensuring AI remains decentralized, open, and free
                            from centralized control.
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
              <div className={styles.helpQuestionsParent}>
                <div
                  className={styles.helpQuestions}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <b className={styles.howCanI}>Who is leading TruthChain?</b>
                  <div className={styles.divider}>
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
              <div className={styles.div5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterParent;
