import { FaPython, FaBrain, FaDatabase, FaChartBar, FaProjectDiagram, FaServer } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
       whileInView= {{ opacity: 1,x:0}}
       initial={{opacity :0,x:-100}}
       transition={{duration:0.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
       whileInView= {{ opacity: 1,x:0}}
       initial={{opacity :0,x:-100}}
       transition={{duration:0.5}}
      className="flex flex-wrap items-center justify-center gap-10">

        {/* Python */}
        <motion.div 
        variants={iconVariants(2.5)}
        initail="initial"
        animate="animate"
        className="flex flex-col items-center p-2 shadow-lg">
          <FaPython className="text-5xl text-cyan-400" />
          <p className="text-lg text-white mt-4">Python</p>
        </motion.div>

        {/* Machine Learning */}
        <motion.div 
        variants={iconVariants(2.5)}
        initail="initial"
        animate="animate"
        className="flex flex-col items-center p-2 shadow-lg">
          <FaBrain className="text-5xl text-yellow-400" />
          <p className="text-lg text-white mt-4">Machine Learning</p>
        </motion.div>

        {/* SQL */}
        <motion.div variants={iconVariants(2.5)}
        initail="initial"
        animate="animate" className="flex flex-col items-center p-2 shadow-lg">
          <FaDatabase className="text-5xl text-blue-400" />
          <p className="text-lg text-white mt-4">SQL</p>
        </motion.div>

        {/* Power BI */}
        <motion.div variants={iconVariants(2.5)}
        initail="initial"
        animate="animate" className="flex flex-col items-center p-2 shadow-lg">
          <FaChartBar className="text-5xl text-orange-400" />
          <p className="text-lg text-white mt-4">Power BI</p>
        </motion.div>

        {/* Data Integration */}
        <motion.div variants={iconVariants(2.5)}
        initail="initial"
        animate="animate" className="flex flex-col items-center p-2 shadow-lg">
          <FaProjectDiagram className="text-5xl text-green-400" />
          <p className="text-lg text-white mt-4">Data Integration</p>
        </motion.div>

        {/* Oracle Tools */}
        <motion.div variants={iconVariants(2.5)}
        initail="initial"
        animate="animate" className="flex flex-col items-center p-2 shadow-lg">
          <FaServer className="text-5xl text-red-400" />
          <p className="text-lg text-white mt-4">Oracle Tools</p>
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Technologies;
