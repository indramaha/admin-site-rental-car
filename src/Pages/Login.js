import { useState } from "react";
import "./Login.css"
import axios from "axios";
import { API } from "../cons/endpoint";
import { useNavigate } from "react-router-dom";
import LogRegLogo from "../Assets/login-rgister.png"
import {FiEye, FiEyeOff} from "react-icons/fi"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [isPassword, setIsPassword] = useState(false)

    const handlePasswordShow = () => {
        setIsPassword(!isPassword)
    }

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
        <div className="login-section-bg">
            <div className="login-section">
                <div className="login-left">
                    <img src={LogRegLogo} alt="login"/>
                </div>
                <div className="login-right">
                    <div>
                        <div className="login-right-logo"></div>
                        <div className="login-right-title">
                            <h2>Welcome, Admin BCR</h2>
                        </div>
                        <div className="login-right-input-bg">
                            <div className="login-right-titleinput">
                                <div className="login-right-input-title">
                                    <p>Email</p>
                                </div>
                                <div className="login-right-input">
                                    <input type="email" placeholder="Contoh: johndee@gmail.com" onChange={handleEmail}/>
                                </div>
                            </div>
                            <div className="login-right-titleinput">
                                <div className="login-right-input-title">
                                    <p>Password</p>
                                </div>
                                <div className="login-right-input">
                                    <div>
                                        <input type={isPassword ? "text":"password"} placeholder="6+ karakter" onChange={handlePassword}/>
                                    </div>
                                    <div onClick={handlePasswordShow}>
                                        {
                                            isPassword ? <FiEye /> : <FiEyeOff />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login-right-btn">
                            <button onClick={handleBtn}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;