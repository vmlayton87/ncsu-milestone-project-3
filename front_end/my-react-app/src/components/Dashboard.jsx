import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import Navigation from "./Navigation";
import CampaignCard from "./CampaignCard";

// Import images
import image1 from '../assets/cardimage-1.jpg'
import image2 from '../assets/cardimage-2.jpg'
import image3 from '../assets/cardimage-3.jpg'

const Dashboard = () => {

    const campaigns = [
        { 
            id: 1,
            name: 'Campaign 1',
            description: 'This is a brief description of Campaign number 1.',
            image: image1
        },
        { 
            id: 2,
            name: 'Campaign 2',
            description: 'This is an exciting description of Campaign number 2.',
            image: image2
        },
        { 
            id: 3,
            name: 'Campaign 3',
            description: 'This is a colorful description of Campaign number 3.',
            image: image3
        },
    ]


    return (
        <div className="dashboard">
            <Container>
                <Row>
                    <Col>
                        <h2>Welcome to the Dashboard</h2>
                        <p>Here you can manage your Dungeons & Dragons campaigns.</p>
                    </Col>
                </Row>
                <Row className="cards-row">
                    {campaigns.map(campaign => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </Row>
                    <button class= "btn btn-secondary" href="/campaigns/new">Start a new adventure!</button>
            </Container>
        </div>
    )
}

export default Dashboard