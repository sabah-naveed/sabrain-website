"use client";

import Image from "next/image";
import React from "react";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="">
      <div className="ml-12">
        <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Hi, I'm
          <span className="text-[#915eff]">_Sabah</span>
        </h1>
        <div className=" text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
          I am:
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("a CS student")
                .pauseFor(2500)
                .deleteChars(10)
                .start();
              typewriter
                .typeString("software engineer")
                .pauseFor(2500)
                .deleteChars(18)
                .start();
              typewriter
                .typeString("n app developer")
                .pauseFor(2500)
                .deleteChars(15)
                .start();
              typewriter
                .typeString(" raccoon lover")
                .pauseFor(2500)
                .deleteChars(13)
                .start();
              typewriter
                .typeString("brain and computer enthusiast.")
                .pauseFor(2500)
                .stop();
            }}
          />
        </div>
      </div>
    </div>
  );
}
