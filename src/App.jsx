import React from 'react'
import { motion } from 'motion/react'
import { Routes, Route } from 'react-router'

import PageWrap from './global/PageWrap'
import Home from "./pages/Home"
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import StyleGuide from './pages/StyleGuide'
import FederalStore from './pages/projects/FederalStore'
import LunchLady from './pages/projects/LunchLady'
import PetApp from './pages/projects/PetApp'
import GiveWise from './pages/projects/GiveWise'

function App() {

  // Logic

  // HTML~
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrap />}>
            <Route index element={<Home/>} />
            <Route path="/about" element={(<About />)} />
            <Route path="/work" element={(<Work />)} />
            <Route path="/contact" element={(<Contact />)} />
            <Route path='/styleguide' element={(<StyleGuide />)} />
            <Route path="/work/federal-store-redesign" element={(<FederalStore />)} />
            <Route path="/work/the-lunch-lady" element={(<LunchLady />)} />
            <Route path="/work/pet-app" element={(<PetApp />)} />
            <Route path="/work/givewise" element={(<GiveWise />)} />
        </Route>
      </Routes>
    </>
  )
}

export default App
