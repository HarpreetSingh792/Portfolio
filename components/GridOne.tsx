"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { GridGlobe } from "./ui/GridGlobe";

gsap.registerPlugin(ScrollTrigger);

export default function GridOne() {
  const arrowLeft = useRef(null);
  const arrowRight = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    console.log("GSAP and ScrollTrigger are ready.");
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pb-10", // Ensure this matches your container
        start: "-220px", // Start point for animation
        end: "-230px", // End point for animation
        markers: false, // Show markers for debugging by default false
        toggleActions: "play pause resume reset", // Animation lifecycle,
        scrub:5
      },
    });
    
    tl.to(arrowLeft.current, {
      duration: 0.5,
      ease: "back.out",
      x: "96px",
    })
      .to(arrowRight.current, {
        duration: 0.5,
        ease: "back.out",
        x: "-96px",
      })
      .from(title.current, {
        opacity: 0.1,
        duration: 0.75,
        y: "96px",
        ease: "power4.inOut",
        stagger: 0.1,
        delay: 0.1,
      });

      gsap.from(".tech-stack-title",{
        scrollTrigger: {
          trigger: ".pb-10", // Ensure this matches your container
          start: "120px", // Start point for animation
          end: "-180px", 
          markers: false, // Show markers for debugging by default false
          toggleActions: "play pause resume reset", // Animation lifecycle
          scrub:5
        },
        scale:7,
        ease:"power4.inOut",
        duration:0.75,
        opacity:0.1
      })

      return () => tl.kill(); // Cleanup automatically
    });

  return (
    <div className="pb-10 w-full h-full flex flex-wrap min-[320px]:gap-7 md:gap-5 justify-between items-center">
      <div className="relative w-fit transition-all duration-100 ease-linear overflow-hidden shadow-md shadow-white/50 rounded-xl">
        <img
          src="laptop.svg"
          className="relative min-[320px]:h-[20rem] md:h-[30rem] w-fit object-cover"
        />
        <img
          ref={arrowLeft}
          src="arrowLeft.svg"
          className="absolute top-24 min-[320px]:-left-20 md:-left-16 w-28"
        />
        <img
          ref={arrowRight}
          src="arrowRight.svg"
          className="absolute min-[320px]:bottom-24 md:bottom-36 min-[320px]:-right-20 md:-right-16 w-28"
        />
        <p
          ref={title}
          className="text-white font-semibold absolute bottom-5 left-4 w-3/5 md:text-xl break-words text-wrap"
        >
          I prioritize client collaboration, fostering open communication.
        </p>
      </div>
      <div className="relative w-3/5 h-full flex flex-col justify-start items-start gap-7">
        <GridGlobe />
        <div className="relative rounded-md overflow-hidden min-[320px]:w-[20rem] md:w-[45rem] h-[14rem] shadow-md shadow-white/50 bg-white/10 opacity-80 ">
          <h2 className="tech-stack-title absolute left-4 min-[320px]:bottom-1 md:top-20 md:left-8 z-[9999]  text-white min-[320px]:text-xl md:text-5xl font-bold">
            <p className="min-[320px]:text-[12px] md:text-sm font-light">I constantly try to improve</p>
            My tech stack
          </h2>
          <img src="techStack.svg" alt=""  className="absolute min-[320px]:-right-4 md:right-4 opacity-100  md:top-0 min-[320px]:w-56 h-full md:w-56 cursor-pointer transition-all duration-75 ease-in-out hover:-translate-x-4"/>
        </div>
      </div>
    </div>
  );
}
