import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'

function ProjectSection() {
    const projects = [
      

       {
        id : "1",
        title : "GrabNestt - ECommerce Portal",
        description : "A full-stack e-commerce portal offering seamless shopping, order tracking, and secure checkout for modern buyers.",
        image : "../../public/projects/e-com.png",
        tags : ["NodeJS","ExpressJS","MySQL","ReactJS","TailwindCSS"],
        demoURL : "#",
        gitHubURL : "https://github.com/radiant-reverie98/ECommerce-portal"
      },

       {
        id : "2",
        title : "BlogMarket",
        description : "Blog Market is a clean, user-friendly platform to create, browse, and share blogs seamlessly online.",
        image : "../../public/projects/blogMarket.png",
        tags : ["NodeJS","ExpressJS","MongoDB","ReactJS","TailwindCSS"],
        demoURL : "#",
        gitHubURL : "https://github.com/radiant-reverie98/Blog-Market-"
      },
      {
        id : "3",
        title : "NewsMonkey",
        description : "News Monkey is a React app fetching real-time news from NewsAPI, categorized for easy browsing.",
        image : "../../public/projects/newsmonkey.png",
        tags : ["ReactJS","TailwindCSS"],
        demoURL : "#",
        gitHubURL : "https://github.com/radiant-reverie98/News-Monkey"
      }

    ];
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects each project was carefully crafted with attention to detail , performance and user experience</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project,key)=>{
            return <div key={key} className="group bg-card rounded-lg overflow-hidden card-xs card-hover m-2">

              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">{project.tags.map((tag,key)=>{
                  return <span key={key} className="text-secondary px-1 py-1 font-medium rounded-full bg-secondary text-secondary-foreground text-xs border">{tag}</span>
                })}</div>
              
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex justify-between ">
                <a href={project.demoURL} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="__blank"><ExternalLink size={20}/></a>
                <a href={project.gitHubURL} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="__blank"><Github size={20}/></a>

              </div>
            </div>
              
            </div>
          })}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/radiant-reverie98" className="cosmic-button w-fit flex items-center justify-center mx-auto gap-2" target="__blank">Check my GitHub <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
