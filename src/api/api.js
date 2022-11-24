import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8070/api'
});


// Remote: 'https://cdf-backend.herokuapp.com/api'
// Local: 'http://localhost:8080/api'
