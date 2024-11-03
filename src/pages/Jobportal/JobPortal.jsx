import React from 'react';
import { useNavigate } from 'react-router-dom';
import './jobportal.css'; // Importing CSS for JobPortal

const Jobportal = () => {
    const navigate = useNavigate();

    const handleFindJobClick = () => {
        window.open("https://career-nexus-platform.vercel.app/", "_blank"); // Open job portal in new tab
    };

    return (
        <div className="jobportal">
            <div className="jobportal-background">
                {/* Background styles can be added here */}
            </div>
            <div className="jobportal-content">
            <h1>FIND YOUR DREAM JOB</h1>
                <img 
                    src="https://www.signitysolutions.com/hs-fs/hubfs/Group%2038103.png?width=2151&height=1278&name=Group%2038103.png" 
                    alt="Career Opportunities" 
                    className="jobportal-image" 
                />
                           <h3>Start Your Career Today!</h3>

                <button onClick={handleFindJobClick} className="jobportal-btn">Find Your Job</button>
            </div>
        </div>
    );
};

export default Jobportal;
