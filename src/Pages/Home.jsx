import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle/>
        {/* Background effects */}
        <StarBackground/>
        {/* Navbar */}

        {/* Main Content */}


        {/* Footer */}
    </div>
  )
}

export default Home
