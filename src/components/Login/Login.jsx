import React from 'react'
import { useState } from 'react';
import style from './Login.module.css'
import{useFormik} from "formik";
import axios from"axios";
import {Link, useNavigate} from "react-router-dom";
import * as yup from "yup";
import { UserContext } from '../../Context/userContext';
import { useContext } from 'react';




export default function Login() {
  let{userLogin,setuserLogin}=useContext(UserContext)
  const navigate = useNavigate();
  const[ApliError,setApliError]=useState("")
  const[isLouding,setisLouding]=useState(false)

  function handleLogin(values){

    // // call api

    setisLouding(true)
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
    .then((res)=>{
      setisLouding(true)
      if(res.data.message=="success"){
         localStorage.setItem("userToken",res.data.token)
         setuserLogin(res.data.token)
         navigate("/home")
        
        }
      
    })
    .catch((res)=>{
      setisLouding(false)
      setApliError(res.response.data.message)
    });
  }
    // console.log(data);
    // if(data.message=="success"){
    //   navigate("/");
    // }
    // else{
    //   alert("Registration Failed");
    // }
  
  // yup validation
  let validationSchema=yup.object().shape({
    
    email:yup.string()
    .email("invalid email")
    .required("email is required"),
    password:yup.string()
    .min(6,"min length is 6")
    .required("password is required"),
    
    
  });
  // manual validation
  // function myValidation(values){
  //   let errors = {};
  //   if(values.name==""){
  //     errors.name = "Name is required";
  //   } else if(!/^[a-zA-Z]{3,10}$/.test(values.name)){
  //     errors.name = "Name must be between 3 and 10 characters long and must contains capital letters";
  //   }

  //   if(values.phone==""){
  //     errors.phone = "Phone is required";
  //   }
  //   else if(!/^01[1250][0-9]{8}$/.test(values.phone)){
  //     errors.phone = "Phone must be valid";
  //   }
  //   return errors;
  // }
  
  let formik = useFormik({
    initialValues:{
      
      email:"",
      password:"",

    },
    validationSchema:validationSchema,
    // validate:myValidation,
    onSubmit:handleLogin,
  });

  return <>
  <body className='min-h-screen w-full'>
  {ApliError?<div className='w-1/2 mx-auto bg-red-600 text-white font-bold rounded-lg p-3'>{ApliError}</div>:null}
  <h2 className='font-bold text-2xl text-center my-4 text-darkblue'>Login Now</h2>
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">

  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="email" className="block py-2.5 px-0 w-full text-sm text-stone-700 bg-transparent border-0 border-b-2 border-darkblue appearance-none focus:outline-0 focus:ring-0 focus:border-lightblue peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium left-0 absolute text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email</label>
      {formik.errors.email && formik.touched.email? <div className="p-4 mb-4 text-sm text-red-900 rounded-lg" role="alert">
        <span className="font-medium">{formik.errors.email}</span>
      </div> :null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="password" className="block py-2.5 px-0 w-full text-sm text-stone-700 bg-transparent border-0 border-b-2 border-darkblue appearance-none focus:outline-0 focus:ring-0 focus:border-lightblue peer" placeholder=" " required />
      <label htmlFor="password" className="peer-focus:font-medium left-0 absolute text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Password</label>
      {formik.errors.password && formik.touched.password? <div className="p-4 mb-4 text-sm text-red-900 rounded-lg" role="alert">
        <span className="font-medium">{formik.errors.password}</span>
      </div> :null}
  </div>
  <div className='flex gap-4 items-center'>
  <button type="submit" className="bg-darkblue text-stone-300 hover:ring-4 focus:outline-none  focus:ring-lightblue hover:text-darkblue hover:bg-beige font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-stone-300 focus:ring-darkblue">
    {isLouding? <i className='fas fa-spinner fa-spin'></i>:"Login"}
    </button>
    <Link to={"/register"}><span className='text-lightblue hover:underline'>Don’t you have an account? Register Now</span></Link>
    <Link to={"/forgotpassword"}><span className='text-lightblue hover:underline'>Forgot Password</span></Link>
  </div>
  
  </form>



  </body>
  </>
}
