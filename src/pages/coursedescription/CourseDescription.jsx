import React, { useEffect, useState } from 'react'
import "./coursedescription.css"
import {  useNavigate, useParams } from 'react-router-dom';
import {  CourseData } from '../../context/CourseContext';
import { server } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';

import Loading from '../../components/loading/Loading';
import { UserData } from '../../context/UserContext';


const CourseDescription = ({user}) => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const {fetchUser} = UserData();

    const {fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData()

    useEffect(() => {
        
        fetchCourse(params.id);
    },[]);

    const checkoutHandler = async() => {
     const token = localStorage.getItem("token");
     setLoading(true);
     
     const {data:{order}} = await axios.post(`${server}/api/course/checkout/${params.id}`,{},{
        headers:{
            token,
        },
     }
    );

    const options = {
        "key": "rzp_test_6em6Fe0tkYqOFS", // Enter the Key ID generated from the Dashboard
    "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "SkillSikho", //your business name
    "description": "Learn With Us - Grow With Us",
    "image": "https://example.com/your_logo",
    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

    handler: async function (response) {
        const{razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

        try {
            const {data} = await axios.post(`${server}/api/verification/${params.id}`,
                {
                razorpay_order_id,
                 razorpay_payment_id, 
                 razorpay_signature,
            },
            {
                headers:{
                    token,
                }
            }
        );

        await fetchUser();
        await fetchCourses();
        await fetchMyCourse();

        toast.success(data.message);
        setLoading(false);
        navigate(`/payment-success/${razorpay_payment_id}`);
        } catch (error) {
            toast.error(error.response.data.message);
            setLoading(false);
            
        }
      },
      theme:{
            color: "#0000FF",
      },

     };
     const razorpay = new window.Razorpay(options);

     razorpay.open();

 }
  return (
    
  <>
  {
     loading ? ( <Loading /> ):(
        <>
  {course && (
    <div className='course-description'>
    <div className='course-header'>
        <img src={`${server}/${course.image}`} alt="" 
        className='course-image'
        />
        <div className="course-info">
            <h2>{course.title}</h2>
            <h4>{course.description}</h4>
            <p>Instructor- {course.createdBy}</p>
            <p>Duration- {course.duration} Weeks</p>
           

        </div>
   <div className="start"><p>Let's get started with ₹{course.price}</p></div> 

    {
        user && user.subscription.includes(course._id) ? (
        <button onClick={()=>navigate(`/course/study/${course._id}`)} className='course-btn'>Study</button>
        ) : ( <button onClick={checkoutHandler}
        className='course-btn'>Buy Now</button> 
    )}


    </div>
    </div>
    )}
  </>
     ) 
  }
  </>
  )
}

export default CourseDescription