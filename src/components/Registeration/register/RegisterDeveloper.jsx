import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Badge } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    experience: "",
    expectedSalary: "",
    password: "",
    majors: [] // Initialize majors as an empty array
  });

  const [error, setError] = useState("");
  const [salaryOptions, setSalaryOptions] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  useEffect(() => {
    // Update salary options based on experience level
    switch (formData.experience) {
      case "1 - 3":
        setSalaryOptions(["$300 - $500", "$500 - $700"]);
        break;
      case "3 - 5":
        setSalaryOptions(["$700 - $1000", "$1000 - $1500"]);
        break;
      case "5 - 7":
        setSalaryOptions(["$1500 - $2000", "$2000 - $2500"]);
        break;
      case "7 - 10":
        setSalaryOptions(["$2500 - $3000", "$3000 - $4000"]);
        break;
      default:
        setSalaryOptions([]);
    }
  }, [formData.experience]);

  const handleMajorSelect = (major) => {
    setFormData((prevState) => {
      const newMajors = prevState.majors.includes(major)
        ? prevState.majors.filter((m) => m !== major) // Remove major if already selected
        : [...prevState.majors, major]; // Add major if not already selected

      return { ...prevState, majors: newMajors };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, dateOfBirth, experience, gender, expectedSalary, password, majors } = formData;

    // Validate fields
    if (!firstName || !lastName || !email || !dateOfBirth || !gender || !experience || !expectedSalary || !password || majors.length === 0) {
      setError("Please fill out all fields and select at least one major.");
      return;
    }

    setError("");
    console.log("Registration Form:", formData);
  };

  const majorOptions = [
    "Computer Science",
    "Software Engineering",
    "Information Technology",
    "Cyber Security",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Frontend Developer"
  ];

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Name fields */}
      <Form.Group className="names">
        <Form.Control
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          className="inputField"
        />
        <Form.Control
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          className="inputField"
        />
      </Form.Group>

      {/* Email */}
      <Form.Group controlId="email" className="registerEmail">
        <Form.Control
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="inputField"
        />
      </Form.Group>

      {/* Date of Birth and Gender */}
      <div className="d-flex gap-3 mb-2 align-items-center justify-content-center">
        <Form.Group controlId="dateOfBirth" style={{ width: "100%" }}>
          <Form.Control
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="inputField"
          />
        </Form.Group>

        <Form.Group controlId="gender" style={{ width: "100%" }}>
          <Form.Control
            id="gender"
            as="select"
            value={formData.gender}
            onChange={handleChange}
            className="inputField"
          >
            <option value="">Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
      </div>

      {/* Major Selection */}
      <Form.Group className="registerMajor mb-3">
        <Form.Label>Your Major</Form.Label>
        <div className="d-flex flex-wrap gap-2">
          {majorOptions.map((major) => (
            <Badge
              key={major}
              onClick={() => handleMajorSelect(major)}
              className={`p-2 ${formData.majors.includes(major) ? "bg-primary" : "bg-secondary"}`}
              style={{ cursor: "pointer" }}
            >
              {major}
            </Badge>
          ))}
        </div>
      </Form.Group>

      {/* Display selected majors */}
      <div className="d-flex flex-wrap mb-3">
        {formData.majors.map((major) => (
          <Badge
            key={major}
            pill
            bg="primary"
            className="me-2 mb-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleMajorSelect(major)} // Clicking removes the selected major
          >
            {major} &times;
          </Badge>
        ))}
      </div>

      {/* Years of Experience and Average Salary */}
      <div className="d-flex gap-3 mb-2 align-items-center justify-content-center">
        <Form.Group controlId="experience" style={{ width: "100%" }}>
          <Form.Control
            id="experience"
            as="select"
            value={formData.experience}
            onChange={handleChange}
            className="inputField"
          >
            <option value="">Years Of Experience</option>
            <option value="1 - 3">1 - 3 years</option>
            <option value="3 - 5">3 - 5 years</option>
            <option value="5 - 7">5 - 7 years</option>
            <option value="7 - 10">7 - 10 years</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="expectedSalary" style={{ width: "100%" }}>
          <Form.Control
            id="expectedSalary"
            as="select"
            value={formData.expectedSalary}
            onChange={handleChange}
            className="inputField"
          >
            <option value="">Average Salary</option>
            {salaryOptions.map((salary, index) => (
              <option key={index} value={salary}>
                {salary}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>

      {/* Password */}
      <Form.Group controlId="password">
        <Form.Control
          id="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="inputField"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 lgnBtn">
        Sign Up
      </Button>
    </Form>
  );
};

export default Register;
