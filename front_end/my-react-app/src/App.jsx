// Dependencies import
import React from 'react'
import { useState } from 'react'
import './App.css'

// Components import
import SplashPage from './components/SplashPage.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import Navigation from './components/Navigation.jsx'

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  )
}


export default App
