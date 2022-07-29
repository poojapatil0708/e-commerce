import React from "react";

const Input = ({ type, placeholder, label }) => {
    return (
        <div className="my-3 d-flex flex-row align-items-center">
            <label className="w-25">{label}</label>
            <input type={type} placeholder={placeholder} className="form-control" />
        </div>
    );
}

export default Input;