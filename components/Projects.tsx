export default function Projects(){

const projects=[
{
title:"Ecommerce App",
desc:"React Native ecommerce app with wishlist and cart"
},
{
title:"Portfolio Website",
desc:"Modern portfolio built with Next.js and Tailwind"
},
{
title:"Chat Application",
desc:"Real-time chat application using React"
}
]

return(

<section id="projects" className="py-24 bg-gray-900 text-white">

<h2 className="text-4xl text-center font-bold mb-12">
Projects
</h2>

<div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">

{projects.map((project,index)=>(

<div
key={index}
className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition"
>

<h3 className="text-xl font-bold mb-2">
{project.title}
</h3>

<p className="text-gray-400">
{project.desc}
</p>

</div>

))}

</div>

</section>

)

}