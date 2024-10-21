import React from 'react';
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { UserData } from '../../context/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Account = ({ user }) => {
    const { setIsAuth, setUser } = UserData(); // Fix typo 'SetUser' to 'setUser'
    
    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.clear();
        setUser([]); // Make sure this matches the state setter function
        setIsAuth(false);
        toast.success("Logged out successfully");
    };

    return (
        <div>
            {user && (
                <div className="profile">
                    <h2>My Profile</h2>
                    <div className="profile-info">
                        <p>
                            <strong>Name: {user.name}</strong>
                        </p>
                        <p>
                            <strong>Email: {user.email}</strong>
                        </p>

                        <button onClick={() => navigate(`/${user._id}/dashboard`)} className="dash-btn">
                            <MdDashboard />
                            Dashboard
                        </button>
                        <br />
                         
                        {user.role === "admin" && (
                                <button
                                        onClick={() => navigate(`/admin/dashboard`)}
                                       className="course-btn"
                                          >
                                             <MdDashboard />
                                        Admin Dashboard
                                       </button>
                                        )}

                                       <br />

                        <button onClick={logoutHandler} className="logout-btn" style={{ background: "red" }}> {/* Changed 'onclick' to 'onClick' */}
                            <MdDashboard />
                            Logout
                        </button>

                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default Account;
