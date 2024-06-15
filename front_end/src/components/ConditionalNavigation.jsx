// This component only renders the navbar if not on the splash page.
// Credit: Mosh Hamedani, @Programming with Mosh on YouTube

import React from 'react'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'

const ConditionalNavigation = () => {
    const location = useLocation()

    if (location.pathname === '/') {
        return null
    }

    return <Navigation />
}

export default ConditionalNavigation