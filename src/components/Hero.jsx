import { motion } from "framer-motion"; // Import motion from framer-motion
import { HERO_CONTENT } from "../constants"; // Ensure HERO_CONTENT is correctly imported
import profilePic from "../assets/athulpl.jpeg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-32">
      {/* Flexbox container, with row layout on larger screens */}
      <div className="flex flex-col lg:flex-row lg:items-center text-white">
        {/* Content area taking up half width on large screens */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start lg:mt-24 mt-12">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl text-left"
            >
              Athul P Laiju
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Data Analyst
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light text-gray-300">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        {/* Image area taking up half width on large screens */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
             initial={{ x:100,opacity:0}}
             animate={{ x:0 ,opacity:1}}
             transition={{ duration:1, delay:1.2}}
              src={profilePic}
              alt="Athul Profile Picture"
              className="max-w-full h-auto lg:max-h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
