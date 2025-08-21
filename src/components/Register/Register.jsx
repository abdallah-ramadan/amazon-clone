// // فرونت مربوط بباك روت  
import React from 'react'
import { useState } from 'react';
import style from './Register.module.css'
import{useFormik} from "formik";
import axios from"axios";
import {Link, useNavigate} from "react-router-dom";
import * as yup from "yup";
import { UserContext } from '../../Context/userContext';
import { useContext } from 'react';



export default function Register() {
  let{userLogin,setuserLogin}=useContext(UserContext)
  const navigate = useNavigate();
  const[ApliError,setApliError]=useState("")
  const[isLouding,setisLouding]=useState(false)

  function handleRegister(values){

    // // call api

    setisLouding(true)
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
    .then((res)=>{
      setisLouding(true)
      if(res.data.message=="success"){
         localStorage.setItem("userToken",res.data.token)
         setuserLogin(res.data.token)
         navigate("/")
        
        }
      
    })
    .catch((res)=>{
      setisLouding(false)
      setApliError(res.response.data.message)
    });


  }

  let validationSchema=yup.object().shape({
    name:yup.string()
    .min(3,"min length is 3")
    .max(10,"max length is 10")
    .required("name is required"),
    email:yup.string()
    .email("invalid email")
    .required("email is required"),
    password:yup.string()
    .min(6,"min length is 6")
    .required("password is required"),
    rePassword:yup.string()
    .required("rePassword is required")
    .oneOf([yup.ref('password')],"password not match"),
    phone:yup.string()
    .required("phone is required")
    .matches(/^01[1250][0-9]{8}$/,"phone not valid"),
  });
  
  let formik = useFormik({
    initialValues:{
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
    },
    validationSchema:validationSchema,
    // validate:myValidation,
    onSubmit:handleRegister,
  });

  return <>
  <body className='min-h-screen w-full'>
  {ApliError?<div className='w-1/2 mx-auto bg-red-600 text-white font-bold rounded-lg p-3'>{ApliError}</div>:null}
  <h2 className='font-bold text-2xl text-center my-4 text-darkblue'>Register Now</h2>
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="name"
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="name" className="block py-2.5 px-0 w-full text-sm text-stone-700 bg-transparent border-0 border-b-2 border-darkblue appearance-none focus:outline-0 focus:ring-0 focus:border-lightblue peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium left-0 absolute text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Name
      </label>
      {formik.errors.name && formik.touched.name? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg" role="alert">
        <span className="font-medium">{formik.errors.name}</span>
      </div> :null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="email" className="block py-2.5 px-0 w-full text-sm text-stone-700 bg-transparent border-0 border-b-2 border-darkblue appearance-none focus:outline-0 focus:ring-0 focus:border-lightblue peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium left-0 absolute text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email</label>
      {formik.errors.email && formik.touched.email? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg" role="alert">
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
      {formik.errors.password && formik.touched.password? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg" role="alert">
        <span className="font-medium">{formik.errors.password}</span>
      </div> :null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="rePassword"
      value={formik.values.rePassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="rePassword" className="block py-2.5 px-0 w-full text-sm text-stone-700 bg-transparent border-0 border-b-2 border-darkblue appearance-none focus:outline-0 focus:ring-0 focus:border-lightblue peer" placeholder=" " required />
      <label htmlFor="rePassword" className="peer-focus:font-medium left-0 absolute text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your rePassword</label>
      {formik.errors.rePassword && formik.touched.rePassword? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg" role="alert">
        <span className="font-medium">{formik.errors.rePassword}</span>
      </div> :null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="tel" name="phone"
      value={formik.values.phone}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="phone" className="block py-2.5 px-0 w-full text-sm text-stone-700 bg-transparent border-0 border-b-2 border-darkblue appearance-none focus:outline-0 focus:ring-0 focus:border-lightblue peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium left-0 absolute text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone</label>
      {formik.errors.phone && formik.touched.phone? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg " role="alert">
        <span className="font-medium">{formik.errors.phone}</span>
      </div> :null}
  </div>
  <div className='flex gap-4 items-center'>
  <button type="submit" className="bg-darkblue text-stone-300 hover:ring-4 focus:outline-none  focus:ring-lightblue hover:text-darkblue hover:bg-beige font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-stone-300 focus:ring-darkblue">
    {isLouding? <i className='fas fa-spinner fa-spin'></i>:"Register"}
    </button>
    <Link to={"/login"}><span className='text-lightblue hover:underline'>Do you have an account? Login Now</span></Link>
  </div>
  
  </form>
  </body>
  


  </>
}

