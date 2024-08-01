"use client";
import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export default function Home() {
  return (
    <main className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade-up */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-stone-50 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
          <motion.div
            className="w-20 h-20 bg-stone-50 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          />
        </motion.div>
        {/* Shape shifting */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>
        {/* Hover and Tap */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.button
            className="w-1/2 bg-emerald-600 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          >
            Subscribe
          </motion.button>
        </motion.div>
        {/* Drag movements */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-lg cursor-grab"
            drag
            dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        ></motion.div>
      </motion.section>
    </main>
  );
}
