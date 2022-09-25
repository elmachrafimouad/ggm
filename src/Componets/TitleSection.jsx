import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../Hooks/useScrollAnimation";
import gameIcon from '../Assets/images/game.png'

const variant = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: "0" },
};

function TitleSection({ title }) {
  const { ref, controls } = useScrollAnimation();

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="icon-title after:bg-primary before:bg-primary text-white">
        <img src={gameIcon} alt='icon' />
      </span>

      <motion.h2
        className="text-4xl md:text-6xl p-8 md:mb-10 text-primary font-normal text-center uppercase"
        ref={ref}
        animate={controls}
        variants={variant}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

export default TitleSection;
