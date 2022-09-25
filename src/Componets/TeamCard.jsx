import React from "react";
import useScrollAnimation from "../Hooks/useScrollAnimation";
import { motion } from "framer-motion";

const variant = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0" },
};
function TeamCard({ member }) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      className="bg-darkBlack2 mb-3 flex flex-col justify-center items-center w-[45%] md:w-[32%] m-1 rounded-xl shadow-xl cursor-pointer hover:border-2 border-primary ease-in duration-300 "
      ref={ref}
      animate={controls}
      variants={variant}
      transition={{ duration: 1, easings: true }}
    >
      <img src={member.image} alt="" className="w-[200px]" />
      <h3 className="text-white mt-3">{member.name}</h3>
      <h4 className="text-gray-300 text-sm mt-3 mb-3 italic ">
        {member.position}
      </h4>
    </motion.div>
  );
}

export default TeamCard;
