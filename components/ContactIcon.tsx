import Link from "next/link"

export const ContactIcon=({link,src}:{src:string;link:string})=>{
    return(
        <Link href={link} className="bg-white/10 rounded-xl flex justify-center items-center p-2 cursor-pointer hover:opacity-55 transition duration-75 ease-in">
              <img
                src={src}
                alt={src}
                className="rounded-lg w-6 h-6"
              />
            </Link>
    )
}