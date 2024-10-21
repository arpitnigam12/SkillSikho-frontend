import React, { useState } from 'react';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';

const Verify = () => {
  const [otp, setOtp] = useState(""); // State to hold the OTP input
  const { btnLoading, verifyOtp } = UserData(); // Accessing user data and verifyOtp function from context
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const submitHandler = async (e) => {
    e.preventDefault(); // Preventing the default form submission
    await verifyOtp(Number(otp), navigate); // Calling the verifyOtp function with OTP and navigate
  };

  return (
    <div className="auth-page"> {/* Main container for the authentication page */}
      <div className="auth-form"> {/* Container for the form */}
        <h2>Verify Account</h2> {/* Title of the verification form */}
        <form onSubmit={submitHandler}> {/* Form submission handler */}
          <label htmlFor='otp'>Enter your OTP</label>
          <input 
            type="number" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            required 
          />

          <button 
            disabled={btnLoading} 
            type="submit" 
            className="common-btn"
          >
            {btnLoading ? "Please wait..." : "Verify"} {/* Button text changes based on loading state */}
          </button>
        </form>
        <p>
          Go to <Link to='/login'>Login </Link> page {/* Link to the login page */}
        </p>
      </div>
    </div>
  );
};

export default Verify; // Exporting the Verify component
