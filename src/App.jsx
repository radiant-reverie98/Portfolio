import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'


function App() {
  <BrowserRouter>
    <Routes>
      <Route index element={Home} />
      <Route path="*" element={NotFound}/>
    </Routes>
  </BrowserRouter>
  
  return (
    <>
      
    </>
  )
}

export default App
