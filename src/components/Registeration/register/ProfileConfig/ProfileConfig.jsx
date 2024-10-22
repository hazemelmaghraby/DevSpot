import React, { useState } from 'react';
import './ProfileConfig.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileConfig = () => {
    const [selectedMajors, setSelectedMajors] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [profilePicture, setProfilePicture] = useState(null);

    const defaultAvatar = 'https://via.placeholder.com/150/000000/FFFFFF/?text=Anonymous'; // Default placeholder image URL

    const majorsOptions = [
        'Frontend Developer',
        'Backend Developer',
        'UI/UX Designer',
        'AI',
        'Machine Learning',
        'Mobile Developer',
        'Desktop Developer'
    ];

    const technologies = {
        frontend: ['React', 'Vue.js', 'Angular', 'Svelte'],
        backend: ['Node.js', 'Laravel', 'Django', 'Ruby on Rails'],
        uiux: ['Figma', 'Sketch', 'Adobe XD'],
        ai: ['TensorFlow', 'PyTorch', 'Keras'],
        machineLearning: ['Scikit-learn', 'TensorFlow', 'ML.NET'],
        mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
        desktop: ['Electron', 'Qt', 'JavaFX']
    };

    const handleMajorChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedMajors([...selectedMajors, value]);
        } else {
            setSelectedMajors(selectedMajors.filter(major => major !== value));
        }
        setSelectedTechnologies([]); // Reset technologies when majors are changed
    };

    const handleTechChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedTechnologies([...selectedTechnologies, value]);
        } else {
            setSelectedTechnologies(selectedTechnologies.filter(tech => tech !== value));
        }
    };

    const handleProfilePictureChange = (e) => {
        setProfilePicture(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile Picture:', profilePicture);
        console.log('Selected Majors:', selectedMajors);
        console.log('Selected Technologies:', selectedTechnologies);
    };

    const getTechOptions = () => {
        let options = [];
        if (selectedMajors.includes('Frontend Developer')) {
            options = [...options, ...technologies.frontend];
        }
        if (selectedMajors.includes('Backend Developer')) {
            options = [...options, ...technologies.backend];
        }
        if (selectedMajors.includes('UI/UX Designer')) {
            options = [...options, ...technologies.uiux];
        }
        if (selectedMajors.includes('AI')) {
            options = [...options, ...technologies.ai];
        }
        if (selectedMajors.includes('Machine Learning')) {
            options = [...options, ...technologies.machineLearning];
        }
        if (selectedMajors.includes('Mobile Developer')) {
            options = [...options, ...technologies.mobile];
        }
        if (selectedMajors.includes('Desktop Developer')) {
            options = [...options, ...technologies.desktop];
        }
        return [...new Set(options)]; // Remove duplicate techs
    };

    return (
        <section className='w-full profileConfig'>
            <div className="container mt-5 text-white">
                <div className="card shadow-lg animate__animated animate__fadeIn bg-dark">
                    <div className="card-header text-center bg-primary text-white">
                        <h2 className="animate__animated animate__bounce">Configure Your Profile</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {/* Profile Picture Upload */}
                            <div className="form-group mb-4 text-center">
                                <div className="profile-picture-wrapper position-relative">
                                    <img
                                        src={profilePicture ? profilePicture : defaultAvatar}
                                        alt="Profile Preview"
                                        className="profile-picture img-fluid"
                                    />
                                    {/* Overlay that appears on hover */}
                                    <div className="overlay">
                                        <span>Choose your profile picture</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="file-input"
                                            onChange={handleProfilePictureChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Majors Selection */}
                            <h1 className='ProfileUsernameConfigPage'>John Deo Ybasha</h1>
                            <div className="form-group mb-4 animate__animated animate__fadeInUp">
                                <label className="form-label text-white">Choose Your Majors:</label>
                                <div className="row">
                                    {majorsOptions.map((major, index) => (
                                        <div key={index} className="col-6 col-md-4">
                                            <div className="form-check custom-hover">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id={major}
                                                    value={major}
                                                    onChange={handleMajorChange}
                                                />
                                                <label className="form-check-label" htmlFor={major}>
                                                    {major}
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies Overview */}
                            {selectedMajors.length > 0 && getTechOptions().length > 0 && (
                                <div className="form-group mb-4 animate__animated animate__fadeInUp">
                                    <label className="form-label">Technologies Overview:</label>
                                    <div className="row">
                                        {getTechOptions().map((tech, index) => (
                                            <div key={index} className="col-6 col-md-4">
                                                <div className="form-check custom-hover">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id={tech}
                                                        value={tech}
                                                        onChange={handleTechChange}
                                                    />
                                                    <label className="form-check-label" htmlFor={tech}>
                                                        {tech}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning btn-lg animate__animated animate__pulse">Save Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileConfig;
