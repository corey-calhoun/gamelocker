import axios from 'axios'

//Base URL for making requests to db
const instance = axios.create({
    baseUrl: "https://api.rawg.io/api/"
});

export default instance;
