import { ProjectCard } from "../ProjectCard";

export const ProjectCardProvider = ({
  title,
  subtitle,
  imgUrl,
  icons,
  link,
  comingSoon = false,
}: {
  title: string;
  subtitle: string;
  imgUrl: string;
  icons: string[];
  link: string;
  comingSoon?: boolean;
}) => {
  return (
    <ProjectCard
      title="visit"
      href={link as string}
      className="flex flex-col justify-center items-center rounded-2xl border-2 w-full h-full bg-white/5 gap-5"
      containerClassName=" relative flex justify-center items-start min-[320px]:w-[20rem] md:max-w-fit h-[30rem]"
      imgUrl={imgUrl}
    >
      {comingSoon && <div className="absolute top-0 left-0 z-[990] bg-black/70 h-full w-full flex justify-center items-center">
        <p className="text-white font-semibold text-xl md:text-4xl">Coming Soon</p>
      </div>}
      <h3 className=" text-white font-semibold text-xl text-left">
        {title}
        <p className="mt-2 text-white/70 font-light text-xs text-justify">
          {subtitle.substring(0, 360)}
        </p>
      </h3>

      <div className="h-12 w-full flex justify-between items-center px-2">
        <div className="flex justify-start">
          {icons?.map((i) => {
            return (
              <img
                key={i}
                src={i}
                alt={i}
                className="border rounded-full w-8 object-contain"
              />
            );
          })}
        </div>
        <p className="text-[#CBACF9] text-sm font-medium flex justify-center min-[320px]:items-start md:items-center gap-2">
          Check Live Site{" "}
          <img src="arrow.svg" className="fill-[#CBACF9]" alt="arrow" />
        </p>
      </div>
    </ProjectCard>
  );
};
