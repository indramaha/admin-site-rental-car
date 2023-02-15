import axios from "axios"
import { API } from "../../cons/endpoint"

export const handleAllCAr = () => async(dispatch) => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            access_token: token
        },
    }

    try {
        const res = await axios.get(API.ALL_CARS, config)
        dispatch({
            type:"GET_CARS",
            payload: {
                cars:res.data.cars,
                allFilter: true,
                smallFilter: false,
                mediumFillter: false,
                largeFilter: false,
            } 
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const handleSmallBtn = () => async(dispatch) =>{
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token : token
        },
    }

    try {
        const res = await axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=small&page=1&pageSize=10", config)
        dispatch({
            type:"FILTER_CATEGORY",
            payload: {
                cars:res.data.cars,
                allFilter: false,
                smallFilter: true,
                mediumFillter: false,
                largeFilter: false,
            } 
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const handleMediumBtn = () => async(dispatch) => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token : token
        },
    }

    try {
        const res = await axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=Medium&page=1&pageSize=10", config)
        dispatch({
            type:"FILTER_CATEGORY",
            payload: {
                cars: res.data.cars,
                allFilter: false,
                smallFilter: false,
                mediumFillter: true,
                largeFilter: false,
            } 
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const handleLargeBtn = () => async(dispatch) => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token : token
        },
    }

    try {
        const res = await axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=large&page=1&pageSize=10", config)
        dispatch({
            type:"FILTER_CATEGORY",
            payload: {
                cars: res.data.cars,
                allFilter: false,
                smallFilter: false,
                mediumFillter: false,
                largeFilter: true,
            } 
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const handleDelete = (id) => async(dispatch) => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token: token
        },
    }

    try {
        const res = await axios.delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,config)
        dispatch({
            type: "DELETE_CAR",
            payload: {
                message: res.data.message,
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}