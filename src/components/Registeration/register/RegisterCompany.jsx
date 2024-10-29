import React, { useState } from "react";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";

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
        if (companyServise.valueOf() === '') {
            setError(
                "please Enter Company Servise"
            );
            return;
        }
        // Validate numEmployees
        if (numEmployees.valueOf() === '') {
            setError(
                "Please Enter Number of Employees"
            );
            return;
        }
        // Validate averageSalary
        if (averageSalary.valueOf() === '') {
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
            <Form.Group controlId="email" className="registerEmail" id="CompanyName">
                <Form.Control
                    id="CompanyName"
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="inputField"
                />
            </Form.Group>
            <Form.Group controlId="email" className="registerEmail" id="CompanyMail">
                <Form.Control
                    id="email"
                    type="email"
                    placeholder="Company Mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="inputField"
                />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Control
                    id="CompanyPassword"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="inputField"
                />
            </Form.Group>
            <Form.Group controlId="experience" style={{ width: "100%" }} id="EmployeesNumber">
                <Form.Control
                    id="EmployeesNumber"
                    as="select"
                    value={formData.numEmployees}
                    onChange={handleChange}
                    className="inputField"
                >
                    <option value="Nul">Number Of Employees</option>
                    <option value="5 - 10">5-10</option>
                    <option value="10-20">10-20</option>
                    <option value="20-50">20-50</option>
                    <option value="50-100">50-100</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="experience" style={{ width: "100%" }} id="MajorsRequired">
                <Form.Control
                    id="MajorsRequired"
                    as="select"
                    value={formData.majorsRequired}
                    onChange={handleChange}
                    className="inputField"
                >
                    <option value="Nul">Majors Required</option>
                    <option value="Software">Software</option>
                    <option value="Hardware">Hardware</option>
                    <option value="CyberSecurity">CyberSecurity</option>
                    <option value="AI">AI</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="experience" style={{ width: "100%" }} id="AverageSalary">
                <InputGroup.Text id="inputGroupPrepend2">@</InputGroup.Text>
                <Form.Control
                    id="AverageSalary"
                    as="select"
                    value={formData.averageSalary}
                    onChange={handleChange}
                    className="inputField"
                >
                    <option value="Nul">Average Salary</option>
                    <option value="1000-2000">$1000-$2000</option>
                    <option value="2000-3000">$2000-$3000</option>
                    <option value="3000-4000">$3000-$4000</option>
                    <option value="4000-5000">$4000-$5000</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    )
}

export default RegisterDeveloper