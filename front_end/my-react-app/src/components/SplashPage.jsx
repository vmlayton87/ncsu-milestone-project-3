import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.scss';
import campfireGif from '../assets/Campfire2D.gif'

const SplashPage = () => {
    return (
        <Container className="splash-page text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1>Greetings, Traveler</h1>
                    <img src={campfireGif} alt="pixel campfire" className="img-fluid my-4" />
                    <div className="buttons">
                        <button onClick={() => alert('Log In Clicked')}>Log In</button>
                        <button onClick={() => alert('Sign Up Clicked')}>Sign Up</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SplashPage