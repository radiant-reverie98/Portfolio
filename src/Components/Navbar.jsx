import React, { useEffect,useState } from 'react'
import {cn} from '../lib/utils'

function Navbar() {

  const navItems = [
    {name: "Home" , href: "#hero"},
    {name: "About" , href: "#about"},
    {name: "Skills" , href: "#skills"},
    {name: "Projects" , href: "#projects"},
    {name: "Contact" , href: "#contact"},

    ]
    const [iseScrolled,setIsScrolled] = useState(false)

    

    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.screenY>10)
        }

        window.addEventListener("scroll",handleScroll)
    })
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
        iseScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
        <div className="container-flex items-center justify-between">
            <a></a>
            
        </div>
    </nav>
  )
}

export default Navbar
