import React from 'react';
import './about.css';

// Import any required images
import successImage from '../../images/success.png'; // Add a suitable success image path
import instructorImage from '../../images/instructors.jpg'; // Add a suitable instructor image path
import partnershipImage from '../../images/partnerships.png'; // Add a suitable partnership image path
import learnerImage from '../../images/satisfied.jpg'; // Add a suitable learner image path

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to SkillSikho, where we empower learners to achieve their
          career aspirations through high-quality online education. Our
          platform is designed to provide comprehensive resources and support
          to students and professionals alike.
        </p>
        <h3>Our Impact</h3>
        <p>
          Since our inception, SkillSikho has transformed the lives of many
          learners. Here are some of our key achievements:
        </p>
        <div className="stats">
          <div className="stat-item">
            <img src={successImage} alt="Students Successfully Placed" />
            <h4>2000+</h4>
            <p>Students Successfully Placed</p>
          </div>
          <div className="stat-item">
            <img src={instructorImage} alt="Expert Instructors" />
            <h4>500+</h4>
            <p>Expert Instructors</p>
          </div>
          <div className="stat-item">
            <img src={partnershipImage} alt="Industry Partnerships" />
            <h4>300+</h4>
            <p>Industry Partnerships</p>
          </div>
          <div className="stat-item">
            <img src={learnerImage} alt="Satisfied Learners" />
            <h4>10000+</h4>
            <p>Satisfied Learners</p>
          </div>
        </div>
        <h3>Why Choose SkillSikho?</h3>
        <p>
          Our mission is to provide accessible, engaging, and high-quality
          education that prepares learners for the future. With a diverse
          array of programs and a commitment to excellence, we ensure that our
          students gain the knowledge and skills needed to thrive in a
          competitive job market.
        </p>
        <h3>Join Us Today!</h3>
        <p>
          Become part of a growing community of learners and take the next step
          in your career. Sign up today and start your journey with SkillSikho!
        </p>
      </div>
    </div>
  );
}

export default About;
