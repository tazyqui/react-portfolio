import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src="../../assets/about/aboutImage.png"
          alt="image of me sitting"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../../assets/about/cursorIcon.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Frontend Developer with experience in building responsive
                and optomized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../assets/about/serverIcon.png" alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in building RESTful APIs and working with
                databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../assets/about/uiIcon.png" alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have experience in designing user interfaces and creating user
                experiences that are both functional and visually appealing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
