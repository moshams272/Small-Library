import axios from "axios";
export const axiosInstance=axios.create({
    baseURL:"https://www.dbooks.org/api"
});
