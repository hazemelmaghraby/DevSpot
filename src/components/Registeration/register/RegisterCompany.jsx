import React, { useState } from "react";
import { Form, Button, Alert} from "react-bootstrap";

const RegisterDeveloper = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        companyServise: "",
        numEmployees: "",
        averageSalary: "",
        passwordCompany: "",
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
        const { companyName, companyServise, numEmployees, passwordCompany, averageSalary } = formData;
        // Validate text fields
        if (validateTextField(companyName)) {
        setError(
            "Company Name must be at least 3 letters and can't contain numbers."
        );
        return;
        }
         // Validate Service
        if (companyServise.valueOf() === ''){
            setError(
                "please Enter Company Servise"
            );
            return;
        }
         // Validate numEmployees
        if (numEmployees.valueOf() === ''){
            setError(
                "Please Enter Number of Employees"
            );
            return;
        }
         // Validate averageSalary
        if (averageSalary.valueOf() === ''){
            setError(
                "Please Enter  Average Salary"
            );
            return;
        }
        // Validate password
        if (passwordCompany.length < 8) {
        setError(
            "Password must be at least 8 characters long"
        );
        return;
        }
        setError("");
        // Add form submission logic here
        console.log("Registration Form:", formData);
    };
return (
    <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="companyName">
        <Form.Control
            type="text"
            placeholder="Enter the Company name"
            value={formData.companyName}
            onChange={handleChange}
        />
        </Form.Group>
        <Form.Group controlId="companyServise">
        <Form.Control
            as="select"
            value={formData.companyServise}
            onChange={handleChange}
        >
            <option value="">Enter Company Servise</option>
            <option value="Software">Software</option>
            <option value="zzz">zzz</option>
            <option value="aaa">aaa</option>
            <option value="qqq">qqq</option>
        </Form.Control>
        </Form.Group>
        <Form.Group controlId="numEmployees">
        <Form.Control
            as="select"
            value={formData.numEmployees}
            onChange={handleChange}
        >
            <option value="">Number of employees</option>
            <option value="10 - 50">10 - 50</option>
            <option value="50 - 150">50 - 150</option>
            <option value="150 - 700">150 - 700</option>
            <option value="700 - 1300">700 - 1300</option>
        </Form.Control>
        </Form.Group>
        <Form.Group controlId="averageSalary">
        <Form.Control
            type="text"
            placeholder="Average salary"
            value={formData.averageSalary}
            onChange={handleChange}
        />
        </Form.Group>
        <Form.Group controlId="passwordCompany">
        <Form.Control
            type="password"
            placeholder="Password"
            value={formData.passwordCompany}
            onChange={handleChange}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
        Sign Up
        </Button>
    </Form>
)
}

export default RegisterDeveloper