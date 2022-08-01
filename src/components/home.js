import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const Logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={Logout}>Logout</button>
        </div>
    );
}

export default Home;