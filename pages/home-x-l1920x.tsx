import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import HeaderAndContent from "../components/header-and-content";
import ContentFooter from "../components/content-footer";
import FrameComponent from "../components/frame-component";
import FooterParent from "../components/footer-parent";
import Button1 from "../components/button1";
import ButtonSmallCa1 from "../components/button-small-ca1";
import Footer from "../components/footer";
import styles from "./home-x-l1920x.module.css";

const HomeXL1920x: NextPage = () => {
  return (
    <div className={styles.homeXl1920x1080}>
      <GroupComponent />
      <div className={styles.noise} />
      <HeaderAndContent />
      <ContentFooter />
      <header className={styles.homeXl1920x1080Inner}>
        <div className={styles.truthTokenomicsParent}>
          <h1 className={styles.truthTokenomics}>$TRUTH TOKENOMICS</h1>
          <div className={styles.tokenDescriptionParent}>
            <div className={styles.truthchainVerified}>
              TruthChain = Verified facts on-chain. No corruption, no bias—just
              blockchain-backed truth.
            </div>
          </div>
        </div>
      </header>
      <FrameComponent />
      <FooterParent />
      <Button1
        property1="Default"
        buttonWidth="242px"
        buttonHeight="unset"
        buttonPosition="absolute"
        buttonTop="64px"
        buttonLeft="1465px"
        buyTruth="Buy $Truth"
        buyTruthColor="unset"
        buyTruthTextDecoration="none"
        buyTruthBackground="linear-gradient(90deg, #00fff2, #fff)"
        buyTruthWebkitBackgroundClip="unset"
        buyTruthWebkitTextFillColor="unset"
      />
      <ButtonSmallCa1
        property1="Default"
        buttonSmallCaPosition="absolute"
        buttonSmallCaTop="64px"
        buttonSmallCaLeft="1293px"
        copyCaHeight="unset"
        copyCaDisplay="unset"
        copyCaAlignItems="unset"
      />
      <Footer />
    </div>
  );
};

export default HomeXL1920x;
