import {FiChevronRight, FiPlus, FiUsers, FiClock, FiTrash2, FiEdit} from "react-icons/fi"
import "./Cars.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../cons/endpoint";
import { convertToRupiah } from "../utils/convertRupiah";
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [allCategory, setAllCategory] = useState(false)
    const [smallCategory, setSmallCategory] = useState(false)
    const [mediumCategory, setMediumCategory] = useState(false)
    const [largeCategory, setLargeCategory] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                access_token: token
            },
        }
        axios
            .get(API.ALL_CARS, config)
            .then((ress) => {
                // console.log(ress.data.cars)
                setCars(ress.data.cars)
                setAllCategory(true)
                setSmallCategory(false)
                setMediumCategory(false)
                setLargeCategory(false)
            })
            .catch((err) => console.log(err.message))
    },[])

    const handleAllCategory = () => {
        const token = localStorage.getItem("token")
        const config ={
            headers : {
                access_token : token
            },
        }

        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=&page=1&pageSize=10", config)
            .then((ress) => {
                setCars(ress.data.cars)
                setAllCategory(true)
                setSmallCategory(false)
                setMediumCategory(false)
                setLargeCategory(false)
            })
            .catch((err) => console.log(err.message))
    }

    const handleSmallCategory = () => {
        const token = localStorage.getItem("token")
        const config ={
            headers : {
                access_token : token
            },
        }

        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=small&page=1&pageSize=10", config)
            .then((ress) => {
                setCars(ress.data.cars)
                setAllCategory(false)
                setSmallCategory(true)
                setMediumCategory(false)
                setLargeCategory(false)
            })
            .catch((err) => console.log(err.message))
    }

    const handleMediumCategory = () => {
        const token = localStorage.getItem("token")
        const config ={
            headers : {
                access_token : token
            },
        }

        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=Medium&page=1&pageSize=10", config)
            .then((ress) => {
                setCars(ress.data.cars)
                setAllCategory(false)
                setSmallCategory(false)
                setMediumCategory(true)
                setLargeCategory(false)
            })
            .catch((err) => console.log(err.message))
    }

    const handleLargeCategory = () => {
        const token = localStorage.getItem("token")
        const config ={
            headers : {
                access_token : token
            },
        }

        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=large&page=1&pageSize=10", config)
            .then((ress) => {
                setCars(ress.data.cars)
                setAllCategory(false)
                setSmallCategory(false)
                setMediumCategory(false)
                setLargeCategory(true)
            })
            .catch((err) => console.log(err.message))
    }

        // const today = cars.updatedAt
        // const dateFormat = new Intl.DateTimeFormat('id-ID', {year: 'numeric', month: 'long',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)
        // console.log(dateFormat);

    const handleDeleteBtn = (id) => {
        const token = localStorage.getItem("token")
        const config = {
            headers : {
                access_token: token
            },
        }

        axios
            .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,config)
            .then((ress) => {
                // console.log(ress)
                navigate("/cars")

            })
            .catch((err) => console.log(err.message))
    }

    return (  
        <div className="cars-section">
            <div className="cars-breadcrumb">
                <div>
                    <p className="cars-breadcrumb-p">Cars</p>
                </div>
                <div className="cars-breadcrumb-icon-bg">
                    <FiChevronRight />
                </div>
                <div>
                    <p className="cars-breadcrumb-p-active">List Car</p>
                </div>
            </div>
            <div className="cars-title-btn">
                <div>
                    <h4 className="cars-title-btn-h4">List Car</h4>
                </div>
                <div>
                    <Link to="/add-car">
                        <button className="cars-title-btn-button"><FiPlus size={18}/> Add New Car</button>
                    </Link>
                </div>
            </div>
            <div className="cars-category-btn">
                <div>
                    <button onClick={handleAllCategory} className={allCategory ? "cars-category-btn-button-active":"cars-category-btn-button"}>All</button>
                </div>
                <div>
                    <button onClick={handleSmallCategory} className={smallCategory ? "cars-category-btn-button-active":"cars-category-btn-button"}>2 - 4 people</button>
                </div>
                <div>
                    <button onClick={handleMediumCategory} className={mediumCategory ? "cars-category-btn-button-active":"cars-category-btn-button"}>4 - 6 people</button>
                </div>
                <div>
                    <button onClick={handleLargeCategory} className={largeCategory ? "cars-category-btn-button-active":"cars-category-btn-button"}>6 - 8 people</button>
                </div>
            </div>
            <div className="cars-card-bg">
                {
                    cars.length ? cars.map((items, i) => {
                        return(
                            <div key={i} className="cars-card">
                                <div className="cars-card-image">
                                    <img src={items.image} alt={items.name} />
                                </div>
                                <div className="cars-card-name">
                                    <p>{items.name}</p>
                                </div>
                                <div className="cars-card-price">
                                    <p>Rp {convertToRupiah(items.price)} /hari</p>
                                </div>
                                {(() => {
                                    if(items.category === "small"){
                                        return(
                                            <div className="cars-card-category">
                                                <div className="cars-card-category-icon">
                                                    <FiUsers size={20}/>
                                                </div>
                                                <div className="cars-card-category-desc">
                                                    <p>2 - 4 orang</p>
                                                </div>
                                            </div>
                                        )
                                    } else if (items.category === "Medium"){
                                        return(
                                            <div className="cars-card-category">
                                                <div className="cars-card-category-icon">
                                                    <FiUsers size={20}/>
                                                </div>
                                                <div className="cars-card-category-desc">
                                                    <p>4 - 6 orang</p>
                                                </div>
                                            </div>
                                        )
                                    } else if (items.category === "large"){
                                        return(
                                            <div className="cars-card-category">
                                                <div className="cars-card-category-icon">
                                                    <FiUsers size={20}/>
                                                </div>
                                                <div className="cars-card-category-desc">
                                                    <p>6 - 8 orang</p>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="cars-card-category">
                                                <div className="cars-card-category-icon">
                                                    <FiUsers size={20}/>
                                                </div>
                                                <div className="cars-card-category-desc">
                                                    <p>-</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })()}
                                <div className="cars-card-updated">
                                    <div>
                                        <FiClock size={20}/>
                                    </div>
                                    <div className="cars-card-updated-desc">
                                        <p>Update at {items.updatedAt}</p>
                                    </div>
                                </div>
                                <div className="cars-card-btn">
                                    <div>
                                        <button className="cars-card-btn-delete" onClick={() => handleDeleteBtn(items.id)}><FiTrash2 size={18}/>  Delete</button>
                                    </div>
                                    <div>
                                        <button className="cars-card-btn-edit"><FiEdit size={18}/> Edit</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : (<div className="cars-spiner"><Spinner animation="grow" variant="primary" /></div>)
                }
            </div>
        </div>
    );
}
 
export default Cars;