import { motion } from "framer-motion";
import "./App.css";
import Barre from "./barre/barre.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Projects from "./projects/Projects.jsx";

function App() {
  return (
    <>
      <Barre />

      {/* Animation globale pour chaque section avec effet de montée */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Commence plus bas et invisible
        whileInView={{ opacity: 1, y: 0 }} // Apparaît en remontant
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
        viewport={{ once: true, amount: 0.2 }} // Se déclenche quand 20% de la section est visible
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Projects />
      </motion.div>
    </>
  );
}

export default App;
