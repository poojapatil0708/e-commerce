import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Input from "./input";

const SignUp = () => {
    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column w-50">
                <h1 style={{textAlign:"center"}}>Sign Up</h1>
                <Input type='text' label={'First Name :'} placeholder='Enter first name'/>
                <Input type='text' label={'Last Name :'} placeholder='Enter last name'/>
                <Input type='text' label={'Email Id :'} placeholder='Enter email id'/>
                <Input type='text' label={'Password :'} placeholder='Enter password'/>
                <Input type='text' label={'Confirm Password :'} placeholder='Enter confirm password'/>
                <Button name='Sign Up' />
                <Link to={'/login'} style={{textAlign:'center'}}>Already have an account? Login</Link>

            </div>
        </div>
    );
}

export default SignUp;