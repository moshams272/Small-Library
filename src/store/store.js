import { configureStore } from "@reduxjs/toolkit";
import loaderReduser from "./slices/loader"
const store = configureStore({
    reducer:{
        loader:loaderReduser
    }
})
export default store;