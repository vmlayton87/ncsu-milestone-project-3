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
import Campaigns from './components/Campaigns.jsx'
import DmDashboard from './components/DmDashboard.jsx'

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
        <Route path="/campaigns" element={<Campaigns />} /> {/* Ensure this component exists */}
        <Route path="/logout" element={() => {
          // Handle logout logic here
          return <div>Logging out...</div>;
        }} />
      </Routes>
    </Router>
  )
}

export default App
