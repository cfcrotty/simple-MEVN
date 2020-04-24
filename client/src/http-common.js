import axios from "axios";

export default axios.create({
    baseURL: "https://simple-mevn-cc.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
});
