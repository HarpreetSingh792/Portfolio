export const ContactIcon=({src}:{src:string})=>{
    return(
        <div className="bg-white/10 rounded-xl flex justify-center items-center p-2">
              <img
                src={src}
                alt={src}
                className="rounded-lg w-6 h-6 "
              />
            </div>
    )
}