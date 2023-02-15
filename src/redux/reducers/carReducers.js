const carState = {
    cars: [],
    allFilter: false,
    smallFilter: false,
    mediumFillter: false,
    largeFilter: false,
    deleteMessage: ""
}

export const carReducers = (state = carState, action) => {
    switch (action.type) {
        case "GET_CARS":
            return {
                ...carState,
                cars: action.payload.cars,
                allFilter: action.payload.allFilter,
                smallFilter: action.payload.smallFilter,
                mediumFillter: action.payload.mediumFillter,
                largeFilter: action.payload.largeFilter,
            }
        case "FILTER_CATEGORY":
            return {
                ...carState,
                cars: action.payload.cars,
                allFilter: action.payload.allFilter,
                smallFilter: action.payload.smallFilter,
                mediumFillter: action.payload.mediumFillter,
                largeFilter: action.payload.largeFilter,
            }
        case "DELETE_CAR":
            return {
                ...carState,
                deleteMessage: action.payload.message,
            }
        default:
            return state
    }
}