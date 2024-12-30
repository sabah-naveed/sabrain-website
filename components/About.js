import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.h1 
        className="text-7xl font-bold text-center relative z-10"
        style={{ y: textY }}
      >
        Sabah Naveed Parallax
      </motion.h1>
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url(/images/bottom.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.1)",
          y: backgroundY,
        }}
      />
      <div 
        className="absolute inset-0 z-20" 
        style={{
          backgroundImage: "url(/images/cutout.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.1)",
        }}
      />
    </div>
  );
}
