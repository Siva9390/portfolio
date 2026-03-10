export default function Skills(){

const skills=[
"HTML",
"CSS",
"JavaScript",
"TypeScript",
"React",
"Node.js",
"Express",
"MongoDB",
"Tailwind",
"Git"
]

return(

<section id="skills" className="py-24 bg-black text-white">

<h2 className="text-4xl font-bold text-center mb-12">
Skills
</h2>

<div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto px-6">

{skills.map((skill,index)=>(

<div
key={index}
className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 hover:bg-purple-600 transition"
>

{skill}

</div>

))}

</div>

</section>

)

}