"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
const GridGlobe = lazy(() => import("@/components/ui/GridGlobe"));

gsap.registerPlugin(ScrollTrigger);

export default function GridOne() {
  const arrowLeft = useRef(null);
  const arrowRight = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const title = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(false);
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWideScreen(window.screen.width > 680);
    }
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pb-10", // Ensure this matches your container
        start: "-220px", // Start point for animation
        end: "-230px", // End point for animation
        markers: false, // Show markers for debugging by default false
        toggleActions: "play pause resume reset", // Animation lifecycle,
        scrub: 5,
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

    gsap.from(".tech-stack-title", {
      scrollTrigger: {
        trigger: ".pb-10", // Ensure this matches your container
        start: window?.screen?.width <= 780 ? "120px" : "-220px", // Start point for animation
        end: "-180px",
        markers: false, // Show markers for debugging by default false
        toggleActions: "play pause resume reset", // Animation lifecycle
        scrub: 5,
      },
      scale: 7,
      ease: "power4.inOut",
      duration: 0.75,
      opacity: 0.1,
    });

    return () => tl.kill(); // Cleanup automatically
  });


  return (
    <div className="pb-10 relative  w-full h-full flex flex-wrap min-[320px]:gap-7 md:gap-4 justify-center items-center">
      <div className="relative w-full md:w-1/3 transition-all duration-100 ease-linear overflow-hidden shadow-md shadow-white/50 rounded-xl">
        <Image
          height={0}
          width={0}
          src="laptop.svg"
          alt="laptop"
          className="relative min-[320px]:h-[20rem] md:h-[30rem] w-fit object-cover"
        />
        <Image
          ref={arrowLeft}
          height={0}
          width={0}
          src="arrowLeft.svg"
          alt="arrow-left"
          className="absolute top-24 min-[320px]:-left-20 md:-left-16 w-28"
          />
        <Image
         height={0}
         width={0}
          ref={arrowRight}
          alt="arrow-right"
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
      <div
        ref={ref}
        className="relative w-full md:w-3/5 flex flex-col gap-6 justify-center items-center"
      >
        <Suspense fallback="Loading...">
          {isWideScreen && inView && <GridGlobe />}
        </Suspense>
        <div className="relative rounded-md overflow-hidden w-full h-[14rem] shadow-md shadow-white/50 bg-white/10 opacity-80 ">
          <h2 className="tech-stack-title absolute left-4 min-[320px]:bottom-1 md:top-20 md:left-8 z-[9999]  text-white min-[320px]:text-xl md:text-5xl font-bold">
            <p className="min-[320px]:text-[12px] md:text-sm font-light">
              I constantly try to improve
            </p>
            My tech stack
          </h2>
          <img
            src="techStack.svg"
            alt=""
            className="absolute min-[320px]:-right-4 md:right-4 opacity-100  md:top-0 min-[320px]:w-56 h-full md:w-56 cursor-pointer transition-all duration-75 ease-in-out hover:-translate-x-4"
          />
        </div>
      </div>
    </div>
  );
}
