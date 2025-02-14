import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent12 from "../components/frame-component12";
import Footer1 from "../components/footer1";
import styles from "./index.module.css";

const RoadmapXL1920x: NextPage = () => {
  return (
    <div className={styles.roadmapXl1920x1080}>
      <div className={styles.bg}>
        <div className={styles.abstractGreenBackgroundLigh} />
      </div>
      <div className={styles.b034ab39da047c7Ac04A544718} />
      <section className={styles.headerBg8Parent}>
        <Image
          className={styles.headerBg8Icon}
          width={1920}
          height={1080}
          alt=""
          src="/header-bg-1@2x.png"
        />
        <Image
          className={styles.frameChild}
          width={1918}
          height={1076}
          alt=""
          src="/rectangle-67.svg"
        />
      </section>
      <div className={styles.noise} />
      <div className={styles.abstractGreenBackgroundLigh1} />
      <div className={styles.abstractGreenBackgroundLigh2} />
      <header className={styles.navigationWrapper}>
        <FrameComponent1
          frameDivFlex="unset"
          frameDivWidth="1497px"
          logoVerafy4="/logo-verafy-4@2x.png"
        />
      </header>
      <section className={styles.roadmapContentWrapper}>
        <div className={styles.roadmapContent}>
          <h1 className={styles.truthchainRoadmap}>TruthChain Roadmap</h1>
          <div className={styles.roadmapDescription}>
            <div className={styles.truthIsARevolutionNotJusParent}>
              <div
                className={styles.truthIsA}
              >{`Truth is a revolution, not just a moment. `}</div>
              <div className={styles.communityContentWrapper}>
                <div className={styles.communityContent}>
                  <div className={styles.communityDescription}>
                    <div className={styles.sinceOurJanuary}>
                      Since our January 27th launch, we’ve built momentum, grown
                      our community, and delivered on key milestones:
                    </div>
                    <div className={styles.whoEnsuresAi}>
                      Who ensures AI remains honest?
                    </div>
                  </div>
                  <div className={styles.membersStrongContainer}>
                    <p className={styles.membersStrong}>
                       • 3,000+ Members Strong – The community is thriving,
                      providing feedback, and shipping fast.
                    </p>
                    <p className={styles.membersStrong}>&nbsp;</p>
                    <p className={styles.membersStrong}>
                       • Vera AI Agent Online – Our AI truth-seeker,
                      VerafyTruth, is in development mode, evolving with every
                      update.
                    </p>
                    <p className={styles.membersStrong}>&nbsp;</p>
                    <p className={styles.membersStrong}>
                       • Over $3.5M Staked in Validator – Strengthening our
                      treasury and rewarding $TRUTH holders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent11 />
      <FrameComponent12 />
      <div className={styles.buttonSmallCaWrapper}>
        <div className={styles.buttonSmallCa}>
          <div className={styles.backButtonContent}>
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
      <Footer1 />
    </div>
  );
};

export default RoadmapXL1920x;