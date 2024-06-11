import React from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import bcrypt from 'bcryptjs';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, validation, and API call here
        console.log(formData)
    }

    return (
        <Container className="login-page">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="form-label">Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label className="form-label">Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login