import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import Navigation from "./Navigation";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navigation />
            <Container>
                <Row className="my-4">
                    <Col>
                        <h2>Welcome to the Dashboard</h2>
                        <p>Here you can manage your Dungeons & Dragons campaigns.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>Your Campaigns</h3>
                        {/* Campaign cards listed here */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard