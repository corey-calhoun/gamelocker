import axios from 'axios'

//Base URL for making requests to db
const instance = axios.create({
    baseUrl: "https://api.igdb.com/v4"
});

export default instance;
