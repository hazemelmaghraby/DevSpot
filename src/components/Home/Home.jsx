import React from 'react';
import NavBar from './../Navbar/NavBar';
import './Home.css'
import Header from '../Header/Header';
import Discovery from '../Discovery/Discovery';

const Home = () => {
    return (
        <section className='homeSection'>
            <div className="container navigationBar">
                <NavBar />

            </div>
            <div className="header container">
                <Header />
            </div>

            <div className="discovery">
                <Discovery />
            </div>
        </section>
    )
}

export default Home;