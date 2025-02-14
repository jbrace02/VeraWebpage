import type { NextPage } from "next";
import Image from "next/image";
import styles from "./terminal.module.css";

export type TerminalType = {
  className?: string;
};

const Terminal: NextPage<TerminalType> = ({ className = "" }) => {
  return (
    <div className={[styles.terminal, className].join(" ")}>
      <video className={styles.wrapper} controls>
        <source src />
      </video>
      <div className={styles.socialConsoleWrapper}>
        <Image
          className={styles.socialConsoleIcon}
          loading="lazy"
          width={56}
          height={304}
          alt=""
          src="/social-console1@2x.png"
        />
      </div>
    </div>
  );
};

export default Terminal;
