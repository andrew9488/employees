import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
})

export const employeesAPI = {
    getEmployees() {
        return instance.get(`users?per_page=12`)
            .then(response => {
                return response.data
            })
    }
}