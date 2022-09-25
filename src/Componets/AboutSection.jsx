import React from "react";
import TitleSection from "./TitleSection";
import HeaderImage from "../Assets/images/header-img.png";
import useScrollAnimation from "../Hooks/useScrollAnimation";
import { motion } from "framer-motion";

const variantsText = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: "0" },
}

const variantsImage = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0" },
}

function AboutSection() {
  const { ref, controls } = useScrollAnimation()

  return (
    <div className="md:py-5 overflow-hidden relative mb-10" id="About">
      <div className="container">
        {/* --img red banner-- */}
        <TitleSection title="What is Robber Bank ?" />
        <div className="grid-system items-center mb-20">
          <motion.p 
           className="text-gray-400 text-xl leading-relaxed"
           ref={ref}
           animate={controls}
           variants={variantsText}
           transition={{ duration: 0.8 }}
           >
           <span className="text-white"> Robber Bank</span> is the most engaging game in the world, combining
            suspense, action and simplicity. the bank robber is one of the first
            real free to earn based on a solid ecosystem and real algorithm. Do
            you want to play, enjoy and earn but your are not a good gamer? No
            problem! the bank robber is the game for everyone, a community
            driven project with the transparency of the dev team and their
            effort.
          </motion.p>
          {/* --video about section-- */}
          <motion.img 
           src={HeaderImage}
           alt=""
           ref={ref}
           animate={controls}
           variants={variantsImage}
           transition={{ duration: 0.8 }}
           />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
