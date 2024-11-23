import { ProjectCard } from "../ProjectCard";

const icons = ["next.svg", "css.png", "re.svg", "redux.svg"];

export const ProjectCardProvider = () => {
  return (
    <ProjectCard
      title="visit"
      href="demo"
      className="flex flex-col justify-center items-center rounded-2xl border-2 w-full h-full bg-white/5 gap-5"
      containerClassName=" relative flex justify-center items-start min-[320px]:w-[20rem] md:max-w-fit h-[30rem]"
      imgUrl="p1.svg"
    >
      <h3 className=" text-white font-semibold text-xl text-left">
        Talk Wave - Real Time Team Collaboration App
        <p className="mt-2 text-white/70 font-light text-xs text-justify">
          A real time collaboration app Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore dolorum odio ut. Ratione totam dolorum, error incidunt provident cum accusantium facere esse blanditiis alias ipsum tempora, deserunt deleniti maiores.
        </p>
      </h3>

      <div className="h-12 w-full flex justify-between items-center px-2">
        <div className="flex justify-start">
          {icons?.map((i) => {
            return (
              <img key={i} src={i} alt={i} className="border rounded-full w-8 object-contain" />
            );
          })}
        </div>
        <p className="text-[#CBACF9] text-sm font-medium flex justify-center min-[320px]:items-start md:items-center gap-2">Check Live Site <img src="arrow.svg" className="fill-[#CBACF9]"  alt="arrow" /></p>
      </div>

    </ProjectCard>
  );
};
