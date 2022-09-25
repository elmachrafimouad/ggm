import React from "react";
import { motion } from "framer-motion"

const variants = {
  start: { opacity: 0, y: "-100%" },
  end: { opacity: 1, y: "0" },
}

function HomeSection() {
  return (
    <div className="relative" id="Home">
      <div className="relative h-full">
        <div className="z-10  flex justify-center flex-col items-center w-full h-[90vh]">
          {/* --overlay background-- */}
          {/* <div className="absolute bg-black top-0 left-0 bottom-0 right-0 z-10 w-full h-[90vh] opacity-[0.8]"/> */}
          {/* --background image-- */}
          {/* <img
            src={HeaderImage}
            className="absolute top-0 left-0  w-full h-[90vh] object-cover "
            alt=""
          /> */}
          {/* --hero title-- */}
          <motion.h1 
            className="z-10 text-white text-5xl md:text-8xl font-extrabold mb-2"
            initial={"start"}
            animate={"end"}
            variants={variants}
            transition={{ duration: 0.7 }}
            ><span className="text-primary">Play</span>, Earn </motion.h1>
          <motion.h1 
            className="z-10 text-white text-5xl md:text-8xl font-bold"
            initial={"start"}
            animate={"end"}
            variants={variants}
            transition={{ duration: 1 }}
            
            > And Enjoy</motion.h1>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
