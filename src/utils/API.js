import axios from "axios";

export default {
    getEmployee() {
        return axios.get('https://randomuser.me/api/?results=6')
    }
}