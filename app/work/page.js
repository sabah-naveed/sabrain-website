"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "/public/utils/motion.js";
import { experiences } from "/public/constants/index.js";

const WorkPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-5 opacity-90">
        <img
          src="/images/herobg.png"
          alt="waves"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="relative z-10 ml-10">
        <motion.div variants={textVariant()}>
          
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work Experience.
          </h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="white">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => (
  console.log(experience),
  (
    <VerticalTimelineElement
      visible={true}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">{experience.title}</h3>
      <p
        className="vertical-timeline-element-subtitle"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>

      <ul className="mt-5 list-disc ml-5 spaces-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
);

export default WorkPage;
