import axios from "axios";

const instance = axios.create({
    baseURL: 'https://booksb196001.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;
