import styles from "./App.module.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import MainSection from "./Components/MainSection/MainSection";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <MainSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
