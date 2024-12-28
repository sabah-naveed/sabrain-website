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
import { Socials } from "./Socials";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

export default function NavbarSab() {
  const menu = [
    { name: "Home", href: "/", icon: <LuHome /> },
    // { name: "About", href: "/about", icon: <LuPenTool/> },
    // { name: "Skills", href: "/skills", icon: <LuPencilRuler/> },
    { name: "Work", href: "/work", icon: <LuBriefcase /> },
    { name: "Projects", href: "/projects", icon: <LuPaintbrush /> },
    // { name: "Hobbies", href: "/hobbies", icon: <LuShovel/> },
    // { name: "Contact", href: "/contact", icon: <LuContact2/> },
  ];
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="fixed backdrop-blur-md navbar bg-base-50 z-50">
      <div className="flex-1 ml-10">
        <a className="btn btn-ghost text-xl">Sabrain</a>
      </div>
      <div className="flex-none mr-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>SomeTab</a>
          </li>
          <li>
            <details>
              <summary>Projects</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
