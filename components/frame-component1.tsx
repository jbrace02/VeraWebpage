import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./button";
import ButtonSmallCa1 from "./button-small-ca1";
import Button1 from "./button1";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
  logoVerafy4: string;

  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivWidth?: CSSProperties["width"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  frameDivFlex,
  frameDivWidth,
  logoVerafy4,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      width: frameDivWidth,
    };
  }, [frameDivFlex, frameDivWidth]);

  const router = useRouter();

  const onLogoVerafyClick = useCallback(() => {
    router.push("/home-x-l1920x");
  }, [router]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.logoVerafyParent}>
        <div className={styles.logoVerafy} onClick={onLogoVerafyClick} />
        <Image
          className={styles.logoVerafy4Icon}
          loading="lazy"
          width={120}
          height={120}
          alt=""
          src={logoVerafy4}
        />
      </div>
      <div className={styles.tokenomicsButtonWrapper}>
        <div className={styles.tokenomicsButton}>
          <Button
            property1="Default"
            tokenomics="Tokenomics"
            buttonHeight="52px"
          />
          <Button
            property1="on klick"
            tokenomics="Mission"
            buttonHeight="unset"
          />
          <Button
            property1="Default"
            tokenomics="Roadmap"
            buttonHeight="52px"
          />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.buttonSmallCaParent}>
          <ButtonSmallCa1 property1="Default" />
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
    </div>
  );
};

export default FrameComponent1;