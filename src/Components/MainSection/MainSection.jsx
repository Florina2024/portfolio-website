import React from "react";
import styles from "./MainSection.module.css";
import { getImageUrl } from "../../utils";

function MainSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Florina!</h1>
        <p className={styles.description}>
          I'm a front end developer with xxx years of experience in web
          development. I've worked on a variety of projects for clients in the
          retail, travel, and healthcare industries. I'm passionate about
          creating great user experiences and have a strong understanding of
          usability and accessibility standards.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:jemisha.florina@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img src="/heroImage.png" alt="her image" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default MainSection;
