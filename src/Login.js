import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { api } from './global';
export default function Login() {

    const navigate=useNavigate();

    const movievalidation=yup.object({
        email:yup.string().required().email(),
        password:yup.string().required().min(10),
    })
  const formik=useFormik({
    initialValues:{
        email:"",
        password:"",
    },
    validationSchema:movievalidation,
    onSubmit:(values)=>{
       // console.log(values);
       login(values);
    }
  });

    const login=async(values)=>{
      let data=await fetch(`${api}/login`,{
        method:'POST',
        body:JSON.stringify(values),
        headers:{"Content-Type":"application/json"},
      })
      if(data.status===400){
        const result=await data.json();
        alert(result.message);
      }
      else{
        const result=await data.json();
        localStorage.setItem("backend-token",result.token)
        alert("Successfully Logged-In");
        navigate("/portal/home");
      }
    }

  return (
    <div>
        <form className='addform' onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} name='email'
         onBlur={formik.handleBlur} error={formik.touched.email &&formik.errors.email}
         helperText={formik.touched.email && formik.errors.email? formik.errors.email:null}/>
         <TextField id="outlined-basic" label="Password" variant="outlined" value={formik.values.trailer} onChange={formik.handleChange} name='password'
         onBlur={formik.handleBlur} error={formik.touched.password &&formik.errors.password}
         helperText={formik.touched.password && formik.errors.password? formik.errors.password:null}/>


         <Button variant="contained" type='submit'>Submit</Button>
         <h4>Dont'have an account ? click here <Link to='/register'>Register</Link></h4>
         </form>
    </div>
    
  )
}
