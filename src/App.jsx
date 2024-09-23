import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'

function App() {


  return (
    <div className='h-screen flex flex-col'>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default App
