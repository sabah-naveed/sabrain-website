// import {
//     njtransit,
//     stevens,
//     tutcet,
//     scoreio,
//     njconnect,
//     aipic,
//     iphone,
//     ui,
//     creative,
//     ghpage
//   } from "../images";




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

//   const services = [
//     {
//       title: "AI Enthusiast",
//       icon: aipic,
//     },
//     {
//       title: "App Developer",
//       icon: iphone,
//     },
//     {
//       title: "UI/UX Designer",
//       icon: ui,
//     },
//     {
//       title: "Creative Technologist",
//       icon: creative,
//     },
//   ];

const experiences = [
  {
    title: "Passcomm Technical Specialist Intern",
    company_name: "NJ Transit",
    icon: "/workTimeline/njtlogofin.png",
    iconBg: "#ffffff",
    date: "June 2023 - Current",
    points: [
      "Published an AI chatbot using OpenAI API, NJ Transit APIs, and RAG functionality to revolutionize customer experience by providing real-time transit information, automated trip planning, and quick resolution of frequently asked questions",
      "Improved chatbot API endpoint efficiency by 89% using custom functions and fast AWS services: ECS and DynamoDB",
      "Updated GPS data from trains using SQL to improve real-time train tracking for 20K users on the Departure Vision app",
    ],
  },
  {
    title: "Theory of Computation Course Assistant",
    company_name: "Stevens Institute of Technology",
    icon: "/workTimeline/stevens.jpeg",
    iconBg: "#a32638",
    date: "September 2024 - Current",
    points: [
      "Graded problem sets, held weekly lab recitations, and office hours to aid 100+ students with theory of computation concepts",
    ],
  },
  {
    title: "Code In Place Section Leader",
    company_name: "Stanford University",
    icon: "/workTimeline/stanford.png",
    iconBg: "#ffffff",
    date: "April 2024 - June 2024",
    points: [
      "Led Python tutorials for 10 global students covering fundamentals and coding practices in Stanford's intro course, CS106A",
      "Improved students' coding skills, resulting in a 30% increase in assignment completion rates"
    ],
  },
  {
    title: "Discrete Structures Course Assistant",
    company_name: "Stevens Institute of Technology",
    icon: "/workTimeline/stevens.jpeg",
    iconBg: "#a32638",
    date: "September 2021 - May 2023",
    points: [
      "Graded problem sets, held weekly lab recitations, and office hours to aid 120+ students with discrete structures concepts",
      "Delivered engaging coding labs to help students solidify logic, graph & number theory, computer networks, security, etc.",
    ],
  },
  {
    title: "SAT Tutor",
    company_name: "The Tutoring Center",
    icon: "/workTimeline/tutcet.png",
    iconBg: "#ffffff",
    date: "June 2019 - May 2020",
    points: [
      "Provided one-on-one instruction to students to help them improve performance and confidence in math, science, reading, and writing",
      "Developed and provided test-taking strategies and skill building exercises beyond the given study materials to improve student scores and performance based on personal experience with the SAT",
    ],
  },
];

// const projects = [
//   {
//     name: "NJ Connect",
//     description:
//       "AI-powered chatbot that enables customers to have a conversational experience when planning trips on NJ Transit.",
//     tags: [
//       {
//         name: "langchain",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "AWS",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "OpenAI",
//         color: "green-text-gradient",
//       },
//     ],
//     image: njconnect,
//     source_code_link:
//       "https://www.linkedin.com/feed/update/urn:li:activity:7100948121068744704/",
//   },
//   {
//     name: "Score.IO: Virtual Scoreboard",
//     description:
//       "Ad-free scoreboard for any sport or game. Whether you're at a sports game, playing a board game with your family, or competing in a challenge with a friend, Score.IO will be the reliable way to keep tabs on each team.",
//     tags: [
//       {
//         name: "Swift",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Figma",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "XCode",
//         color: "white-text-gradient",
//       },
//     ],
//     image: scoreio,
//     source_code_link:
//       "https://apps.apple.com/us/app/score-io-virtual-scoreboard/id1642364306",
//   },
//   {
//     name: "More Projects on the Way!",
//     description:
//       "In the mean time check out some of my other projects on Github! These include more advanced mobile apps, AI projects, etc.",
//     tags: [
//       {
//         name: "Github",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: ghpage,
//     source_code_link: "https://github.com/sabah-naveed",
//   },
// ];

//   export { services, experiences, projects };
export { experiences };
