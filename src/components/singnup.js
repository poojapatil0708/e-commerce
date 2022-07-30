import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Input from "./input";

const SignUp = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    const firstNameValidation = (value) => {
        if (value === "") {
            setErrors({ ...errors, firstName: 'First Name is required' })
        } else if (!isNaN(value)) {
            setErrors({ ...errors, firstName: 'Please enter characters only' })
        } else {
            setErrors({...errors, firstName: ''})
        }

    }

    const lastNameValidation = (value) => {

        if (value === "") {
            setErrors({ ...errors, lastName: 'Last Name is required' })
        } else if (!isNaN(value)) {
            setErrors({ ...errors, lastName: 'Please enter characters only' })
        } else {
            setErrors({...errors, lastName: ''})
        }
    }

    const emailValidation = (val) => {
        const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regex.test(val) && val !== "") {
            setErrors({ ...errors, email: '' })
        } else {
            setErrors({ ...errors, email: 'Invalid Email' })
        }
    }

    const passwordValidation = (value) => {
        if(value === ""){
            setErrors({...errors, password: 'Password is required'})
        }else {
            setErrors({...errors, password: ''})

        }
    }

    const confirmPasswordValidation = (value) => {
        if(value === "" ){
            setErrors({...errors, confirmPassword: 'Confirm password is required'})
        }else if(value !== data.password) {
            setErrors({...errors, confirmPassword: 'Confirm password is do not match with password'})
        } else{
            setErrors({...errors, confirmPassword: ''})
        }
    }

    const onSumbit = () => {
        localStorage.setItem("userData", JSON.stringify(data))
        let Data = localStorage.getItem("userData")
        console.log(JSON.parse(Data))
    }


    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column w-50">
                <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                <Input type='text' label={'First Name :'} placeholder='Enter first name' onChange={(e) => { setData({ ...data, firstName: e.target.value }); firstNameValidation(e.target.value) }} value={data.firstName} />
                <p className="text-danger">{errors.firstName}</p>
                <Input type='text' label={'Last Name :'} placeholder='Enter last name' onChange={(e) => { setData({ ...data, lastName: e.target.value }); lastNameValidation(e.target.value) }} value={data.lastName} />
                <p className="text-danger">{errors.lastName}</p>
                <Input type='text' label={'Email Id :'} placeholder='Enter email id' onChange={(e) => { setData({ ...data, email: e.target.value }); emailValidation(e.target.value) }} value={data.email} />
                <p className="text-danger">{errors.email}</p>
                <Input type='password' label={'Password :'} placeholder='Enter password' onChange={(e) => {setData({...data, password: e.target.value}); passwordValidation(e.target.value)}} value={data.password}/>
                <p className="text-danger">{errors.password}</p>
                <Input type='password' label={'Confirm Password :'} placeholder='Enter confirm password' onChange={(e)=>{setData({...data, confirmPassword: e.target.value}); confirmPasswordValidation(e.target.value)}} value={data.confirmPassword}/>
                <p className="text-danger">{errors.confirmPassword}</p>
                <Button name='Sign Up' disabled={errors.email || errors.firstName || errors.lastName || errors.password || errors.confirmPassword} onClick={onSumbit} />
                <Link to={'/login'} style={{ textAlign: 'center' }}>Already have an account? Login</Link>

            </div>
        </div>
    );
}

export default SignUp;