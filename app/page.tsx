import { ContactIcon } from "@/components/ContactIcon";
import { FooterGrid } from "@/components/FooterGrid";
import { GridThree } from "@/components/GridThree";
import { GridTwo } from "@/components/GridTwo";
import Hero from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { CardRevealProvider } from "@/components/providers/CardRevealProvider";
import { TestimonialsProvider } from "@/components/providers/TestimonialsProvider";
import { Skills } from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import MagicButton from "@/components/ui/MagicButton";
import { data } from "@/data/comments";
import { lazy, Suspense } from "react";
const GridOne = lazy(() => import("@/components/GridOne"));




export default function Home() {
  return (
   
      <main className="w-full h-full relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
        <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="max-w-7xl w-full h-full">
          <FloatingNav
            navItems={[
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Testimonials", link: "#testimonials" },
              { name: "Contact", link: "#contact" },
            ]}
          />
          <section id="about" className="m-auto w-full md:w-11/12 h-full">
            <Hero />
            <GridOne />
            <GridTwo />
            <Skills />
          </section>
          <section id="projects" className="pb-20 w-full h-full">
            <h2 className="relative text-white font-bold text-xl md:text-4xl text-center">
              A small selection of{" "}
              <span className="text-[#CBACF9]">recent projects</span>
            </h2>
            <GridThree />
          </section>
          <section id="testimonials" className="pb-10 w-full h-full">
            <h2 className="relative text-white font-bold text-xl md:text-4xl text-center">
              Kind words from
              <span className="text-[#CBACF9]"> satisfied clients</span>
            </h2>
            <TestimonialsProvider testimonials={data} />
          </section>
          <section id="my-approach" className="w-full h-full">
            <h2 className="relative text-white font-bold text-xl md:text-4xl text-center">
              My
              <span className="text-[#CBACF9]"> approach</span>
            </h2>
            <CardRevealProvider />
          </section>
          <section
            id="contact"
            className="pb-10 w-full min-h-[40rem] h-full relative flex flex-col justify-center items-center"
          >
            <div className="h-full w-full">
              <FooterGrid />
            </div>
            <h2 className="w-full md:w-1/3 absolute top-20 text-white font-bold text-xl md:text-4xl text-center">
              Ready to take <span className="text-[#CBACF9]"> your </span>{" "}
              digital presence to the next level?
              <p className="text-center dark:text-white text-base  mt-4  font-bold ">
                Reach out to me today and let's discuss how I can help you
                achieve your goals.
              </p>
              <a href="tel:+91-9988223402">
                <MagicButton title="Contact Me" />
              </a>
              <a href="https://drive.google.com/file/d/1sx2pppUQibmy-PeX5Wh0dig5QwV9tS4g/view?usp=sharing">
                <MagicButton title="Hire me" />
              </a>
            </h2>
            <div className="relative min-[320px]:-top-8 md:top-6 w-full h-16 flex justify-between items-center flex-wrap min-[320px]:gap-4 md:gap-0">
              <h3 className="text-center min-[320px]:w-full md:w-fit">
                Copyright &copy; 2024 Harpreet Singh{" "}
              </h3>
              <div className="h-full w-full md:w-2/5 flex justify-evenly items-center relative">
                <ContactIcon
                  link="https://wa.me/qr/BV3CF2ZYO75GB1"
                  src="wha.svg"
                />
                <ContactIcon
                  link="https://www.instagram.com/harpreetsingh71519/"
                  src="insta.svg"
                />
                <ContactIcon
                  link="https://github.com/HarpreetSingh792"
                  src="git.svg"
                />
                <ContactIcon
                  link="https://www.linkedin.com/in/harpreet-singh-a3501a244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  src="link.svg"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
 
  );
}
