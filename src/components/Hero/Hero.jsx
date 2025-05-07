import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tan </h1>
        <p className={styles.description}>
          I'm a full stack developer with 2 years of experience using React and
          NodeJS
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:tannguyen.career@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.heroImg}
          src="../../assets/hero/myHeroImg.png"
          alt="Hero Image of Me"
        />
        <img
          className={styles.textBubbleImg}
          src="../../assets/hero/textBubbleImg.png"
          alt="Image of Text Bubble"
        />
      </div>

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
