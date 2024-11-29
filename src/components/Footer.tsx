import React, { useState } from "react"
import { footer } from "../data/data"

const Footer: React.FC = () => {
  const [footerData] = useState(footer)

  return (
    <footer className="my-20 flex justify-between">

      <div className="flex justify-start gap-x-6">
        {footerData.map((item, i) => (
          <a href={item.link} target="_blank" className="flex gap-x-1 items-center cursor-pointer hover:opacity-50 transition-all duration-500" key={i}>
            <item.icon/>
            <p>{item.title}</p>
          </a>
        ))}
      </div>
     
      <div className="hidden sm:flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-white font-medium">
        Last Update: Nov, 27 2024
      </div>
    </footer>
  )
}

export default Footer