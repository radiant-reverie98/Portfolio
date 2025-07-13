import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'

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
        </main>

        {/* Footer */}
    </div>
  )
}

export default Home
