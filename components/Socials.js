"use client";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import Link from "next/link";
import useSound from "use-sound";
import { useState } from "react";

export const Socials = () => {
  const snapSfx = "./sounds/snap.wav";
  const confirmSfx = "./sounds/clickedShort.wav";
  const [playSnap, { stop: stopSnap }] = useSound(snapSfx, { volume: 0.25 });
  const [playConfirm] = useSound(confirmSfx, { volume: 0.5 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const social = [
    {
      name: "GitHub",
      icon: LuGithub,
      link: "https://github.com/sabah-naveed",
      brandColor: "#802bfc",
    },
    {
      name: "LinkedIn",
      icon: LuLinkedin,
      link: "https://www.linkedin.com/in/sabah-naveed/",
      brandColor: "#0062ff",
    },
    {
      name: "Instagram",
      icon: LuInstagram,
      link: "https://www.instagram.com/sabah.naveed/?igsh=ZDI4NGdsOG9wNHBz",
      brandColor: "#dd2a7b",
    },
  ];

  return (
    <div className="flex flex-row justify-evenly content-center gap-2">
      {social.map((item, index) => {
        return (
          <div
            key={item.name}
            onMouseEnter={() => {
              playSnap();
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              stopSnap();
              setHoveredIndex(null);
            }}
            onClick={() => playConfirm()}
          >
            <Link href={item.link} target="_blank">
              <item.icon
                size="24"
                style={{ color: hoveredIndex === index ? item.brandColor : "white" }}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
