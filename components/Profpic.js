import React from "react";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Profpic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <main>
      <div className="relative h-60 w-full flex items-center justify-center">
        <motion.h1
          className="text-2xl font-bold relative z-10 text-slate-950 text-center"
          style={{ y: textY }}
        >
          {"{"}
          <span className=""> "skills": </span>
          <span className="">
            ["Frontend", "Cloud", "AI/ML", "Backend", "iOS", "3d Modeling"]
          </span>
          {"}"}
        </motion.h1>
        <div
          className="absolute inset-0 z-0 rounded-full items-center justify-center"
          style={{
            backgroundImage: "url(/images/bottom.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 z-20 rounded-full"
          style={{
            backgroundImage: "url(/images/cutout.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </main>
  );
}
