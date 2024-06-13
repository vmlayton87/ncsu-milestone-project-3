import React from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../index.scss';

const NewCampaign = () => {
    const [formData, setFormData] = useState({
        campaignname: '',
        password: '',
        confirmpassword: '',
        campaigndescription: ''
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, validation, and API call here
        console.log(formData)
    }

    return (
        <Container className="new-campaign-page">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Create a Campaign</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="campaignname">
                            <Form.Label className="form-label">Campaign Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="campaignname"
                                value={formData.campaignname}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label className="form-label">Campaign Password</Form.Label>
                            <Form.Control
                                type="text"
                                name="campaignpassword"
                                value={formData.campaignpassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label className="form-label">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="campaigndescription">
                            <Form.Label className="form-label">Campaign Description</Form.Label>
                            <textarea
                                className="form-control"
                                rows="5"
                                type="text"
                                name="campaigndescription"
                                value={formData.campaigndescription}
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