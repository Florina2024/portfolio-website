import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  const publicUrl = "";
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/emailIcon.png"} alt="email icon" />
          <a href="mailto:jemisha.florina@gmail.com">
            jemisha.florina@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={"/linkedinIcon.png"} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/florina-jemisha-930626164/">
            linkedin.FlorinaJemisha
          </a>
        </li>
        <li className={styles.link}>
          <img src={"/githubIcon.png"} alt="github icon" />
          <a href="https://github.com/Florina2024">github.florinajemisha</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
