import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Input from "./input";

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="d-flex flex-column w-50">
                <h1 style={{textAlign:'center'}}>Login</h1>
                <Input label={'Email ID :'} type='text' placeholder='Email id'/>
                <Input label={'Password :'} type='password' placeholder='Password'/>
                <Button name={'Login'}/>
                <Link to={'/sign-up'} style={{textAlign:'center'}}>Dont have an account? Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;