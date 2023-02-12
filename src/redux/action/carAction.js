import axios from "axios"
import { API } from "../../cons/endpoint"

export const handleAllCAr = () => dispatch => {
    const token = localStorage.getItem("token")
        const config = {
            headers: {
                access_token: token
            },
        }
        axios
            .get(API.ALL_CARS, config)
            .then((res) => {
                // console.log(ress.data.cars)
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
            })
            .catch((err) => console.log(err.message))
}

export const handleSmallBtn = () => dispatch =>{
    const token = localStorage.getItem("token")
    const config ={
        headers : {
            access_token : token
        },
    }

    axios
        .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=small&page=1&pageSize=10", config)
        .then((res) => {
            // setCars(ress.data.cars)
            // setAllCategory(false)
            // setSmallCategory(true)
            // setMediumCategory(false)
            // setLargeCategory(false)
            dispatch({
                type:"SMALL_FILTER",
                payload: {
                    cars:res.data.cars,
                    allFilter: false,
                    smallFilter: true,
                    mediumFillter: false,
                    largeFilter: false,
                } 
            })
        })
        .catch((err) => console.log(err.message))
}