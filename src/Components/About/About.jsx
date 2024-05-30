import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.containter} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/aboutImage.png"
          alt="me with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
                Welcome to my personal webpage! I am a software developer with a
                strong background in finance. I have a passion for learning new
                technologies and applying my skills to solve complex problems.
                With a comprehensive education in both finance and software
                development, I bring a unique perspective to the field of
                technology.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>RESPONSIVE DESIGN</li>
                <li>PACKAGE MANAGERS</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
