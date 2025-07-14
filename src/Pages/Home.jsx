import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import AboutMe from '../Components/AboutMe'
import SkillsSection from '../Components/SkillsSection'
import ProjectSection from '../Components/ProjectSection'
import ContactSection from '../Components/ContactSection'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle/>
        {/* Background effects */}
        <StarBackground/>
        {/* Navbar */}
        <Navbar/>
        {/* Main Content */}
        <main>
            <HeroSection/>
            <AboutMe/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>

        {/* Footer */}
    </div>
  )
}

export default Home
