import axios from 'axios'
const BASE_URL = 'https://coetus.herokuapp.com/api/users'

const registerUser = (name, surname, username, password, email) => {
    return  axios.put(`${BASE_URL}`, { name, surname, username, password, email })
}

const loginUser =  (username, password) => {
    return  axios.post(`${BASE_URL}`, { username, password })
}

const getUsers =  () => {
    return  axios.get(`${BASE_URL}`)
}

const getUserInfo = async (user_id) => {
    return  axios.get(`${BASE_URL}/:${user_id}`)
}

export {registerUser, loginUser, getUsers, getUserInfo}