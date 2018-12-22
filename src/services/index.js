import axios from 'axios';

const API_URL = "https://mighty-refuge-81707.herokuapp.com/api/";

const createUser = (data) => axios.post(`${API_URL}/auth/user/create`, data);

export {
    createUser
}