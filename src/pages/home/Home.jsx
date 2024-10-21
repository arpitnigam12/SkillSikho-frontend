import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
    
    const navigate = useNavigate();
    return (
        <div>
        <div className="home">
            <div className="home-background">
                
            </div>
            <div className="home-content">
                <h1>Welcome to SkillSikho</h1>
                <h3>Learn, Grow, Excel</h3>
                <button onClick={() => navigate("/courses")} className="home-btn">Get Started</button>
            </div>
            </div>
        
            <Testimonials/>

        </div>
    );
}

export default Home;
