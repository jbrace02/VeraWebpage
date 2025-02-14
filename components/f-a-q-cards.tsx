import type { NextPage } from "next";
import Image from "next/image";
import styles from "./f-a-q-cards.module.css";

export type FAQCardsType = {
  className?: string;
};

const FAQCards: NextPage<FAQCardsType> = ({ className = "" }) => {
  return (
    <div className={[styles.faqCards, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.truthNeedsDefendersHeresParent}>
          <div className={styles.truthNeedsDefenders}>
            Truth needs defenders. Here’s how you can join the mission.
          </div>
          <div className={styles.joinTheCommunityContainer}>
            <p className={styles.joinTheCommunity}>
              - Join the Community: Be part of the conversation in our Telegram
              group. Connect, discuss, and help shape the future of AI
              accountability.  
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
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.howCanIHelpParent}>
            <b className={styles.howCanI}>How can i help?</b>
            <Image
              className={styles.remove24dpUndefinedFill0WgIcon}
              width={24}
              height={24}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQCards;
