import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Monetization from './components/monetization/Monetization'
import HelloWorld from './components/HelloWorld'
import About from './components/About'
import Navigation from './components/Navigation'
import { getRouterBasename } from './utils/routerUtils'

function App() {

  return (
    <Monetization>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-[20rem] leading-none">🐶</div>
      </div>
    </Monetization>
  )
}

export default App