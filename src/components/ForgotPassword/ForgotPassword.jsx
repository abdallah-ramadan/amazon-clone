import React from 'react'
import { useState } from 'react';
import style from './ForgotPassword.module.css'
import{useFormik} from "formik";
import axios from"axios";
import {Link, useNavigate} from "react-router-dom";
import * as yup from "yup";



export default function ForgotPassword() {
  let navigate = useNavigate();
  const[ApliError,setApliError]=useState("")
  const[isLouding,setisLouding]=useState(false)




  function handleForgotPassword(values){

    // // call api

    setisLouding(true)
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
    .then((res)=>{
      setisLouding(true)
      if(res.data.message=="success"){
         localStorage.setItem("userToken",res.data.token)
         navigate("/")
        
        }
      
    })
    .catch((res)=>{
      setisLouding(false)
      setApliError(res.response.data.message)
    });

    navigate("/Code");
  }
    
  
  // yup validation
  let validationSchema=yup.object().shape({
    
    phone:yup.string()
    .required("phone is required")
    .matches(/^01[1250][0-9]{8}$/,"phone not valid"),
  });
  
  // formik for form
  let formik = useFormik({
    initialValues:{
      
      phone:"",
    },
    validationSchema:validationSchema,
    // validate:myValidation,
    onSubmit:handleForgotPassword,
  });

  return <>
  <body className='min-h-screen w-full bg-amber-50'>
  {ApliError?<div className='w-1/2 mx-auto bg-red-600 text-white font-bold rounded-lg p-3'>{ApliError}</div>:null}
  <h2 className='font-bold text-2xl text-center my-4 text-darkblue'>Forgot Password</h2>
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
  



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
    {isLouding? <i className='fas fa-spinner fa-spin'></i>:"Send Code"}
    </button>
    <Link to={"/login"}><span className='text-lightblue hover:underline'>Do you have an account? Login Now</span></Link>
    
  </div>
  
  </form>



  </body>
  </>
}
