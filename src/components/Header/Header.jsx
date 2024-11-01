import React from 'react';
import './Header.css';
import avatar1 from './../../img/PersonIcon1.png';
import avatar2 from './../../img/PersonIcon2.png';
import avatar3 from './../../img/PersonIcon2.png';
const Header = () => {
    return (
        <section className='header'>
            <div className='header-container'>
                <div className='avatarContainer'>
                    {/* Example avatars, you can add more as needed */}
                    <img src={avatar1} alt="Avatar 1" className="avatar avatar1" />
                    <img src={avatar2} alt="Avatar 2" className="avatar avatar2" />
                    <img src={avatar3} alt="Avatar 3" className="avatar avatar3" />
                    <img src={avatar1} alt="Avatar 4" className="avatar avatar4" />
                    <img src={avatar2} alt="Avatar 5" className="avatar avatar5" />
                    <img src={avatar3} alt="Avatar 6" className="avatar avatar6" />
                    <img src={avatar1} alt="Avatar 7" className="avatar avatar7" />
                    <img src={avatar2} alt="Avatar 8" className="avatar avatar8" />
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
