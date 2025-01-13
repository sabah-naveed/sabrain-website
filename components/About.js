import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SabahAvatar from "./SabahAvatar";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div
      className="w-full h-screen flex bg-slate-100 text-slate-950"
    >
      <div className="flex items-center justify-center p-10 text-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm Sabah, a recent CS graduate and software engineer passionate
            about creative design and AI. <br />
            <br />
            I love to create and build things that are both beautiful and
            functional. <br />
            <br />
            Feel free to check out my resume down below!
          </p>
          <div className="flex justify-center mt-8">
            <div className="btn bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-[1px] rounded-lg">
              <button className="btn px-6 py-2 rounded-lg">Open Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
