"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero(){

return(

<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">

<div className="text-center">

<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{duration:0.6}}
className="flex justify-center mb-6"
>

<Image
  src="/profile.jpg"
  alt="Siva Profile"
  width={180}
  height={180}
  priority
  className="rounded-full border-4 border-purple-500 shadow-xl object-cover"
/>

</motion.div>

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-4xl md:text-6xl font-bold"
>

Hi I`m     
<span className="text-purple-500">
  MUNNELLI SIVANRAYANA
</span>

</motion.h1>

<p className="text-gray-400 mt-4 text-lg">

MERN Stack Developer

</p>

<p className="text-gray-500 mt-2 max-w-xl mx-auto">

I build modern responsive web applications using  
React, Node.js, Express and MongoDB.

</p>

<div className="mt-8 flex justify-center gap-4">

<a
href="#projects"
className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
>
View Projects
</a>

<a
href="#contact"
className="border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600"
>
Contact Me
</a>

<a
href="/resume.pdf"
download
className="bg-purple-600 px-6 py-3 rounded-lg"
>
Download Resume
</a>

</div>

</div>

</section>

)

}