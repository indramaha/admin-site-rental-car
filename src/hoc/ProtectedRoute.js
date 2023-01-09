import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("token")
        if (!token) {
            setIsLogin(false)
            setLoading(false)
        } else {
            setIsLogin(true)
            setLoading(false)
        }
    },[isLogin])

    if (loading) {
        return(
            <div>
                <h1>Loading...</h1>
                <Spinner animation="grow" variant="secondary" />
            </div>
        )
    }
    return isLogin ? <Outlet /> : <Navigate to={"/admin-login"} />
}
 
export default ProtectedRoute;