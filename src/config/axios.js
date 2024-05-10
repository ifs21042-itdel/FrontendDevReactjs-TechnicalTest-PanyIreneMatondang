import axios from "axios";

const instance = axios.create({
    baseURL: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
    headers: {
        'X-RapidAPI-Key': '3e79666c51msh6c3476d87e75492p1fe0b3jsn48069504bc05',
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    },
    params: { locationId: '304554' },
})

export default instance;