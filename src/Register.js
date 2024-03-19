import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { api } from './global';
export default function Register() {
  
    const navigate=useNavigate();

    const movievalidation=yup.object({
        username:yup.string().required(),
        email:yup.string().required().email(),
        password:yup.string().required().min(10),
    })
  const formik=useFormik({
    initialValues:{
        username:"",
        email:"",
        password:"",
    },
    validationSchema:movievalidation,
    onSubmit:(values)=>{
      //console.log(values);
        register(values);
    }
  });

   const register=(values)=>{
    fetch(`${api}/register`,{
      method:'POST',
      body:JSON.stringify(values),
      headers:{"Content-Type":"application/json"},
    })
    .then(()=> alert("successfully registered"))
    .then(()=>navigate("/login"));
   }
  return (
    <div>
         <form className='addform' onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
         <TextField id="outlined-basic" label="Username" variant="outlined" value={formik.values.username} onChange={formik.handleChange} name='username'
         onBlur={formik.handleBlur} error={formik.touched.username &&formik.errors.username}
         helperText={formik.touched.username && formik.errors.username? formik.errors.username:null}/>

         <TextField id="outlined-basic" label="Email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} name='email'
         onBlur={formik.handleBlur} error={formik.touched.email &&formik.errors.email}
         helperText={formik.touched.email && formik.errors.email? formik.errors.email:null}/>
         <TextField id="outlined-basic" label="Password" variant="outlined" value={formik.values.trailer} onChange={formik.handleChange} name='password'
         onBlur={formik.handleBlur} error={formik.touched.password &&formik.errors.password}
         helperText={formik.touched.password && formik.errors.password? formik.errors.password:null}/>


         <Button variant="contained" type='submit'>Submit</Button>
         <h4>Already have an account ? click here <Link to='/login'>Login</Link></h4>
    </form>
    </div>
    
  )
}
