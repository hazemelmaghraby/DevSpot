import React, { useState } from "react";
import { Container, Tab, Tabs } from 'react-bootstrap';
import RegisterDeveloper from "./RegisterDeveloper";
import RegisterCompany from "./RegisterCompany";
import './Register.css';

const Register = () => {
  const [activeTab, setActiveTab] = useState('developer');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="registerMain">
        <Container>
          <div className="register-container">
            <div className="forContainer">
              <h2 className="registerHeading text-white">Sign up as:</h2>
              <div className="tabs">
                <button
                  className={`tab-link ${activeTab === 'developer' ? 'active' : ''}`}
                  onClick={() => handleTabClick('developer')}
                >
                  Programmer
                </button>
                <button
                  className={`tab-link ${activeTab === 'company' ? 'active' : ''}`}
                  onClick={() => handleTabClick('company')}
                >
                  Company
                </button>
              </div>

              {activeTab === 'developer' && (
                <RegisterDeveloper />
              )}
              {activeTab === 'company' && (
                <RegisterCompany />
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
