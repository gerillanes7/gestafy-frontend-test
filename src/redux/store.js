import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from "./reducers";

export const makeStore = () => configureStore({
    reducer: rootReducer
})

export const wrapper = createWrapper(makeStore);