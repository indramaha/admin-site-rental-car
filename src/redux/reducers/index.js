import { combineReducers } from "redux";
import { carReducers } from "./carReducers";

const rootReducers = combineReducers({
    getCars : carReducers,
})

export default rootReducers