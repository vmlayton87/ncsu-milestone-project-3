// Dependencies import
import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom'


// Components import
import './App.css'
import SplashPage from './components/SplashPage.jsx'
import DmCard from './components/DmCard.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import ConditionalNavigation from './components/ConditionalNavigation.jsx'
import Characters from './components/Characters.jsx'
import DmDashboard from './components/DmDashboard.jsx'
import DiceDrawer from './components/DiceDrawer.jsx'
import CampaignDetails from './components/CampaignDetails.jsx'

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
        <Route path="/characters" element={<Characters />} />
        <Route path="/campaigns/:id" element={<CampaignDetails />} />
        <Route path="/logout" element={() => {
          // Handle logout logic here
        }} />
      </Routes>
      {location.pathname !=='/' && <DiceDrawer />}
    </Router>
  )
}

export default App
