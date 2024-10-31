import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className='header'>
            <div className='header-container'>
                <div className='avatarContainer'>
                    {/* Example avatars, you can add more as needed */}
                    <img src="avatar1.png" alt="Avatar 1" className="avatar avatar1" />
                    <img src="avatar2.png" alt="Avatar 2" className="avatar avatar2" />
                    <img src="avatar3.png" alt="Avatar 3" className="avatar avatar3" />
                </div>
                <div className='mainOfHomePageContainer'>
                    <div className='titleContainer'>
                        <div className='paraContainer'>
                            <p>Your Gateway to Programming & Innovation</p>
                        </div>
                        <h1>The Hub for Developers and Digital Creators</h1>
                        <p className='uderParaHeader'>Discover top projects and portfolios from professional developers and software companies. Join the Dev Spot community to showcase your
                            skills or get inspired by others, all in one place</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
