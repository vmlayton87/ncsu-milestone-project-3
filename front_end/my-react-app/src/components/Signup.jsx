import React from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../index.scss';
import bcrypt from 'bcryptjs';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        if (formData.password !== formData.confirmPassword) {
            alert('Password and Confirm Password are not the same!');
        } else {
            //Generate salt and hash
            bcrypt.genSalt(12, function(err, salt) {
                bcrypt.hash(formData.password, salt, function(err, hash) {
                    if (err){
                        console.log("error", err)
                    } else {
                        // Store hash and other data in the user table.
                        const userData = {
                            user_name: formData.username,
                            email: formData.email,
                            hashed_password: hash
                        }

                        fetch ('/users',{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        })
                        .then(response => response.json())  
                        .then(data => console.log('success', data))
                        .catch((error)=> console.log('Error', error))
                    }
                });
            });
        }
        //delete the console log after testing
        console.log(formData)
    }

    return (
        <Container className="signup-page">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Sign Up</h2>
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

                        <Form.Group controlId="email">
                            <Form.Label className="form-label">Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
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
                        <Button variant="primary" type="submit" className="btn">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup