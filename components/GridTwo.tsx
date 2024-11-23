"use client";
import { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { FiCopy } from "react-icons/fi";
import { TbCopyCheck } from "react-icons/tb";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)
export const GridTwo = () => {
  const [clicked, setIsClick] = useState<Boolean>(false);

  const handleClick = async () => {
    setIsClick(true);

    try {
      await navigator?.clipboard?.writeText("singhharpreetbliss@gmail.com");
      console.log("copied successfully");
    } catch (error) {
      console.log("clipboard not working");
    }

    setTimeout(() => {
      setIsClick(false);
    }, 2000);
  };


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-two", // Ensure this matches your container
        start: "-220px", // Start point for animation
        end: "-260px", // End point for animation
        markers: false, // Show markers for debugging by default false
        toggleActions: "play pause resume reset", // Animation lifecycle,
        scrub:5
      },
    });
    
    tl.from(".dummy-loader", {
      x:"100px",
      duration: 0.2,
      ease: "power4.inOut",
    })
     

      return () => tl.kill(); // Cleanup automatically
    });

  return (
    <div className="pb-10 w-full h-full flex flex-wrap min-[320px]:gap-7 md:gap-4 justify-start items-center grid-two">
      <div className="flex flex-col place-content-center gap-7">
        <div className="relative rounded-md overflow-hidden min-[320px]:w-[20rem] md:w-[21rem] h-[10rem] shadow-md shadow-white/50 bg-white/10  ">
          <h3 className="absolute text-center left-8 top-4 w-3/4 text-lg font-bold text-white">
            Tech enthusiast with a passion for development.
          </h3>
          <img
            src="dummy-loader.svg"
            alt="dummy-loader"
            className="absolute bottom-0 right-2 dummy-loader"
          />
        </div>
        <div className="relative rounded-md overflow-hidden min-[320px]:w-[20rem] md:w-[21rem] h-[10rem] shadow-md shadow-white/50 bg-white/10 flex ">
          <h3 className="absolute text-center left-8 top-4 w-3/4 text-lg font-bold text-white">
            Do you want to start a project together?
          </h3>
          <img src="blur.svg" alt="blur-svg" className="absolute object-fill" />
          <MagicButton
            title={clicked ? "Copied" : "Copy my email address"}
            position="right"
            icon={clicked ? <TbCopyCheck /> : <FiCopy />}
            otherClasses="absolute  top-16  min-[320px]:w-3/4 m-auto"
            handleClick={handleClick}
          />
          {clicked && (
            <img
              src="confetti.gif"
              alt="confetti"
              className="absolute right-4 top-4"
            />
          )}
        </div>
      </div>
      <div className="relative rounded-md overflow-hidden h-[10rem] md:w-[55rem] md:h-[22rem] shadow-md shadow-white/50 bg-white/10  flex min-[320px]:justify-start md:justify-center items-center">
        <div className=" min-[320px]:w-full md:w-3/5 mt-8 min-[320px]:ml-4 md:ml-8">
          <p className="uppercase min-[320px]:text-xs md:text-[24px] font-light text-white">The Inside Scoop</p>
          <TextGenerateEffect
            className="text-left text-[16px] md:text-2xl lg:text-4xl"
            words="Currently Seeking Opportunities."
          />
        </div>
        <img src="code.svg" alt="code" className="min-[320px]:-ml-16 md:ml-0" />
      </div>
    </div>
  );
};
