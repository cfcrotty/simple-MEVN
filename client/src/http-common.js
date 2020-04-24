import axios from "axios";

// https://simple-mevn-cc.herokuapp.com
export default axios.create({
    baseURL: "https://simple-mevn-cc.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
});
