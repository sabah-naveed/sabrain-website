"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SabahAvatar from "@/components/SabahAvatar";

export default function Home() {
  return (
    <div className="flex items-center justify-between h-screen bg-gray-950 mr-10">
      <div>
        <SabahAvatar />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          <div className="text-left">Hi</div>
          <div>
            I'm <span className="text-[#915eff]">_Sabah</span>
          </div>
        </h1>
        <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 mr-10 text-right">
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
                .deleteChars(19)
                .start();
              typewriter
                .typeString("an app developer")
                .pauseFor(2500)
                .deleteChars(16)
                .start();
              typewriter
                .typeString("a raccoon lover")
                .pauseFor(2500)
                .deleteChars(15)
                .start();
              typewriter
                .typeString("a brain and computer enthusiast.")
                .pauseFor(2500)
                .stop();
            }}
          />
        </div>
      </div>
    </div>
  );
}
