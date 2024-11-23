import { cn } from "@/lib/utils"

export const Tag=({title,otherClasses}:{title:string,otherClasses?:string})=>{
    return (
        <p className={cn("bg-gradient-to-l from-[#161A31]/90 to-[#06091F]/90 rounded-xl px-4 py-2 w-fit  text-white absolute",otherClasses)}>{title}</p>
    )
}