import React from "react";
import { Container, Button } from 'react-bootstrap';
import '../index.scss';
import campfireGif from '../assets/Campfire2D.gif'

const SplashPage = () => {
    return (
        <Container fluid className="splash-page text-center">
            <h1>Greetings, Traveler</h1>
            <img src={campfireGif} alt="pixel campfire by dustdfg, https://simon-develop.itch.io/2d-campfire-free" className="img-fluid" />
            <div className="buttons">
                <Button variant="primary" size="lg" className="my-2">Log In</Button>
                <Button variant="secondary" size="lg" className="my-2">Sign Up</Button>
            </div>
        </Container>
    )
}

export default SplashPage