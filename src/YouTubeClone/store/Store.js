import { configureStore } from "@reduxjs/toolkit";
import youTubeReducer from "./Youtube-slice"
export const Store = configureStore({
    reducer:youTubeReducer,
})