import React from "react";
import { motion } from "framer-motion";
import skillIcons from "./skillIcons";
import toolIcons from "./toolIcons";

const Marquee = ({ items }) => {
  return (
    <motion.div
    className="marquee d-flex gap-2"
    style={{justifyContent: "space-evenly"}}
    animate={{ x: ["-2%", "2%", "-2%"] }} // Mouvement gauche-droite
    transition={{
      ease: "easeInOut",
      duration: 4, // Durée du va-et-vient
      repeat: Infinity,
      repeatType: "mirror", // Répète l'animation en miroir (ping-pong)
    }}
  >
      {Object.entries(items).map(([name, src]) => (
        <div key={name} className="icon-container" style={{border: "1px solid", borderRadius: "100px", padding: "20px"}}>
          <img src={src} alt={name} className="icon" style={{width: "50px", height: "50px"}} />
        </div>
      ))}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h4>Langages</h4>
      <div className="marquee-wrapper" style={{position: "relative", right: "100px"}}>
        <Marquee items={skillIcons} />
      </div>

      <h4>Outils</h4>
      <div className="marquee-wrapper" style={{position: "relative", right: "100px"}}>
        <Marquee items={toolIcons}  />
      </div>
    </div>
  );
};

export default Skills;
