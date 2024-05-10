import axios from "../config/axios";

export const getRestaurants = () => {
    return axios.get("/")
}