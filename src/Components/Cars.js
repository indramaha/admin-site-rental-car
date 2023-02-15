import {FiChevronRight, FiPlus, FiUsers, FiClock, FiTrash2, FiEdit} from "react-icons/fi"
import "./Cars.css"
import { useEffect } from "react";
import { convertToRupiah } from "../utils/convertRupiah";
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAllCAr, handleDelete, handleLargeBtn, handleMediumBtn, handleSmallBtn } from "../redux/action/carAction";

const Cars = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(rootReducers => rootReducers)
    console.log(state)

    useEffect(() => {
        onHandleCars()
    },[])

    useEffect(() => {
        onHandleCars()
    },[state.getCars.deleteMessage])

    const onHandleCars = () => {
        dispatch(handleAllCAr())
    }

    const handleAllCategory = () => {
        dispatch(handleAllCAr())
    }

    const handleSmallCategory = () => {
        dispatch(handleSmallBtn())
    }

    const handleMediumCategory = () => {
        dispatch(handleMediumBtn())
    }

    const handleLargeCategory = () => {
        dispatch(handleLargeBtn())
    }

    const handleDeleteBtn = (id) => {
        dispatch(handleDelete(id))
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
                    <button onClick={handleAllCategory} className={state.getCars.allFilter ? "cars-category-btn-button-active":"cars-category-btn-button"}>All</button>
                </div>
                <div>
                    <button onClick={handleSmallCategory} className={state.getCars.smallFilter ? "cars-category-btn-button-active":"cars-category-btn-button"}>2 - 4 people</button>
                </div>
                <div>
                    <button onClick={handleMediumCategory} className={state.getCars.mediumFillter ? "cars-category-btn-button-active":"cars-category-btn-button"}>4 - 6 people</button>
                </div>
                <div>
                    <button onClick={handleLargeCategory} className={state.getCars.largeFilter ? "cars-category-btn-button-active":"cars-category-btn-button"}>6 - 8 people</button>
                </div>
            </div>
            <div className="cars-card-bg">
                {
                    state.getCars.cars.length ? state.getCars.cars.map((items, i) => {
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
                                        <p>Updated at {items.updatedAt}</p>
                                    </div>
                                </div>
                                <div className="cars-card-btn">
                                    <div>
                                        <button className="cars-card-btn-delete" onClick={() => handleDeleteBtn(items.id)}><FiTrash2 size={18}/>  Delete</button>
                                    </div>
                                    <div>
                                        <Link to={`/edit-car/${items.id}`}>
                                            <button className="cars-card-btn-edit"><FiEdit size={18}/> Edit</button>
                                        </Link>
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