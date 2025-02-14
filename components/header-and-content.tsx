import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import MicrophoneIcon from "./microphone-icon";
import Button from "./button";
import { useRouter } from "next/router";
import styles from "./header-and-content.module.css";

export type HeaderAndContentType = {
  className?: string;
};

const HeaderAndContent: NextPage<HeaderAndContentType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onLogoVerafyClick = useCallback(() => {
    router.push("/intro");
  }, [router]);

  return (
    <section className={[styles.headerAndContent, className].join(" ")}>
      <div className={styles.headerParent}>
        <Image
          className={styles.headerBg1Icon}
          width={1920}
          height={1080}
          alt=""
          src="/header-bg-1@2x.png"
        />
        <div className={styles.bgParent}>
          <div className={styles.bg}>
            <div className={styles.bg} />
          </div>
          <div className={styles.b034ab39da047c7Ac04A544718} />
          <Image
            className={styles.frameChild}
            width={1918}
            height={1076}
            alt=""
            src="/rectangle-67.svg"
          />
          <div className={styles.screen1Column}>
            <div className={styles.main}>
              <div className={styles.section1}>
                <div className={styles.videoComponent1}>
                  <div className={styles.controls1}>
                    <div className={styles.controls11}>
                      <Image
                        className={styles.button1Icon}
                        width={44}
                        height={44}
                        alt=""
                      />
                      <div className={styles.div}>0:00 / 12:59</div>
                    </div>
                    <div className={styles.closedCaptions1}>
                      <Image
                        className={styles.videoIcon1}
                        width={16}
                        height={16}
                        alt=""
                      />
                      <b className={styles.video}>Video</b>
                    </div>
                    <Image
                      className={styles.controls2Icon}
                      width={132}
                      height={44}
                      alt=""
                    />
                  </div>
                  <div className={styles.timeline1} />
                  <div className={styles.section2}>
                    <div className={styles.main1}>
                      <div className={styles.column}>
                        <div className={styles.blockquote1}>
                          <div className={styles.blockquote}>
                            Can you help me solve world hunger?
                          </div>
                        </div>
                        <div className={styles.blockquote2}>
                          <div className={styles.blockquote3}>
                            <p className={styles.solvingWorldHunger}>
                              Solving world hunger is a complex and multifaceted
                              challenge that requires the coordinated efforts of
                              governments, organizations, and individuals
                              worldwide. Here are some steps that can be taken
                              to address this critical issue:
                            </p>
                            <ol className={styles.raiseAwarenessIncreasingPu}>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Raise Awareness: Increasing public awareness
                                about the extent and impact of world hunger is
                                crucial. Education and advocacy can help
                                generate support and political will to address
                                the problem.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Policy and Governance: Governments must
                                prioritize hunger reduction through sound
                                policies and governance. This includes ensuring
                                food security, investing in agriculture, and
                                implementing safety nets for vulnerable
                                populations.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Agricultural Development: Invest in sustainable
                                agricultural practices and technologies to
                                increase food production. This includes
                                supporting small-scale farmers and promoting
                                efficient farming methods.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Reduction of Food Waste: A significant amount of
                                food is wasted globally. Efforts to reduce food
                                waste can help redirect surplus food to those in
                                need.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Distribution and Infrastructure: Improve
                                transportation and storage infrastructure to
                                ensure that food can reach remote and
                                underserved areas efficiently.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Nutrition Education: Provide education on
                                nutrition and promote healthy eating habits,
                                particularly among mothers and children, to
                                combat malnutrition.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Access to Clean Water: Access to clean water is
                                essential for food production and basic
                                nutrition. Ensure that communities have access
                                to safe drinking water.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Support Vulnerable Populations: Implement social
                                safety nets, such as food assistance programs
                                and cash transfers, to help vulnerable
                                populations meet their nutritional needs.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Empower Women: Empower women through education
                                and economic opportunities. Women often play a
                                crucial role in food production and family
                                nutrition.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Global Cooperation: Encourage international
                                collaboration to address global hunger. This
                                includes supporting international organizations
                                and initiatives focused on food security.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Research and Innovation: Invest in research and
                                innovation to develop new agricultural
                                technologies, drought-resistant crops, and more
                                efficient farming practices.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Conflict Resolution: Address conflicts and
                                instability in regions where food security is
                                compromised. Peace and stability are essential
                                for long-term solutions to hunger.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Climate Change Mitigation: Take steps to
                                mitigate the effects of climate change, as it
                                can exacerbate food insecurity through extreme
                                weather events and shifting agricultural
                                patterns.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Support NGOs and Charities: Donate to and
                                volunteer with organizations that work to
                                alleviate hunger, both locally and globally.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Consumer Awareness: Encourage consumers to make
                                sustainable and ethical food choices, such as
                                supporting local farmers and reducing meat
                                consumption.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Advocate for Policy Change: Engage in advocacy
                                efforts to influence government policies and
                                corporate practices that impact food security.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Long-Term Commitment: Recognize that solving
                                world hunger is a long-term endeavor, and
                                sustained commitment is essential.
                              </li>
                              <li className={styles.raiseAwarenessIncreasing}>
                                Monitoring and Evaluation: Continuously monitor
                                progress and evaluate the effectiveness of
                                interventions to adjust strategies as needed.
                              </li>
                            </ol>
                            <p className={styles.solvingWorldHunger}>
                              Remember that world hunger is a deeply entrenched
                              problem with numerous interconnected factors.
                              Addressing it requires a holistic approach,
                              long-term commitment, and cooperation at all
                              levels of society, from individuals and
                              communities to governments and international
                              organizations.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.scrollbar1}>
                        <div className={styles.scrollbarThumb} />
                      </div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.inputButton}>
                        <Image
                          className={styles.aiIcon}
                          width={16}
                          height={16}
                          alt=""
                        />
                        <MicrophoneIcon
                          class1={0}
                          vector197="pending_I1:1760;2085:17284;1681:11808"
                        />
                        <div className={styles.value}>How can I help you?</div>
                        <Image
                          className={styles.aiIcon}
                          width={16}
                          height={16}
                          alt=""
                        />
                        <Image
                          className={styles.aiIcon}
                          width={16}
                          height={16}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.header0}>
              <div className={styles.inputSearch1}>
                <MicrophoneIcon
                  class1={0}
                  microphoneIconPosition="absolute"
                  microphoneIconTop="16px"
                  microphoneIconLeft="16px"
                  rectangleDivBackgroundColor="#d6dbe0"
                  rectangleDivBackgroundColor1="#d6dbe0"
                  vector197="/vector-197-1.svg"
                  rectangleDivBorder="1px solid #d6dbe0"
                />
                <div className={styles.value1}>Search...</div>
                <Image
                  className={styles.searchIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  alt=""
                  src="/search-icon.svg"
                />
              </div>
              <div className={styles.pM}>01/01/2025</div>
              <Image
                className={styles.buttonIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/button.svg"
              />
              <div className={styles.pm}>11:59 PM</div>
              <div className={styles.header3}>
                <Image
                  className={styles.buttonIcon1}
                  width={48}
                  height={48}
                  alt=""
                />
                <div className={styles.button}>
                  <div className={styles.squareIcon} />
                </div>
                <Image
                  className={styles.button1Icon1}
                  width={44}
                  height={44}
                  alt=""
                />
                <Image
                  className={styles.button2Icon}
                  width={44}
                  height={44}
                  alt=""
                />
                <Image
                  className={styles.button2Icon}
                  width={44}
                  height={44}
                  alt=""
                />
                <div className={styles.avatar0}>
                  <Image
                    className={styles.avatarFrameIcon}
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTemplate}>
            <div className={styles.video}>Section</div>
            <h1 className={styles.vera}>Vera</h1>
          </div>
          <Image
            className={styles.socialConsoleIcon}
            loading="lazy"
            width={56}
            height={304}
            alt=""
            src="/social-console@2x.png"
          />
          <div className={styles.truthchainTruthIsContainer}>
            <span className={styles.truthchainTruthIsContainer1}>
              <p className={styles.solvingWorldHunger}>
                TruthChain (TRUTH) is rewriting the rules of trust! A
                blockchain-powered force against misinformation.
              </p>
              <p className={styles.solvingWorldHunger}>
                Transparent, immutable, unstoppable. Misinformation won’t stand
                a chance.
              </p>
            </span>
          </div>
          <div className={styles.tokenomicsButtons}>
            <Button property1="Default" tokenomics="Tokenomics" />
            <Button
              property1="Default"
              tokenomics="Mission"
              buttonHeight="unset"
            />
            <Button
              property1="Default"
              tokenomics="Roadmap"
              buttonHeight="unset"
            />
          </div>
          <div className={styles.logoverafyParent}>
            <div className={styles.logoVerafy} onClick={onLogoVerafyClick} />
            <div className={styles.logoverafyImageParent}>
              <div className={styles.logoverafyImageParent} />
              <Image
                className={styles.logoVerafy4Icon}
                loading="lazy"
                width={120}
                height={120}
                alt=""
                src="/logo-verafy-4@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button1}>
        <div className={styles.visitTheTerminal}>Visit the terminal</div>
      </div>
    </section>
  );
};

export default HeaderAndContent;
