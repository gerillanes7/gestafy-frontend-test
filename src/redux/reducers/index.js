import { combineReducers } from "@reduxjs/toolkit";
import customizer from "./customizerReducer";
import authentication from "./authenticationReducer"
import marketApps from "./marketAppsReducer";
import mercadoLibre from "./mercadoLibreReducer";
import questions from "./questionReducer";
import globalComponents from "./globalComponentsReducer"; 

const rootReducer = combineReducers({
    customizer,
    authentication,
    marketApps,
    mercadoLibre,
    questions,
    globalComponents
}) 

export default rootReducer;