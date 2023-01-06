import Routestep from "../Routes/Routestep";
import "./SideBar.css"
import {FiHome, FiTruck, FiMenu, FiSearch} from "react-icons/fi"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
    const [isDboardActive, setIsDboardActive] = useState(true)
    const [isCars, setIsCars] = useState(false)

    const handleDashboard = () => {
        setIsDboardActive(true)
        setIsCars(false)
    }

    const handleCars = () => {
        setIsDboardActive(false)
        setIsCars(true)
    }

    function NavSideBarChild(){
        if (isDboardActive === true) {
            return(
                <div className="navsidebar-left-child">
                    <div className="navsidebar-left-child-title">
                        <p>DASHBOARD</p>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="navsidebar-left-child">
                    <div className="navsidebar-left-child-title">
                        <p>CARS</p>
                    </div>
                </div>
            )
        }
    }

    console.log(isDboardActive, isCars)
    return (  
        <div className="navsidebar-section-bg">
            <div className="navsidebar-section">
                <div className="navsidebar-left">
                    <div>
                        <div className="navsidebar-square"></div>
                    </div>
                    <NavLink to="/dashboard" onClick={handleDashboard} className={isDboardActive ? "navsidebar-dashboard navsidebar-dashboard-active" : "navsidebar-dashboard"}>
                        <div>
                            <FiHome size={24} className="navsidebar-dashboard-icon"/>
                        </div>
                        <div>
                            <p className={isDboardActive ? "navsidebar-dashboard-p-active" : "navsidebar-dashboard-p"}>Dashboard</p>
                        </div>
                    </NavLink>
                    <NavLink to="/cars" onClick={handleCars} className={isCars ? "navsidebar-cars navsidebar-cars-active" : "navsidebar-cars"}>
                        <div>
                            <FiTruck size={24} className="navsidebar-cars-icon"/>
                        </div>
                        <div>
                            <p className={isCars ? "navsidebar-cars-p-active":"navsidebar-cars-p"}>cars</p>
                        </div>
                    </NavLink>
                </div>
                <div className="navsidebar-right">
                    <div className="topnav">
                        <div className="topnav-left">
                            <div className="topnav-rectangel"></div>
                            <div className="topnav-menu">
                                <FiMenu size={24}/>
                            </div>
                        </div>
                        <div className="topnav-right">
                            <div className="topnav-right-search">
                                <div className="topnav-right-search-content">
                                    <FiSearch size={18}/>
                                    <input placeholder="Search"/>
                                </div>
                                <div className="topnav-right-search-btn">
                                    <button>Search</button>
                                </div>
                            </div>
                            <div className="topnav-right-account">
                                <div className="topnav-right-account-pic">
                                    <p>U</p>
                                </div>
                                <div className="topnav-right-account-ndrop">
                                    <Nav>
                                        <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Unis Badri"
                                        menuVariant="dark"
                                        >
                                            <NavDropdown.Item >Log Out</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navsidebar-content">
                        <NavSideBarChild />
                        <div className="navsidebar-content-child">
                            <Routestep />
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default SideBar;