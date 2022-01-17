import axios from "axios";

const instance = axios.create({
    baseURL: "http://3.140.210.76:8000",
});

export default instance;