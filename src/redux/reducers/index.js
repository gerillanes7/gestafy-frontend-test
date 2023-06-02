import { combineReducers } from "@reduxjs/toolkit";
import customizer from "./customizerReducer";
import authentication from "./authenticationReducer"


const rootReducer = combineReducers({
    customizer,
    authentication
}) 

export default rootReducer;