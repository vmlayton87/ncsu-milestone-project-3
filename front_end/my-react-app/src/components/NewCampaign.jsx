import React from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import { getToken } from "../utils/auth";
import { useNavigate } from 'react-router-dom';

const NewCampaign = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        // confirmpassword: '',
        description: ''
    })
// function to update state with user info
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
// function to submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, validation, and API call here
        try {
            const token = getToken(); 
            const response = await fetch('http://127.0.0.1:5000/usercamp/', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });

            const data = await response.json();

            console.log('Response:',response)
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
          } catch (error) {
            console.error('Error creating campaign:', error);
          }
          navigate("/dashboard")
        }
        console.log(formData)
    

    return (
        <Container className="new-campaign-page">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Create a Campaign</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label className="form-label">Campaign Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label className="form-label">Campaign Password</Form.Label>
                            <Form.Control
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        {/* <Form.Group controlId="confirmPassword">
                            <Form.Label className="form-label">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group> */}

                        <Form.Group controlId="description">
                            <Form.Label className="form-label">Campaign Description</Form.Label>
                            <textarea
                                className="form-control"
                                rows="5"
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn">
                            Create
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewCampaign