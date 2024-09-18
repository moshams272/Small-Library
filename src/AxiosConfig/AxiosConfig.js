import axios from "axios";
import store from "../store/store";
import { changeLoader } from "../store/slices/loader";
export const axiosInstance=axios.create({
    baseURL:"https://www.dbooks.org/api"
});

axiosInstance.interceptors.request.use(
    (config)=>{
        store.dispatch(changeLoader(true));
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
)

axiosInstance.interceptors.response.use(
    (res)=>{
        store.dispatch(changeLoader(false));
        return res;
    },
    (err)=>{
        return Promise.reject(err);
    }
)