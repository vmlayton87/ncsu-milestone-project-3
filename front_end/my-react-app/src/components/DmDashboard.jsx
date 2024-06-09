import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import Navigation from "./Navigation";
import DmCard from "./DmCard";

// Import images
import image1 from '../assets/cardimage-1.jpg'
import image2 from '../assets/cardimage-2.jpg'
import image3 from '../assets/cardimage-3.jpg'

const Dashboard = () => {

    const characters = [
        { 
            id: 1,
            name: 'Gideon Chucklephucker',
            currentHP: '58',
            maxHP: '91',
            ac: '17',
            speed: '30ft',
            passivePerception: '15',
            image: image1
        },
        { 
            id: 2,
            name: 'Jeremiah Dreamweaver',
            currentHP: '66',
            maxHP: '66',
            ac: '15',
            speed: '30ft',
            passivePerception: '14',
            image: image2
        },
        { 
            id: 3,
            name: 'Eldrin Shadowsong',
            currentHP: '69',
            maxHP: '72',
            ac: '12',
            speed: '40ft',
            passivePerception: '16',
            image: image3
        },
        { 
            id: 4,
            name: 'Ozireth',
            currentHP: '49',
            maxHP: '49',
            ac: '12',
            speed: '30ft',
            passivePerception: '16',
            image: image3
        },
        { 
            id: 5,
            name: 'Vromalon',
            currentHP: '72',
            maxHP: '91',
            ac: '19',
            speed: '30ft',
            passivePerception: '15',
            image: image3
        },
        { 
            id: 6,
            name: 'Dammus Giantsbane',
            currentHP: '88',
            maxHP: '88',
            ac: '14',
            speed: '30ft',
            passivePerception: '9',
            image: image3
        }
    ]

    return (
        <div className="dashboard">
            <Container>
                <Row>
                    <Col>
                        <h2>Welcome to your campaign view</h2>
                        <p>Characters in your campaign will display here</p>
                    </Col>
                </Row>
                <Row className="cards-row">
                    {characters.map(character => (
                        <DmCard key={character.id} character={character} />
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard