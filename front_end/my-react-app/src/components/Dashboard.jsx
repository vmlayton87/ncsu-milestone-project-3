import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import Navigation from "./Navigation";
import CampaignCard from "./CampaignCard";

const Dashboard = () => {

    const campaigns = [
        { 
            id: 1,
            name: 'Campaign 1',
            description: 'This is a brief description of Campaign number 1.'
        },
        { 
            id: 2,
            name: 'Campaign 2',
            description: 'This is an exciting description of Campaign number 2.'
        },
        { 
            id: 3,
            name: 'Campaign 3',
            description: 'This is a colorful description of Campaign number 3.'
        },
    ]


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
                    {campaigns.map(campaign => (
                    <Col key={campaign.id} xs={12} sm={6} md={4}>
                        <CampaignCard campaign={campaign} />
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard