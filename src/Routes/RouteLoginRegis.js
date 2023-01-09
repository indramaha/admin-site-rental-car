import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const RouteLoginRegister = () => {
    return (  
        <Routes>
            <Route path="/admin-login" element={<Login />} />
            <Route path="/admin-register" element={<Register />} />
        </Routes>
    );
}
 
export default RouteLoginRegister;