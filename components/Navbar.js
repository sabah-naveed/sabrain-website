"use client";
import React from "react";
import { useState } from "react";
import {
  LuHome,
  LuPenTool,
  LuPencilRuler,
  LuBriefcase,
  LuPaintbrush,
  LuShovel,
  LuContact2,
} from "react-icons/lu";
import Link from "next/link";
import { NavButtons } from "./NavButtons";

export default function Navbar() {
  const menu = [
    { name: "Home", href: "/", icon: <LuHome/> },
    { name: "About", href: "/about", icon: <LuPenTool/> },
    { name: "Skills", href: "/skills", icon: <LuPencilRuler/> },
    { name: "Work", href: "/work", icon: <LuBriefcase/> },
    { name: "Projects", href: "/projects", icon: <LuPaintbrush/> },
    { name: "Hobbies", href: "/hobbies", icon: <LuShovel/> },
    { name: "Contact", href: "/contact", icon: <LuContact2/> },
  ];
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="h-screen flex flex-col gap-6  z-[4000] backdrop-blur-sm bg-red-600 opacity-50 px-4">
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="logo w-full flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Sabrain Logo"
            className="h-24 w-24 object-cover mb-2 mt-2"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex whitespace-nowrap">
            Sabah&nbsp;
            <span>| SABRAIN</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {menu.map((item, index) => {
            return (
              <div key={item.name} className="sidebar-item flex justify-start">
                <Link
                  href={item.href}
                  className="text-white flex flex-row gap-3 hover:text-violet-500"
                >
                  <NavButtons
                    icon={item.icon}
                    brandColor="violet"
                    title={item.name}
                    titleClassName="sidebar-title pl-2 font-semibold"
                    size="24"
                    className="sidebar-icon"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
