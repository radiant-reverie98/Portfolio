import React, { useState } from 'react'
import {Moon,Sun} from "lucide-react"

function ThemeToggle() {
    const [isDarkMode,setIsDarkMode] = useState(true)
  return (
    <div>
      <button>{isDarkMode ? <Sun/> : <Moon/>}</button>
    </div>
  )
}

export default ThemeToggle
