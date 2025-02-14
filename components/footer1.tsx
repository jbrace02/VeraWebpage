import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logoContainer}>
              <Image
                className={styles.logoVerafy5Icon}
                loading="lazy"
                width={120}
                height={120}
                alt=""
                src="/logo-verafy-4@2x.png"
              />
            </div>
            <div className={styles.disclaimerParent}>
              <div className={styles.disclaimer}>Disclaimer</div>
              <div className={styles.theInformationProvidedContainer}>
                <p className={styles.theInformationProvided}>
                  The information provided on this website is for entertainment
                  and informational purposes only and should not be considered
                  financial, investment, or legal advice. $truth is a meme-based
                  cryptocurrency with no intrinsic value, and it is not intended
                  as an investment vehicle.
                </p>
                <p className={styles.theInformationProvided}>&nbsp;</p>
                <p className={styles.theInformationProvided}>
                  Cryptocurrency markets are highly volatile, and investing in
                  digital assets involves significant risk. You may lose part or
                  all of your funds. Always conduct your own research and
                  consult with a professional financial advisor before making
                  any investment decisions.
                </p>
                <p className={styles.theInformationProvided}>&nbsp;</p>
                <p className={styles.theInformationProvided}>
                  We do not guarantee the security, stability, or future value
                  of [Your Memecoin Name], and we are not responsible for any
                  losses, damages, or liabilities arising from its use, trading,
                  or holding. By using this website and engaging with [Your
                  Memecoin Name], you acknowledge and accept these risks.
                </p>
                <p className={styles.theInformationProvided}>
                  Not Financial Advice | Not a Security | Just for Fun
                </p>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactContent}>
                <div className={styles.contractAddress}>
                  <div className={styles.contact}>Contract address</div>
                  <div className={styles.gmuphpe93kctjzrc7nj2keedzrt5db}>
                    2GmUPhpe93kcTJZrC7NJ2keeDZRT5dBveUgegb13pump
                  </div>
                </div>
                <div className={styles.contact}>Contact</div>
                <div className={styles.joinOneOf}>
                  Join one of our communities
                </div>
              </div>
              <div className={styles.socialIconsParent}>
                <Image
                  className={styles.socialIcons}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/social-icons2.svg"
                />
                <Image
                  className={styles.socialIcons}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/social-icons-11.svg"
                />
                <Image
                  className={styles.socialIcons2}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/social-icons-2.svg"
                />
                <Image
                  className={styles.subtractIcon}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/subtract.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameItem} />
      </div>
    </section>
  );
};

export default Footer1;
