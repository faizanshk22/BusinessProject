// import React, { useRef } from 'react';
// import './parallax.scss';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Stats from '../Stats.jsx/Stats';

// function Parallax({ type }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end start']
//   });
//   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]); 
//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 


//   return (
//     <div
//       className='parallax'
//       ref={ref}
//       // style={{
//       //   background: type === 'services'
//       //     ? 'background: linear-gradient(180deg, #111132, #111132)'
//       //     : 'linear-gradient(180deg, #111132, #505064)',
//       // }}
//     >
//       <motion.h1 style={{ y: yText }}>{type === 'services' ? (
//           <>
//             {/* <Stats /> */}
//             <h1 className="work-text">What I work?</h1>
//           </>
//         )  : 'My Recent Work?'}</motion.h1>
//       {/* <motion.div className="mountains" /> */}
//       {/* <motion.div  className="planets" style={{ y:yBg, backgroundImage: `url(${type==='services' ? '/planets.png' : "/sun.png"})`}} /> */}
//       {/* <motion.div style={{x:yBg}} className="stars" /> */}
//     </div>
//   );
// }

// export default Parallax;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

function Parallax({ type }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Rocket moves upward
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "-220%"]);

  return (
    <div className="parallax" ref={ref}>
      {type === "services" ? (
        <div className="rocketWrapper">

          {/* Left side rectangle with rocket */}
       <div className="rectangleBorder">
  <div className="innerContent">
      {/* ROCKET INSIDE BORDER (but allowed to fly outside) */}
    <motion.img
      src="https://cdn.prod.website-files.com/66e3fc0ead389c7ea9c29d6e/66e3fc0ead389c7ea9c29f1c_NewArtboard-Animation12-ezgif.com-video-to-gif-converter.gif"
      className="rocketImage"
      style={{ y: rocketY }}
    />

    {/* TEXT INSIDE BORDER */}
    <div className="rocketText">
      <h2>Unleash Your Potential Before Opportunity Passes You By.</h2>
      <p>
       <span>Most startups fail </span> within year one — the smartest ones prepare differently.
      </p>
    </div>
  </div>
</div>   
<div className="remainingText">
<h1>Founder will be <br/> battling with?</h1>
<ul>
        <li>Lack of AI Expertise</li>
        <li>Complex AI Integration</li>
        <li>Data Challenges</li>
        <li>Scope Creep</li>
        <li>Poor UX Planning</li>
        <li>No Growth Strategy</li>
    </ul>
</div>     
</div>

      ) : (
        <motion.h1 style={{ y: rocketY }}>My Recent Work?</motion.h1>
      )}
    </div>
  );
}

export default Parallax;
