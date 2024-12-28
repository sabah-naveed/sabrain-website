import React from "react";
import { useRef } from "react";
import Spline from '@splinetool/react-spline';

export default function SabahAvatar() {
  const linkedin = useRef();
  const github = useRef();
  const instagram = useRef();

  function onLoad(spline) {
    console.log("heyy")
    
    const obj_linkedin = spline.findObjectById('9c912aab-9668-4e54-b615-636471ae2e08');
    const obj_instagram = spline.findObjectById('eeca5104-564b-4330-ad6c-a0aef8ce0051');
    const obj_github = spline.findObjectById('40579ff5-b702-4d01-8f93-6f3340f16692');
    
    linkedin.current = obj_linkedin;
    instagram.current = obj_instagram;
    github.current = obj_github;
  }

  function onHover(e){
    
    // hover
    console.log("Hovered Object:", e.target);
    console.log("Hovered Object ID:", e.target.id);
    if (e.target.id === '9c912aab-9668-4e54-b615-636471ae2e08') {
      console.log('linkedin hover');
      document.body.style.cursor = "pointer";
    } else if (e.target.id === 'a0395617-ed71-4a27-a20a-6e419d0125a9') {
      console.log('ig hover')
      document.body.style.cursor = "pointer";
    } else if (e.target.id === '633e0a71-b741-4d06-b382-c44e0d7922ce') {
      console.log('github hover')
      document.body.style.cursor = "pointer";
    } else {
      console.log("none")
      document.body.style.cursor = "default";
    }
  }

  function onLeave(e){
    document.body.style.cursor = "default";
  }



  return (
    <main>
      <div style={{ height: "100vh", width: "100vh" }}>
        <Spline 
          scene="https://prod.spline.design/cXbFeyg3QF12N0ZU/scene.splinecode"
          onLoad={onLoad}
          onSplineMouseHover={onHover}
          onMouseLeave={onLeave}
        />
      </div>
    </main>
  );
}
