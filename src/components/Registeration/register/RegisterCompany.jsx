import React, { useState } from "react";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import Select from 'react-select';


const RegisterCompany = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        companyServise: "",
        numEmployees: "",
        averageSalary: "",
        passwordCompany: "",
        majorsRequired: [],
    });

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            border: '1px solid #2c2f36',
            borderRadius: '8px',
            color: '#ffffff',
            padding: '5px',
            fontSize: '14px',
            marginBottom: '10px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#a0a3a8',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#ffffff',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#0e2740',
            color: '#ffffff',
            borderRadius: '10px',
            ':hover': {
                color: '#ffffff',
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#007bff',
            color: '#ffffff',
            borderRadius: '5px',
            ':hover': {
                backgroundColor: '#0e2740',
                color: 'black',
            },
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: '#ffffff',
            ':hover': {
                color: 'black',
                backgroundColor: '#0e2740',
            },
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: '#ffffff',
            ':hover': {
                backgroundColor: '#0e2740',
                color: '#595757',
            },
        }),
    };

    const majorRequiredOptions = [
        { value: 'Software', label: 'Software' },
        { value: 'Hardware', label: 'Hardware' },
        { value: 'CyberSecurity', label: 'CyberSecurity' },
        { value: 'AI', label: 'AI' },
    ];

    const [error, setError] = useState("");

    const handleChange = (e) => {
        // If `e` is an array, it's from `react-select`
        if (Array.isArray(e)) {
            setFormData((prevState) => ({
                ...prevState,
                majorsRequired: e, // Directly set selected options array
            }));
        } else {
            // Otherwise, it's a normal form event
            const { id, value } = e.target;
            setFormData((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        }
    };
    const validateTextField = (index) => {
        return index.length <= 3 && /^[a-zA-Z]*$/.test(index);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const { companyName, companyServise, numEmployees, passwordCompany, averageSalary, majorsRequired } = formData;
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
            <Form.Group controlId="CompanyName" className="registerCompanyName" id="CompanyName">
                <Form.Control
                    id="CompanyName"
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="inputField"
                />
            </Form.Group>
            <Form.Group controlId="CompanyEmail" className="registerCompanyEmail" id="CompanyMail">
                <Form.Control
                    id="CompanyMail"
                    type="CompanyMail"
                    placeholder="Company Mail"
                    value={formData.CompanyMail}
                    onChange={handleChange}
                    className="inputField"
                />
            </Form.Group>
            <Form.Group controlId="CompanyPassword">
                <Form.Control
                    id="CompanyPassword"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="inputField"
                />
            </Form.Group>
            <Form.Group controlId="EmployeesNumber" style={{ width: "100%" }} id="EmployeesNumber">
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

            <Form.Group controlId="MajorsRequired" style={{ width: "100%" }} id="MajorsRequired">
                <Select
                    id="MajorsRequired"
                    isMulti
                    options={majorRequiredOptions}
                    value={formData.majorsRequired} // Shows the selected majors
                    onChange={handleChange} // handleChange now supports this structure
                    styles={customSelectStyles}
                    classNamePrefix="select"
                    placeholder="Select Majors Required"
                />

            </Form.Group>

            <Form.Group controlId="AverageSalary" style={{ width: "100%" }} id="AverageSalary">
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
            <Button variant="primary" type="submit" className="registerButton w-100">
                Sign Up
            </Button>
        </Form>
    )
}

export default RegisterCompany