import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'; // Custom styles for the login page

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
    };

    return (
        <>
            <div className="Lgnmain">
                <h1 className="logo text-light lgnLogoTitle">DevSpot</h1>

                <div className="parent">

                    <Container className="d-flex justify-content-center align-items-center vh-100">
                        <Row className="w-100">
                            <Col md={{ span: 4, offset: 4 }}>
                                <div className="wrapperrr p-4 shadow">
                                    <div className="text-center mb-4 text-light">
                                    </div>
                                    <h3 className="text-center text-light mb-3">Welcome Back!</h3>
                                    <p className="text-center paralgn">Enter your details to log in</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3 LgnInputBox" controlId="formBasicEmail">
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="input-field"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3 LgnInputBox" controlId="formBasicPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="input-field"
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-between mb-4">
                                            <Form.Check
                                                type="checkbox"
                                                label="Keep me logged in"
                                                checked={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                                className="text-white"
                                            />
                                            <a href="#" className="forgot-password text-white">Forgot password</a>
                                        </div>

                                        <Button variant="primary" type="submit" className="w-100 login-btn justify-content-center align-items-center justify-items-center text-center lgnBtn">
                                            Log in
                                        </Button>

                                        <div className="text-center mt-4">
                                            <p className="text-white">
                                                Don’t have an account? <a href="#" className="sign-up">Sign up now</a>
                                            </p>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </>
    );
};

export default LoginForm;
