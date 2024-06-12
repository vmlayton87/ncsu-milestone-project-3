import React from "react";
import { Container, Button } from 'react-bootstrap';
import '../index.scss';
import campfireGif from '../assets/Campfire2D.gif';
import { useNavigate } from "react-router-dom";
// To-do: if user is logged in, this page should route to /dashboard

const SplashPage = () => {
    const navigate = useNavigate();
    const handleSignup = () => {
        navigate('/signup');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <Container fluid className="splash-page text-center">
            <h1>Greetings, Traveler</h1>
            <img src={campfireGif} alt="pixel campfire by dustdfg, https://simon-develop.itch.io/2d-campfire-free" className="img-fluid" />
            <div className="buttons">
                <Button variant="primary" size="lg" className="my-2" onClick={handleLogin}>Log In</Button>
                <Button variant="secondary" size="lg" className="my-2" onClick={handleSignup}>Sign Up</Button>
            </div>
        </Container>
    )
}

export default SplashPage