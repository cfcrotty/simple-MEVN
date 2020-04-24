import axios from 'axios';
// import http from "../http-common";

class TutorialDataService {
    getAll() {
        return axios.get("/");
    }

    get(id) {
        return axios.get(`/api/tutorials/${id}`);
    }

    create(data) {
        return axios.post("/api/tutorials", data);
    }

    update(id, data) {
        return axios.put(`/api/tutorials/${id}`, data);
    }

    delete(id) {
        return axios.delete(`/api/tutorials/${id}`);
    }

    deleteAll() {
        return axios.delete(`/api/tutorials`);
    }

    findByTitle(title) {
        return axios.get(`/api/tutorials?title=${title}`);
    }
}

export default new TutorialDataService();
