import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex flex-wrap justify-center items-center relative z-10">
        <div className="w-full md:w-2/3 flex flex-col items-center justify-start">
          <TextGenerateEffect
            className="w-full text-left text-[24px] md:text-3xl lg:text-5xl"
            words="Hi,I’m Harpreet Singh"
          />
          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg  lg:text-2xl  dark:text-white">
            I&apos;m a B.Tech student in Computer Science, skilled in React,
            Node.js, and full-stack development, committed to continuous
            learning and innovation.
          </p>
          <div className="relative left-0  w-full h-full">
            <a href="#projects">
              <MagicButton
                title="See my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
        <div className="hidden md:block h-72 w-1/4">
          <img src="profile.svg" alt="profile" className="w-full h-full" />

        </div>
      </div>
    </div>
  );
}
