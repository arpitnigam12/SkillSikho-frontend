import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([]); // user state
    const [isAuth, setIsAuth] = useState(false); // authentication state
    const [btnLoading, setBtnLoading] = useState(false);
    const [loading, setLoading] = useState(true);

    // Login function
    async function loginUser(email, password, navigate, fetchMyCourse) {
        setBtnLoading(true); // setting loading state to true

        try {
            const { data } = await axios.post(`${server}/api/user/login`, { email, password });

            toast.success(data.message);
            localStorage.setItem("token", data.token); // store the token in localStorage
            setUser(data.user); // set the user data
            setIsAuth(true); // set authentication state
            navigate("/");
            fetchMyCourse ();// navigate to the main page

        } catch (error) {
            setBtnLoading(false);
            setIsAuth(false); // set authentication state to false
            toast.error(error.response.data.message);
        }
    }

    async function registerUser(name, email, password, navigate) {
        setBtnLoading(true); // setting loading state to true

        try {
            const { data } = await axios.post(`${server}/api/user/register`, { name, email, password });

            toast.success(data.message);
            localStorage.setItem("activationToken", data.activationToken); // store the token in localStorage
             setBtnLoading(false);  
            navigate("/verify"); // navigate to the main page

        } catch (error) {
            setBtnLoading(false);
            // set authentication state to false
            toast.error(error.response.data.message);
        }
    }

    async function verifyOtp(otp,navigate){
        setBtnLoading(true); 
        const activationToken=localStorage.getItem("activationToken");
        try {
            const { data } = await axios.post(`${server}/api/user/verify`, { otp, activationToken});

            toast.success(data.message);
            navigate("/login");
            localStorage.clear(); // navigate to the main page
            
        } catch (error) {
            setBtnLoading(false);
            // set authentication state to false
            toast.error(error.response.data.message);
        }
    }
    // Fetch user function
    async function fetchUser() {
        try {
            const { data } = await axios.get(`${server}/api/user/me`, {
                headers: {
                    token: localStorage.getItem("token"), // get token from localStorage
                },
            });

            setIsAuth(true); // set authentication state to true
            setUser(data.user); // set the user data
            setLoading(false); // set loading to false
        } catch (error) {
            console.log(error);
            setLoading(false); // set loading to false
        }
    }

    // Fetch user on component mount
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isAuth, setIsAuth, loginUser, btnLoading, loading ,registerUser,verifyOtp,fetchUser }}>
            {children}
            <Toaster />
        </UserContext.Provider>
    );
}

// Custom hook to access the user context
export const UserData = () => useContext(UserContext);
