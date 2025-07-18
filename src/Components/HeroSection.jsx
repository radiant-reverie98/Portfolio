import { ArrowDown } from 'lucide-react'
import React from 'react'

function HeroSection() {
  return (
    <div>
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Tejendra </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Singh</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">Passionate MERN stack developer with hands-on experience in building responsive, scalable web apps using MySQL, Express.js, React.js, and Node.js. Focused on clean code, performance, and user experience.</p>
                
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">View my work</a>
                </div>
            </div>
            
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-0.5 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
