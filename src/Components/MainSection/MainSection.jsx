import React from "react";
import styles from "./MainSection.module.css";
import photo from "../../assets/hero/cvphotoFlorina.jpg";

function MainSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Florina!</h1>
        <p className={styles.description}>
          Passionate and dedicated professional with a background in finance and
          a clear objective to excel in frontend development. Skilled in
          JavaScript programming, HTML, CSS, React, Git, Bootstrap and software
          engineering principles. Committed to leveraging my expertise to create
          engaging and user-friendly web experiences. Seeking opportunities to
          contribute to innovative frontend projects, enhance technical skills
          and advance career in frontend development.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:jemisha.florina@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img src={photo} alt="her image" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default MainSection;
