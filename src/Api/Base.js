
import axios from 'axios'

// const urlNotes = 'http://localhost:3001/notes'
// const urlUsers = 'http://localhost:3001/users'

const urlNotes = '/api/notes'
const urlUsers = '/api/users'
const baseUrl = '/api/login'

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

// Autorisation par token 
let token = null
const setToken = newToken => {
    token = `Bearer ${newToken}`
}


// Traitons les Note 
const getAll = () => {
    const request = axios.get(urlNotes)
    return request.then(response => response.data)
}

const createNote = async newObject => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(urlNotes, newObject, config)
    return response.data
}

const delet = ( id,newObject ) => {
    const request = axios.delete(`${urlNotes}/${id}`, newObject)
        return request.then(response => response.data)
}

const updateNote = ( id,newObject ) => {
    const request = axios.put(`${urlNotes}/${id}`, newObject)
        return request.then(response => response.data)
}



// Traitons les Users
const getUsers = () => {
    const request = axios.get(urlUsers)
        return request.then(response => response.data)
}

const createUser = newObject => {
    const request = axios.post(urlUsers, newObject)
        return request.then(response => response.data)
}

const followers = (id, newObject) => {
    const request = axios.put(`${urlUsers}/${id}`, newObject)
        return request.then(response => response.data)
}





export default {
    getAll,
    createNote,
    delet,
    updateNote,

    login,
    setToken,

    //User
    getUsers,
    createUser,
    followers
}