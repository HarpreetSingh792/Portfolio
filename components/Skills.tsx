import { SkillIcons } from "./SkillIcons";

export const Skills = () => {
  return (
    <div className="mb-20 relative rounded-md overflow-hidden w-fit  shadow-md shadow-white/50 bg-white/10 flex justify-center items-center">
      <video
        autoPlay
        playsInline
        loop
        muted
        src="cards-video.webm"
        className="object-cover w-[77rem] h-[20rem] opacity-50 bg-blend-darken"
      />
        <p className="absolute top-5 text-white text-center text-lg">Skills</p>
      <div className="m-auto absolute top-16">
        <SkillIcons />
      </div>
    </div>
  );
};
