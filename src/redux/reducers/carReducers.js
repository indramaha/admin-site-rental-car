const carState = {
    cars: [],
    allFilter: false,
    smallFilter: false,
    mediumFillter: false,
    largeFilter: false,
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
        case "SMALL_FILTER":
            return{
                ...carState,
                cars: action.payload.cars,
                allFilter: action.payload.allFilter,
                smallFilter: action.payload.smallFilter,
                mediumFillter: action.payload.mediumFillter,
                largeFilter: action.payload.largeFilter,
            }
        default:
            return state
    }
}