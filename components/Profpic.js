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
      <div className="relative w-2/3">
        <motion.h1
          className="text-7xl font-bold relative z-10 text-slate-950 text-left ml-20"
          style={{ y: textY }}
        >
          Oh hey that's <br /> me!
        </motion.h1>
        <div
          className="absolute inset-0 z-0 rounded-full"
          style={{
            backgroundImage: "url(/images/bottom.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 z-20"
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
