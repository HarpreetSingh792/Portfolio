"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const SkillIcons = () => {
  useGSAP(() => {
    gsap.from("#icon", {
      scrollTrigger: {
        trigger: ".grid",
        start: "-300px",
        end: "-350px",
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.2,
      duration: 0.5,
      y: "20px",
      x: "-20px",
      scale: 0,
      ease: "power4.inOut",
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  return (
    <div className="grid gap-4 justify-start items-center m-auto min-[320px]:grid-cols-5 md:grid-cols-6">
      <img
        src="next.svg"
        alt="next-icon"
        className=" min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="re.svg"
        alt="react-icon"
        className=" min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="express.png"
        alt="express-icon"
        className=" min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="node.png"
        alt="node-icon"
        className="min-[320px]:w-10 md:w-16"
        id="icon"
      />
      <img
        src="mongodb.svg"
        alt="mongoDB-icon"
        className="min-[320px]:w-10 md:w-16"
        id="icon"
      />
      <img
        src="js.png"
        alt="javascript-icon"
        className="min-[320px]:w-10 md:w-16"
        id="icon"
      />
      <img
        src="ts.svg"
        alt="typescript-icon"
        className="min-[320px]:w-10 md:w-16"
        id="icon"
      />
      <img
        src="tail.svg"
        alt="tailwind-icon"
        className="min-[320px]:w-10 md:w-16"
        id="icon"
      />
      <img
        src="redux.svg"
        alt="redux-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="mui.png"
        alt="mui-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="mysql.svg"
        alt="mysql-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="css.png"
        alt="css-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="html.png"
        alt="html-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="figma.svg"
        alt="figma-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="gsap.svg"
        alt="gsap-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="git.svg"
        alt="git-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="stripe.svg"
        alt="stripe-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
      <img
        src="vercel.svg"
        alt="vercel-icon"
        className="min-[320px]:w-10 md:w-16 "
        id="icon"
      />
    </div>
  );
};
