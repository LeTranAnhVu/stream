import axios from "axios";


export const streamApis = axios.create({
    baseURL: 'http://localhost:3001/streams'
});