"use client"

import { useState } from "react"

export default function Navbar() {

const [open,setOpen] = useState(false)

return (

<nav className="fixed w-full bg-black text-white flex justify-between items-center px-6 md:px-16 py-4 z-50">

<h1 className="text-xl font-bold">
MUNNELLI SIVANARAYANA
</h1>

<div className="hidden md:flex gap-8">
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</div>

<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>
☰
</button>

{open && (
<div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</div>
)}

</nav>

)
}