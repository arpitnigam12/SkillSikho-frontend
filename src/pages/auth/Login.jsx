import React, { useState } from 'react';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { UserData } from '../../context/UserContext';
import { CourseData } from '../../context/CourseContext';

const Login = () => {
    const navigate = useNavigate();
    const { btnLoading, loginUser } = UserData();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { fetchMyCourse } = CourseData();

    const submitHandler = async (e) => {
        e.preventDefault();
        await loginUser(email, password, navigate, fetchMyCourse);
    };

    return (
        <div className="auth-page">
            <div className="auth-form">
                <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Use setEmail
                        required
                    />

                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Use setPassword
                        required
                    />

                    <button disabled={btnLoading} type='submit' className="common-btn">
                       Login
                    </button>
                </form>
                <p>
                    Don't have an account? <Link to='/register'>Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
