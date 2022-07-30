import React from "react";

const Input = ({ type, placeholder, label, onChange, value }) => {
    return (
        <div className="my-3 d-flex flex-row align-items-center">
            <label className="w-25">{label}</label>
            <input onChange={onChange} value={value} type={type} placeholder={placeholder} className="form-control" />
        </div>
    );
}

export default Input;