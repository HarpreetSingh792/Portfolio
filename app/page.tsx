import { TestimonialsProvider } from "@/components/providers/TestimonialsProvider";
import GridOne from "@/components/GridOne";
import { GridThree } from "@/components/GridThree";
import { GridTwo } from "@/components/GridTwo";
import Hero from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { data } from "@/data/comments";
import { CardRevealProvider } from "@/components/providers/CardRevealProvider";
import { FooterGrid } from "@/components/FooterGrid";
import MagicButton from "@/components/ui/MagicButton";
import { ContactIcon } from "@/components/ContactIcon";

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
        <section id="about" className="w-full h-full">
          <Hero />
          <GridOne />
          <GridTwo />
          <Skills />
        </section>
      </div>
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
        className="aborder-2 pb-10 w-full h-full relative flex flex-col justify-center items-center"
      >
        <div className="h-full w-full">
          <FooterGrid />
        </div>
        <h2 className="w-full md:w-1/3 absolute top-20 text-white font-bold text-xl md:text-4xl text-center">
          Ready to take <span className="text-[#CBACF9]"> your </span> digital
          presence to the next level?
          <p className="text-center dark:text-white text-base  mt-4  font-bold ">
            Reach out to me today and let's discuss how I can help you achieve
            your goals.
          </p>
          <MagicButton title="Contact Me" />
        </h2>
        <div className="relative min-[320px]:-top-8 md:top-0 w-full h-12 flex justify-between items-center flex-wrap min-[320px]:gap-4 md:gap-0">
          <h3 className="text-center min-[320px]:w-full md:w-fit">
            Copyrigth &copy; 2024 Harpreet Singh{" "}
          </h3>
          <div className="h-full w-full md:w-2/5 flex justify-evenly items-center">
            <ContactIcon src="wha.svg" />
            <ContactIcon src="insta.svg" />
            <ContactIcon src="git.svg" />
            <ContactIcon src="link.svg" />
          </div>
        </div>
      </section>
    </main>
  );
}
