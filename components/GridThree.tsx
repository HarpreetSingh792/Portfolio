import { ProjectCardProvider } from "./providers/ProjectCardProvider"

export const GridThree =()=>{
    return(
        <div className=" relative md:px-8 py-8 grid justify-center items-center place-items-center min-[320px]:grid-cols-1 md:grid-cols-2 gap-16 ">
           <ProjectCardProvider />
           <ProjectCardProvider />
           <ProjectCardProvider />
           <ProjectCardProvider />
        </div>
    )
}