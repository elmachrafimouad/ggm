import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../Hooks/useScrollAnimation";

const variant = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0" },
};

function StepCard({ item }) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      className="bg-darkBlack2 p-5 rounded-xl shadow-xl w-full md:w-[49%] md:h-72 mb-5"
      ref={ref}
      animate={controls}
      variants={variant}
      transition={{ duration: 1, easings: true }}
    >
      <h3 className="text-white font-bold text-2xl md:text-4xl mb-3">
        {item.step}
      </h3>
      <h4 className="text-gray-300  text-sm md:text-lg mb-3">{item.title}</h4>
      <p className="text text-gray-300 text-sm md:text-lg mb-3">
        {item.details}
      </p>
      <div className="flex justify-between items-center">
        <img src={item.imgOne} className="w-1/6" alt="" />
        <img src={item.imgTwo} className="w-1/6" alt="" />
        <img src={item.imgThree} className="w-1/6" alt="" />
      </div>
    </motion.div>
  );
}

export default StepCard;
