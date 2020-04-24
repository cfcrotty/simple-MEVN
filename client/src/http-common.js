import axios from "axios";

export default axios.create({
    baseURL: "https://simple-mevn-cc.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});
