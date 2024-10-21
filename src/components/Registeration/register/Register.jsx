import React, { useState } from "react";
import {Container, Tab, Tabs} from 'react-bootstrap';
import RegisterDeveloper from "./RegisterDeveloper";
import RegisterCompany from "./RegisterCompany";

const Register = () => {
  const [key, setKey] = useState('Developer');
  
  return (
    <Container>
      <div style={{
        width: '50%',
      }}>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Developer" title="Developer">
      <RegisterDeveloper />
      </Tab>
      <Tab eventKey="Company" title="Company">
      <RegisterCompany />
      </Tab>
    </Tabs>
      </div>
    </Container>
  );
};

export default Register;
