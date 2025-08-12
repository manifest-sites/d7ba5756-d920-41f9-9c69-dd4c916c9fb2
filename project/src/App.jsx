import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import Monetization from './components/monetization/Monetization'
import HelloWorld from './components/HelloWorld'
import About from './components/About'
import Navigation from './components/Navigation'
import { getRouterBasename } from './utils/routerUtils'
import { logout } from './utils/auth'

function App() {

  return (
    <Monetization>
      <div className="relative min-h-screen">
        <Button 
          type="primary" 
          icon={<LogoutOutlined />} 
          onClick={logout}
          className="absolute top-4 right-4 z-10"
        >
          Logout
        </Button>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-[20rem] leading-none">🐶</div>
        </div>
      </div>
    </Monetization>
  )
}

export default App