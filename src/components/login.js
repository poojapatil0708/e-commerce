import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Input from "./input";

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState('')

    const emailValidation = (val) => {
        const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regex.test(val) && val !== "") {
            setErrors({ ...errors, email: '' })
        } else {
            setErrors({ ...errors, email: "Invalid Email" })
        }
    }

    const passwordValidation = (value) => {
        if (value === "") {
            setErrors({ ...errors, password: 'Password is required' })
        } else {
            setErrors({ ...errors, password: '' })

        }
    }

    const onSumbit = () => {
        localStorage.setItem("userData", JSON.stringify(data))
        let Data = localStorage.getItem("userData")
        console.log(JSON.parse(Data))
    }

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="d-flex flex-column w-50">
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <Input label={'Email ID :'} type='text' placeholder='Email id' onChange={(e) => { setData({ ...data, email: e.target.value }); emailValidation(e.target.value) }} value={data.email} />
                <p className="text-danger">{errors.email}</p>
                <Input label={'Password :'} type='password' placeholder='Password' onChange={(e) => { setData({ ...data, password: e.target.value }); passwordValidation(e.target.value) }} value={data.password} />
                <p className="text-danger">{errors.password}</p>
                <Button disabled={errors.email || errors.password} name={'Login'} onClick={onSumbit} />
                <Link to={'/sign-up'} style={{ textAlign: 'center' }}>Dont have an account? Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;