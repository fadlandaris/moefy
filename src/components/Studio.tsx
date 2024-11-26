import React from "react"
import { typesData } from "../types/type"

interface dataProps {
  data: typesData[];
}

const Studio: React.FC<dataProps> = ({ data }) => {

  return (
    <>
      {data.map((item, i) => (
        <div key={i} className="h-[10rem] rounded-3xl bg-gradient-to-b from-neutral-950 to-black relative px-5 hover:scale-105 transition-all duration-500 cursor-pointer flex justify-center items-center group shadow-md overflow-hidden">
          <video src={item.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 "></video>
          <img src={item.image} className="w-[6rem] items-center" />
        </div>
      ))}
    </>
  )
}

export default Studio