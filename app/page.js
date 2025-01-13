"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SabahAvatar from "@/components/SabahAvatar";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import About from "@/components/About";
import Profpic from "@/components/Profpic";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <div
          className="flex flex-col items-center justify-center h-screen bg-gray-950"
          style={{
            backgroundImage: "url('/images/herobg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -5,
          }}
        >
          <div className="z-10 w-full flex justify-center items-center pl-10 pr-10 pb-10">
            <Profpic />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full ">
            <div className="flex flex-col items-center justify-center w-full z-10 px-4 sm:px-10 lg:px-20 ">
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ">
                <div className="text-center sm:text-right flex flex-wrap sm:flex-nowrap ">
                  <div className="whitespace-nowrap">Hi, </div>
                  <div className="ml-1 sm:ml-0">
                    I'm <span className="text-[#915eff]">_Sabah</span>
                  </div>
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
                    window.open(
                      "https://www.instagram.com/sabah.naveed",
                      "_blank"
                    )
                  }
                >
                  Instagram
                  <FiInstagram className="text-pink-500" />
                </button>
              </div>
              <div className="text-[#dfd9ff] font-medium mt-4 text-center inline-flex flex-wrap items-center">
                <span className="whitespace-nowrap mr-2">I am:</span>
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
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects/>
      </section>
    </div>
  );
}
