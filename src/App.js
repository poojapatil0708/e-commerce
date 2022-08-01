import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/singnup";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
