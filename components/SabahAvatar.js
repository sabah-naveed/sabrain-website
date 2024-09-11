import React from "react";
import { useRef } from "react";

import Spline from "@splinetool/react-spline/next";

// export default function SabahAvatar({ children }) {
//   // const linkedInRef = useRef();
//   // function onLoad(spline) {
//   //   const obj = spline.findObjectById("c64ef120-702a-44fe-9fe9-b2510cef3d29");

//   //   // save it in a ref for later use
//   //   linkedInRef.current = obj;
//   // }
//   // function moveObj() {
//   //   console.log(linkedInRef.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

//   //   // move the object in 3D space
//   //   linkedInRef.current.position.x += 10;
//   // }
//   <div className="text-white z-50">
//     hello
//     <div style={{ height: "100vh", width: "100vh" }} className="">
//       {/* <button type="button" onClick={moveObj}>
//         Move linkedin
//       </button> */}
//       <Spline
//         scene="https://prod.spline.design/cXbFeyg3QF12N0ZU/scene.splinecode"
//       />
//     </div>
//   </div>;
// };

export default function SabahAvatar() {
  return (
    <main>
      <div style={{ height: "100vh", width: "100vh" }}>
        <Spline scene="https://prod.spline.design/cXbFeyg3QF12N0ZU/scene.splinecode" />
      </div>
    </main>
  );
}
