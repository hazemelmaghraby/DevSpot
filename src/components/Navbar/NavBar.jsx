import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

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
            <div className="d-flex" role="search">
                <input className="form-control me-2 homeNavbarSearchBar" type="search" placeholder="Search" aria-label="Search" />
                <button
                    type="button"
                    className="homeLgnBtnn"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
            <div className="navMenuToggle" onClick={toggleMenu}>
                <span className="navMenuIcon">&#9776;</span>
            </div>
        </nav>
    );
};

export default Navbar;