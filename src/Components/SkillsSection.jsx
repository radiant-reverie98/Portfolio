import React from 'react';
import { cn } from '../lib/utils';
import { useState } from 'react';

function SkillsSection() {
    const [activeCategory,setActiveCategory] = useState("all")

  const skills = [
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "Javascript", level: 80, category: "frontend" },
    { name: "TailwindCSS", level: 90, category: "frontend" },
    { name: "Bootstrap", level: 70, category: "frontend" },
    { name: "React JS", level: 85, category: "frontend" },

    { name: "NodeJS", level: 80, category: "backend" },
    { name: "ExpressJS", level: 80, category: "backend" },
    { name: "MySQL", level: 85, category: "backend" },
    { name: "MongoDB", level: 50, category: "backend" },

    { name: "Git/Github", level: 80, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },

    { name: "C", level: 70, category: "language" },
    { name: "C++", level: 85, category: "language" },
  ];

    const filterCategory = skills.filter((skill)=> activeCategory === "all" || activeCategory === skill.category)

  const categories = ["all","frontend","backend","tools","language"]

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary/100">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category,key)=>{
                return <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                    activeCategory === category ? "bg-primary text-primary-foreground " : "bg-secondary/70 text-foreground hover:bg-secondary"
                )} onClick={()=> setActiveCategory(category)}>{category}</button>
            })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterCategory.map((skill, key) => (
            <div key={key} className="bg-card rounded-lg p-6 shadow-xs card-hover">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
