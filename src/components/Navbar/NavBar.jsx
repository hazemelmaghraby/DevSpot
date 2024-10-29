import React, { useState } from 'react';
import './Navbar.css'; // Import custom CSS for styling
import { Form, Button, Alert, Badge } from "react-bootstrap";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate(); // Initialize navigate function


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navContainer">
            <div className="navLogo">DevSpot</div>
            <ul className={`navLinks ${isMenuOpen ? 'navLinksOpen' : ''}`}>
                <li><a href="#home" className="navLink">Home</a></li>
                <li><a href="#features" className="navLink">Features</a></li>
                <li><a href="#about" className="navLink">About Us</a></li>
                <li><a href="#contact" className="navLink">Contact</a></li>
            </ul>
            <form class="d-flex" role="search">
                <input className="form-control me-2 homeNavbarSearchBar" type="search" placeholder="Search" aria-label="Search" />
                <div className="lgnBtnDiv">
                    <button
                        type="button"
                        className="homeLgnBtnn"
                        onClick={() => navigate('/login')} // Navigate to /login
                    >
                        Login
                    </button>

                </div>
            </form>

            <div className="navMenuToggle" onClick={toggleMenu}>
                <span className="navMenuIcon">&#9776;</span>
            </div>
        </nav>
    );
};

export default Navbar;
