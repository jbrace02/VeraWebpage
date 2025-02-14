import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame43049-variant.module.css";

export type Frame43049VariantType = {
  className?: string;
};

const Frame43049Variant: NextPage<Frame43049VariantType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onFrame43049Variant3ContainerClick = useCallback(() => {
    router.push("/home-x-l1920x");
  }, [router]);

  return (
    <div
      className={[styles.frame43049variant3, className].join(" ")}
      onClick={onFrame43049Variant3ContainerClick}
    >
      <div className={styles.enter}>Enter</div>
    </div>
  );
};

export default Frame43049Variant;
