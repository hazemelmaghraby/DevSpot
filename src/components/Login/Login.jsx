import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import img from './../../img/image.png';
import devspot from './../../img/devspot.png';
import './Login.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // New state for Remember Me
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Please fill in all fields');
        } else {
            setError('');
            console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
        }

        if (password.length < 5) {
            setError('Password Characters Must Be More Than 5 Characters')
        }
    };

    return (
        <div className='lgnSection'>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={6} className="form-column">
                        <h3 className='devspot'><img src={devspot} alt="devsopt" className='logo' /></h3>
                        <h3 className="text-center mt-4">Welcome Back</h3>
                        <p className="text-center mt-4 text-white-50">Enter your login details to login</p>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='bg-transparent mb-4'
                                    id='emailLoginInput'
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    className='bg-transparent mb-4'
                                    onChange={(e) => setPassword(e.target.value)}
                                    id='passwordlLoginInput'
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-between mb-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Keep Me Logged In"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className='rememberMeCheckbox d-inline-block'
                                />
                                <a href="#" className="forgot-password d-inline-block">Forgot Password?</a>
                            </div>

                            <div className="text-center">
                                <Button variant="primary" type="submit" className="lgnBtn">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Col>

                    <Col md={6} className="img-column">
                        <img src={img} alt="Login" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default LoginForm;