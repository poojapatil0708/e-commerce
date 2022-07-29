import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/singnup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
