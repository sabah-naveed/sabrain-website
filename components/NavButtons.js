"use client";
// import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useSound from "use-sound";
import React from "react";

export const NavButtons = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const { icon, brandColor, title, titleClassName, size="1x", className } = props;
  const hasTitle = title ? true : false;
  const snapSfx = "./sounds/snap.wav";
  const confirmSfx = "./sounds/confirm.wav";

  const [playSnap, { stop: stopSnap }] = useSound(snapSfx, { volume: 0.25 });
  const [playConfirm] = useSound(confirmSfx, { volume: 0.25 });

  return (
    <div
      className={`text-sm flex w-full gap-2 items-center ${className}`}
      onMouseEnter={() => {
        setIsFocused(true);
        playSnap();
      }}
      onMouseLeave={() => {
        setIsFocused(false);
        stopSnap();
      }}
      onClick={() => playConfirm()}
    >
      <div className="hover:text-violet-500">
        {/* Clone the icon element and apply the size prop */}
        {React.cloneElement(icon, { size })}
      </div>
      {hasTitle &&
        <div className={`${titleClassName} ${isFocused && 'text-violet-500'}`}>
          {title}
        </div>
      }
    </div>
  );
};