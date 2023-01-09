import { useState } from "react";
import "./Login.css"
import axios from "axios";
import { API } from "../cons/endpoint";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleBtn = () => {
        const payload = {
            "email": email,
            "password": password
        }
        
        axios
            .post(API.LOGIN, payload)
            .then((ress) => {
                console.log(ress)
                localStorage.setItem("token", ress.data.access_token)
                navigate("/")
            })
            .catch((err) => console.log(err.message))
    }
    return (  
        <div className="login">
            <div>   
                <label>email</label>
                <input placeholder="email " onChange={handleEmail}/>
                <label>password</label>
                <input placeholder="password" onChange={handlePassword}/>
                <button onClick={handleBtn}>submit</button>
            </div>
        </div>
    );
}
 
export default Login;