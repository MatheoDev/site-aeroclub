import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:8080/api',
    responseType: 'json',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})