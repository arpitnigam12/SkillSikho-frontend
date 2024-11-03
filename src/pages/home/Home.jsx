import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";
import Testimonials from '../../components/testimonials/Testimonials';
import { UserData } from '../../context/UserContext'; // Import UserData context
import JobPortal from '../Jobportal/JobPortal'; // Ensure correct casing

const Home = () => {
    const navigate = useNavigate();
    const { isAuth } = UserData(); // Get authentication status from context

    const handleGetStartedClick = () => {
        if (isAuth) {
            navigate("/courses"); // Navigate to courses if authenticated
        } else {
            navigate("/login"); // Redirect to login page if not authenticated
        }
    };

    return (
        <div>
            <div className="home">
                <div className="home-background">
                    {/* Background styles can be added here */}
                </div>
                <div className="home-content">
                    <h1>Welcome to SkillSikho</h1>
                    <p>By Career Nexus</p>
                    <h3>Learn, Grow, Excel</h3>
                    <button onClick={handleGetStartedClick} className="home-btn">Get Started</button>
                </div>
            </div>
            <JobPortal />
            <Testimonials />
        </div>
    );
}

export default Home;
