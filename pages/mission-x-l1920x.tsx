import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import { useRouter } from "next/router";
import FrameComponent2 from "../components/frame-component2";
import styles from "./mission-x-l1920x.module.css";

const MissionXL1920x: NextPage = () => {
  const router = useRouter();

  const onButtonSecondaryContainerClick = useCallback(() => {
    router.push("/home-x-l1920x");
  }, [router]);

  return (
    <div className={styles.missionXl1920x1080}>
      <section className={styles.mainContent}>
        <Image
          className={styles.headerBg7Icon}
          width={1920}
          height={1080}
          alt=""
          src="/header-bg-1@2x.png"
        />
        <div className={styles.bgParent}>
          <div className={styles.bg}>
            <div className={styles.bgParent} />
            <Image
              className={styles.bgChild}
              width={1918}
              height={1076}
              alt=""
              src="/rectangle-67.svg"
            />
          </div>
          <div className={styles.bgParent} />
        </div>
      </section>
      <Image
        className={styles.vectorIcon}
        width={822}
        height={947}
        alt=""
        src="/vector-1.svg"
      />
      <header className={styles.missionXl1920x1080Inner}>
        <FrameComponent1 logoVerafy4="/logo-verafy-4@2x.png" />
      </header>
      <div className={styles.noise} />
      <div className={styles.abstractGreenBackgroundLigh1} />
      <div className={styles.abstractGreenBackgroundLigh2} />
      <section className={styles.missionContentWrapper}>
        <div className={styles.missionContent}>
          <h1 className={styles.ourMission}>Our Mission</h1>
          <div className={styles.missionDescription}>
            <div className={styles.descriptionContent}>
              <div className={styles.keepingAiAccountable}>
                Keeping AI Accountable. Protecting Truth
              </div>
              <div className={styles.aiDescription}>
                <div className={styles.aiContent}>
                  <div className={styles.aiIsEvolving}>
                    AI is evolving faster than ever. But with power comes
                    risk—manipulation, bias, and unchecked misinformation. 
                  </div>
                  <div className={styles.whoEnsuresAiRemainsHonestParent}>
                    <div className={styles.whoEnsuresAi}>
                      Who ensures AI remains honest?
                    </div>
                    <div className={styles.truthIsBuilding}>
                      Truth is building the first decentralized AI monitoring
                      network to track, verify, and store AI-generated content
                      on-chain**—forever. By leveraging blockchain, we ensure
                      **AI’s evolution is transparent, auditable, and resistant
                      to censorship.
                    </div>
                  </div>
                  <div className={styles.whoEnsuresAiRemainsHonestParent}>
                    <div className={styles.whoEnsuresAi}>Why It Matters</div>
                    <div className={styles.truthIsBuilding}>
                      <p className={styles.llmsCanMislead}>
                        - LLMs can mislead, manipulate, or change narratives
                        over time. Truth logs their outputs, ensuring no
                        revision slips by unnoticed.
                      </p>
                      <p className={styles.llmsCanMislead}>&nbsp;</p>
                      <p className={styles.llmsCanMislead}>
                        - Censorship is growing. Decentralized storage makes
                        truth untouchable—beyond control of corporations or
                        governments.
                      </p>
                      <p className={styles.llmsCanMislead}>&nbsp;</p>
                      <p className={styles.llmsCanMislead}>
                        - AI’s influence is accelerating. Without independent
                        oversight, misinformation can spread unchecked.
                      </p>
                    </div>
                  </div>
                  <div className={styles.whoEnsuresAiRemainsHonestParent}>
                    <div className={styles.whoEnsuresAi}>How We Do It</div>
                    <div className={styles.onChainAiMonitoringContainer}>
                      <p
                        className={styles.llmsCanMislead}
                      >{`✅ On-Chain AI Monitoring –  AI output is logged, tracked, and preserved. `}</p>
                      <p className={styles.llmsCanMislead}> </p>
                      <p className={styles.llmsCanMislead}>
                        ✅ Immutable Storage – Data is stored on **Bitcoin,
                        Solana, and beyond**—resistant to erasure.  
                      </p>
                      <p className={styles.llmsCanMislead}>&nbsp;</p>
                      <p className={styles.llmsCanMislead}>
                        ✅ Crowd-Curated Truth – Open-source verification
                        ensures transparency, not control.
                      </p>
                      <p className={styles.llmsCanMislead}>  </p>
                      <p className={styles.llmsCanMislead}>
                        ✅ Decentralized Governance – The community, not
                        centralized entities, shapes AI accountability.
                      </p>
                    </div>
                  </div>
                  <div className={styles.whoEnsuresAiRemainsHonestParent}>
                    <div className={styles.joinTheMovement}>
                      Join the Movement
                    </div>
                    <div className={styles.onChainAiMonitoringContainer}>
                      Truth matters. It deserves to be protected. Join us in
                      building an open, decentralized future where AI is
                      transparent, accountable, and trustworthy.
                    </div>
                  </div>
                  <div className={styles.joinTelegramhttpstmetr}>
                    <p className={styles.llmsCanMislead}>&nbsp;</p>
                    <p className={styles.llmsCanMislead}>
                      🚀 [Join Telegram](https://t.me/truth_chain) | [Stake to
                      Support](https://stakewiz.com) | [View on
                      CoinGecko](https://www.coingecko.com/en/coins/truthchain)
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.buttonSmallCaWrapper}>
                <div className={styles.buttonSmallCa}>
                  <div
                    className={styles.buttonSecondary}
                    onClick={onButtonSecondaryContainerClick}
                  >
                    <div className={styles.backIconWrapper}>
                      <Image
                        className={styles.backIcon}
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
        </div>
      </section>
      <FrameComponent2 />
      <Image
        className={styles.vectorIcon1}
        width={822}
        height={947}
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default MissionXL1920x;
