import React from 'react';
import NavBar from './../Navbar/NavBar';
import './Home.css'

const Home = () => {
    return (
        <section className='homeSection'>
            <div className="container navigationBar">
                <NavBar />
            </div>
        </section>
    )
}

export default Home;