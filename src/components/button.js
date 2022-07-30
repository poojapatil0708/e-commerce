import React from "react";

const Button = ({name, onClick, disabled}) => {
    return (
            <button disabled={disabled} onClick={onClick}className={`btn btn-primary my-2 ${disabled ? 'disabled': ''}`}>{name}</button>
    );
}

export default Button;