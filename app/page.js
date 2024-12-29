"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SabahAvatar from "@/components/SabahAvatar";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const social = [
  {
    name: "GitHub",
    icon: FiGithub,
    link: "https://github.com/sabah-naveed",
    brandColor: "#802bfc",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/sabah-naveed/",
    brandColor: "#0062ff",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    link: "https://www.instagram.com/sabah.naveed/?igsh=ZDI4NGdsOG9wNHBz",
    brandColor: "#dd2a7b",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-gray-950">
      <div className="absolute inset-0 -z-5 opacity-50">
        <img src="/images/herobg.png" alt="waves" className="h-full w-full" />
      </div>
      <div className="flex sm:flex-col md:flex-row items-center justify-center w-full ">
        <div className="flex flex-col items-start justify-center w-full z-10 px-4 sm:px-10 lg:px-20 ">
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            <div className="text-left">Hi</div>
            <div>
              I'm <span className="text-[#915eff]">_Sabah</span>
            </div>
          </h1>
          <div className="flex gap-4 mt-4 sm:flex-col md:flex-row">
            <button
              className="btn rounded-3xl"
              onClick={() =>
                window.open("https://github.com/sabah-naveed", "_blank")
              }
            >
              Github
              <FiGithub className="text-purple-500" />
            </button>
            <button
              className="btn rounded-3xl"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sabah-naveed/",
                  "_blank"
                )
              }
            >
              LinkedIn
              <FiLinkedin className="text-blue-500" />
            </button>
            <button
              className="btn rounded-3xl"
              onClick={() =>
                window.open("https://www.instagram.com/sabah.naveed", "_blank")
              }
            >
              Instagram
              <FiInstagram className="text-pink-500" />
            </button>
          </div>
          <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 mr-10 text-left">
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
        <div className="z-10 w-full md:w-auto flex justify-center mt-10 md:mt-0 ">
          <SabahAvatar />
        </div>
      </div>
    </div>
  );
}
