// Dependencies import
import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom'


// Components import
import './App.css'
import SplashPage from './components/SplashPage.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import ConditionalNavigation from './components/ConditionalNavigation.jsx'
import Characters from './components/Characters.jsx'
import DmDashboard from './components/DmDashboard.jsx'
import CharacterSheet from './components/CharacterSheet.jsx'
import CharacterSheetTSX from './components/CharacterSheet.tsx'
import DiceDrawer from './components/DiceDrawer.jsx'

function App() {
  return (
    <Router>
      <ConditionalNavigation />
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dmdashboard" element={<DmDashboard />} />
        <Route path="/charactersheet" element={<CharacterSheetTSX />} />
        <Route path="/campaigns" element={<Campaigns />} /> {/* Ensure this component exists */}
        <Route path="/characters" element={<Characters />} />
        <Route path="/logout" element={() => {
          // Handle logout logic here
        }} />
      </Routes>
      {location.pathname !=='/' && <DiceDrawer />}
    </Router>
  )
}

export default App
