import React from 'react';
import NavBar from './../Navbar/NavBar';
import './Home.css'
import Header from '../Header/Header';

const Home = () => {
    return (
        <section className='homeSection'>
            <div className="container navigationBar">
                <NavBar />
                <Header />

            </div>
            <div className="header container">
            </div>
        </section>
    )
}

export default Home;