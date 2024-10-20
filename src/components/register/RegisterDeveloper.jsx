import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";


const Register = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    experience: "",
    expectedSalary: "",
    password: "",
});

    const [error, setError] = useState("");

    const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.id]: e.target.value,
    });
};

    const validateTextField = (index) => {
    return index.length <= 3 && /^[a-zA-Z]*$/.test(index);
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, password, dateOfBirth, experience, gender, expectedSalary } = formData;

    // Validate text fields
    if (validateTextField(firstName) || validateTextField(lastName)) {
    setError(
        "First name and last name must be at least 3 letters and can't contain numbers."
    );
    return;
    }

     // Validate birth date
        if (dateOfBirth.valueOf() === ''){
        setError(
            "Please Enter a Birth Date"
        );
        return;
    }
     // Validate gender
        if (gender.valueOf() === ''){
        setError(
            "Please Enter your Gender"
        );
        return;
    }
    // Validate experience
    if (experience.valueOf() === ''){
        setError(
            "Please Enter Your Experience"
        );
        return;
    }
     // Validate expectedSalary
     if (expectedSalary.valueOf() === ''){
        setError(
            "Please Enter Salary"
        );
        return;
    }

    // Validate password
    if (password.length < 8) {
      setError(`Password must be at least 8 characters long.`);
      return;
    }

    setError("");
    // Add form submission logic here
    console.log("Registration Form:", formData);
  };

  return (
    
      <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="firstName">
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="dateOfBirth">
          <Form.Control
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Control
            as="select"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Choose...">Choose...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="experience">
          <Form.Control
            as="select"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="Choose...">Choose...</option>
            <option value="1 - 3">1 - 3 years</option>
            <option value="3 - 5">3 - 5 years</option>
            <option value="5 - 7">5 - 7 years</option>
            <option value="7 - 10">7 - 10 years</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="expectedSalary">
        <Form.Control
            type="text"
            placeholder="Expected salary"
            value={formData.expectedSalary}
            onChange={handleChange}
        />
        </Form.Group>
        <Form.Group controlId="password">
        <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
        />
        </Form.Group>

        <Button variant="primary" type="submit">
        Sign Up
        </Button>
    </Form>
    
);
};

export default Register;
